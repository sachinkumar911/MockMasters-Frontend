import React from "react";
import mocktestimg from "../assets/mocktestimg.png";
import mobileimg from "../assets/mobileimg.jpg";
const Mockup = () => {
  return (
    <>
      <section
        id="mock-section"
        className=" flex flex-col items-center justify-center mb-20"
      >
        <div className="bg-orange-100 pt-16 pr-36  pl-36 rounded-xl">
          <div className="flex flex-col justify-center items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 uppercase">
              Ace Your Tests
            </h2>
            <p className=" text-gray-800">
              Boost your success with our free mock tests.
            </p>
          </div>
          <figure class="relative z-[1] max-w-full w-[60rem] h-auto rounded-b-lg">
            <div class="relative flex items-center max-w-[60rem] bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-gray-700">
              <div class="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
                <span class="w-2 h-2 bg-gray-600 rounded-full dark:bg-gray-600"></span>
                <span class="w-2 h-2 bg-gray-600 rounded-full dark:bg-gray-600"></span>
                <span class="w-2 h-2 bg-gray-600 rounded-full dark:bg-gray-600"></span>
              </div>
              <div class="flex justify-center items-center w-full h-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-gray-600 dark:text-gray-400">
                MockMaster
              </div>
            </div>

            <div class="bg-gray-800 rounded-b-lg">
              <img
                class="max-w-full h-auto"
                src={mocktestimg}
                alt="Image Description"
              />
            </div>
          </figure>
        </div>

{/* //mobile images */}

        <div className="flex justify-between gap-7">
          
          <div className="bg-blue-100 pt-16 pr-11 pl-11 mt-12 rounded-xl">
            <div className="flex flex-col justify-center items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 uppercase">
                Ace Your Tests
              </h2>
              <p className=" text-gray-800">
                Boost your success with our free mock tests.
              </p>
            </div>
            <figure class="mx-auto max-w-full w-60 h-auto">
              <div class="p-1.5 bg-gray-800 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                <img
                  class="max-w-full h-auto rounded-[1.25rem]"
                  src={mobileimg}
                  alt="Image Description"
                />
              </div>
            </figure>
          </div>
          <div className="bg-blue-100 pt-16 pr-11 pl-11 mt-12 rounded-xl">
            <div className="flex flex-col justify-center items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 uppercase">
                Ace Your Tests
              </h2>
              <p className=" text-gray-800">
                Boost your success with our free mock tests.
              </p>
            </div>
            <figure class="mx-auto max-w-full w-60 h-auto">
              <div class="p-1.5 bg-gray-800 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                <img
                  class="max-w-full h-auto rounded-[1.25rem]"
                  src={mobileimg}
                  alt="Image Description"
                />
              </div>
            </figure>
          </div>
          <div className="bg-green-100 pt-16 pr-11 pl-11 mt-12 rounded-xl">
            <div className="flex flex-col justify-center items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 uppercase">
                Ace Your Tests
              </h2>
              <p className=" text-gray-800">
                Boost your success with our free mock tests.
              </p>
            </div>
            <figure class="mx-auto max-w-full w-60 h-auto">
  <div class="p-1.5 bg-gray-800 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
    <img class="max-w-full h-auto rounded-[1.25rem]" src={mobileimg} alt="Image Description"/>
  </div>
</figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mockup;
