import ContactListItem from '@/components/lists/contact-list/ContactListItem';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorMessage from '@/components/ui/ErrorMessage';
import { IoMdContacts } from 'react-icons/io';
import type { Contact, ContactsListProps } from '@/types/contact';

type ExtendedContactsListProps = ContactsListProps & {
  isLoading?: boolean;
  error?: string | null;
};

export default function ContactsList({
  contacts,
  searchQuery,
  onContactClick,
  isLoading = false,
  error = null,
}: ExtendedContactsListProps) {
  const filteredContacts = contacts
    .filter((contact) => contact.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      // Put 'online' first, then others
      if (a.status === 'online' && b.status !== 'online') return -1;
      if (a.status !== 'online' && b.status === 'online') return 1;
      return 0; // keep relative order otherwise
    });

  const hasContacts = filteredContacts.length > 0;

  function handleContactClick(contact: Contact) {
    onContactClick?.(contact);
  }

  if (isLoading) return <LoadingSpinner />;

  if (error) return <ErrorMessage message={error || 'An unknown error occured'} />;

  return (
    <div className={`space-y-3 max-h-96 overflow-y-auto ${!hasContacts ? 'h-full' : ''}`}>
      {hasContacts ? (
        <ul className='space-y-3'>
          {filteredContacts.map((contact) => (
            <ContactListItem
              key={contact.id}
              contact={contact}
              onClick={handleContactClick}
            />
          ))}
        </ul>
      ) : (
        <div className='h-full bg-blue-500 flex flex-col items-center justify-center gap-y-1 text-gray-500'>
          <IoMdContacts className='text-2xl' />
          <p>No contacts found</p>
          {searchQuery && <p className='text-sm mt-1'>Try adjusting your search terms</p>}
        </div>
      )}
    </div>
  );
}
