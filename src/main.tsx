import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Ably from 'ably';
import { ChatClient, LogLevel } from '@ably/chat';
import { ChatClientProvider } from '@ably/chat/react';
import { AblyProvider } from 'ably/react';
import App from './App'; // Your main app component

// Create your Ably Realtime client and ChatClient instances:
const realtimeClient = new Ably.Realtime({
  key: import.meta.env.VITE_ABLY_API_KEY,
  clientId: 'my-first-client',
});

const chatClient = new ChatClient(realtimeClient, {
  logLevel: LogLevel.Info,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AblyProvider client={realtimeClient}>
      <ChatClientProvider client={chatClient}>
        <App />
      </ChatClientProvider>
    </AblyProvider>
  </React.StrictMode>
);
