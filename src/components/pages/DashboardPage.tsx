import useToggle from '@/hooks/ui/useToggle';
import useCloseOnResize from '@/hooks/ui/useCloseOnResize';
import AppLogo from '@/components/ui/AppLogo';
import ContactsMenu from '@/components/menus/ContactsMenu';
import Hamburger from '@/components/ui/Hamburger';

export default function DashboardPage() {
  const {
    isOpen: isContactsMenuOpen,
    toggle: toggleContactsMenu,
    close: closeContactsMenu,
  } = useToggle(false);

  useCloseOnResize(closeContactsMenu, 1024);

  return (
    <div className='container mx-auto px-6'>
      <header className='py-4'>
        <nav className='flex items-center justify-between'>
          <Hamburger onClick={toggleContactsMenu} />
          <AppLogo />
        </nav>
      </header>
      <main>
        <p className='text-gray-700'>Welcome to your dashboard!</p>
      </main>
      <ContactsMenu isOpen={isContactsMenuOpen} onClose={closeContactsMenu} />
    </div>
  );
}
