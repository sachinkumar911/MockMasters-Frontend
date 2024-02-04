import React from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import { Link } from "react-router-dom";

const Header = () => {
  const { islogin, userdetail } = useContext(UserContext);
  let avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

  return (
    <>
      <header className="header top-0 left-0 w-full">
        <nav className="bg-white  w-full z-20  border-b shadow-sm border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
            <Link to="/" className="flex items-center space-x-3">
              <span className="self-center text-2xl font-semibold">
                MockMasters.
              </span>
            </Link>
            <div className="flex order-2 space-x-3">
              {islogin ? (
                <Link to="/dashboard">
                  <img
                    src={avatars[userdetail.avatar - 1]}
                    alt="Avatar"
                    className={`cursor-pointer border-4 rounded-full transition-transform transform-gpu w-10 h-10 mr-2 border-gray-600 hover:scale-110 focus:outline-none`}
                  />
                </Link>
              ) : (
                <>
                  <button
                    type="button"
                    className=" font-medium hover:bg-opacity-50 rounded-lg text-base text-center"
                  >
                    <Link to="/Login">Login</Link>
                  </button>
                  <p className="mt-1">|</p>
                  <button
                    type="button"
                    className="text-white bg-gray-800 hover:bg-opacity-90 font-medium rounded-lg text-base px-3 py-2 text-center "
                  >
                    <Link to="/Signup">Sign up</Link>
                  </button>
                </>
              )}
            </div>
            <div className="items-center justify-between flex w-auto " id="">
              <ul className="flex p-0 mt-0  font-medium  border-gray-100 rounded-lg  space-x-6 flex-row border-0 bg-white">
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-2 text-gray-900 hover:underline rounded bg-transparent"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-2 text-gray-900 hover:underline  rounded bg-transparent"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-2 text-gray-900  hover:underline  rounded bg-transparent"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-2 text-gray-900 hover:underline  rounded bg-transparent"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
