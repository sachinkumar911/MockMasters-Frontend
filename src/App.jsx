import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { UserContext } from "./context/UserContext.jsx";
import Header from "./components/Header";
import Signup from "./components/Signup";
import EmailVerify from "./components/EmailVerify";
import AuthSignup from "./Authenticator/AuthSignup.jsx";
import AuthLogin from "./Authenticator/AuthLogin.jsx";

function App() {
  const [userdetail, setuserdetail] = useState();
  const [islogin, setislogin] = useState(false);

  useEffect(() => {
    async function tryRefreshingToken() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/users/refresh-token",
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        if (response.data.message === "Access token refreshed") {
          // setuserdetail(response.data.data);
          console.log(response.data.data);
          setislogin(true);
        }
        console.log(response.data);
      } catch (error) {
        // console.log(error.response.data.message);
        // tryRefreshingToken();
      }
    }

    async function verifyAccessToken() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/users/current-user",
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        if (response.data.message === "User fetched successfully") {
          setuserdetail(response.data.data);
          setislogin(true);
        }
      } catch (error) {
        // console.log(error.response.data.message);
        tryRefreshingToken();
      }
    }
    verifyAccessToken();
  }, []);

  const values = { userdetail, setuserdetail, islogin, setislogin };
  return (
    <UserContext.Provider value={values}>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<AuthLogin />} />
          <Route path="/Signup" element={<AuthSignup />} />
          <Route path="/EmailVerify" element={<EmailVerify />} />
          <Route path="/dashboard" element={<Header />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
