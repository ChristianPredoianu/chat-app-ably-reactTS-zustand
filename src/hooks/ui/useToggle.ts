import { useState } from 'react';

/**
 *@param {Boolean} initialValue - initial state, default false
 */
export default function useToggle(initialValue: boolean = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  function toggle() {
    setIsOpen((prev) => !prev);
  }

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return { isOpen, toggle, close, open };
}
