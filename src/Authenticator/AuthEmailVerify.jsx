import React from "react";
import { Navigate } from "react-router-dom";
import EmailVerify from "../components/EmailVerify";
import LogoHeader from "../components/LogoHeader";

const AuthEmailVerify = () => {
  return (
    <>
      {sessionStorage.getItem("email") ? (
        <>
          <LogoHeader />
          <EmailVerify />
        </>
      ) : (
        <Navigate replace to="/" />
      )}
    </>
  );
};

export default AuthEmailVerify;
