import { Outlet, useParams, Navigate } from 'react-router-dom';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useAuth } from '@/hooks/auth/useAuth';

export default function ProtectedLayout() {
  const { user, isLoading } = useAuth();
  const { userId } = useParams();

  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <LoadingSpinner />
      </div>
    );
  }

  if (!user) return <Navigate to='/' replace />;

  if (userId && userId !== user.id) {
    return <Navigate to={`/dashboard/${user.id}`} replace />;
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <Outlet />
    </div>
  );
}
