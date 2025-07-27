import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const mockUsers = [
  { username: 'admin', password: 'AdM1n@987$', role: 'admin' },
  { username: 'manager', password: 'M@nAg3r#321', role: 'manager' },
  { username: 'user', password: 'Us3r!456$', role: 'user' },
];


export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (username, password) => {
    const matched = mockUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (matched) {
      setUser(matched);
      navigate(`/${matched.role}`);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
