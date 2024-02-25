import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const CreateQuestion = ({side}) => {
  const [selectedTopics, setselectedTopics] = useState([]);
  const [choices, setchoices] = useState(Array(2).fill(""));
  const [correct, setcorrect] = useState(-1);
  const [alltopics, setalltopics] = useState();

  const [question, setquestion] = useState({});

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

  const toastId = React.useRef(null);
  const errornotify = (msg) => toast.error(msg);
  const sendingnotify = (msg) => (toastId.current = toast.loading(msg));
  const dismiss = () => toast.dismiss(toastId.current);
  const successnotify = (msg) => toast.success(msg);

  async function fetchalltopics(e) {
    setquestion({ ...question, subject: e.target.value });
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/subject/get-all-topics",
        {
          subjectname: e.target.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setalltopics(response.data.data);
    } catch (error) {
      errornotify(error.response.data.message);
      console.error(error.response.data.message);
    }
  }

  async function finalsubmitquestion() {
    if (!question.subject) {
      errornotify("Subject not choosen");
      return;
    }
    for (let i = 0; i < choices.length; i++) {
      if (choices[i] === "") {
        errornotify("Options not provided properly");
        return;
      }
    }
    if (correct === -1) {
      errornotify("Mark the correct answer");
      return;
    }
    if (question.txt_question === "") {
      errornotify("Type the question");
      return;
    }

    sendingnotify("sending...");
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/questions/create-question",
        {
          subjectname: question.subject,
          topics: selectedTopics,
          txt_question: question.txt_question,
          img_question: "",
          options: choices,
          correctanswer: choices[correct],
          complexity: question.complexity,
          explanation: "",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dismiss();
      successnotify(response.data.message);
    } catch (error) {
      dismiss();
      errornotify(error.response.data.message);
      console.error(error.response.data.message);
    }
  }

  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <section
        id="create-question"
        className={`min-h-screen flex items-center justify-center ${side ? "lg:blur-none blur-sm" : " "}`}
      >
        <div className="container w-full md:w-[70%]  lg:w-[60%] mx-auto">
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 flex flex-col  w-full">
            <p className="md:text-xl  text-lg font-semibold">
              Add New Question
            </p>
            <div className="flex flex-col mt-8 ml-3 md:text-base text-sm">
              <label htmlFor="subject" className="text-sm">
                Subject<span className="text-red-700">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                className="mt-1 h-10 border rounded px-4 bg-gray-50"
                onChange={(e) => {
                  fetchalltopics(e);
                }}
              >
                <option className="text-gray-400">
                  choose subject from the list
                </option>
                <option value="Mathematics">Mathematics</option>
                <option value="Analytical Ability And Logical Reasoning">
                  Analytical Ability And Logical Reasoning
                </option>
                <option value="Computer Awareness">Computer Awareness</option>
                <option value="General English">General English</option>
              </select>
            </div>
            {/*  */}
            <div className="flex flex-col mt-4 ml-3md:text-lg text-sm ">
              <label htmlFor="subject" className="text-sm">
                Choose Topics
              </label>
              <div className="bg-gray-100 flex flex-wrap p-2 rounded-lg">
                {selectedTopics.map((item) => (
                  <span
                    key={item}
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
                  {alltopics?.map((item, key) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
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
                  className={`px-4 py-2 text-sm font-medium text-gray-900 border-gray-200 rounded-s-lg hover:bg-green-600 hover:text-gray-100 ${
                    question["complexity"] === 1
                      ? "bg-green-600 text-gray-100"
                      : "text-gray-900 bg-white border"
                  }`}
                  onClick={() => {
                    setquestion({ ...question, ["complexity"]: 1 });
                  }}
                >
                  Easy
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-yellow-500 hover:text-gray-100 ${
                    question["complexity"] === 2
                      ? "bg-yellow-500 text-gray-100"
                      : "text-gray-900 bg-white border"
                  }`}
                  onClick={() => {
                    setquestion({ ...question, ["complexity"]: 2 });
                  }}
                >
                  Medium
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-red-600  hover:text-gray-100 ${
                    question["complexity"] === 3
                      ? "bg-red-600 text-gray-100"
                      : "text-gray-900 bg-white border"
                  }`}
                  onClick={() => {
                    setquestion({ ...question, ["complexity"]: 3 });
                  }}
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
                value={question.txt_question}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => {
                  setquestion({ ...question, txt_question: e.target.value });
                }}
              ></textarea>
            </div>

            <div className="flex flex-col mt-4 ml-3">
              <label htmlFor="message" className="text-sm">
                Answer<span className="text-red-700">*</span>
              </label>
              {choices.map((item, key) => (
                <div
                  key={key}
                  className="flex items-center my-1 ps-4 border border-gray-200 rounded"
                >
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    name="bordered-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    onClick={() => setcorrect(key)}
                  />
                  <input
                    type="text"
                    className="w-full py-4 ms-2 text-sm font-medium text-gray-900 outline-none"
                    placeholder="Enter Choice"
                    onChange={(e) => {
                      let temp = choices;
                      temp[key] = e.target.value;
                      setchoices(temp);
                    }}
                  />
                  {choices.length > 2 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="cursor-pointer w-5 h-5 mr-4 hover:fill-red-400"
                      onClick={() => {
                        let temp = [...choices];
                        temp.splice(key, 1);
                        setchoices(temp);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  ) : (
                    <></>
                  )}
                </div>
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
            <button
              type="button"
              className="mt-10 w-full bg-gray-800 hover:bg-opacity-90 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              onClick={finalsubmitquestion}
            >
              Submit question
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateQuestion;
