import ContactsMenu from '@/components/menus/ContactsMenu';
import Header from '@/components/nav/Header';
import ContactsPanel from '@/components/panels/ContactsPanel';
import ChatWelcomePanel from '@/components/panels/ChatWelcomePanel';
import QuickStats from '@/components/stats/QuickStats';
import NewConversationSheet from '@/components/panels/NewConversationSheet';
import { useContacts } from '@/hooks/chat/useContacts';
import useToggle from '@/hooks/ui/useToggle';
import useCloseOnResize from '@/hooks/ui/useCloseOnResize';
import { useSearch } from '@/hooks/ui/useSearch';
import { useContactsPanel } from '@/hooks/panels/useContactsPanel';

export default function DashboardPage() {
  const {
    isOpen: isContactsMenuOpen,
    toggle: toggleContactsMenu,
    close: closeContactsMenu,
  } = useToggle(false);

  const { isOpen: isSheetOpen, open: openSheet, close: closeSheet } = useToggle();

  const { handleContactClick } = useContactsPanel();

  const { value: mainSearchQuery, setValue: setMainSearchQuery } = useSearch();
  const { value: sheetSearchQuery, setValue: setSheetSearchQuery } = useSearch();

  const { contacts, isLoading, error } = useContacts();

  useCloseOnResize(closeContactsMenu, 1024);

  function handleNewConversation() {
    console.log('Create new conversation');
    openSheet();
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
                searchQuery={mainSearchQuery}
                onContactClick={handleContactClick}
                onSearch={setMainSearchQuery}
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

      {/* Bottom Sheet */}
      <NewConversationSheet
        isOpen={isSheetOpen}
        onClose={closeSheet}
        searchQuery={sheetSearchQuery}
        contacts={contacts}
        onContactSelect={handleContactClick}
        onSearch={setSheetSearchQuery}
        isLoading={isLoading}
      />
      <ContactsMenu isOpen={isContactsMenuOpen} onClose={closeContactsMenu} />
    </div>
  );
}
