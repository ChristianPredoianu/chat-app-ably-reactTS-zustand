import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

export default function AppLogo() {
  return (
    <div className='flex flex-col items-center justify-start gap-2 '>
      <IoChatbubbleEllipsesOutline className='text-blue-500 text-2xl' />
      <h1 className='text-xl font-medium'>ChatApp</h1>
    </div>
  );
}
