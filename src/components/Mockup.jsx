import React from "react";
import mocktestimg from "../assets/mockup1.png";
// import mobileimg from "../assets/mobileimg.jpg";
import mobile1 from "../assets/mobile1.jpg"
import mobile2 from "../assets/mobile2.jpg"
import mobile3 from "../assets/mobile3.jpg"
const Mockup = () => {
  return (
    <>
      <section
        id="mock-section"
        className=" flex flex-col items-center justify-center  mb-18"
      >
        <div className="bg-orange-100 pt-[64px] pr-[146px]  pl-[146px] rounded-xl rela">
          <div className="flex flex-col justify-center items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 uppercase">
              Ace Your Tests
            </h2>
            <p className=" text-gray-800">
              Boost your success with our free mock tests.
            </p>
          </div>
          <figure className="relative z-[1] max-w-full w-[60rem] h-auto rounded-b-lg">
            <div className="relative flex items-center max-w-[60rem] bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-gray-700">
              <div className="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
                <span className="w-2 h-2 bg-gray-600 rounded-full dark:bg-gray-600"></span>
                <span className="w-2 h-2 bg-gray-600 rounded-full dark:bg-gray-600"></span>
                <span className="w-2 h-2 bg-gray-600 rounded-full dark:bg-gray-600"></span>
              </div>
              <div className="flex justify-center items-center w-full h-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-gray-600 dark:text-gray-400">
                MockMaster
              </div>
            </div>

            <div className="bg-gray-800 rounded-b-lg">
              <img
                className="max-w-full h-auto"
                src={mocktestimg}
                alt="Image Description"
              />
            </div>
          </figure>
        </div>

        {/* //mobile images */}

        <div className="flex justify-between gap-7">
          <div className="bg-blue-100 pt-16 pr-11 pl-11 mt-12 rounded-xl h-min">
            <div className="flex flex-col justify-center items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 uppercase">
                Ace Your Tests
              </h2>
              <p className=" text-gray-800">
                Boost your success with our free mock tests.
              </p>
            </div>
            <figure className="mx-auto max-w-full w-60 h-auto">
              <div className="p-1.5 bg-gray-800 rounded-tl-2xl rounded-tr-2xl pb-0 ">
                <img
                  className="max-w-full h-auto rounded-tl-2xl rounded-tr-2xl border-0"
                  src={mobile1}
                  alt="Image Description"
                />
              </div>
            </figure>
          </div>
          <div className="bg-green-100 pt-16 pr-11 pl-11 mt-12 rounded-xl h-min">
            <div className="flex flex-col justify-center items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 uppercase">
                Ace Your Tests
              </h2>
              <p className=" text-gray-800">
                Boost your success with our free mock tests.
              </p>
            </div>
            <figure className="mx-auto max-w-full w-60 h-auto">
              <div className="p-1.5 bg-gray-800 rounded-tl-2xl rounded-tr-2xl pb-0 ">
                <img
                  className="max-w-full h-auto rounded-tl-2xl rounded-tr-2xl border-0"
                  src={mobile2}
                  alt="Image Description"
                />
              </div>
            </figure>
          </div>
          <div className="bg-pink-100 pt-16 pr-11 pl-11 mt-12 rounded-xl h-min ">
            <div className="flex flex-col justify-center items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 uppercase">
                Ace Your Tests
              </h2>
              <p className=" text-gray-800">
                Boost your success with our free mock tests.
              </p>
            </div>
            <figure className="mx-auto max-w-full w-60 h-auto">
              <div className="p-1.5 bg-gray-800 rounded-tl-2xl rounded-tr-2xl pb-0 ">
                <img
                  className="max-w-full h-auto rounded-tl-2xl rounded-tr-2xl border-0"
                  src={mobile3}
                  alt="Image Description"
                />
              </div>
            </figure>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Mockup;
