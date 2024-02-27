import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const ChangePassword = () => {
  const toastId = React.useRef(null);
  const errornotify = (msg) => toast.error(msg);
  const sendingnotify = (msg) => (toastId.current = toast.loading(msg));
  const dismiss = () => toast.dismiss(toastId.current);
  const successnotify = (msg) => toast.success(msg);

  const Navigate = useNavigate();

  const [currentpassword, setcurrentpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [cfmnewpassword, setcfmnewpassword] = useState("");

  const changepassword = async () => {
    if (currentpassword === "" || newpassword === "" || cfmnewpassword === "") {
      errornotify("All fields are required");
      return;
    }
    if (newpassword !== cfmnewpassword) {
      errornotify("New & confirm password don't match");
      return;
    }
    if (newpassword.length < 8) {
      errornotify("Password is short");
      return;
    }
    sendingnotify("Verifying...");
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/change-password",
        {
          currentpassword,
          newpassword,
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
      setTimeout(() => {
        Navigate("/dashboard");
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
      <section className={`pt-[90px] `}>
        <div className="flex flex-col items-center mt-5 px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md  sm:p-8">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-bold text-2xl">
                <p>Change Password</p>
              </div>
            </div>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
              <div>
                <label
                  htmlFor="currpassword"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  name="currpassword"
                  id="currpassword"
                  value={currentpassword}
                  onChange={(e) => {
                    setcurrentpassword(e.target.value);
                  }}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-3 "
                  required=""
                />
              </div>
              {/* <div
                className="flex justify-end"
                style={{ marginTop: "4px", marginBottom: "-10px" }}
              >
                <Link
                  to="/Forgotpassword"
                  className="text-sm font-medium text-gray-600 hover:underline hover:text-gray-700"
                >
                  Forgot password
                </Link>
              </div> */}
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
                  value={newpassword}
                  onChange={(e) => {
                    setnewpassword(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-3 "
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  value={cfmnewpassword}
                  onChange={(e) => {
                    setcfmnewpassword(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-3 "
                  required=""
                />
              </div>

              <button
                onClick={changepassword}
                type="button"
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
