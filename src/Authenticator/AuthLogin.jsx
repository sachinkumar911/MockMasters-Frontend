import React from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Login from "../components/Login.jsx";
import LogoHeader from "../components/LogoHeader.jsx";

const AuthLogin = () => {
  const { islogin } = useContext(UserContext);
  return (
    <>
      {!islogin ? (
        <>
          <LogoHeader />
          <Login />
        </>
      ) : (
        <Navigate replace to="/" />
      )}
    </>
  );
};

export default AuthLogin;
