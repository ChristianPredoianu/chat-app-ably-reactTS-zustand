import { useState } from 'react';
import TextInput from '@/components/forms/TextInput';
import { CiSearch } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import type { InputHTMLAttributes } from 'react';

type AdvancedSearchProps = InputHTMLAttributes<HTMLInputElement> & {
  onSearch: (query: string) => void;
  placeholder?: string;
  debounceMs?: number;
};

export default function AdvancedSearch({
  onSearch,
  placeholder = 'Search...',
  debounceMs = 300,
  ...props
}: AdvancedSearchProps) {
  const [query, setQuery] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value;
    setQuery(value);

    // Debounce
    setTimeout(() => {
      onSearch(value);
    }, debounceMs);
  }

  function clearSearch(): void {
    setQuery('');
    onSearch('');
  }
  // YOU NEED TO USE TEXTINMPUT INSTEAD OF INPUT & PRIMARY BUTTON INSTEAD OF BUTTON
  return (
    <div className='relative w-full '>
      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
        <CiSearch className='h-5 w-5 text-gray-400' />
      </div>
      <TextInput
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        name='search'
        label=''
        {...props}
      />
      {query && (
        <button
          onClick={clearSearch}
          className='absolute inset-y-0 right-0 pr-3 flex items-center'
          aria-label='Clear search'
        >
          <IoMdClose />
        </button>
      )}
    </div>
  );
}
