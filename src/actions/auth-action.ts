import type { SignInState } from '@/types/auth';

// Action function that handles form submission
export async function signInAction(
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
