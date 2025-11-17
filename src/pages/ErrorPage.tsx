import { Link } from 'react-router-dom';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import { CgDanger } from 'react-icons/cg';

type ErrorStateProps = {
  title?: string;
  message?: string;
  onRetry?: () => void;
  showHomeButton?: boolean;
};

export default function ErrorState({
  title = 'Something went wrong',
  message = 'We encountered an unexpected error. Please try again.',
  onRetry,
  showHomeButton = true,
}: ErrorStateProps) {
  return (
    <div className='min-h-[400px] flex items-center justify-center p-6'>
      <div className='text-center max-w-sm'>
        <div className='w-20 h-20 bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm'>
          <div className='w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center'>
            <CgDanger className='text-2xl' />
          </div>
        </div>
        <h3 className='text-2xl font-semibold text-gray-900 mb-3'>{title}</h3>
        <p className='text-gray-600 mb-6'>{message}</p>
        <div className='flex flex-col sm:flex-row gap-3 justify-center'>
          {onRetry && <PrimaryButton onClick={onRetry}>Try Again</PrimaryButton>}
          {showHomeButton && (
            <Link
              to='/'
              className='inline-flex items-center px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium'
            >
              Go Home
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
