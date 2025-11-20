import { Routes, Route } from 'react-router-dom';
import LoginPage from '@/pages/LoginPage';

import DashboardPage from '@/pages/DashboardPage';
import ErrorPage from '@/pages/ErrorPage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/dashboard/:userId' element={<DashboardPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}
