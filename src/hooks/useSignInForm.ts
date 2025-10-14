import { useActionState, useState } from 'react';
import { signInAction } from '@/actions/auth-actions';

export function useSignInForm() {
  const [state, formAction, isPending] = useActionState(signInAction, null);
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
