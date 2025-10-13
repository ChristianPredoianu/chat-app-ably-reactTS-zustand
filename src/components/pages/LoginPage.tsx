import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import SignInForm from '@/components/forms/SignInForm';

export default function LoginPage() {
  return (
    <main className='container mx-auto px-2 '>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <IoChatbubbleEllipsesOutline className='text-blue-500' size={40} />
          <h1 className='text-xl font-medium'>ChatApp</h1>
        </div>
        <h2 className='text-2xl font-bold'>Welcome Back!</h2>
        <SignInForm />
      </div>
    </main>
  );
}
