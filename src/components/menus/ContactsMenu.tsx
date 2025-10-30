import { useRef } from 'react';
import ContactsPanel from '@/components/panels/ContactsPanel';
import Overlay from '@/components/ui/Overlay';
import CloseButton from '@/components/buttons/CloseButton';
import useBodyScrollLock from '@/hooks/ui/useBodyScrollLock';
import useEscapeKey from '@/hooks/ui/useEscapeKey';
import useInert from '@/hooks/ui/useInert';
import { useContacts } from '@/hooks/chat/useContacts';
import { useContactsPanel } from '@/hooks/panels/useContactsPanel';

type ContactsMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactsMenu({ isOpen, onClose }: ContactsMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  const { contacts, isLoading, error } = useContacts();

  const { searchQuery, handleSearch, handleContactClick } = useContactsPanel();

  useBodyScrollLock(isOpen);
  useInert(menuRef, isOpen);
  useEscapeKey(onClose, isOpen);

  return (
    <>
      <Overlay isVisible={isOpen} onClick={onClose} />
      <aside
        ref={menuRef}
        className={`fixed inset-y-0 left-0 z-50 transform transition-all duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-full md:w-1/2 bg-white shadow-xl p-6`}
      >
        <CloseButton
          onClick={onClose}
          label='Close contacts menu'
          size='lg'
          className='mb-4 absolute right-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100'
        />
        <div className='mt-16'>
          <ContactsPanel
            contacts={contacts}
            searchQuery={searchQuery}
            onContactClick={handleContactClick}
            onSearch={handleSearch}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </aside>
    </>
  );
}
