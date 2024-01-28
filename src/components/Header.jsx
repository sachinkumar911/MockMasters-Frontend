import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <div className="flex flex-col justify-center items-center">
        <Link to="/Signup">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Sign up
          </button>{" "}
        </Link>
        <Link to="/Login">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Login
          </button>{" "}
        </Link>
      </div>
    </>
  );
};

export default Header;
