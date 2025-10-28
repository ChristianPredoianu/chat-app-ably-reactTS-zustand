import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorMessage from '@/components/ui/ErrorMessage';
import ContactListItem from '@/components/lists/contact-list/ContactListItem';
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
        <div className='h-full flex items-center justify-center text-gray-500'>
          <div className='text-center py-8'>
            <svg
              className='w-12 h-12 mx-auto mb-3 text-gray-300'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1}
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
            <p>No contacts found</p>
            {searchQuery && (
              <p className='text-sm mt-1'>Try adjusting your search terms</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
