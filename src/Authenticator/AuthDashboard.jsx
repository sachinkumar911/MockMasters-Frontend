/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import DashBoard from "../components/DashBoard.jsx";
import { verifyAccessToken } from "../services/verifyAccessToken.js";
import DashboardHeader from "../components/DashboardHeader.jsx";

const AuthDashboard = (props) => {
  const { userdetail, setuserdetail, islogin, setislogin } =
    useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (!islogin) {
        const data = await verifyAccessToken();
        if (data) {
          setuserdetail(data);
          setislogin(true);
        } else {
          navigate("/", {
            replace: true,
          });
        }
      }
    })();
  }, []);

  return (
    <>
      {islogin ? (
        <>
        
          <DashboardHeader/>
          <DashBoard />
          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default AuthDashboard;
