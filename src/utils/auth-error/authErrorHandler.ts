// utils/authErrorHandler.ts
import type { AppwriteException } from 'appwrite';

function isAppwriteError(err: unknown): err is AppwriteException {
  return typeof err === 'object' && err !== null && 'code' in err;
}

export function handleAuthError(error: unknown): { error: string } {
  if (isAppwriteError(error)) {
    const errorCode = error.code;

    switch (errorCode) {
      case 409:
        return {
          error:
            'An account with this email already exists. Please use a different email or sign in.',
        };
      case 400:
        if (error.message?.includes('password')) {
          return { error: 'Password is too weak. Please use a stronger password.' };
        }
        if (error.message?.includes('email')) {
          return { error: 'Invalid email format. Please check your email address.' };
        }
        return { error: 'Invalid input. Please check your information and try again.' };
      case 401:
        return { error: 'Authentication failed. Please try again.' };
      case 429:
        return { error: 'Too many attempts. Please wait a moment and try again.' };
      case 500:
      case 502:
      case 503:
        return { error: 'Server is temporarily unavailable. Please try again later.' };
      default:
        return { error: 'Failed to create account. Please try again.' };
    }
  }

  if (error instanceof Error) {
    if (error.message.includes('network') || error.message.includes('fetch')) {
      return { error: 'Network error. Please check your connection and try again.' };
    }
    return { error: error.message };
  }

  return { error: 'Failed to create account. Please try again.' };
}
