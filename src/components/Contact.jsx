import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact-form" className="pt-96">
        <div className="py-4 px-4 mb-10 mx-auto max-w-screen-md border shadow-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-semibold text-center">
            Contact Us
          </h2>
          {/* <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p> */}
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your name
              </label>
              <input
                type="email"
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
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-gray-500  focus:ring-opacity-40"
                placeholder="Your Message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm text-white font-medium text-center rounded-lg bg-gray-800 sm:w-fit hover:bg-opacity-90  focus:outline-none"
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
