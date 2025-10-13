import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Ably from 'ably';
import { ChatClient, LogLevel } from '@ably/chat';
import { ChatClientProvider } from '@ably/chat/react';
import { AblyProvider } from 'ably/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

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
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChatClientProvider>
    </AblyProvider>
  </React.StrictMode>
);
