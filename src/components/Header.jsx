/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import avatar1 from "../assets/avatar1.webp";
import avatar2 from "../assets/avatar2.webp";
import avatar3 from "../assets/avatar3.webp";
import avatar4 from "../assets/avatar4.webp";
import avatar5 from "../assets/avatar5.webp";
import { Link } from "react-scroll";
import { NavLink, Navigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Header = () => {
  const { islogin, userdetail, setuserdetail } = useContext(UserContext);
  let avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];
  const closeNavbar = () => {
    document.getElementById("hamburger").checked = false;
  };
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDropdownVisible2, setIsDropdownVisible2] = useState(false);

  const handleImageClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const handleImageClick2 = () => {
    setIsDropdownVisible2(!isDropdownVisible2);
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

  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
    if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
      setIsDropdownVisible2(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownVisible, isDropdownVisible2]);

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            position: "relative",
            top: "8.5vh",
          },
        }}
        position="top-center"
        reverseOrder={false}
      />
      <header className="header top-0 left-0 w-full h-[10vh]">
        <nav className="  w-full z-20  border-b shadow-md border-gray-200">
          <div className="flex flex-row justify-around items-center flex-wrap p-3 w-full">
            <NavLink to="/" className="flex items-center">
              <span className="self-center md:text-2xl  font-semibold">
                MockMasters.
              </span>
            </NavLink>

            <div className="flex items-center justify-center z-30">
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
                className={`peer-checked:translate-x-0 fixed inset-0 w-full translate-x-[-100%] shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0 min-[0px]:bg-white lg:bg-transparent  lg:flex  lg:pt-0 pt-20 lg:z-0 z-10 `}
              >
                <ul className=" text-gray-700 space-y-8 flex flex-col justify-between items-center lg:flex-row  lg:space-y-0 lg:flex lg:space-x-16">
                  <li className="">
                    <Link
                      to="/"
                      smooth={"easeOutQuint"}
                      className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 hover:cursor-pointer font-semibold text-lg block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent smooth: 'easeInOutQuint'  duration={500} md:hover:text-blue-700 md:p-0 "
                      onClick={closeNavbar}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="about">
                    <Link
                      to="about"
                      smooth={"easeOutQuint"}
                      className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 hover:cursor-pointer font-semibold text-lg block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent smooth: 'easeInOutQuint'  duration={500} md:hover:text-blue-700 md:p-0"
                      onClick={closeNavbar}
                    >
                      About
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to="team"
                      smooth={"easeOutQuint"}
                      className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 hover:cursor-pointer font-semibold text-lg block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent smooth: 'easeInOutQuint'  duration={500} md:hover:text-blue-700 md:p-0"
                      onClick={closeNavbar}
                    >
                      Team
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to="contact"
                      smooth={"easeOutQuint"}
                      className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 hover:cursor-pointer font-semibold text-lg block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent smooth: 'easeInOutQuint'  duration={500} md:hover:text-blue-700 md:p-0 "
                      onClick={closeNavbar}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>

                <div className="flex flex-col justify-center items-center lg:flex-row text-lg lg:text-base lg:gap-4 lg:hidden  pt-10 gap-10">
                  {islogin ? (
                    <div className="lg:flex flex-col justify-center items-center lg:flex-row text-lg lg:text-base lg:gap-4">
                      {islogin ? (
                        <div
                          className="relative inline-block group"
                          ref={dropdownRef2}
                        >
                          <div className="flex font-semibold text-lg items-center gap-2">
                            <h1>Hi, {userdetail.username}</h1>
                            <img
                              src={avatars[userdetail?.avatar - 1]}
                              alt="Avatar"
                              onClick={handleImageClick2}
                              className={`cursor-pointer  rounded-full shadow-lg  border-4 border-white transition-transform transform-gpu md:w-11 md:h-11 h-10 w-fit md:mr-2 
                          focus:outline-none`}
                            />
                          </div>
                          {isDropdownVisible2 && (
                            <div className="absolute   mt-1  bg-white  rounded-xl shadow-lg  z-50 w-[100%]">
                              <NavLink to="/Dashboard/profile">
                                <button
                                  type="button"
                                  className="  flex items-center gap-3 font-medium px-2 py-2 text-[15px] text-gray-900 hover:bg-gray-100 w-full text-left"
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
                                      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                  </svg>
                                  My Profile
                                </button>
                              </NavLink>
                              <NavLink to="/Dashboard/test-series">
                                <button
                                  type="button"
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
                                  Dashboard
                                </button>
                              </NavLink>

                              <button
                                onClick={logoutuser}
                                type="button"
                                className="flex items-center gap-3 font-medium px-2 py-2 text-[15px] text-gray-900 hover:bg-gray-100 w-full text-left"
                              >
                                <svg
                                  className="w-[27px] h-[27px] text-gray-800"
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
                          <NavLink to="/Login">
                            <button
                              type="button"
                              className="lg:font-medium font-semibold px-5 py-2
                    hover:bg-opacity-50 rounded-lg text-base text-center border border-gray-400 hover:shadow-md "
                            >
                              Login
                            </button>
                          </NavLink>
                          <NavLink to="/Signup">
                            <button
                              type="button"
                              className="text-white bg-gray-800 hover:bg-opacity-90 md:font-medium rounded-lg md:text-base px-5 py-2 text-center  "
                            >
                              Sign up
                            </button>
                          </NavLink>
                        </>
                      )}
                    </div>
                  ) : (
                    <>
                      <NavLink to="/Login">
                        <button
                          type="button"
                          className="lg:font-medium font-semibold  px-5 py-2
                    hover:bg-opacity-50 rounded-lg text-base text-center border border-gray-400 hover:shadow-md "
                        >
                          Login
                        </button>
                      </NavLink>
                      {/* <p className="hidden lg:block   ">|</p> */}
                      <NavLink to="/Signup">
                        <button
                          type="button"
                          className="text-white bg-gray-800 hover:bg-opacity-90 md:font-medium rounded-lg md:text-base px-5 py-2 text-center  "
                        >
                          Sign up
                        </button>
                      </NavLink>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className=" lg:flex flex-col justify-center items-center lg:flex-row text-lg lg:text-base lg:gap-4  hidden">
              {islogin ? (
                <div className="lg:flex flex-col justify-center items-center lg:flex-row text-lg lg:text-base lg:gap-4">
                  {islogin ? (
                    <div
                      className="relative inline-block group"
                      ref={dropdownRef}
                    >
                      <div className="flex font-semibold text-lg items-center">
                        <h1>Hi, {userdetail.username}</h1>
                        <img
                          src={avatars[userdetail?.avatar - 1]}
                          alt="Avatar"
                          onClick={handleImageClick}
                          className={`cursor-pointer  rounded-full shadow-lg  border-4 border-white transition-transform transform-gpu md:w-11 md:h-11 h-10 w-fit 
                          focus:outline-none`}
                        />
                      </div>
                      {isDropdownVisible && (
                        <div className="absolute mt-1 right-0 px-2 py-1 bg-white  rounded-xl shadow-lg z-20 w-fit">
                          <NavLink to="/Dashboard/profile">
                            <button
                              type="button"
                              className=" flex items-center hover:rounded-lg font-medium px-2 py-2 text-[15px] text-gray-900 hover:bg-gray-100 w-full text-left"
                            >
                              <div className="flex items-center gap-3">
                                <svg
                                  className="w-[27px] h-[27px] text-gray-800"
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
                                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                  />
                                </svg>
                                My Profile
                              </div>
                            </button>
                          </NavLink>
                          <NavLink to="/Dashboard/test-series">
                            <button
                              type="button"
                              className=" flex items-center hover:rounded-lg font-medium px-2 py-2 text-[15px] text-gray-900 hover:bg-gray-100 w-full text-left"
                            >
                              <div className="flex items-center gap-3">
                                <svg
                                  className="w-[27px] h-[27px] text-gray-800"
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
                                Dashboard
                              </div>
                            </button>
                          </NavLink>

                          <button
                            onClick={logoutuser}
                            type="button"
                            className="flex items-center hover:rounded-lg font-medium px-2 py-2 text-[15px] text-gray-900 hover:bg-gray-100 w-full text-left gap-3"
                          >
                            <svg
                              className="w-[27px] h-[27px] text-gray-800"
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
                      <NavLink to="/Login">
                        <button
                          type="button"
                          className="lg:font-medium font-semibold  px-5 py-2
                    hover:bg-opacity-50 rounded-lg text-base text-center border border-gray-400 hover:shadow-md "
                        >
                          Login
                        </button>
                      </NavLink>
                      <NavLink to="/Signup">
                        <button
                          type="button"
                          className="text-white bg-gray-800 hover:bg-opacity-90 md:font-medium rounded-lg md:text-base px-5 py-2 text-center  "
                        >
                          Sign up
                        </button>
                      </NavLink>
                    </>
                  )}
                </div>
              ) : (
                <>
                  <NavLink to="/Login">
                    <button
                      type="button"
                      className="lg:font-medium font-semibold  px-5 py-2
                    hover:bg-opacity-50 rounded-lg text-base text-center border border-gray-400 hover:shadow-md "
                    >
                      Login
                    </button>
                  </NavLink>
                  {/* <p className="hidden lg:block   ">|</p> */}
                  <NavLink to="/Signup">
                    <button
                      type="button"
                      className="text-white bg-gray-800 hover:bg-opacity-90 md:font-medium rounded-lg md:text-base px-5 py-2 text-center  "
                    >
                      Sign up
                    </button>
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
