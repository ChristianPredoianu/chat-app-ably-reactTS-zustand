import { useState, useCallback } from 'react';
import type { Contact } from '@/types/contact';

export function useContactsPanel() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleContactClick = useCallback((contact: Contact) => {
    console.log('Contact clicked:', contact);
    // You can add more logic here that's shared across pages
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  return {
    searchQuery,
    handleContactClick,
    handleSearch,
  };
}
