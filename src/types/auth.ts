export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};

export type UseAuthReturn = {
  user: User | null;
  isLoading: boolean;
  checkAuth: () => Promise<void>;
  signOut: () => Promise<{ success?: boolean; message?: string; error?: string }>;
};

export type SignInState = {
  user: User | null;
  error?: string;
  success?: boolean;
  message?: string;
  fieldErrors?: {
    email?: string;
    password?: string;
  };
};

export type FieldErrors = {
  email?: string;
  password?: string;
};

export type SignUpState = {
  error?: string;
  success?: boolean;
  message?: string;
  fieldErrors?: {
    email?: string;
    confirmEmail?: string;
    password?: string;
    confirmPassword?: string;
    name?: string;
  };
  user?: User;
};

export type SignUpFieldErrors = {
  email?: string;
  confirmEmail?: string;
  password?: string;
  confirmPassword?: string;
};
