import { IoMdClose } from 'react-icons/io';
import type { ButtonHTMLAttributes } from 'react';

type CloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  iconSize?: number;
  variant?: 'icon-only' | 'with-text';
  size?: 'sm' | 'md' | 'lg';
};

export default function CloseButton({
  label = 'Close',
  iconSize,
  variant = 'icon-only',
  size = 'md',
  className = '',
  children,
  ...props
}: CloseButtonProps) {
  const sizeStyles = {
    sm: 'p-1 text-sm',
    md: 'p-2 text-base',
    lg: 'p-3 text-lg',
  };

  const baseStyles =
    'flex items-center justify-center transition-colors duration-200 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1';

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${className}`}
      aria-label={variant === 'icon-only' ? label : undefined}
      {...props}
    >
      <IoMdClose size={iconSize || (size === 'sm' ? 16 : size === 'lg' ? 24 : 20)} />
      {variant === 'with-text' && <span className='ml-2'>{children || label}</span>}
    </button>
  );
}
