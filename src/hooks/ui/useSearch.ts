import { useState } from 'react';

export function useSearch(initialValue: string = '') {
  const [value, setValue] = useState(initialValue);

  function clear() {
    setValue('');
  }

  return {
    value,
    setValue,
    clear,
  };
}
