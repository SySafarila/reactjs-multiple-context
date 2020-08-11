import React, { useState, createContext } from "react";

export const AuthContext = createContext();
export const IsAdminContext = createContext();

export const AuthProvider = (props) => {
  const [auth, setAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      <IsAdminContext.Provider value={[isAdmin, setIsAdmin]}>
        {props.children}
      </IsAdminContext.Provider>
    </AuthContext.Provider>
  );
};
