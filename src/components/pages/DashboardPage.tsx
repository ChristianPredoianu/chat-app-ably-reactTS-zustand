import useToggle from '@/hooks/ui/useToggle';
import ContactsMenu from '@/components/menus/ContactsMenu';
import Header from '@/components/nav/Header';
import ContactsPanel from '@/components/panels/ContactsPanel';
import ChatWelcomePanel from '@/components/panels/ChatWelcomePanel';
import QuickStats from '@/components/stats/QuickStats';
import { useContactsPanel } from '@/hooks/panels/useContactPanel';
import { contacts } from '@/data/contacts';

export default function DashboardPage() {
  const {
    isOpen: isContactsMenuOpen,
    toggle: toggleContactsMenu,
    close: closeContactsMenu,
  } = useToggle(false);

  const { searchQuery, handleContactClick, handleSearch } = useContactsPanel();

  function handleNewConversationClick() {
    console.log('New conversation clicked');
    // Future logic: open modal, create group chat, etc.
  }

  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <Header onMenuToggle={toggleContactsMenu} />
      <main className='flex-1 flex items-center justify-center container mx-auto px-6 py-8'>
        <div className='max-w-7xl mx-auto h-full'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 h-full'>
            <ContactsPanel
              contacts={contacts}
              searchQuery={searchQuery}
              onContactClick={handleContactClick}
              onSearch={handleSearch}
            />
            <div className='lg:col-span-2'>
              <div className='bg-white rounded-2xl shadow-sm border border-gray-200/60 p-8 h-full max-h-[calc(100vh-12rem)] flex flex-col'>
                <ChatWelcomePanel onNewConversation={handleNewConversationClick} />
                <QuickStats />
              </div>
            </div>
          </div>
        </div>
      </main>
      <ContactsMenu isOpen={isContactsMenuOpen} onClose={closeContactsMenu} />
    </div>
  );
}
