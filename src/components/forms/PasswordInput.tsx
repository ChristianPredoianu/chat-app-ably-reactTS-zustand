import type { InputHTMLAttributes } from 'react';
import { CiLock } from 'react-icons/ci';

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

export default function TextInput({
  label,
  name,
  type = 'password',
  ...props
}: PasswordInputProps) {
  return (
    <label className='flex flex-col gap-1'>
      <span className='text-xs mb-2'>{label}</span>
      <div className='relative'>
        <input
          className='border rounded-lg px-10 py-2 focus:outline-none focus:ring focus:border-primary w-full placeholder:text-red-900  placeholder:text-sm'
          name={name}
          type={type}
          {...props}
        />
        <span className='absolute left-3 top-3 -translate-y-1/2 text-gray-400 pointer-events-none'>
          <CiLock />
        </span>
      </div>
    </label>
  );
}
