import React from "react";
import { Link } from "react-router-dom";

const LogoHeader = () => {
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
          </div>
        </nav>
      </header>
    </>
  );
};

export default LogoHeader;
