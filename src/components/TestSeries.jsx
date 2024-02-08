/* eslint-disable no-unused-vars */
import React from "react";

const TestSeries = () => {
  return (
    <>
      <section id="test-section" className="mt-10">
        <div className="flex flex-col justify-center items-center space-y-6">
          <div
            id="NIMCET-001"
            className=" rounded-lg bg-white shadow-md w-fit lg:w-[50%]"
          >
            <h5 className="border border-neutral-100 px-6 py-3 md:text-xl text-sm font-medium leading-tight ">
              NIMCET-001
            </h5>
            <div className="p-6 flex md:text-lg text-xs ">
              <p className="px-1 ">120 Questions</p>
              <p className="px-1">|</p>
              <p className="px-1">1000 Marks</p>
              <p className="px-1">|</p>
              <p className="px-1">120 Minutes</p>
            </div>
            <div className="mx-6 mb-3">
              <button
                type="button"
                href="#"
                className="inline-block rounded bg-green-200 hover:bg-green-300 px-4 pb-2 pt-2.5 text-xs font-medium leading-normal"
              >
                Start Test
              </button>
            </div>
          </div>
          <div
            id="NIMCET-001"
            className=" rounded-lg bg-white shadow-md w-fit lg:w-[50%]"
          >
            <h5 className="border border-neutral-100 px-6 py-3 md:text-xl text-sm font-medium leading-tight">
              NIMCET-002
            </h5>
            <div className="p-6 flex  md:text-lg text-xs">
              <p className="px-1">120 Questions</p>
              <p className="px-1">|</p>
              <p className="px-1">1000 Marks</p>
              <p className="px-1">|</p>
              <p className="px-1">120 Minutes</p>
            </div>

            <div className="mx-6 mb-3">
              <button
                type="button"
                href="#"
                className="inline-block rounded bg-green-200 hover:bg-green-300 px-4 pb-2 pt-2.5 text-xs font-medium leading-normal"
              >
                Start Test
              </button>
            </div>
          </div>
          <div
            id="NIMCET-001"
            className="rounded-lg bg-white shadow-md w-fit lg:w-[50%]"
          >
            <h5 className="border border-neutral-100 px-6 py-3 md:text-xl text-sm font-medium leading-tight">
              NIMCET-003
            </h5>
            <div className="p-6 flex  md:text-lg text-xs">
              <p className="px-1">120 Questions</p>
              <p className="px-1">|</p>
              <p className="px-1">1000 Marks</p>
              <p className="px-1">|</p>
              <p className="px-1">120 Minutes</p>
            </div>
            <div className="mx-6 mb-3">
              <button
                type="button"
                href="#"
                className="inline-block rounded bg-green-200 hover:bg-green-300 px-4 pb-2 pt-2.5 text-xs font-medium leading-normal"
              >
                Start Test
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestSeries;
