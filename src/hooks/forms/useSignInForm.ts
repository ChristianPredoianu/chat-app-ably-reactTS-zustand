import { useActionState, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInAction } from '@/actions/signin-actions';
import type { SignInState } from '@/types/auth';

export function useSignInForm() {
  const navigate = useNavigate();
  const initialState: SignInState = {
    success: false,
    message: '',
    user: null,
    fieldErrors: {},
  };

  const [state, formAction, isPending] = useActionState(signInAction, initialState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (state.success && state.user) {
      navigate(`/dashboard/${state.user.id}`);
    }
  }, [state.success, state.user, navigate]);

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
