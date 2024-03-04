import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import validator from "validator";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgetPass = () => {
  const toastId = React.useRef(null);
  const errornotify = (msg) => toast.error(msg);
  const sendingnotify = (msg) => (toastId.current = toast.loading(msg));
  const dismiss = () => toast.dismiss(toastId.current);
  const successnotify = (msg) => toast.success(msg);

  const Navigate = useNavigate();

  const [mail, setmail] = useState("");

  const [forgetbtn, setforgetbtn] = useState(false);

  const sendOtpforPassword = async () => {
    if (mail === "") {
      errornotify("Enter email");
      return;
    }
    if (!validator.isEmail(mail)) {
      errornotify("Invalid email");
      return;
    }
    setforgetbtn(true);
    sendingnotify("Sending OTP...");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/users/forget-password`,
        {
          email: mail,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dismiss();
      successnotify(response.data.message);
      sessionStorage.setItem("email", mail);
      setTimeout(() => {
        Navigate("/verifyotp");
      }, 1000);
    } catch (error) {
      dismiss();
      setforgetbtn(false);
      errornotify(error.response.data.message);
      console.error(error.response.data.message);
    }
  };

  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <section className="flex flex-col items-center justify-center  mx-auto h-screen">
        <div className=" bg-white p-9  max-sm:p-4 shadow-xl border-t mx-auto w-full sm:max-w-[410px]  max-sm:w-[300px]">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-2xl">
              <p>Forgot Password</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We will send a OTP to your email</p>
            </div>
          </div>
          <form className="mt-8 space-y-4 ">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-base font-medium text-gray-900"
              >
                Enter email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => {
                  setmail(e.target.value);
                }}
                value={mail}
                className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg  block w-full p-3 "
                placeholder="example@gmail.com"
                required=""
              ></input>
            </div>

            <button
              disabled={forgetbtn}
              onClick={sendOtpforPassword}
              type="button"
              className="w-full text-white bg-gray-800 hover:bg-opacity-90 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Send OTP
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ForgetPass;
