import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/auth/useAuth';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function PublicRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <LoadingSpinner />
      </div>
    );
  }

  // Redirect to dashboard if already logged in
  if (user) {
    return <Navigate to={`/dashboard/${user.id}`} replace />;
  }

  return <>{children}</>;
}
