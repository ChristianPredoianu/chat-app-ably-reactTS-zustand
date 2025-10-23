import { BiError } from 'react-icons/bi';

type ErrorMessageProps = {
  message: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className='h-full flex flex-col items-center justify-center text-gray-500 text-center'>
      <BiError className='text-4xl' />
      <p>{message}</p>
    </div>
  );
}
