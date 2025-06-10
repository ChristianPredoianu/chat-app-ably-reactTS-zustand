import { useState } from 'react';
import ConnectionStatus from './components/ConnectionStatus';
import RoomStatus from './components/RoomStatus';
import ChatBox from './components/ChatBox';
import UsersList from './components/users/UsersList';
import { ChatRoomProvider } from '@ably/chat/react';

const currentUserId = 'my-first-client';

const users = ['my-first-client', 'user2', 'user3'];

export default function App() {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const roomName = selectedUserId ? [currentUserId, selectedUserId].sort().join('_') : '';

  return (
    <div className='flex w-[900px] h-full mx-auto font-sans border border-blue-500 rounded-lg overflow-hidden'>
      <div className='w-1/4 border-r border-blue-500 p-4'>
        <h2 className='text-xl font-bold mb-4'>Users</h2>
        <UsersList users={users} setSelectedUserId={setSelectedUserId} />
      </div>

      {/* Chat Area */}
      <div className='flex-1 p-4'>
        {selectedUserId ? (
          <ChatRoomProvider name={roomName} release={true} attach={true}>
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
