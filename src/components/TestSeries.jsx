/* eslint-disable no-unused-vars */
import React from "react";
import coinimage from '../assets/coin.png'
const TestSeries = () => {
  return (
    <>
      <section id="test-section" className="mt-10">
        <div className="flex flex-col  justify-center items-center space-y-6">
          <div
            id="NIMCET-001"
            className=" rounded-lg relative overflow-hidden bg-white shadow-md  lg:w-[50%] md:w-[65%] w-[80%]"
          >
            <div class="absolute right-0 top-0 h-16 w-16">
              <div class="absolute transform rotate-45 bg-yellow-400 text-center text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px]">
                FREE
              </div>
            </div>
            <h5 className=" border-neutral-100 px-6 py-3 md:text-xl text-sm font-medium leading-tight">
              NIMCET-002
            </h5>
            <div className="p-5 flex  md:text-lg text-xs">
              <p className="px-1">120 Questions</p>
              <p className="px-1">|</p>
              <p className="px-1">1000 Marks</p>
              <p className="px-1">|</p>
              <p className="px-1">120 Minutes</p>
            </div>
            <div className="mx-6 mb-3 flex items-center justify-between">
              <button
                type="button"
                href="#"
                className="inline-block rounded text-white bg-blue-500 hover:bg-blue-600 px-4 pb-2 pt-2.5 text-sm font-medium leading-normal"
              >
                Start Test
              </button>
              <div className="bg-green-300 w-max px-2  text-green-900 rounded-2xl text-xs font-semibold flex items-center h-min py-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>
                5% of marks rewarded as coins
              </div>
            </div>
          </div>
          <div
            id="NIMCET-001"
            className=" rounded-lg relative overflow-hidden bg-white shadow-md  lg:w-[50%] md:w-[65%] w-[80%]"
          >
            <div class="absolute right-0 top-0 h-16 w-16">
              <div class="absolute transform flex items-center gap-1 justify-center rotate-45 bg-gray-600 text-center text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px]">
              100
               <img src={coinimage} alt="coinimage" className="h-4 w-4"></img>
              
              </div>
            </div>
            <h5 className=" border-neutral-100 px-6 py-3 md:text-xl text-sm font-medium leading-tight">
              NIMCET-002
            </h5>
            <div className="p-5 flex  md:text-lg text-xs">
              <p className="px-1">120 Questions</p>
              <p className="px-1">|</p>
              <p className="px-1">1000 Marks</p>
              <p className="px-1">|</p>
              <p className="px-1">120 Minutes</p>
            </div>
            <div className="mx-6 mb-3 flex items-center justify-between">
              <button
                type="button"
                href="#"
                className="inline-block rounded text-white bg-blue-500 hover:bg-blue-600 px-4 pb-2 pt-2.5 text-sm font-medium leading-normal"
              >
                Start Test
              </button>
              <div className="bg-green-300 w-max px-2  text-green-900 rounded-2xl text-xs font-semibold flex items-center h-min py-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>
                5% of marks rewarded as coins
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestSeries;
