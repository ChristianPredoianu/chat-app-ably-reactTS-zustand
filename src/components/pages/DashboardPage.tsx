import { useState } from 'react';
import useToggle from '@/hooks/ui/useToggle';
import useCloseOnResize from '@/hooks/ui/useCloseOnResize';
import ContactsMenu from '@/components/menus/ContactsMenu';
import Header from '@/components/nav/Header';
import ContactsPanel from '@/components/panels/ContactsPanel';
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
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <Header onMenuToggle={toggleContactsMenu} />
      {/* Main Content */}
      <main className='flex-1 flex items-center justify-center container mx-auto px-6 py-8'>
        <div className='max-w-7xl mx-auto h-full'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 h-full'>
            {/* Contacts Panel */}
            <ContactsPanel
              contacts={contacts}
              searchQuery={searchQuery}
              onContactClick={handleDashboardContactClick}
              onSearch={handleSearch}
            />

            {/* Main Content Area */}
            <div className='lg:col-span-2'>
              <div className='bg-white rounded-2xl shadow-sm border border-gray-200/60 p-8 h-full max-h-[calc(100vh-12rem)] flex flex-col'>
                {/* Empty State */}
                <div className='flex-1 flex items-center justify-center'>
                  <div className='text-center max-w-md mx-auto'>
                    <div className='w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                      <svg
                        className='w-10 h-10 text-blue-600'
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
                    <h3 className='text-2xl font-semibold text-gray-900 mb-3'>
                      Select a contact
                    </h3>
                    <p className='text-gray-500 mb-8 text-lg'>
                      Choose a contact from the list to start a conversation
                    </p>
                    <button className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all shadow-sm hover:shadow-md font-medium'>
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
                </div>

                {/* Quick Stats */}
                <div className='mt-auto pt-8 border-t border-gray-200/60'>
                  <div className='grid grid-cols-3 gap-6'>
                    <div className='text-center'>
                      <div className='text-3xl font-bold text-gray-900 mb-1'>24</div>
                      <div className='text-sm text-gray-500 font-medium'>Messages</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-3xl font-bold text-gray-900 mb-1'>12</div>
                      <div className='text-sm text-gray-500 font-medium'>Online</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-3xl font-bold text-gray-900 mb-1'>6</div>
                      <div className='text-sm text-gray-500 font-medium'>Groups</div>
                    </div>
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
