export type Contact = {
  id: number;
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
