import React, { useState } from "react";

const CreateQuestion = () => {
  const [selectedTopics, setselectedTopics] = useState([]);
  const [choices, setchoices] = useState(Array(2).fill(""));

  function addnewtopic(e) {
    if (!selectedTopics.includes(e.target.value)) {
      setselectedTopics([...selectedTopics, e.target.value]);
    }
    e.target.value = "Choose from the list";
  }
  function deletetopic(item) {
    let newArray = selectedTopics.filter((it) => it !== item);
    setselectedTopics(newArray);
  }
  function addnewoption() {
    const newArray = [...choices, ""];
    setchoices(newArray);
  }

  return (
    <>
      <section
        id="create-question"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="container w-[60%] mx-auto">
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 flex flex-col">
            <p className="text-xl font-semibold">Add New Question</p>
            <div className="flex flex-col mt-8 ml-3">
              <label htmlFor="subject" className="text-sm">
                Subject<span className="text-red-700">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                className="mt-1 h-10 border rounded px-4 bg-gray-50"
              >
                <option value="MATHEMATICS">MATHEMATICS</option>
                <option value="ANALYTICAL ABILITY AND LOGICAL REASONING">
                  ANALYTICAL ABILITY AND LOGICAL REASONING
                </option>
                <option value="COMPUTER AWARENESS">COMPUTER AWARENESS</option>
                <option value="GENERAL ENGLISH">GENERAL ENGLISH</option>
              </select>
            </div>
            {/*  */}
            <div className="flex flex-col mt-4 ml-3">
              <label htmlFor="subject" className="text-sm">
                Choose Topics
              </label>
              <div className="bg-gray-100 flex flex-wrap p-2 rounded-lg">
                {selectedTopics.map((item, key) => (
                  <span
                    key={key}
                    className=" flex items-center cursor-pointer bg-blue-500 m-2 p-[6px] px-3 rounded-3xl"
                  >
                    {item}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 ml-2"
                      onClick={() => {
                        deletetopic(item);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                ))}
                <select
                  id="subject-select"
                  name="subject"
                  defaultValue="Choose from the list"
                  className="mt-1 h-10 rounded px-4 w-auto min-w-[40%] bg-gray-100 outline-none appearance-none"
                  onChange={(e) => {
                    addnewtopic(e);
                  }}
                >
                  <option className="text-gray-400">
                    Choose from the list
                  </option>
                  <option value="Sets">Sets</option>
                  <option value="probability">probability</option>
                  <option value="Averages">Averages</option>
                  <option value="Expansions">Expansions</option>
                  <option value="Factorization">Factorization</option>
                  <option value="Quadratic equations">
                    Quadratic equations
                  </option>
                  <option value="Surds and Imaginary numbers">
                    Surds and Imaginary numbers
                  </option>
                  <option value="Arithmetic progressions">
                    Arithmetic progressions
                  </option>
                </select>
              </div>
            </div>

            <div className="flex flex-col mt-8 ml-3">
              <label htmlFor="message" className="text-sm">
                Complexity<span className="text-red-700">*</span>
              </label>
              <div
                className="inline-flex rounded-md shadow-sm mt-1"
                role="group"
              >
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-green-600 hover:text-gray-100"
                >
                  Easy
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-yellow-500 hover:text-gray-100"
                >
                  Medium
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-red-600 hover:text-gray-100"
                >
                  Hard
                </button>
              </div>
            </div>
            <div className="flex flex-col mt-4 ml-3">
              <label htmlFor="message" className="text-sm">
                Question<span className="text-red-700">*</span>
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div className="flex flex-col mt-4 ml-3">
              <label htmlFor="message" className="text-sm">
                Answer<span className="text-red-700">*</span>
              </label>
              {choices.map((item, key) => (
                <>
                  <div
                    key={key}
                    className="flex items-center my-1 ps-4 border border-gray-200 rounded"
                  >
                    <input
                      id="bordered-radio-1"
                      type="radio"
                      name="bordered-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      className="w-full py-4 ms-2 text-sm font-medium text-gray-900 outline-none"
                      placeholder="Enter Choice"
                    />
                  </div>
                </>
              ))}
              <span
                className=" flex items-center cursor-pointer bg-blue-500 m-2 p-[6px] px-3 rounded-3xl text-sm font-medium w-fit"
                onClick={addnewoption}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                Add Choice
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateQuestion;
