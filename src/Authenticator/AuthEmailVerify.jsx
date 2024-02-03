import React from "react";
import { Navigate } from "react-router-dom";
import EmailVerify from "../components/EmailVerify";

const AuthEmailVerify = () => {
  return (
    <>
      {sessionStorage.getItem("username") ? (
        <EmailVerify />
      ) : (
        <Navigate replace to="/" />
      )}
    </>
  );
};

export default AuthEmailVerify;
