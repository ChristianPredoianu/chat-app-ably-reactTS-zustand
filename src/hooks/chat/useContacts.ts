import { useState, useEffect, useRef } from 'react';
import { useAbly } from 'ably/react';
import { randomUserUrl } from '@/utils/api/urls';
import type { Types } from 'ably';
import type { Contact } from '@/types/contact';

type RandomUser = {
  login: { uuid: string };
  name: { first: string; last: string };
  email: string;
};

export function useContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const channelRef = useRef<Types.RealtimeChannelPromise | null>(null);
  const ably = useAbly();

  useEffect(() => {
    // Set up the channel manually
    const channel = ably.channels.get('contacts');
    channelRef.current = channel;

    // Subscribe to messages
    channel.subscribe('contact-update', (message) => {
      console.log('Received Ably message:', message);
      switch (message.name) {
        case 'contact-added':
          setContacts((prev) => [...prev, message.data]);
          break;
        case 'contact-updated':
          setContacts((prev) =>
            prev.map((contact) =>
              contact.id === message.data.id ? message.data : contact
            )
          );
          break;
        case 'contact-removed':
          setContacts((prev) => prev.filter((contact) => contact.id !== message.data.id));
          break;
      }
    });

    return () => {
      channel.unsubscribe();
    };
  }, [ably]);

  // Fetch contacts from RandomUser.me API
  useEffect(() => {
    async function fetchContacts() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(randomUserUrl);

        if (!response.ok) throw new Error('Failed to fetch contacts');

        const data = await response.json();

        const contactsData: Contact[] = data.results.map(
          (user: RandomUser, index: number) => {
            const firstName = user.name.first;
            const lastName = user.name.last;
            const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();

            const statuses: Array<'online' | 'away' | 'offline'> = [
              'online',
              'away',
              'offline',
            ];
            const status = statuses[index % 3];

            return {
              id: user.login.uuid,
              name: `${firstName} ${lastName}`,
              avatar: initials,
              email: user.email,
              status: status,
              lastSeen: status === 'offline' ? '2 hours ago' : undefined,
              unreadCount: Math.random() > 0.7 ? Math.floor(Math.random() * 5) + 1 : 0,
            };
          }
        );

        console.log('Fetched contacts:', contactsData);
        setContacts(contactsData);
      } catch (error) {
        console.error('Failed to fetch contacts:', error);
        setError('Failed to load contacts');
      } finally {
        setIsLoading(false);
      }
    }

    fetchContacts();
  }, []);

  async function addContact(contact: Omit<Contact, 'id'>) {
    const newContact = {
      ...contact,
      id: `custom-${Date.now()}`,
    };

    // Publish to the channel
    if (channelRef.current) {
      await channelRef.current.publish('contact-added', newContact);
    }

    return newContact;
  }

  return {
    contacts,
    isLoading,
    error,
    addContact,
  };
}
