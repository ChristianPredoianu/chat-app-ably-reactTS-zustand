export type Contact = {
  id: number;
  name: string;
  avatar: string;
};

export type ContactsListProps = {
  contacts: Contact[];
  searchQuery: string;
  onContactClick?: (contact: Contact) => void;
};
