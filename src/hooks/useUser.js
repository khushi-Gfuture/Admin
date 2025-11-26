import { useEffect, useState, useCallback } from 'react';
import storage from '../utils/storage';

// useUser: small hook to load/save the current user to localStorage
export default function useUser() {
  const [user, setUser] = useState(() => storage.getItem('user'));

  useEffect(() => {
    if (user) {
      storage.setItem('user', user);
    } else {
      storage.removeItem('user');
    }
  }, [user]);

  const logout = useCallback(() => {
    setUser(null);
    storage.removeItem('user');
  }, []);

  return {
    user,
    setUser,
    logout,
    isLoggedIn: Boolean(user),
  };
}
