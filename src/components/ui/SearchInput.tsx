import { useState } from 'react';
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

      <input
        type='text'
        value={query}
        onChange={handleChange}
        className='block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
        placeholder={placeholder}
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
