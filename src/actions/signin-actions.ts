import { account } from '@/lib/appwrite';
import { validateSignInForm } from '@/utils/validation';
import { handleAuthError } from '@/utils/auth-error/authErrorHandler';
import type { SignInState } from '@/types/auth';

export async function signInAction(
  prevState: SignInState,
  formData: FormData
): Promise<SignInState> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { fieldErrors, isValid } = validateSignInForm(email, password);

  // If there are field errors, return early
  if (!isValid)
    return {
      ...prevState,
      user: null,
      fieldErrors,
      success: false,
    };

  async function signUserIn() {
    const session = await account.createEmailPasswordSession({
      email: email,
      password: password,
    });

    console.log('Session created:', session);

    const user = await account.get();
    console.log('User signed in:', user);

    return {
      success: true,
      message: 'Signed in successfully!',
      user: {
        id: user.$id,
        name: user.name,
        email: user.email,
      },
    };
  }

  try {
    return await signUserIn();
  } catch (error) {
    return {
      user: null,
      ...handleAuthError(error),
    };
  }
}
