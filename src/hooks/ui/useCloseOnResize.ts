import { useEffect } from 'react';

/**
 * @param {Function} callback - function to call on resize
 * @param {number} breakpoint - width in px to trigger the callback, default 1024 (Tailwind lg)
 */

export default function useCloseOnResize(
  callback: () => void,
  breakpoint: number = 1024
) {
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= breakpoint) callback();
    }

    window.addEventListener('resize', handleResize);

    // Call it initially in case the window is already >= breakpoint
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [callback, breakpoint]);
}
