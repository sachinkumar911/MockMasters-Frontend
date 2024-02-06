import React from "react";

const SamplePaper = () => {
  return (
    <>
      <section id="sample-paper" className=" flex items-center justify-center">
        <div className="container w-[60%] mx-auto">
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 flex flex-col">
            <p className="text-xl font-semibold mb-5">Add Sample Paper</p>
            <div class="mb-6">
              <label
                for="default-input"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Exam Name
              </label>

              <div class="w-full bg-white border border-gray-200 rounded-lg shadow">
                <ul
                  class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 "
                  id="defaultTab"
                  data-tabs-toggle="#defaultTabContent"
                  role="tablist"
                >
                  <li class="me-2">
                    <button
                      id="about-tab"
                      data-tabs-target="#about"
                      type="button"
                      role="tab"
                      aria-controls="about"
                      aria-selected="true"
                      class="inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 "
                    >
                      NIMCET
                    </button>
                  </li>
                  <li class="me-2">
                    <button
                      id="services-tab"
                      data-tabs-target="#services"
                      type="button"
                      role="tab"
                      aria-controls="services"
                      aria-selected="false"
                      class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 "
                    >
                      TACTM
                    </button>
                  </li>
                  <li class="me-2">
                    <button
                      id="statistics-tab"
                      data-tabs-target="#statistics"
                      type="button"
                      role="tab"
                      aria-controls="statistics"
                      aria-selected="false"
                      class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100"
                    >
                      GATE
                    </button>
                  </li>
                </ul>
                <div id="defaultTabContent">
                  <div class="p-6 flex ">
                    <p class="px-1">120 Questions</p>
                    <p class="px-1">|</p>
                    <p class="px-1">1000 Marks</p>
                    <p class="px-1">|</p>
                    <p class="px-1">120 Minutes</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="mb-6">
              <label
                for="default-input"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Exam ID
              </label>
              <input
                type="text"
                id="default-input"
                placeholder="NIMCET-001"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div> */}
            <div class="mb-6">
              <label
                for="default-input"
                white
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Enter Price
              </label>
              <input
                type="text"
                id="default-input"
                placeholder="$1000"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div>
            <div id="question-set" className="">
              <label
                htmlFor="default-input"
                className="block mb-2 text-xl font-medium text-gray-900"
              >
                Questions:
              </label>
              <div className="overflow-scroll h-72 overflow-x-hidden ">
                <div className="flex items-center my-1 ps-4 border border-gray-200 rounded ">
                  <input
                    id="bordered-radio-1"
                    type="checkbox"
                    name="bordered-radio"
                    className=" text-blue-600 w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    type="text"
                    className="w-full py-4 ms-2 text-sm font-medium text-gray-900 outline-none"
                    placeholder="Enter Choice"
                  >
                    Solve the following equation for x:2x+5
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="green"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex items-center my-1 ps-4 border border-gray-200 rounded ">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    name="bordered-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    type="text"
                    className="w-full py-4 ms-2 text-sm font-medium text-gray-900 outline-none"
                    placeholder="Enter Choice"
                  >
                    Solve the following equation for x:2x+5
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="yellow"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex items-center my-1 ps-4 border border-gray-200 rounded ">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    name="bordered-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    type="text"
                    className="w-full py-4 ms-2 text-sm font-medium text-gray-900 outline-none"
                    placeholder="Enter Choice"
                  >
                    Solve the following equation for x:2x+5
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 text-red-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
                    />
                  </svg>
                </div>
                <div className="flex items-center my-1 ps-4 border border-gray-200 rounded ">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    name="bordered-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    type="text"
                    className="w-full py-4 ms-2 text-sm font-medium text-gray-900 outline-none"
                    placeholder="Enter Choice"
                  >
                    Solve the following equation for x:2x+5
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 text-red-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
                    />
                  </svg>
                </div>
                <div className="flex items-center my-1 ps-4 border border-gray-200 rounded ">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    name="bordered-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    type="text"
                    className="w-full py-4 ms-2 text-sm font-medium text-gray-900 outline-none"
                    placeholder="Enter Choice"
                  >
                    Solve the following equation for x:2x+5
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 text-red-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
                    />
                  </svg>
                </div>
                <div className="flex items-center my-1 ps-4 border border-gray-200 rounded ">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    name="bordered-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    type="text"
                    className="w-full py-4 ms-2 text-sm font-medium text-gray-900 outline-none"
                    placeholder="Enter Choice"
                  >
                    Solve the following equation for x:2x+5
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 text-red-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
                    />
                  </svg>
                </div>
                <div className="flex items-center my-1 ps-4 border border-gray-200 rounded ">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    name="bordered-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    type="text"
                    className="w-full py-4 ms-2 text-sm font-medium text-gray-900 outline-none"
                    placeholder="Enter Choice"
                  >
                    Solve the following equation for x:2x+5
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 text-red-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
                    />
                  </svg>
                </div>
                <div className="flex items-center my-1 ps-4 border border-gray-200 rounded ">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    name="bordered-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    type="text"
                    className="w-full py-4 ms-2 text-sm font-medium text-gray-900 outline-none"
                    placeholder="Enter Choice"
                  >
                    Solve the following equation for x:2x+5
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 text-red-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
                    />
                  </svg>
                </div>
                <div className="flex items-center my-1 ps-4 border border-gray-200 rounded ">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    name="bordered-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    type="text"
                    className="w-full py-4 ms-2 text-sm font-medium text-gray-900 outline-none"
                    placeholder="Enter Choice"
                  >
                    Solve the following equation for x:2x+5
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 text-red-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
                    />
                  </svg>
                </div>
                <div className="flex items-center my-1 ps-4 border border-gray-200 rounded ">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    name="bordered-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    type="text"
                    className="w-full py-4 ms-2 text-sm font-medium text-gray-900 outline-none"
                    placeholder="Enter Choice"
                  >
                    Solve the following equation for x:2x+5
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 text-red-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
                    />
                  </svg>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SamplePaper;
