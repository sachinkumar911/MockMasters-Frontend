/* eslint-disable no-unused-vars */
import React from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Signup from "../components/Signup.jsx";
import LogoHeader from "../components/LogoHeader.jsx";

const AuthSignup = () => {
  const { islogin } = useContext(UserContext);
  return (
    <>
      {!islogin ? (
        <>
          <LogoHeader />
          <Signup />
        </>
      ) : (
        <Navigate replace to="/" />
      )}
    </>
  );
};

export default AuthSignup;
