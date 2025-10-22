import PrimaryButton from '@/components/buttons/PrimaryButton';
import { BsPlusLg } from 'react-icons/bs';

type ChatWelcomePanelProps = {
  onNewConversation: () => void;
};

export default function ChatWelcomePanel({ onNewConversation }: ChatWelcomePanelProps) {
  return (
    <div className='flex-1 flex items-center justify-center'>
      <div className='text-center max-w-md mx-auto'>
        <div className='w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
          <svg
            className='w-10 h-10 text-blue-600'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1.5}
              d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
            />
          </svg>
        </div>
        <h3 className='text-2xl font-semibold text-gray-900 mb-3'>Select a contact</h3>
        <p className='text-gray-500 mb-8 text-lg'>
          Choose a contact from the list to start a conversation
        </p>
        <PrimaryButton icon={<BsPlusLg />} onClick={onNewConversation}>
          New Conversation
        </PrimaryButton>
      </div>
    </div>
  );
}
