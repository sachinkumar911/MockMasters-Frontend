/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { islogin, userdetail } = useContext(UserContext);
  let avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];
  const closeNavbar = () => {
    document.getElementById("hamburger").checked = false;
  };
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleImageClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <header className="header top-0 left-0 w-full">
        <nav className="bg-white  w-full z-20  border-b shadow-sm border-gray-200">
          <div className="flex flex-row justify-around items-center flex-wrap p-3 w-full  ">
            <NavLink to="/" className="flex items-center ">
              <span className="self-center md:text-2xl  font-semibold">
                MockMasters.
              </span>
            </NavLink>

            <div className="flex items-center justify-center lg:mr-16 lg:pr-10  " id="">
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
              <div className={`peer-checked:translate-x-0 fixed inset-0 w-full translate-x-[-100%] shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0 min-[0px]:bg-white lg:bg-transparent  lg:flex  lg:pt-0 pt-20 lg:z-0 z-10 `}>
                <ul className=" text-gray-700 space-y-16 flex flex-col justify-between items-center lg:flex-row  lg:space-y-0 lg:flex lg:space-x-16  ">
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
                <div className="flex flex-col justify-center items-center lg:flex-row text-lg lg:text-base lg:gap-4 lg:hidden  pt-14 gap-14">
                  {islogin ? (
                    <div className="lg:flex flex-col justify-center items-center lg:flex-row text-lg lg:text-base lg:gap-4">
                      {islogin ? (
                        <div className="relative inline-block group">
                      <img
                        src={avatars[userdetail.avatar - 1]}
                        alt="Avatar"
                        onClick={handleImageClick}
                        className={`cursor-pointer  rounded-full transition-transform transform-gpu md:w-10 md:h-10 h-10 w-fit md:mr-2 
                        border-gray-600  focus:outline-none`}
                      />
                      {isDropdownVisible && (
                        <div className="absolute  mt-0 bg-white border rounded-lg shadow-md z-10">
                          <button
                            type="button"
                            className=" flex items-center gap-1 px-2 py-2 text-base text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5 opacity-85"
                            >
                              <path
                                strokeLinecap="round"
                                strokeWidth="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                              />
                            </svg>

                            <NavLink to="/dashboard">Profile</NavLink>
                          </button>
                          <button
                            type="button"
                            className=" flex items-center gap-1 px-2 py-2 text-base text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-5 h-5 opacity-85"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                              />
                            </svg>

                            <NavLink to="/dashboard">Dashboard</NavLink>
                          </button>

                          <button
                            type="button"
                            // onClick={handleLogoutClick}
                            className="flex items-center px-2  py-2 gap-1  text-base text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-5 h-5 opacity-85"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
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
                      {/* <p className="hidden lg:block   ">|</p> */}
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
                      <img
                        src={avatars[userdetail.avatar - 1]}
                        alt="Avatar"
                        onClick={handleImageClick}
                        className={`cursor-pointer  rounded-full transition-transform transform-gpu md:w-10 md:h-10 h-10 w-fit md:mr-2 
                        border-gray-600  focus:outline-none`}
                      />
                      {isDropdownVisible && (
                        <div className="absolute  mt-0 bg-white border rounded-lg shadow-md z-10">
                          <button
                            type="button"
                            className=" flex items-center gap-1 px-2 py-2 text-base text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-5 h-5 opacity-85"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                              />
                            </svg>

                            <NavLink to="/dashboard">Profile</NavLink>
                          </button>
                          <button
                            type="button"
                            className=" flex items-center gap-1 px-2 py-2 text-base text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-5 h-5 opacity-85"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                              />
                            </svg>

                            <NavLink to="/dashboard">Dashboard</NavLink>
                          </button>

                          <button
                            type="button"
                            // onClick={handleLogoutClick}
                            className="flex items-center px-2  py-2 gap-1  text-base text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-5 h-5 opacity-85"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
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
                  {/* <p className="hidden lg:block   ">|</p> */}
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

export default Header;
