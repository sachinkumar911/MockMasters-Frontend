import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import { UserContext } from "./context/UserContext.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Element } from "react-scroll";
import AuthEmailVerify from "./Authenticator/AuthEmailVerify.jsx";
import AuthSignup from "./Authenticator/AuthSignup.jsx";
import AuthLogin from "./Authenticator/AuthLogin.jsx";
import AuthDashboard from "./Authenticator/AuthDashboard.jsx";
import AuthForgetPass from "./Authenticator/AuthForgetPass.jsx";
import AuthForgetVerifyOTP from "./Authenticator/AuthForgetVerifyOTP.jsx";
import Contact from "./components/Contact.jsx";
import TeamMember from "./components/TeamMember.jsx";
import { verifyAccessToken } from "./services/verifyAccessToken.js";
import { dailyEliteCoin } from "./services/dailyEliteCoin.js";
import toast, { Toaster } from "react-hot-toast";
import coinspin from "./assets/coin-flip-1.gif";
import About from "./components/About.jsx";
import Hero from "./components/Hero.jsx";
import Mockup from "./components/Mockup.jsx";
import Temp3 from "./components/Pattern.jsx";
import OnlineExam from "./components/OnlineExam.jsx";
import Pattern from "./components/Pattern.jsx";

function App() {
  const [userdetail, setuserdetail] = useState();
  const [islogin, setislogin] = useState(false);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      if (!islogin) {
        const data = await verifyAccessToken();
        if (data) {
          setuserdetail(data);
          setislogin(true);
          if (isMounted && data?.coingiven === false) {
            const ECoin = await dailyEliteCoin(1);
            data.coingiven = ECoin;
            data.elitecoin = data.elitecoin + 1;
            setuserdetail(data);

            toast((t) => (
              <span className="flex items-center">
                <img src={coinspin} className="w-6" alt="" />
                <p>+1 Daily Check-In</p>
              </span>
            ));
          }
        }
      }
    })();

    return () => {
      isMounted = false;
    };
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
                <Element name="hero">
                  <Hero />
                </Element>

                <Element name="about">
                  <About />
                </Element>
                <Element name="mockup">
                  <Mockup />
                </Element>

                <Element name="team">
                  <TeamMember />{" "}
                </Element>
                <Element name="contact">
                  <Contact />
                </Element>
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<AuthLogin />} />
          <Route path="/Signup" element={<AuthSignup />} />
          <Route path="/EmailVerify" element={<AuthEmailVerify />} />
          <Route path="/dashboard/*" element={<AuthDashboard />} />
          <Route path="/Forgotpassword" element={<AuthForgetPass />} />
          <Route path="/verifyotp" element={<AuthForgetVerifyOTP />} />
          <Route path="/test/marking-scheme" element={<Pattern />} />
          <Route path="/test/ongoing" element={<OnlineExam />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
