import { Routes, Route } from 'react-router-dom';
import LoginPage from '@/components/pages/LoginPage';
import DashboardPage from '@/components/pages/DashboardPage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/dashboard/:userId' element={<DashboardPage />} />
    </Routes>
  );
}
