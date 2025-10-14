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
