import React, { useState } from "react";
import pic from "../assets/avatar1.png";
import { Link } from "react-router-dom";

const InstructionSecond = () => {
  const [uservalue, setusername] = useState("Username");
  return (
    <>
      <div className="flex flex-row ">
        <div className="bg-gray-50 p-6 h-[75vh] rounded-md overflow-y-scroll w-3/4">
          <u>
            <b>Exam Specific Instructions:</b>
          </u>
          <br />
          <br />
          <ul className="list-disc ml-6 leading-8">
            <li>
              The Question paper displayed for practice pyrpose only.Under no
              circumstances should this be presumed as a real paper.
            </li>
            <li>
              There will be 120 Questions and 120 minutes duration will be given
              to attempt these questions.
            </li>
            <li>
              There are 4 question paper consisting of Mathematics,Logical
              Ability andd logical Reasoning,Computer,English of 50,40,20,10
              questions respectively.
            </li>
            <li>There is only one correct answer for each question.</li>
          </ul>
        </div>
        <div className="flex  flex-col w-1/4 justify-center items-center">
          <img
            className="rounded-lg border-2 border-blue-300"
            src={pic}
            alt="avatar of the user"
          />
          <p className="mt-2 text-center text-sm font-semibold">{uservalue}</p>
        </div>
      </div>
      <div className=" flex flex-col h-[32vh] bg-white fixed bottom-0 left-0  w-3/4  border-blue-400 border-t-2 border-r-2 px-4 py-2">
        <p className="text-red-600 mb-2 mt-2">
          Please note all the questions will be appear in your default language.
          This language can be change for a particular question later on.
        </p>
        <div className="flex flex-row mb-2">
          <input
            type="checkbox"
            id="myCheckbox"
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded mr-2 mt-1"
          ></input>
          <p className="pt-0">
            {" "}
            I have read and understood the instructions. All computer hardware
            allotted to me are in proper working condition. I declare that I am
            not in possession of / not wearing / not carrying any prohibited
            gadget like mobile phone, bluetooth devices etc. /any prohibited
            material with me into the Examination Hall.I agree that in case of
            not adhering to the instructions, I shall be liable to be debarred
            from this Test and/or to disciplinary action, which may include ban
            from future Tests / Examinations.
          </p>
        </div>
        <div className="flex justify-between py-8">
          <Link to="/Instructionfirst">
            {" "}
            <button
              type="button"
              className="text-green-700 hover:text-white border border-green-700 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Previous
            </button>
          </Link>

          <button
            type="button"
            className=" px-8 min-w-0 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-700  font-medium rounded-lg text-sm  py-2.5 text-center me-2 mb-2  "
          >
            Start Exam
          </button>
        </div>
      </div>
    </>
  );
};

export default InstructionSecond;
