type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
};
export default function PrimaryButton({
  children,
  onClick,
  icon,
  disabled = false,
  className = '',
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all shadow-sm hover:shadow-md font-medium disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {icon && <span className='mr-2'>{icon}</span>}
      {children}
    </button>
  );
}
