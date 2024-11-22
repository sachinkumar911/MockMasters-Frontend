import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-800 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between pt-24">
          <a
            href="/"
            className="flex items-center sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-xl font-bold whitespace-nowrap text-white">
              MockMasters <span className="text-red-600 -ml-1">.</span>{" "}
            </span> 
          </a>
          <ul className="flex flex-wrap items-center text-sm text-gray-500 sm:mb-0">
            <li>
              <Link
                to="about"
                smooth={"easeOutQuint"}
                className="hover:underline me-4 md:me-6"
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="/"
                smooth={"easeOutQuint"}
                className="hover:underline me-4 md:me-6"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                smooth={"easeOutQuint"}
                className="hover:underline me-4 md:me-6"
              >
                Licensing
              </a>
            </li>
            <li>
              <Link
                to="contact"
                smooth={"easeOutQuint"}
                className="hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 opacity-15" />
        <span className="block text-sm text-gray-500 text-center">
          © 2024{" "}
          <a href="/" className="hover:underline">
            MockMasters™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
