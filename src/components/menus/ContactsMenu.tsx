import { useRef } from 'react';
import useBodyScrollLock from '@/hooks/ui/useBodyScrollLock';
import useEscapeKey from '@/hooks/ui/useEscapeKey';
import useInert from '@/hooks/ui/useInert';
import Overlay from '@/components/ui/Overlay';

type ContactsMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactsMenu({ isOpen, onClose }: ContactsMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when open
  useBodyScrollLock(isOpen);

  // Toggle inert when closed
  useInert(menuRef, isOpen);

  // Close menu on Escape
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
        <h1 className='text-2xl font-bold mb-4'>Contacts Menu</h1>
        <button
          onClick={onClose}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          Close
        </button>
      </aside>
    </>
  );
}
