/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

//MUI

const DashboardHeader = () => {
  const { islogin, userdetail } = useContext(UserContext);
  let avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];
  const closeNavbar = () => {
    document.getElementById("hamburger").checked = false;
  };
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleImageClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const handleclick = () => {
    closeNavbar();
    handleImageClick();
  };

  const errornotify = (msg) => toast.error(msg);
  const successnotify = (msg) => toast.success(msg);

  const logoutuser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/users/logout",
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      successnotify(response.data.message);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      errornotify("Something went wrong!!");
      console.error(error.response.data.message);
    }
  };

  return (
    <>
      <header className="header top-0 left-0 w-full">
        <nav className="w-full z-20  border-b shadow-md border-gray-200">
          <div className="flex flex-row justify-around items-center flex-wrap p-3 w-full  ">
            <NavLink to="/" className="flex items-center ">
              <span className="self-center md:text-2xl  font-semibold">
                MockMasters.
              </span>
            </NavLink>

            <div
              className="flex items-center justify-center lg:mr-16 lg:pr-10  "
              id=""
            >
              <input
                type="checkbox"
                name="hamburger"
                id="hamburger"
                className="peer"
                hidden
              />
              <label
                htmlFor="hamburger"
                className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                ></div>
              </label>
              <div
                className={`peer-checked:translate-x-0 fixed inset-0 w-full translate-x-[-100%] shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0 min-[0px]:bg-white lg:bg-transparent  lg:flex  lg:pt-0 pt-16 lg:z-0 z-10 `}
              >
                <div className="flex flex-col h-full items-center lg:flex-row text-lg lg:text-base lg:gap-4 lg:hidden  pt-1 gap-14">
                  {islogin ? (
                    <div className="lg:flex flex-col justify-around items-center lg:flex-row text-lg lg:text-base lg:gap-4">
                      {islogin ? (
                        <div className="relative inline-block group">
                          <div className="flex flex-col justify-center items-center gap-5">
                            <div className="flex font-semibold text-lg items-center gap-2">
                              <h1>Hi, Vikash</h1>
                              <img
                                src={avatars[userdetail.avatar - 1]}
                                alt="Avatar"
                                onClick={handleImageClick}
                                className={`cursor-pointer  rounded-full shadow-lg  border-4 border-white transition-transform transform-gpu md:w-11 md:h-11 h-10 w-fit md:mr-2 
                          focus:outline-none`}
                              />
                            </div>
                            <button
                              type="button"
                              onClick={handleclick}
                              className=" flex items-center gap-3 font-medium px-2 py-2 text-[15px] text-gray-900 hover:bg-gray-100 w-full text-left"
                            >
                              <svg
                                className="w-[27px] h-[27px] text-gray-800 "
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#0000"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.1"
                                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                              </svg>

                              <NavLink to="/Dashboard">My Profile</NavLink>
                            </button>

                            <button
                              type="button"
                              onClick={handleclick}
                              className=" flex items-center gap-3 font-medium px-2 py-2 text-[15px] text-gray-900 hover:bg-gray-100 w-full text-left"
                            >
                              <svg
                                className="w-[27px] h-[27px] text-gray-800 "
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.1"
                                  d="M9.1 4H5c-.5 0-.9.4-.9.9V9c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9V5c0-.5-.4-.9-.9-.9Zm10 0H15c-.5 0-.9.4-.9.9V9c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9V5c0-.5-.4-.9-.9-.9Zm-10 10H5c-.5 0-.9.4-.9.9V19c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9v-4c0-.5-.4-.9-.9-.9Zm10 0H15c-.5 0-.9.4-.9.9V19c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9v-4c0-.5-.4-.9-.9-.9Z"
                                />
                              </svg>

                              <NavLink to="/Dashboard">Dashboard</NavLink>
                            </button>

                            <button
                              type="button"
                              // onClick={handleLogoutClick}
                              onClick={logoutuser}
                              className="flex items-center gap-3 font-medium px-2 py-2 text-[15px] text-gray-900 hover:bg-gray-100 w-full text-left"
                            >
                              <svg
                                className="w-[27px] h-[27px] text-gray-800 "
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#0000"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.1"
                                  d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                                />
                              </svg>
                              Logout
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <button
                            type="button"
                            className="lg:font-medium font-semibold bg-slate-200 px-4 py-2
                          hover:bg-opacity-50 rounded-lg text-base text-center shadow-md "
                          >
                            <NavLink to="/Login">Login</NavLink>
                          </button>
                          <button
                            type="button"
                            className="text-white bg-gray-800 hover:bg-opacity-90 md:font-medium rounded-lg md:text-base px-3 py-2 text-center  "
                          >
                            <NavLink to="/Signup">Sign up</NavLink>
                          </button>
                        </>
                      )}
                    </div>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="lg:font-medium font-semibold bg-slate-200 px-4 py-2
                hover:bg-opacity-50 rounded-lg text-base text-center shadow-md "
                      >
                        <NavLink to="/Login">Login</NavLink>
                      </button>

                      <button
                        type="button"
                        className="text-white bg-gray-800 hover:bg-opacity-90 md:font-medium rounded-lg md:text-base px-3 py-2 text-center  "
                      >
                        <NavLink to="/Signup">Sign up</NavLink>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className=" lg:flex flex-col justify-center items-center lg:flex-row text-lg lg:text-base lg:gap-4  hidden">
              {islogin ? (
                <div className="lg:flex flex-col justify-center items-center lg:flex-row text-lg lg:text-base lg:gap-4">
                  {islogin ? (
                    <div className="relative inline-block group">
                      <div className="flex font-semibold text-lg items-center gap-2">
                        <h1>Hi, Vikash</h1>
                        <img
                          src={avatars[userdetail.avatar - 1]}
                          alt="Avatar"
                          onClick={handleImageClick}
                          className={`cursor-pointer  rounded-full shadow-lg  border-4 border-white transition-transform transform-gpu md:w-11 md:h-11 h-10 w-fit md:mr-2 
                          focus:outline-none`}
                        />
                      </div>
                      {isDropdownVisible && (
                        <div className="absolute ml-0 mt-0 bg-white  rounded-xl shadow-lg z-10 w-[100%]">
                          <button
                            type="button"
                            onClick={() =>
                              setIsDropdownVisible(!isDropdownVisible)
                            }
                            className=" flex items-center gap-3 font-medium px-2 py-2 text-[15px] text-gray-900 hover:bg-gray-100 w-full text-left"
                          >
                            <svg
                              className="w-[27px] h-[27px] text-gray-800"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#0000"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.1"
                                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                            </svg>

                            <NavLink to="/Dashboard">My Profile</NavLink>
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setIsDropdownVisible(!isDropdownVisible)
                            }
                            className=" flex items-center gap-3 font-medium px-2 py-2 text-[15px] text-gray-900 hover:bg-gray-100 w-full text-left"
                          >
                            <svg
                              className="w-[27px] h-[27px] text-gray-800 "
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#0000"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.1"
                                d="M9.1 4H5c-.5 0-.9.4-.9.9V9c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9V5c0-.5-.4-.9-.9-.9Zm10 0H15c-.5 0-.9.4-.9.9V9c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9V5c0-.5-.4-.9-.9-.9Zm-10 10H5c-.5 0-.9.4-.9.9V19c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9v-4c0-.5-.4-.9-.9-.9Zm10 0H15c-.5 0-.9.4-.9.9V19c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9v-4c0-.5-.4-.9-.9-.9Z"
                              />
                            </svg>

                            <NavLink to="/Dashboard">Dashboard</NavLink>
                          </button>

                          <button
                            type="button"
                            // onClick={handleLogoutClick}
                            onClick={logoutuser}
                            className="flex items-center gap-3 font-medium px-2 py-2 text-[15px] text-gray-900 hover:bg-gray-100 w-full text-left"
                          >
                            <svg
                              className="w-[27px] h-[27px] text-gray-800"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#0000"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.1"
                                d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                              />
                            </svg>
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="lg:font-medium font-semibold bg-slate-200 px-4 py-2
                    hover:bg-opacity-50 rounded-lg text-base text-center shadow-md "
                      >
                        <NavLink to="/Login">Login</NavLink>
                      </button>
                      <button
                        type="button"
                        className="text-white bg-gray-800 hover:bg-opacity-90 md:font-medium rounded-lg md:text-base px-3 py-2 text-center  "
                      >
                        <NavLink to="/Signup">Sign up</NavLink>
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <>
                  <button
                    type="button"
                    className="lg:font-medium font-semibold bg-slate-200 px-4 py-2
                hover:bg-opacity-50 rounded-lg text-base text-center shadow-md "
                  >
                    <NavLink to="/Login">Login</NavLink>
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gray-800 hover:bg-opacity-90 md:font-medium rounded-lg md:text-base px-3 py-2 text-center  "
                  >
                    <NavLink to="/Signup">Sign up</NavLink>
                  </button>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default DashboardHeader;
