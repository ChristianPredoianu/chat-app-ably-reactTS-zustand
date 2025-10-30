import { useState } from 'react';
import type { Contact } from '@/types/contact';

export function useContactsPanel() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  function handleSearch(query: string) {
    setSearchQuery(query);
  }

  function handleContactClick(contact: Contact) {
    setSelectedContact(contact);
    console.log('Contact clicked from hook:', contact);
  }

  function clearSelectedContact() {
    setSelectedContact(null);
  }

  function clearSearch() {
    setSearchQuery('');
  }

  return {
    searchQuery,
    selectedContact,
    handleSearch,
    handleContactClick,
    clearSelectedContact,
    clearSearch,
  };
}
