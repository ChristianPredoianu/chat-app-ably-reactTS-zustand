import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import CloseButton from '@/components/buttons/CloseButton';
import type { InputHTMLAttributes } from 'react';

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  onSearch: (query: string) => void;
  placeholder?: string;
  debounceMs?: number;
};

export default function SearchInput({
  onSearch,
  placeholder = 'Search...',
  debounceMs = 300,
  ...props
}: SearchInputProps) {
  const [query, setQuery] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value;
    setQuery(value);

    setTimeout(() => {
      onSearch(value);
    }, debounceMs);
  }

  function clearSearch(): void {
    setQuery('');
    onSearch('');
  }

  return (
    <div className='relative w-full'>
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
        <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
          <CloseButton
            onClick={clearSearch}
            label='Clear search'
            size='sm'
            className='text-gray-400 hover:text-gray-600 hover:bg-gray-100'
          />
        </div>
      )}
    </div>
  );
}
