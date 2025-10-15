import { useActionState, useState } from 'react';
import { signInAction } from '@/actions/signin-actions';
import type { SignInState } from '@/types/auth';

export function useSignInForm() {
  const initialState: SignInState = {};

  const [state, formAction, isPending] = useActionState(signInAction, initialState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return {
    state,
    formAction,
    isPending,
    email,
    setEmail,
    password,
    setPassword,
  };
}
