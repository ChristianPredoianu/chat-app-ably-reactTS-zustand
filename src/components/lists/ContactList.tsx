import type { Contact, ContactsListProps } from '@/types/contact';

export default function ContactsList({
  contacts,
  searchQuery,
  onContactClick,
}: ContactsListProps) {
  // Filter contacts based on search
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function handleContactClick(contact: Contact) {
    onContactClick?.(contact);
  }

  return (
    <div className='space-y-3'>
      {/* Search Results Info */}
      {searchQuery && (
        <p className='text-sm text-gray-500 mb-4'>
          Showing {filteredContacts.length} of {contacts.length} contacts
          {searchQuery && (
            <>
              {' '}
              for <span className='font-medium'>"{searchQuery}"</span>
            </>
          )}
        </p>
      )}

      {/* Contacts List */}
      {filteredContacts.length > 0 ? (
        <ul className='space-y-3'>
          {filteredContacts.map((contact) => (
            <li
              key={contact.id}
              onClick={() => handleContactClick(contact)}
              className='flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer'
            >
              <div className='flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full font-semibold mr-4'>
                {contact.avatar}
              </div>
              <div className='flex-1'>
                <h3 className='font-semibold text-gray-900'>{contact.name}</h3>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className='text-center py-8 text-gray-500'>
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
          {searchQuery && <p className='text-sm'>Try adjusting your search terms</p>}
        </div>
      )}
    </div>
  );
}
