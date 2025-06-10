import { useState } from 'react';
import { useMessages } from '@ably/chat/react';
import type { Message } from '@ably/chat';

interface ChatBoxProps {
  currentUserId: string;
}

export default function ChatBox({ currentUserId }: ChatBoxProps) {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const { send } = useMessages({
    listener: (event) => {
      if (event.type === 'message.created') {
        setMessages((prevMessages) => [...prevMessages, event.message]);
      } else {
        console.error('Unhandled event', event);
      }
    },
  });

  function handleSend() {
    if (!inputValue.trim()) return;
    send({ text: inputValue.trim() }).catch((err) =>
      console.error('Error sending message', err)
    );
    setInputValue('');
  }

  return (
    <div className='flex flex-col w-full h-[600px] item-left border border-blue-500 rounded-lg overflow-hidden mx-auto font-sans'>
      <div className='flex-1 p-4 overflow-y-auto space-y-2'>
        {messages.map((msg: Message) => {
          const isMine = msg.clientId === currentUserId;
          return (
            <div
              key={msg.id || msg.timestamp.toString()} // fallback key
              className={`max-w-[60%] rounded-2xl px-3 py-2 shadow-sm ${
                isMine
                  ? 'bg-green-200 text-gray-800 rounded-br-none ml-auto'
                  : 'bg-blue-50 text-gray-800 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          );
        })}
      </div>
      <div className='flex items-center px-2 mt-auto mb-2'>
        <input
          type='text'
          placeholder='Type your message...'
          className='flex-1 p-2 border border-gray-400 rounded outline-none bg-white'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSend();
            }
          }}
        />
        <button
          className='bg-blue-500 text-white px-4 ml-2 h-10 flex items-center justify-center rounded hover:bg-blue-600 transition-colors'
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
}
