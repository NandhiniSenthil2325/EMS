

import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // fake "database"
  const [users, setUsers] = useState([
    { email: "admin@demo.com", password: "admin123", role: "admin" },
    { email: "john@demo.com", password: "john123", role: "employee" }
  ]);

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      const found = users.find(
        (u) => u.email === email && u.password === password
      );
      if (found) {
        setUser(found);
        resolve(found);
      } else {
        reject(new Error("Invalid credentials"));
      }
    });
  };

  const register = (name, email, password) => {
    return new Promise((resolve, reject) => {
      const exists = users.find((u) => u.email === email);
      if (exists) {
        reject(new Error("User already exists"));
      } else {
        const newUser = { name, email, password, role: "employee" };
        setUsers([...users, newUser]);
        setUser(newUser);
        resolve(newUser);
      }
    });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
