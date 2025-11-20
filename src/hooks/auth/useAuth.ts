import { useState, useEffect } from 'react';
import { account } from '@/lib/appwrite';
import type { User, UseAuthReturn } from '@/types/auth';

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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

  async function signOut() {
    try {
      await account.deleteSession('current');
      setUser(null);
      return { success: true, message: 'Signed out successfully' };
    } catch (error: any) {
      console.error('Sign out error:', error);
      return { error: error.message || 'Failed to sign out' };
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return {
    user,
    isLoading,
    checkAuth,
    signOut, // Add signOut to the return object
  };
}
