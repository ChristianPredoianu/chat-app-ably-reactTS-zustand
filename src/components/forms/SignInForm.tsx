import TextInput from '@/components/forms/TextInput';
import PasswordInput from '@/components/forms/PasswordInput';
import FormButton from '@/components/buttons/FormButton';

export default function SignInForm() {
  return (
    <form className='flex flex-col gap-4'>
      <TextInput
        label='Email Address'
        name='email'
        type='text'
        placeholder='Email Address'
        required
      />
      <PasswordInput label='Password' name='password' placeholder='Password' required />
      <span className='text-center py-4 text-blue-400 text-sm'>Forgot Password?</span>
      <FormButton>Sign In</FormButton>
    </form>
  );
}
