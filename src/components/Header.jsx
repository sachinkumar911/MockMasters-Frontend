import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header top-0 left-0 w-full">
        <nav className="bg-white  w-full z-20  border-b shadow-sm border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
            <a href="" className="flex items-center space-x-3">
              <span className="self-center text-2xl font-semibold">
                MockMasters.
              </span>
            </a>
            <div className="flex order-2 space-x-3">
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
