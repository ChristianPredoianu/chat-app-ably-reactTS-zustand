type FormButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function FormButton({ children, ...props }: FormButtonProps) {
  return (
    <button
      type='submit'
      className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-primary/80 transition'
      {...props}
    >
      {children}
    </button>
  );
}
