import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import TestSeries from "./TestSeries";
import TestResult from "./TestResult";
import IncompleteTest from "./IncompleteTest";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import coin from "../assets/coin.png";
import Profile from "./Profile";
const DashBoard = () => {
  return (
    <>
      {/* <nav className="shadow-md border">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">MockMasters.</span>
          </a>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex items-center text-sm rounded-full md:me-0 relative"
              id="profile-button"
              onClick={toggleDropdown}
            >
              <p className="font-medium mx-2 text-lg">Hi, username</p>
              <img className="w-8 h-8 rounded-full" src={avatar1} alt="user photo" />
              {isDropdownOpen && (
                <div className="absolute right-0 mt-20 bg-white border rounded-md shadow-md">
                  <ul className="">
                    <li>
                      <button
                        type="button"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </button>
          </div>
        </div>
      </nav> */}

      <section id="sidebar-section" className=" flex">
        <aside
          id="default-sidebar"
          className=" w-[18%] h-screen  transition-transform -translate-x-full sm:translate-x-0 border-r-2"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
            <ul className="space-y-4 font-medium ">
              <li>
                <a
                  href="#"
                  className="flex text-white items-center p-4 bg-blue-400 rounded-lg hover:bg-gray-400  group bg-gradient-to-tr from-gray-300 via-gray-800 to-gray-900"
                >
                  <img src={coin} alt="" className=" h-6" />
                  <span className="ms-3">500 Elite Coins</span>
                </a>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>

                  <span className="ms-3">My Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/test-series"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                  </svg>
                  <span className="ms-3">Test Series</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/progress-report"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Progress Report
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/attempted-test"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Attempted Test
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/attempted-test"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Change Password
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <section id="" className=" w-full">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/test-series" element={<TestSeries />} />
            <Route path="/attempted-test" element={<TestResult />} />
          </Routes>
        </section>
      </section>
    </>
  );
};

export default DashBoard;
