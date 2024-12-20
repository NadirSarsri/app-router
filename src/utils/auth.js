import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null || localStorage.getItem("Username"));

  const login = (user) => {
    setUser(user);
    localStorage.setItem("Username", user);
  };

  const logout = () => {
    localStorage.removeItem("Username");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
