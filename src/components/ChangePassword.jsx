import React from "react";
import { Link } from "react-router-dom";
const ChangePassword = () => {
  return (
    <>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow-md md:mt-0 sm:max-w-md  sm:p-8">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-bold text-2xl">
                <p>Change Password</p>
              </div>
            </div>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-3 "
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm Password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-3 "
                  required=""
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-800 hover:bg-opacity-90 text-white hover:bg-primary-700   font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Reset passwod
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChangePassword;
