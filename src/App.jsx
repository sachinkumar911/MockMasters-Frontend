import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

import { UserContext } from "./context/UserContext.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthEmailVerify from "./Authenticator/AuthEmailVerify.jsx";
import AuthSignup from "./Authenticator/AuthSignup.jsx";
import AuthLogin from "./Authenticator/AuthLogin.jsx";
import AuthDashboard from "./Authenticator/AuthDashboard.jsx";
import Contact from "./components/Contact.jsx";
import TeamMember from "./components/TeamMember.jsx";
import { verifyAccessToken } from "./services/verifyAccessToken.js";

function App() {
  const [userdetail, setuserdetail] = useState();
  const [islogin, setislogin] = useState(false);

  useEffect(() => {
    (async () => {
      if (!islogin) {
        const data = await verifyAccessToken();
        if (data) {
          setuserdetail(data);
          setislogin(true);
        }
      }
    })();
  }, []);

  const values = { userdetail, setuserdetail, islogin, setislogin };
  return (
    <UserContext.Provider value={values}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <TeamMember />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<AuthLogin />} />
          <Route path="/Signup" element={<AuthSignup />} />
          <Route path="/EmailVerify" element={<AuthEmailVerify />} />
          <Route path="/dashboard/*" element={<AuthDashboard />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
