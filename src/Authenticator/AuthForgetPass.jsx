import React from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import ForgetPass from "../components/ForgetPass.jsx";
import LogoHeader from "../components/LogoHeader.jsx";

const AuthForgetPass = () => {
  const { islogin } = useContext(UserContext);
  return (
    <>
      {!islogin ? (
        <>
          <LogoHeader />
          <ForgetPass />
        </>
      ) : (
        <Navigate replace to="/" />
      )}
    </>
  );
};

export default AuthForgetPass;
