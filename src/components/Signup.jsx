import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import toast, { Toaster } from "react-hot-toast";
import validator from "validator";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const toastId = React.useRef(null);
  const sendingnotify = (msg) => (toastId.current = toast.loading(msg));
  const dismiss = () => toast.dismiss(toastId.current);
  
  const errornotify = (msg) => toast.error(msg);
  const successnotify = (msg) => toast.success(msg);

  const Navigate = useNavigate();

  const [validusername, setvalidusername] = useState("");
  
  const checkUsername = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/checkusername",
        { username: formData.username },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.data.message === "valid username") {
        setvalidusername("username available");
      }
    } catch (error) {
      setvalidusername(error.response.data.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // if (name === "username") {
    //   checkUsername();
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validator.isEmail(formData.email)) {
      errornotify("Invalid Email");
      return;
    }
    if (formData.password !== formData.confirmpassword) {
      errornotify("Passwords don't match");
      return;
    }
    sendingnotify("Registering user...");
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dismiss();
      successnotify(response.data.message);
      sessionStorage.setItem("username", formData.username);
      sessionStorage.setItem("email", formData.email);
      sessionStorage.setItem("password", formData.password);
      sessionStorage.setItem("confirmpassword", formData.confirmpassword);
      sessionStorage.setItem("category", formData.category);
      sessionStorage.setItem("avatar", formData.avatar);
      setTimeout(() => {
        Navigate("/emailverify");
      }, 1000);
    } catch (error) {
      dismiss();
      errornotify(error.response.data.message);
      console.error(error.response.data.message);
    }
  };

  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <section className="bg-gray-50 flex flex-col items-center justify-center h-screen">
        <div className="p-6 space-y-4 bg-white  shadow-md">
          <div className="flex flex-col justify-center items-center">
            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 mb-4">
                Choose your Avatar
              </h2>
            </div>
            <div className=" flex py-2">
              <img
                src={avatar1}
                alt="Avatar 1"
                className={`cursor-pointer border-4 rounded-full transition-transform transform-gpu ${
                  formData.avatar === 1
                    ? "w-12 h-12 mr-2 border-gray-600 hover:scale-110 focus:outline-none"
                    : "w-11 h-11 mr-2 hover:scale-110"
                }`}
                onClick={() => {
                  setFormData({ ...formData, avatar: 1 });
                }}
              />
              <img
                src={avatar2}
                alt="Avatar 1"
                className={`cursor-pointer border-4 rounded-full transition-transform transform-gpu ${
                  formData.avatar === 2
                    ? "w-12 h-12 mr-2 border-gray-600 hover:scale-110 focus:outline-none"
                    : "w-11 h-11 mr-2 hover:scale-110"
                }`}
                onClick={() => {
                  setFormData({ ...formData, avatar: 2 });
                }}
              />
              <img
                src={avatar3}
                alt="Avatar 1"
                className={`cursor-pointer border-4 rounded-full transition-transform transform-gpu ${
                  formData.avatar === 3
                    ? "w-12 h-12 mr-2 border-gray-600 hover:scale-110 focus:outline-none"
                    : "w-11 h-11 mr-2 hover:scale-110"
                }`}
                onClick={() => {
                  setFormData({ ...formData, avatar: 3 });
                }}
              />
              <img
                src={avatar4}
                alt="Avatar 1"
                className={`cursor-pointer border-4 rounded-full transition-transform transform-gpu ${
                  formData.avatar === 4
                    ? "w-12 h-12 mr-2 border-gray-600 hover:scale-110 focus:outline-none"
                    : "w-11 h-11 mr-2 hover:scale-110"
                }`}
                onClick={() => {
                  setFormData({ ...formData, avatar: 4 });
                }}
              />
              <img
                src={avatar5}
                alt="Avatar 1"
                className={`cursor-pointer border-4 rounded-full transition-transform transform-gpu ${
                  formData.avatar === 5
                    ? "w-12 h-12 mr-2 border-gray-600 hover:scale-110 focus:outline-none"
                    : "w-11 h-11 mr-2 hover:scale-110"
                }`}
                onClick={() => {
                  setFormData({ ...formData, avatar: 5 });
                }}
              />
            </div>
          </div>
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900">
            Create your Account
          </h1>
          <form className="space-y-4" action="#" onSubmit={handleSubmit}>
            <div className="flex my-4">
              <div className="flex flex-col mr-4">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Create Username
                </label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  placeholder="example2024"
                  value={formData.username}
                  onChange={handleInputChange}
                  onBlur={checkUsername}
                  className={
                    validusername === "username available"
                      ? "bg-gray-50 border border-green-300 text-gray-900 rounded-lg block p-2.5"
                      : validusername === ""
                      ? "bg-gray-50 border border-grey-300 text-gray-900 rounded-lg block p-2.5"
                      : "bg-gray-50 border border-red-300 text-gray-900 rounded-lg block p-2.5"
                  }
                  required=""
                ></input>
                <p
                  className={
                    validusername === "username available"
                      ? "text-xs text-green-700 font-semibold px-1"
                      : "text-xs text-red-700 font-semibold px-1"
                  }
                >
                  {validusername}
                </p>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Enter Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block p-2.5"
                  required=""
                ></input>
              </div>
            </div>

            <div className="flex">
              <div className="flex flex-col mr-4">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 "
                ></input>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  placeholder="••••••••"
                  value={formData.confirm_password}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                ></input>
              </div>
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Select Category
              </label>
              <select
                name="category"
                id="category"
                value={formData.category}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                required=""
              >
                <option value="OBC-NCL">OBC-NCL</option>
                <option value="ST">ST</option>
                <option value="OBC-NCL (PwD)">OBC-NCL (PwD)</option>
                <option value="Gen-EWS">Gen-EWS</option>
                <option value="Open">Open</option>
                <option value="Open (PwD)">Open (PwD)</option>
                <option value="SC">SC</option>
                <option value="SC (PwD)">SC (PwD)</option>
                <option value="Gen-EWS (PwD)">Gen-EWS (PwD)</option>
              </select>
              {/* ["OBC-NCL", "ST", "OBC-NCL (PwD)", "Gen-EWS", "Open", "Open (PwD)", "SC", "SC (PwD)", "Gen-EWS (PwD)"] */}
            </div>

            <button
              type="submit"
              className="w-full  text-white bg-gray-800 hover:bg-opacity-90 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-25"
              disabled={validusername !== "username available"}
            >
              Create Account
            </button>
            <p className="text-sm font-light text-gray-500">
              Already have an account?
              <Link
                to="/login"
                className="font-medium text-gray-600 hover:underline"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
