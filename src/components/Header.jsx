/* eslint-disable no-unused-vars */
import React from "react";
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

            <div className="flex items-center justify-center   " id="">
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
              <div className="peer-checked:translate-x-0 fixed inset-0 w-full translate-x-[-100%] shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0 min-[0px]:bg-white lg:bg-transparent  lg:flex  lg:pt-0 pt-20 ">
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
                  <li className="">
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
                    <NavLink to="/dashboard">
                      <img
                        src={avatars[userdetail.avatar - 1]}
                        alt="Avatar"
                        className={`cursor-pointer border-4 rounded-full transition-transform transform-gpu md:w-10 md:h-10 h-10 w-fit md:mr-2 
                    border-gray-600 hover:scale-110 focus:outline-none`}
                      />
                    </NavLink>
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
                <NavLink to="/dashboard">
                  <img
                    src={avatars[userdetail.avatar - 1]}
                    alt="Avatar"
                    className={`cursor-pointer border-4 rounded-full transition-transform transform-gpu md:w-10 md:h-10 w-fit md:mr-2 
                    border-gray-600 hover:scale-110 focus:outline-none`}
                  />
                </NavLink>
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
