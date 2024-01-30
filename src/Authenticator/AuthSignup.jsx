import React from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Signup from "../components/Signup.jsx";

const AuthSignup = () => {
  const { islogin } = useContext(UserContext);
  return <>{!islogin ? <Signup /> : <Navigate replace to="/" />}</>;
};

export default AuthSignup;
