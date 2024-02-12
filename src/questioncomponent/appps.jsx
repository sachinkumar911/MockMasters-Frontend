import NavBar from "./component/Navbar";
import MiddleSection from "./component/MiddleSection";
import { UserContext } from "./context/UserContex";
import "./App.css";
import { useState } from "react";

import Sections from "./component/Sections";
// ye sir formst dekhne ke liye hai

function App() {
  //subject ke liye api context
  const [user, setuser] = useState({
    subject: "Mathematics",
  });
  const update = (newvalue) => {
    setuser(newvalue);
  };

  // save btn ke liye
  const [savebtn, setsavebtn] = useState({});
  const updatsbtn = (newvalue) => {
    setsavebtn(newvalue);
  };

  return (
    <UserContext.Provider value={{ user, update, savebtn, updatsbtn }}>
      <div className=" w-full h-full overflow-x-hidden">
        <NavBar />
        <div className=" flex flex-col h-full justify-between mx-12">
          <Sections />
          <MiddleSection></MiddleSection>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
