import { useState, useEffect } from 'react';
import { account } from '@/lib/appwrite';
import type { User, UseAuthReturn } from '@/types/auth';

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    try {
      const userData = await account.get();
      setUser({
        id: userData.$id,
        name: userData.name,
        email: userData.email,
      });
    } catch (error: any) {
      setUser(null);

      if (error?.code !== 401) console.error('Auth check error:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    user,
    isLoading,
    checkAuth,
  };
}
