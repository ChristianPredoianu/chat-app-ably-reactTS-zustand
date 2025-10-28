import { Link } from 'react-router-dom';

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
        {/* Error Icon */}
        <div className='w-20 h-20 bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm'>
          <div className='w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center'>
            <svg
              className='w-6 h-6 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z'
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <h3 className='text-2xl font-semibold text-gray-900 mb-3'>{title}</h3>

        <p className='text-gray-600 mb-6'>{message}</p>

        {/* Actions */}
        <div className='flex flex-col sm:flex-row gap-3 justify-center'>
          {onRetry && (
            <button
              onClick={onRetry}
              className='inline-flex items-center px-5 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium'
            >
              <svg
                className='w-4 h-4 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                />
              </svg>
              Try Again
            </button>
          )}

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
