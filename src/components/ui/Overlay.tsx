import type { ReactNode } from 'react';

type OverlayProps = {
  isVisible: boolean;
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
};

export default function Overlay({
  isVisible,
  onClick,
  children,
  className = '',
}: OverlayProps) {
  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed inset-0 
        bg-gray-300
        opacity-50
        backdrop-blur-sm
        z-40 
        transition-opacity duration-300
        ${className}
      `}
      onClick={onClick}
      aria-hidden='true'
    >
      {children}
    </div>
  );
}
