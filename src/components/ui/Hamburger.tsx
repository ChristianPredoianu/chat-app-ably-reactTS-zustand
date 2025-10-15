import { GiHamburgerMenu } from 'react-icons/gi';

type HamburgerProps = {
  onClick?: () => void;
};

export default function Hamburger({ onClick }: HamburgerProps) {
  return (
    <button
      onClick={onClick}
      className={`p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden `}
      aria-label='Open menu'
    >
      <GiHamburgerMenu className='text-2xl text-gray-600' />
    </button>
  );
}
