import React, { createContext, useContext, useState, useEffect } from "react";
import { authService } from "./Auth-Service";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage when app starts
  useEffect(() => {
    const savedUser = localStorage.getItem("app_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // LOGIN
  const login = async (email, password) => {
    const res = await authService.login(email, password);

    if (res.success) {
      setUser(res.user);
      localStorage.setItem("app_user", JSON.stringify(res.user));

      return { success: true };
    }

    return { success: false, message: res.message };
  };

  // REGISTER (optional, kalau mau direct call)
  const register = async (name, email, password) => {
    const res = await authService.register(name, email, password);
    return res; // biar halaman register bisa liat success/message
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("app_user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        loading,
        isAuthenticated: !!user,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);
