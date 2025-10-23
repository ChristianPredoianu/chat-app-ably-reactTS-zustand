// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import AblyChatProvider from '@/lib/ably/AblyProvider';
import '@/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AblyChatProvider>
        <div className='min-h-screen bg-neutral-100'>
          <App />
        </div>
      </AblyChatProvider>
    </BrowserRouter>
  </React.StrictMode>
);
