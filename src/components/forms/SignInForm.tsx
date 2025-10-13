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
      <FormButton>Sign In</FormButton>
    </form>
  );
}
