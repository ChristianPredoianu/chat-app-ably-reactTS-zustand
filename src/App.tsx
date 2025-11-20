import { Routes, Route } from 'react-router-dom';
import LoginPage from '@/pages/LoginPage';
import DashboardPage from '@/pages/DashboardPage';
import ErrorPage from '@/pages/ErrorPage';
import ProtectedLayout from '@/components/routes/ProtectedLayout';
import PublicRoute from '@/components/routes/PublicRoute'; // Add this

export default function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <PublicRoute>
            {' '}
            {/* Wrap LoginPage with PublicRoute */}
            <LoginPage />
          </PublicRoute>
        }
      />

      {/* All protected routes under one layout */}
      <Route element={<ProtectedLayout />}>
        <Route path='/dashboard/:userId' element={<DashboardPage />} />
        {/* Add future protected routes here */}
      </Route>

      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}
