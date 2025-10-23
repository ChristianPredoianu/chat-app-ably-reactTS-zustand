export default function LoadingSpinner() {
  return (
    <div className='h-full flex flex-col items-center justify-center text-center'>
      <div className='w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin'></div>
      <p className='text-gray-500 mt-2'>Loading...</p>
    </div>
  );
}
