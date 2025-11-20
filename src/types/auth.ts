export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export type SignInState = {
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
