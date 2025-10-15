import { useEffect } from 'react';

/**
 * Calls `callback` when the Escape key is pressed.
 @param {Function} callback - function to call on resize
 @param {boolean} active - whether the hook is active, default true
 */

export default function useEscapeKey(callback: () => void, active = true) {
  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') callback();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [callback, active]);
}
