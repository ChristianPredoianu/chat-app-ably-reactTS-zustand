import { useState } from 'react';
import type { Contact } from '@/types/contact';

export function useContactsPanel() {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  function handleContactClick(contact: Contact) {
    setSelectedContact(contact);
    console.log('Contact clicked from hook:', contact);
  }

  function clearSelectedContact() {
    setSelectedContact(null);
  }

  return {
    selectedContact,
    handleContactClick,
    clearSelectedContact,
  };
}
