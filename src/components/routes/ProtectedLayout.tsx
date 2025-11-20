import { Outlet, useParams, Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/auth/useAuth';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function ProtectedLayout() {
  const { user, isLoading } = useAuth();
  const { userId } = useParams(); // Get userId from URL params

  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <LoadingSpinner />
      </div>
    );
  }

  if (!user) return <Navigate to='/' replace />;

  // Add user ID verification here
  if (userId && userId !== user.id) {
    return <Navigate to={`/dashboard/${user.id}`} replace />;
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <Outlet /> {/* This renders the nested protected pages */}
    </div>
  );
}
