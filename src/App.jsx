import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Signup from "./components/Signup";
import EmailVerify from "./components/EmailVerify";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/EmailVerify" element={<EmailVerify />} />
          <Route path="/dashboard" element={<Header />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
