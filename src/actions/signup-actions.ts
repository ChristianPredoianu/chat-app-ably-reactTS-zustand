import { validateSignUpForm } from '@/utils/validation';
import { account, ID } from '@/lib/appwrite';
import { handleAuthError } from '@/utils/auth-error/authErrorHandler';
import type { SignUpState } from '@/types/auth';

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
    const user = await account.create({
      userId: ID.unique(),
      email: email,
      password: password,
      name: email.split('@')[0],
    });

    console.log('User created:', user);

    console.log('Creating session...');
    const session = await account.createEmailPasswordSession({
      email: email,
      password: password,
    });
    console.log('Session created:', session);

    const currentUser = await account.get();
    console.log('Current user:', currentUser);

    return {
      success: true,
      message: 'Account created successfully!',
      user: {
        id: currentUser.$id,
        name: currentUser.name,
        email: currentUser.email,
      },
    };
  } catch (error: unknown) {
    console.error('Sign up error:', error);
    return handleAuthError(error);
  }
}
