import type { FieldErrors } from '@/types/auth';

export function validateEmail(email: string): string | undefined {
  if (!email?.trim()) return 'Email is required';

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Please enter a valid email address';
  }
  if (email.length > 254) return 'Email is too long';

  return undefined;
}

export function validatePassword(password: string): string | undefined {
  if (!password) return 'Password is required';

  if (password.length < 8) return 'Password must be at least 8 characters';

  if (password.length > 128) return 'Password is too long';

  if (!/^(?=.*[a-zA-Z])(?=.*\d)/.test(password)) {
    return 'Password must contain letters and numbers';
  }
  return undefined;
}

export function validateSignInForm(
  email: string,
  password: string
): { fieldErrors: FieldErrors; isValid: boolean } {
  const fieldErrors: FieldErrors = {
    email: validateEmail(email),
    password: validatePassword(password),
  };

  const isValid = !fieldErrors.email && !fieldErrors.password;

  return { fieldErrors, isValid };
}
