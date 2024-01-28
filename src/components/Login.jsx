import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="bg-gray-50 h-screen flex flex-col justify-center items-center">
        <div className="p-6 space-y-4 bg-white w-[28%] shadow-md ">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900">
            Sign in to your Account
          </h1>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Enter Email or Username
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block p-2.5"
                required=""
              ></input>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Enter Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
              ></input>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                    required=""
                  ></input>
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-500">
                    Remember me
                  </label>
                </div>
              </div>
              <Link
                to="/Forgotpassword"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Forgot password
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500">
              Don't have Account Yet?
              <Link
                to="/Signup"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
