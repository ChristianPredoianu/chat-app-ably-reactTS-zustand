import type { SignInState } from '@/types/auth';
import { validateSignInForm } from '@/utils/validation';

// Action function that handles form submission
export async function signInAction(
  prevState: SignInState,
  formData: FormData
): Promise<SignInState> {
  // Extract form data
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { fieldErrors, isValid } = validateSignInForm(email, password);

  // If there are field errors, return early
  if (!isValid) return { ...prevState, fieldErrors };

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
    if (error instanceof Error) return { error: error.message };

    return { error: 'Something went wrong. Please try again.' };
  }
}
