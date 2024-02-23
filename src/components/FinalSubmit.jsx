import React from "react";
import { Link } from "react-router-dom";
const FinalSubmit = () => {
  return (
    <>
      <section id="final submit">
        <header class="z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start">
          <nav class="relative mx-2 mt-6 w-full max-w-[85rem] rounded-[36px]   bg-white px-4 py-3 md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto">
            <Link to="/dashboard">
              <button
                type="button"
                class="w-full flex items-center justify-center px-5 py-2 text-sm text-gray-700 font-medium hover:bg-gray-800 hover:text-white transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto "
              >
                <svg
                  class="w-5 h-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                <span>Go back</span>
              </button>
            </Link>
          </nav>
        </header>
        <h3 className="text-4xl font-bold mt-16 mb-10 text-center">
          Overall Score
        </h3>
        <div className="flex flex-col items-center ">
          <table className="border-collapse border w-3/5">
            <tbody>
              <tr className="bg-gray-200">
                <td className="p-2 py-4 border">
                  {" "}
                  <p className="font-bold text-center"> Subject </p>{" "}
                </td>
                <td className="p-2 border">
                  {" "}
                  <p className="font-bold text-center">
                    {" "}
                    No. of Questions{" "}
                  </p>{" "}
                </td>
                <td className="p-2 border">
                  {" "}
                  <p className="font-bold text-center">
                    {" "}
                    Negative Marking{" "}
                  </p>{" "}
                </td>
                <td className="p-2 border">
                  {" "}
                  <p className="font-bold text-center">
                    {" "}
                    Attempted Question
                  </p>{" "}
                </td>
                <td className="p-2 border">
                  {" "}
                  <p className="font-bold text-center"> Right Answered</p>{" "}
                </td>
                <td className="p-2 border">
                  {" "}
                  <p className="font-bold text-center"> Wrong Answered</p>{" "}
                </td>
                <td className="p-2 border">
                  {" "}
                  <p className="font-bold text-center"> Marks Obtained </p>{" "}
                </td>
              </tr>
              <tr>
                <td className="p-2 border">
                  <p className="text-center">Mathematics</p>
                </td>
                <td className="p-2 border text-center">50</td>
                <td className="p-2 border text-center">-3</td>
                <td className="p-2 border text-center">30</td>
                <td className="p-2 border text-center">15</td>
                <td className="p-2 border text-center">11</td>
                <td className="p-2 border text-center">250</td>
              </tr>
              <tr>
                <td className="p-2 border text-center">
                  Analytical Ability & Logical Reasoning
                </td>
                <td className="p-2 border text-center">50</td>
                <td className="p-2 border text-center">-1.5</td>
                <td className="p-2 border text-center">30</td>
                <td className="p-2 border text-center">15</td>
                <td className="p-2 border text-center">11</td>
                <td className="p-2 border text-center">250</td>
              </tr>
              <tr>
                <td className="p-2 border text-center">General English</td>
                <td className="p-2 border text-center">50</td>
                <td className="p-2 border text-center">-1.5</td>
                <td className="p-2 border text-center">30</td>
                <td className="p-2 border text-center">15</td>
                <td className="p-2 border text-center">11</td>
                <td className="p-2 border text-center ">250</td>
              </tr>
              <tr>
                <td className="p-2 border text-center ">Computer Awareness</td>
                <td className="p-2 border text-center ">50</td>
                <td className="p-2 border text-center ">-1</td>
                <td className="p-2 border text-center ">30</td>
                <td className="p-2 border text-center ">15</td>
                <td className="p-2 border text-center ">11</td>
                <td className="p-2 border text-center ">250</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="p-2 border text-center font-bold">TOTAL</td>
                <td className="p-2 border font-semibold text-center ">
                  120 Questions
                </td>
                <td className="p-2 border"></td>
                <td className="p-2 border"></td>
                <td className="p-2 border text-center  font-semibold">60</td>
                <td className="p-2 border  text-center font-semibold">34</td>
                <td className="p-2 border text-center  font-semibold">750</td>
              </tr>
            </tbody>
          </table>
          <div className="flex  justify-end w-3/5 pt-4 ">
            <Link to="#">
              <a class="inline-block py-2 text-base text-white bg-gray-800 px-6 hover:bg-gray-700 rounded-xl">
                View Solution
              </a>
            </Link>
          </div>
        </div>

        {/* <hr className="mt-10 "/> */}
        <div class="flex items-center justify-center space-x-4 mt-10  p-16">
          <div class="text-center  px-16 py-8 shadow-md">
            <h3 class="font-medium text-3xl ">
              <b>AIR</b>
            </h3>
            <div id="college">
              <h1 class="text-xl font-semibold">3301</h1>
            </div>
            <br />
            <p class="font-bold text-blue-500">This Rank is Dyanmic</p>
          </div>
          <div class="text-center  px-16 py-8 shadow-md">
            <h3 class="font-medium text-3xl">
              <b>Predicted College</b>
            </h3>
            <div id="college">
              <h1 class="text-xl font-semibold">
                No College Allotted. Work Hard!
              </h1>
            </div>
            <br />
            <a href="#" class="font-bold text-blue-500">
              View College Precedence
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalSubmit;
