import ContactsList from '@/components/lists/contact-list/ContactList';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import SearchInput from '@/components/ui/SearchInput';
import Overlay from '@/components/ui/Overlay';
import { IoClose, IoChatbubbleEllipses } from 'react-icons/io5';
import type { Contact } from '@/types/contact';

type NewConversationSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (query: string) => void;
  searchQuery: string;
  contacts: Contact[];
  onContactSelect: (contact: Contact) => void;
  isLoading?: boolean;
};

export default function NewConversationSheet({
  isOpen,
  onClose,
  onSearch,
  searchQuery,
  contacts,
  onContactSelect,
  isLoading = false,
}: NewConversationSheetProps) {
  if (!isOpen) return null;

  return (
    <>
      <Overlay isVisible={isOpen} onClick={onClose} />
      <div className='fixed bottom-6 right-6 z-50 transform transition-all duration-300 ease-out'>
        <div className='bg-white rounded-2xl shadow-2xl w-96 max-h-[600px] flex flex-col border border-gray-200/80 backdrop-blur-sm'>
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl p-5 text-white'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <div className='p-2 bg-white/20 rounded-xl'>
                  <IoChatbubbleEllipses className='text-xl' />
                </div>
                <div>
                  <h2 className='text-lg font-semibold'>New Conversation</h2>
                  <p className='text-blue-100 text-sm opacity-90'>
                    Select a contact to start chatting
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className='p-2 hover:bg-white/20 rounded-xl transition-all duration-200 hover:scale-110'
              >
                <IoClose className='text-xl' />
              </button>
            </div>
          </div>
          <div className='p-4 border-b border-gray-100'>
            <SearchInput
              onSearch={onSearch}
              placeholder='Search contacts...'
              debounceMs={300}
            />
          </div>
          <div className='flex-1 overflow-y-auto'>
            {isLoading ? (
              <div className='flex items-center justify-center py-12'>
                <LoadingSpinner />
              </div>
            ) : (
              <div className='p-3'>
                <ContactsList
                  contacts={contacts}
                  onContactClick={onContactSelect}
                  searchQuery={searchQuery}
                  isLoading={isLoading}
                />
              </div>
            )}
          </div>
          <div className='p-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl'>
            <p className='text-xs text-gray-500 text-center'>
              {contacts.length} contacts available
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
