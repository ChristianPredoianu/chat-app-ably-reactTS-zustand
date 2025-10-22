type QuickStatsProps = {
  messages: number;
  online: number;
  groups: number;
  className?: string;
};

export default function QuickStats({
  messages,
  online,
  groups,
  className = '',
}: QuickStatsProps) {
  return (
    <div className={`mt-auto pt-8 border-t border-gray-200/60 ${className}`}>
      <div className='grid grid-cols-3 gap-6'>
        <div className='text-center'>
          <div className='text-3xl font-bold text-gray-900 mb-1'>{messages}</div>
          <div className='text-sm text-gray-500 font-medium'>Messages</div>
        </div>
        <div className='text-center'>
          <div className='text-3xl font-bold text-gray-900 mb-1'>{online}</div>
          <div className='text-sm text-gray-500 font-medium'>Online</div>
        </div>
        <div className='text-center'>
          <div className='text-3xl font-bold text-gray-900 mb-1'>{groups}</div>
          <div className='text-sm text-gray-500 font-medium'>Groups</div>
        </div>
      </div>
    </div>
  );
}
