import { useActionState, useState } from 'react';
import { signUpAction } from '@/actions/signup-actions';
import type { SignUpState } from '@/types/auth';

export function useSignUpForm() {
  const initialState: SignUpState = {};

  const [state, formAction, isPending] = useActionState(signUpAction, initialState);

  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return {
    state,
    formAction,
    isPending,
    email,
    setEmail,
    confirmEmail,
    setConfirmEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  };
}
