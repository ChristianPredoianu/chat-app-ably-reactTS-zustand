import { useActionState, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUpAction } from '@/actions/signup-actions';
import type { SignUpState } from '@/types/auth';

export function useSignUpForm() {
  const initialState: SignUpState = {};

  const navigate = useNavigate();

  const [state, formAction, isPending] = useActionState(signUpAction, initialState);

  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (state.success && state.user) {
      navigate(`/dashboard/${state.user.name || state.user.id}`);
    }
  }, [state.success, state.user, navigate]);

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
