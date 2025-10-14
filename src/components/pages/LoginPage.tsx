import { useState } from 'react';
import SignInForm from '@/components/forms/SignInForm';
import SignUpForm from '@/components/forms/SignUpForm';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

export default function LoginPage() {
  const [activeForm, setActiveForm] = useState<'signIn' | 'signUp'>('signIn');

  const inputComponents = {
    signIn: <SignInForm />,
    signUp: <SignUpForm />,
  };

  function toggleForm() {
    setActiveForm((prevForm) => (prevForm === 'signIn' ? 'signUp' : 'signIn'));
  }

  return (
    <main className='container mx-auto px-6 min-h-screen flex flex-col justify-between py-10'>
      <div className='flex flex-col items-center justify-start gap-2 '>
        <IoChatbubbleEllipsesOutline className='text-blue-500' size={40} />
        <h1 className='text-xl font-medium'>ChatApp</h1>
      </div>
      <h2 className='text-2xl font-bold text-center -mt-10'>
        {activeForm === 'signIn' ? 'Welcome Back!' : 'Create Account'}
      </h2>
      <div className='flex flex-col items-center gap-4 '>
        {inputComponents[activeForm]}
        <p className='text-center py-4  text-sm'>
          {activeForm === 'signIn'
            ? 'Don’t have an account?'
            : 'Already have an account?'}
          <span className='text-blue-400' onClick={toggleForm}>
            {activeForm === 'signIn' ? 'Sign Up' : 'Sign In'}
          </span>
        </p>
      </div>
      <div />
    </main>
  );
}
