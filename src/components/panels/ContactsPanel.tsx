import SearchInput from '@/components/ui/SearchInput';
import ContactsList from '@/components/lists/ContactList';
import type { Contact } from '@/types/contact';

type ContactsPanelProps = {
  contacts: Contact[];
  searchQuery: string;
  onContactClick: (contact: Contact) => void;
  onSearch: (query: string) => void;
};

export default function ContactsPanel({
  contacts,
  searchQuery,
  onContactClick,
  onSearch,
}: ContactsPanelProps) {
  return (
    <div className='bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6 h-full max-h-[calc(100vh-12rem)] flex flex-col'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-semibold text-gray-900'>Contacts</h2>
        <span className='bg-blue-100 text-blue-800 text-sm px-2.5 py-1 rounded-full'>
          {contacts.length}
        </span>
      </div>
      <div className='w-full pb-4'>
        <SearchInput
          onSearch={onSearch}
          placeholder='Search contacts...'
          debounceMs={300}
        />
      </div>
      <div className='flex-1 min-h-0'>
        <ContactsList
          contacts={contacts}
          onContactClick={onContactClick}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
}
