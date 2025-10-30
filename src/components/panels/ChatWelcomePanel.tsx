import PrimaryButton from '@/components/buttons/PrimaryButton';
import { BsPlusLg } from 'react-icons/bs';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

type ChatWelcomePanelProps = {
  onNewConversation: () => void;
};

export default function ChatWelcomePanel({ onNewConversation }: ChatWelcomePanelProps) {
  return (
    <div className='flex-1 py-20 flex items-center justify-center'>
      <div className='text-center max-w-md mx-auto'>
        <div className='w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
          <IoChatbubbleEllipsesOutline className='text-2xl' />
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
