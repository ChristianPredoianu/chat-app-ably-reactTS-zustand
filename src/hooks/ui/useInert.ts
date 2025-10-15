import { useEffect } from 'react';
import type { RefObject } from 'react';

/**
 * Toggles the inert attribute on a ref element based on `isActive`.
 * Prevents focus and interaction when inactive.
 */

export default function useInert(
  ref: RefObject<HTMLElement | null>,
  isActive: boolean
): void {
  useEffect(() => {
    if (!ref.current) return;

    if (!isActive) {
      ref.current.setAttribute('inert', 'true');
    } else {
      ref.current.removeAttribute('inert');
    }
  }, [ref, isActive]);
}
