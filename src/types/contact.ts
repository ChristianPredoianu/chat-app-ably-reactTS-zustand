export type Contact = {
  id: string;
  name: string;
  avatar: string;
  email?: string;
  status: 'online' | 'away' | 'offline';
  lastSeen?: string;
  unreadCount?: number;
};

export type ContactsListProps = {
  contacts: Contact[];
  searchQuery: string;
  onContactClick?: (contact: Contact) => void;
};
