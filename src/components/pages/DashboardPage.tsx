import { useState } from 'react';
import useToggle from '@/hooks/ui/useToggle';
import useCloseOnResize from '@/hooks/ui/useCloseOnResize';
import ContactsMenu from '@/components/menus/ContactsMenu';
import Header from '@/components/nav/Header';
import ContactsPanel from '@/components/panels/ContactsPanel';
import ChatWelcomePanel from '@/components/panels/ChatWelcomePanel';
import QuickStats from '@/components/stats/QuickStats';
import { useContacts } from '@/hooks/chat/useContacts';
import type { Contact } from '@/types/contact';

export default function DashboardPage() {
  const {
    isOpen: isContactsMenuOpen,
    toggle: toggleContactsMenu,
    close: closeContactsMenu,
  } = useToggle(false);

  const [searchQuery, setSearchQuery] = useState('');

  const { contacts, isLoading, error } = useContacts();

  useCloseOnResize(closeContactsMenu, 1024);

  function handleDashboardContactClick(contact: Contact) {
    console.log('Dashboard contact clicked:', contact);
  }

  function handleSearch(query: string) {
    setSearchQuery(query);
  }

  function handleNewConversation() {
    console.log('Create new conversation');
  }

  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <Header onMenuToggle={toggleContactsMenu} />
      <main className='flex-1 flex items-center justify-center container mx-auto px-6 py-8'>
        <div className='w-full mx-auto h-full'>
          <div className='grid  grid-cols-1 lg:grid-cols-3 gap-8 h-full'>
            <div className='lg:col-span-1 h-full'>
              <ContactsPanel
                contacts={contacts}
                searchQuery={searchQuery}
                onContactClick={handleDashboardContactClick}
                onSearch={handleSearch}
                isLoading={isLoading}
                error={error}
              />
            </div>
            <div className='lg:col-span-2 h-full'>
              <div className='bg-white h-full rounded-2xl shadow-sm border border-gray-200/60 p-8 flex flex-col'>
                <ChatWelcomePanel onNewConversation={handleNewConversation} />
                <QuickStats messages={24} online={12} groups={6} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <ContactsMenu isOpen={isContactsMenuOpen} onClose={closeContactsMenu} />
    </div>
  );
}
