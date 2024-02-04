import React from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import ForgetVerifyOTP from "../components/ForgetVerifyOTP.jsx";

const AuthForgetVerifyOTP = () => {
  const { islogin } = useContext(UserContext);
  return <>{!islogin ? <ForgetVerifyOTP /> : <Navigate replace to="/" />}</>;
};

export default AuthForgetVerifyOTP;
