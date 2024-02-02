import React from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DashBoard from "../components/DashBoard.jsx";

const AuthDashboard = () => {
  const { islogin } = useContext(UserContext);
  return (
    <>
      <Header />
      <DashBoard />
      <Footer />
    </>
  );
};

export default AuthDashboard;
