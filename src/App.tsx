import { useState } from 'react';
import ConnectionStatus from './components/ConnectionStatus';
import RoomStatus from './components/RoomStatus';
import ChatBox from './components/ChatBox';
import { ChatRoomProvider } from '@ably/chat/react';

const currentUserId = 'user1';

const users = ['user1', 'user2', 'user3'];

export default function App() {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const roomName = selectedUserId && [currentUserId, selectedUserId].sort().join('_');

  return (
    <div className='flex w-[900px] h-full mx-auto font-sans border border-blue-500 rounded-lg overflow-hidden'>
      {/* Users list */}
      <div className='w-1/4 border-r border-blue-500 p-4'>
        <h2 className='text-xl font-bold mb-4'>Users</h2>
        {users
          .filter((user) => user !== currentUserId)
          .map((user) => (
            <div
              key={user}
              onClick={() => setSelectedUserId(user)}
              className={`p-2 cursor-pointer rounded ${
                selectedUserId === user ? 'bg-blue-200' : 'hover:bg-blue-100'
              }`}
            >
              {user}
            </div>
          ))}
      </div>

      {/* Chat Area */}
      <div className='flex-1 p-4'>
        {selectedUserId ? (
          <ChatRoomProvider
            name={roomName}
            release={true}
            attach={true}
            clientId={currentUserId}
          >
            <ChatBox currentUserId={currentUserId} />
            <ConnectionStatus />
            <RoomStatus />
          </ChatRoomProvider>
        ) : (
          <p>Select a user to chat with</p>
        )}
      </div>
    </div>
  );
}
