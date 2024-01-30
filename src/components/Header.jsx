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

{/* <header class="header top-0 left-0 w-full">
                <nav class="bg-white fixed w-full z-20  border-b shadow-sm border-gray-200">
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
                        <a href="" class="flex items-center space-x-3">
                            <span class="self-center text-2xl font-semibold">MockMasters.</span>
                        </a>
                        <div class="flex order-2 space-x-3">
                            <button type="button" class=" font-medium hover:bg-opacity-50 rounded-lg text-base text-center">Login</button>
                            <p class="mt-1">|</p>
                            <button type="button" class="text-white bg-gray-800 hover:bg-opacity-90 font-medium rounded-lg text-base px-3 py-2 text-center ">Sign up</button>
                        </div>
                        <div class="items-center justify-between flex w-auto " id="">
                            <ul class="flex p-0 mt-0  font-medium  border-gray-100 rounded-lg  space-x-6 flex-row border-0 bg-white">
                                <li>
                                    <a href="#" class="block py-2 px-2 text-gray-900 hover:underline rounded bg-transparent">Home</a>
                                </li>
                                <li>
                                    <a  href="#" class="block py-2 px-2 text-gray-900 hover:underline  rounded bg-transparent">About</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-2 text-gray-900  hover:underline  rounded bg-transparent">Team</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-2 text-gray-900 hover:underline  rounded bg-transparent">Contact</a>
                                </li>
                            </ul>
                        </div>


                    </div>
                </nav>
            </header> */}