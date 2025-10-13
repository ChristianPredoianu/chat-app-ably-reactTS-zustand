import { Routes, Route } from 'react-router-dom';
import LoginPage from '@/components/pages/LoginPage';
import ChatPage from '@/components/pages/ChatPage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/chat/:userId' element={<ChatPage />} />
    </Routes>
  );
}
