import { Routes, Route } from 'react-router-dom';
import LoginPage from '@/pages/LoginPage';
import DashboardPage from '@/pages/DashboardPage';
import ErrorPage from '@/pages/ErrorPage';
import PublicRoute from '@/components/routes/PublicRoute';
import ProtectedLayout from '@/components/routes/ProtectedLayout';

export default function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route element={<ProtectedLayout />}>
        <Route path='/dashboard/:userId' element={<DashboardPage />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}
