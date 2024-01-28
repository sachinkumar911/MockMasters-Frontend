import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Header />} />
          <Route path="/register" element={<Header />} />
          <Route path="/dashboard" element={<Header />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
