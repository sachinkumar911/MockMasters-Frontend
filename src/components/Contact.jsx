import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Contact = () => {
  const toastId = React.useRef(null);
  const errornotify = (msg) => toast.error(msg);
  const sendingnotify = (msg) => (toastId.current = toast.loading(msg));
  const dismiss = () => toast.dismiss(toastId.current);
  const successnotify = (msg) => toast.success(msg);

  const [name, setname] = useState("");
  const [msg, setmsg] = useState("");

  const [loginbtn, setloginbtn] = useState(false);

  const contactsend = async () => {
    if (name === "" || msg === "") {
      errornotify("Both fields are required");
      return;
    }
    setloginbtn(true);
    sendingnotify("Sending...");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/contact`,
        {
          name,
          message: msg,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dismiss();
      setloginbtn(false);
      setmsg("");
      setname("");
      successnotify(response.data.data);
    } catch (error) {
      dismiss();
      setloginbtn(false);
      errornotify(error.response.data.message);
      console.error(error.response.data.message);
    }
  };

  return (
    <>
      <section id="contact-form" className="pt-16 max-sm:px-2">
        <div className="py-4 px-4 mb-10 mx-auto max-w-screen-md border shadow-lg">
          <h2 className="mb-4 md:text-3xl text-xl tracking-tighter font-semibold text-center">
            Contact us
          </h2>

          {/* <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p> */}
          <form className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your name
              </label>
              <input
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
                type="text"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500  block w-full p-2.5 focus:ring-opacity-40"
                placeholder="Enter your Name"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your message
              </label>
              <textarea
                value={msg}
                onChange={(e) => {
                  setmsg(e.target.value);
                }}
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-gray-500  focus:ring-opacity-40"
                placeholder="Your Message..."
              ></textarea>
            </div>
            <button
              type="button"
              onClick={contactsend}
              className="py-3 px-5 text-sm text-white font-medium text-center rounded-lg bg-gray-700 hover:bg-gray-800  sm:w-fit  focus:outline-none"
              disabled={loginbtn}
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
