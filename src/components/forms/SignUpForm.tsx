import TextInput from '@/components/forms/TextInput';
import PasswordInput from '@/components/forms/PasswordInput';
import FormButton from '@/components/buttons/FormButton';
import { useSignUpForm } from '@/hooks/useSignUpForm';

export default function SignUpForm() {
  const {
    state,
    formAction,
    isPending,
    email,
    setEmail,
    confirmEmail,
    setConfirmEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = useSignUpForm();

  return (
    <form action={formAction} className='flex flex-col gap-4' noValidate>
      {/* Email */}
      <TextInput
        label='Email Address'
        name='email'
        type='email'
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

      {/* Confirm Email */}
      <TextInput
        label='Confirm Email Address'
        name='confirmEmail'
        type='email'
        placeholder='Confirm Email Address'
        value={confirmEmail}
        onChange={(e) => setConfirmEmail(e.target.value)}
        required
        aria-invalid={!!state?.fieldErrors?.confirmEmail}
        aria-describedby={
          state?.fieldErrors?.confirmEmail ? 'confirm-email-error' : undefined
        }
      />
      {state?.fieldErrors?.confirmEmail && (
        <div id='confirm-email-error' className='text-red-500 text-sm -mt-2'>
          {state.fieldErrors.confirmEmail}
        </div>
      )}

      {/* Password */}
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
      {state?.fieldErrors?.password && (
        <div id='password-error' className='text-red-500 text-sm -mt-2'>
          {state.fieldErrors.password}
        </div>
      )}

      {/* Confirm Password */}
      <PasswordInput
        label='Confirm Password'
        name='confirmPassword'
        placeholder='Confirm Password'
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        aria-invalid={!!state?.fieldErrors?.confirmPassword}
        aria-describedby={
          state?.fieldErrors?.confirmPassword ? 'confirm-password-error' : undefined
        }
      />
      {state?.fieldErrors?.confirmPassword && (
        <div id='confirm-password-error' className='text-red-500 text-sm -mt-2'>
          {state.fieldErrors.confirmPassword}
        </div>
      )}

      {/* General error and success messages */}
      {state?.error && (
        <div className='text-red-500 text-sm text-center'>{state.error}</div>
      )}
      {state?.success && (
        <div className='text-green-500 text-sm text-center'>{state.message}</div>
      )}

      <FormButton disabled={isPending}>
        {isPending ? 'Creating Account...' : 'Sign Up'}
      </FormButton>
    </form>
  );
}
