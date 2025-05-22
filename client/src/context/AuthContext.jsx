import { createContext, useContext, useState, useEffect } from 'react';
import axios from '../axiosConfig';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('/api/verify-owner', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setIsLoggedIn(true);
          setIsOwner(response.data.isOwner);
        } catch (error) {
          console.error('Error checking status:', error);
          setIsLoggedIn(false);
          setIsOwner(false);
          localStorage.removeItem('token');
        }
      }
    };

    checkLoginStatus();
  }, []);

  const login = (token, ownerStatus) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
    setIsOwner(ownerStatus);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setIsOwner(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isOwner, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 