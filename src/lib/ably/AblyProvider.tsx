'use client';
import { AblyProvider } from 'ably/react';
import { Realtime } from 'ably';
import type { ReactNode } from 'react';

const getAblyClient = () => {
  if (typeof window === 'undefined') return null as any;

  const apiKey = import.meta.env.VITE_ABLY_API_KEY;
  if (!apiKey) {
    console.warn('VITE_ABLY_API_KEY is not set. Real-time features will not work.');
    return null as any;
  }

  return new Realtime({
    key: apiKey,
    clientId: `user-${Math.random().toString(36).substr(2, 9)}`,
  });
};

const client = getAblyClient();

export default function AblyChatProvider({ children }: { children: ReactNode }) {
  if (!client) {
    return <>{children}</>;
  }

  return <AblyProvider client={client}>{children}</AblyProvider>;
}
