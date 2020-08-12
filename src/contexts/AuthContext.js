import React, { useState, createContext } from "react";

export const AuthContext = createContext();
export const IsAdminContext = createContext();
export const BlvckContext = createContext();

export const AuthProvider = (props) => {
  const [auth, setAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [blvck, setBlvck] = useState("black");

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      <IsAdminContext.Provider value={[isAdmin, setIsAdmin]}>
        <BlvckContext.Provider value={[blvck, setBlvck]}>
          {props.children}
        </BlvckContext.Provider>
      </IsAdminContext.Provider>
    </AuthContext.Provider>
  );
};
