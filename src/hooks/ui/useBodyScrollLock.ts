import { useEffect } from 'react';

/**
 * Lock or unlock body scroll when a component is open.
 * @param isLocked - true to lock scroll, false to unlock
 */
export default function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = isLocked ? 'hidden' : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isLocked]);
}
