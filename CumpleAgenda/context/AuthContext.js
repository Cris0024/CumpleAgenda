import React, { createContext, useState } from 'react';

// Crear el contexto de autenticación
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Función para iniciar sesión y establecer el usuario
  const login = (userInfo) => {
    setUser(userInfo);
  };

  // Función para cerrar sesión y eliminar el usuario
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
