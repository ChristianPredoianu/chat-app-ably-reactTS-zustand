import { Outlet } from 'react-router-dom';
import { useAuth } from '@/hooks/auth/useAuth';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function ProtectedLayout() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <LoadingSpinner />
      </div>
    );
  }

  if (!user) return <Navigate to='/' replace />;

  return (
    <div className='min-h-screen bg-gray-50'>
      <Outlet /> {/* This renders the nested protected pages */}
    </div>
  );
}
