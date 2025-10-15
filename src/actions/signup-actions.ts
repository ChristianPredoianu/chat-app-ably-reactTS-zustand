import type { SignUpState } from '@/types/auth';
import { validateSignUpForm } from '@/utils/validation';

export async function signUpAction(
  prevState: SignUpState,
  formData: FormData
): Promise<SignUpState> {
  const email = formData.get('email') as string;
  const confirmEmail = formData.get('confirmEmail') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

  const { fieldErrors, isValid } = validateSignUpForm(
    email,
    confirmEmail,
    password,
    confirmPassword
  );

  if (!isValid) return { ...prevState, fieldErrors };

  try {
    // Your sign-up logic here
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true, message: 'Account created successfully!' };
  } catch (error) {
    console.error('Sign up error:', error);
    return { error: 'Something went wrong. Please try again.' };
  }
}
