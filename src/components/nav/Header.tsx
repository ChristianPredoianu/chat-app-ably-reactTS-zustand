import Hamburger from '@/components/ui/Hamburger';

type HeaderProps = {
  onMenuToggle: () => void;
};

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className='bg-white/80 backdrop-blur-sm border-b border-gray-200/60 '>
      <div className='container mx-auto px-6'>
        <nav className='flex items-center justify-between py-4'>
          <div className='flex items-center space-x-4'>
            <Hamburger onClick={onMenuToggle} />
          </div>
          <div className='flex items-center space-x-4'>
            <div className='w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full'></div>
          </div>
        </nav>
      </div>
    </header>
  );
}
