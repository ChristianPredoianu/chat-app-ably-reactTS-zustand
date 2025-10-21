import { useState } from 'react';
import useToggle from '@/hooks/ui/useToggle';
import useCloseOnResize from '@/hooks/ui/useCloseOnResize';
import ContactsMenu from '@/components/menus/ContactsMenu';
import Hamburger from '@/components/ui/Hamburger';
import SearchInput from '@/components/ui/SearchInput';
import ContactsList from '@/components/lists/ContactList';
import { contacts } from '@/data/contacts';
import type { Contact } from '@/types/contact';

export default function DashboardPage() {
  const {
    isOpen: isContactsMenuOpen,
    toggle: toggleContactsMenu,
    close: closeContactsMenu,
  } = useToggle(false);

  const [searchQuery, setSearchQuery] = useState('');

  useCloseOnResize(closeContactsMenu, 1024);

  function handleDashboardContactClick(contact: Contact) {
    console.log('Dashboard contact clicked:', contact);
  }

  function handleSearch(query: string) {
    setSearchQuery(query);
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
      {/* extract header to own component and maybe more*/}
      {/* Header */}
      <header className='bg-white/80 backdrop-blur-sm border-b border-gray-200/60 sticky top-0 z-40'>
        <div className='container mx-auto px-6'>
          <nav className='flex items-center justify-between py-4'>
            <div className='flex items-center space-x-4'>
              <Hamburger onClick={toggleContactsMenu} />
            </div>

            <div className='flex items-center space-x-4'>
              <div className='w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full'></div>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className='container mx-auto px-6 py-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Contacts Panel */}
            <div className='lg:col-span-1'>
              <div className='bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6'>
                <div className='flex items-center justify-between mb-6'>
                  <h2 className='text-xl font-semibold text-gray-900'>Contacts</h2>

                  <span className='bg-blue-100 text-blue-800 text-sm px-2.5 py-1 rounded-full'>
                    {contacts.length}
                  </span>
                </div>
                <div className='w-full pb-8'>
                  <SearchInput
                    onSearch={handleSearch}
                    placeholder='Search contacts...'
                    debounceMs={300}
                  />
                </div>
                <ContactsList
                  contacts={contacts}
                  onContactClick={handleDashboardContactClick}
                  searchQuery={searchQuery}
                />
              </div>
            </div>

            {/* Main Content Area */}
            <div className='lg:col-span-2'>
              <div className='bg-white rounded-2xl shadow-sm border border-gray-200/60 p-8 h-full'>
                <div className='text-center py-16'>
                  <div className='w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-blue-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={1.5}
                        d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    Select a contact
                  </h3>
                  <p className='text-gray-500 mb-6'>
                    Choose a contact from the list to start a conversation
                  </p>
                  <button className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-sm hover:shadow-md'>
                    <svg
                      className='w-5 h-5 mr-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 4v16m8-8H4'
                      />
                    </svg>
                    New Conversation
                  </button>
                </div>

                {/* Quick Stats */}
                <div className='grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200/60'>
                  <div className='text-center'>
                    <div className='text-2xl font-bold text-gray-900'>24</div>
                    <div className='text-sm text-gray-500'>Messages</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-2xl font-bold text-gray-900'>12</div>
                    <div className='text-sm text-gray-500'>Online</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-2xl font-bold text-gray-900'>6</div>
                    <div className='text-sm text-gray-500'>Groups</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ContactsMenu isOpen={isContactsMenuOpen} onClose={closeContactsMenu} />
    </div>
  );
}
