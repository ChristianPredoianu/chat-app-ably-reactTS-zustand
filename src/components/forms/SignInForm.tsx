import { useActionState, useState } from 'react';
import TextInput from '@/components/forms/TextInput';
import PasswordInput from '@/components/forms/PasswordInput';
import FormButton from '@/components/buttons/FormButton';
import type { SignInState } from '@/types/auth';

// Action function that handles form submission
async function signInAction(
  prevState: SignInState | null,
  formData: FormData
): Promise<SignInState> {
  // Extract form data
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // Validate inputs
  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  if (!email.includes('@')) {
    return { error: 'Please enter a valid email address' };
  }

  try {
    // Your sign-in logic here (API call, authentication, etc.)
    // Example:
    // const response = await fetch('/api/auth/signin', {
    //   method: 'POST',
    //   body: formData,
    // });

    // if (!response.ok) {
    //   return { error: 'Invalid credentials' };
    // }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // On success
    return { success: true, message: 'Signed in successfully!' };
  } catch (error) {
    return { error: 'Something went wrong. Please try again.' };
  }
}

export default function SignInForm() {
  // Use useActionState to manage form state
  const [state, formAction, isPending] = useActionState(signInAction, null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form action={formAction} className='flex flex-col gap-4' noValidate>
      <TextInput
        label='Email Address'
        name='email'
        type='text'
        placeholder='Email Address'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <PasswordInput
        label='Password'
        name='password'
        placeholder='Password'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Display error or success messages */}
      {state?.error && (
        <div className='text-red-500 text-sm text-center'>{state.error}</div>
      )}
      {state?.success && (
        <div className='text-green-500 text-sm text-center'>{state.message}</div>
      )}

      <span className='text-center py-4 text-blue-400 text-sm'>Forgot Password?</span>

      {/* Disable button when pending */}
      <FormButton disabled={isPending}>
        {isPending ? 'Signing In...' : 'Sign In'}
      </FormButton>
    </form>
  );
}
