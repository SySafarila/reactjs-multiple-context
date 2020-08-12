import React, { useContext, useEffect } from "react";
import { AuthContext, IsAdminContext } from "../contexts/AuthContext";
import ButtonBlvck from "./ButtonBlvck";

const Content = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useContext(IsAdminContext);
  useEffect(() => {
    console.log(isAdmin);
  });
  const login = () => {
    setAuth(!auth);
    setIsAdmin(!isAdmin);
  };
  return (
    <div
      style={{
        paddingBottom: "3rem",
        backgroundColor: auth ? "gray" : "white",
      }}
    >
      <p>Lorem</p>
      {auth ? <h1>Is Login</h1> : <h1>Is not Login</h1>}
      {isAdmin ? <h1>You are Admin</h1> : <h1> You are not Admin</h1>}
      <button onClick={login}>Login</button>
      <ButtonBlvck />
    </div>
  );
};

export default Content;
