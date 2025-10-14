import TextInput from '@/components/forms/TextInput';
import PasswordInput from '@/components/forms/PasswordInput';
import FormButton from '@/components/buttons/FormButton';
import { useSignInForm } from '@/hooks/useSignInForm';

export default function SignInForm() {
  const { state, formAction, isPending, email, setEmail, password, setPassword } =
    useSignInForm();

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
        aria-invalid={!!state?.fieldErrors?.email}
        aria-describedby={state?.fieldErrors?.email ? 'email-error' : undefined}
      />

      {state?.fieldErrors?.email && (
        <div id='email-error' className='text-red-500 text-sm -mt-2'>
          {state.fieldErrors.email}
        </div>
      )}
      <PasswordInput
        label='Password'
        name='password'
        placeholder='Password'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        aria-invalid={!!state?.fieldErrors?.password}
        aria-describedby={state?.fieldErrors?.password ? 'password-error' : undefined}
      />

      {/* Display error or success messages */}
      {state?.fieldErrors?.password && (
        <div id='password-error' className='text-red-500 text-sm -mt-2'>
          {state.fieldErrors.password}
        </div>
      )}

      {/* General error message */}
      {state?.error && !state?.fieldErrors && (
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
