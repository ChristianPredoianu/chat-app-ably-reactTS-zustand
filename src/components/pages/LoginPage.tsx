import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import SignInForm from '@/components/forms/SignInForm';

export default function LoginPage() {
  return (
    <main className='container mx-auto px-6 min-h-screen flex flex-col justify-between py-10'>
      <div className='flex flex-col items-center justify-start gap-2 '>
        <IoChatbubbleEllipsesOutline className='text-blue-500' size={40} />
        <h1 className='text-xl font-medium'>ChatApp</h1>
      </div>
      <h2 className='text-2xl font-bold text-center '>Welcome Back!</h2>

      <div className='flex flex-col items-center gap-4 '>
        <SignInForm />
        <p className='text-center py-4  text-sm'>
          Don’t have an account?
          <span className='text-blue-400'> SignUp</span>
        </p>
      </div>
      <div />
    </main>
  );
}
