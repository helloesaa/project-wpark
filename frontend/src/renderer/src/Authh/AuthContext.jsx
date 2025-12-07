import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from './Auth-Service';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('app_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const result = await authService.login(email, password);
    if (result.success) {
      setUser(result.user);
      localStorage.setItem('app_user', JSON.stringify(result.user));
      localStorage.setItem('auth_token', result.token); 
      return { success: true };
    } else {
      return { success: false, message: result.message };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('app_user');
    localStorage.removeItem('auth_token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);