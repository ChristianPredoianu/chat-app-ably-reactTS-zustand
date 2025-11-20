import Hamburger from '@/components/ui/Hamburger';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import { useAuth } from '@/hooks/auth/useAuth';

type HeaderProps = {
  onMenuToggle: () => void;
};

export default function Header({ onMenuToggle }: HeaderProps) {
  const { signOut } = useAuth();

  return (
    <header className='bg-white/80 backdrop-blur-sm border-b border-gray-200/60 '>
      <div className='container mx-auto px-6'>
        <nav className='flex items-center justify-between py-4'>
          <div className='flex items-center space-x-4'>
            <Hamburger onClick={onMenuToggle} />
          </div>
          <div className='flex items-center space-x-4'>
            <PrimaryButton onClick={signOut}>Sign Out</PrimaryButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
