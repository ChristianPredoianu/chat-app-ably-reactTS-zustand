import type { Contact } from '@/types/contact';

type ContactListItemProps = {
  contact: Contact;
  onClick: (contact: Contact) => void;
  className?: string;
};

export default function ContactListItem({ contact, onClick }: ContactListItemProps) {
  function handleClick() {
    onClick(contact);
  }

  return (
    <li
      key={contact.id}
      onClick={() => handleClick()}
      className='flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer'
    >
      <div className='flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full font-semibold mr-4'>
        {contact.avatar}
      </div>
      <div className='flex-1'>
        <h3 className='font-semibold text-gray-900'>{contact.name}</h3>
        {contact.email && <p className='text-sm text-gray-500'>{contact.email}</p>}
        <div className='flex items-center mt-1'>
          <span
            className={`w-2 h-2 rounded-full mr-2 ${
              contact.status === 'online'
                ? 'bg-green-500'
                : contact.status === 'away'
                ? 'bg-yellow-500'
                : 'bg-gray-400'
            }`}
          ></span>
          <span className='text-xs text-gray-500 capitalize'>{contact.status}</span>
        </div>
      </div>
      {contact.unreadCount && contact.unreadCount > 0 && (
        <span className='bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
          {contact.unreadCount}
        </span>
      )}
    </li>
  );
}
