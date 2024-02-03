/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const CreateQuestion = () => {
  const Subjects = ["Mathematics", "Logical Reasoning", "Computer", "English"];
  const Subtopics = [
    "Sets",
    " probability ",
    "Averages",
    "Expansions",
    "Factorization",
    "Quadratic equations",
    "Surds and Imaginary numbers",
    "Arithmetic progressions",
    "geometric progressions",
    "harmonic progressions",
    "Logarithms",
    "coordinates",
    "Distance formula",
    "line",
    " lines",
    " circle",
    "Locus",
    "Triangle",
    "rectangle",
  ];

  const [Subtopic, setSubtopic] = useState([]);
  const [Subject, setSubject] = useState("");
  const [Formate, setFormate] = useState("");
  const [istext, setistext] = useState(false);
  const [ques, setques] = useState("");
  const [type, settype] = useState(1);
  const [onChange, setonChange] = useState("");
  const [Addoption, setAddoption] = useState([]);
  const [Answer, setAnswer] = useState("");
  const [Qlink, setQlink] = useState("");

  const [Imagesbumit, setImagesbumit] = useState({
    link: "",
    subtopic: "",
    answer: "",
  });
  const [textSubmit, settextSubmit] = useState({
    subjectname: "",
    topics: [],
    txt_question: "",
    img_question: "",
    options: [],
    correctanswer: "",
    complexity: 1,
    explanation: "",
  });

  const handlesubject = (item) => {
    setSubject(item);
  };
  const handledelete = (item) => {
    const newv = Addoption.filter((it) => item !== it);
    setAddoption(newv);
  };
  const handlesubtopic = (item) => {
    if (Subtopic.includes(item)) {
      const newvalue = Subtopic.filter((it) => item !== it);
      setSubtopic(newvalue);
    } else {
      setSubtopic([...Subtopic, item]);
    }
    console.log(Subtopic);
  };

  const handleTextArea = (e) => {
    setques(e.target.value);
  };
  const handletype = (e) => {
    settype(e);
  };

  const hanndlechange = (e) => {
    setonChange(e.target.value);
  };
  const handleanswer = (item) => {
    if (Formate === "text") {
      const ans = Addoption.indexOf(item);
      setAnswer(ans);
    } else {
      setAnswer(item.target.value);
    }
  };

  const handlelink = (e) => {
    setQlink(e.target.value);
  };

  const handelImagesubmit = (e) => {
    e.preventDefault();
    const link = Qlink;
    const ans = Answer;
    const subt = Subtopic;
    setImagesbumit({ link: link, subtopic: subt, answer: ans });
    setQlink("");
    setAnswer("");
    console.log(Imagesbumit);
  };
  const handelfinalsubmit = () => {
    const sub = Subject;
    const subt = Subtopic;
    const que = ques;
    const img = "";
    const option = Addoption;
    const ans = Answer;
    const comp = type;
    const ex = "";
    settextSubmit({
      subjectname: sub,
      topics: subt,
      txt_question: que,
      img_question: "",
      options: option,
      correctanswer: ans,
      complexity: comp,
      explanation: "",
    });
    console.log(textSubmit);
  };

  return (
    <div className="flex flex-col   w-full h-[54rem]   bg-slate-200   items-center gap-3 ">
      <p className=" text-3xl font-serif font-semibold text-gray-900">
        Question
      </p>

      <div className="w-fit  border-none sm:text-sm flex justify-between gap-7 ">
        {Subjects.map((item, index) => (
          <button
            key={index}
            className={`block rounded-md px-3 py-2 text-md text-gray-700 hover:bg-zinc-900
            hover:text-white bg-gray-100 font-serif ${
              item === Subject ? "bg-zinc-800 text-white" : " "
            }`}
            onClick={() => {
              handlesubject(item);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      {Subject === "Mathematics" && (
        <p className=" font-serif font-semibold text-lg text-gray-900">
          {" "}
          Subtopic
        </p>
      )}

      {Subject === "Mathematics" && (
        <div
          className={`w-1/2 h-fit sm:text-sm flex flex-col justify-centre relative `}
        >
          <div className=" flex flex-wrap  items-center justify-center gap-3 ">
            {Subtopics.map((item, index) => (
              <button
                key={index}
                onClick={() => handlesubtopic(item)}
                className={` rounded-md px-3 py-2 text-md text-gray-700 hover:bg-zinc-900
                  hover:text-white bg-gray-100 font-serif 
                  ${
                    Subtopic.includes(item)
                      ? "bg-zinc-800 text-white"
                      : "bg-gray-100 text-gray-700 "
                  }
                  `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
      <p className=" font-serif font-semibold text-lg text-gray-900">
        {" "}
        Formate
      </p>

      <div className=" flex flex-col justify-center">
        <div className="flex justify-center w-[20rem]  gap-2 rounded-xl bg-slate-200 p-2">
          <div className="w-1/2">
            <input
              type="radio"
              name="option"
              id="1"
              value="Text"
              className="peer hidden"
            />
            <label
              htmlFor="1"
              className="block cursor-pointer select-none rounded-md p-2 text-center bg-slate-100 peer-checked:bg-zinc-800 peer-checked:font-bold peer-checked:text-white font-serif"
              onClick={() => {
                setFormate("text");
              }}
            >
              Text
            </label>
          </div>

          <div className="w-1/2">
            <input
              type="radio"
              name="option"
              id="2"
              value="Image"
              className="peer hidden"
            />
            <label
              htmlFor="2"
              className="block cursor-pointer select-none rounded-md p-2 text-center bg-slate-100   peer-checked:bg-zinc-800 peer-checked:text-white peer-checked:font-bold  font-serif"
              onClick={() => {
                setFormate("Image");
              }}
            >
              Image
            </label>
          </div>
        </div>
      </div>

      {
        //text format
      }
      <div className="w-[40%] flex flex-col justify-center ">
        {Formate === "text" && istext === false && (
          <div className="w-full mb-4  rounded-lg ">
            <div className="px-4 py-2 rounded-lg">
              <textarea
                rows="4"
                value={ques}
                className="w-full px-0 text-sm rounded-md  focus:ring-1 "
                placeholder="Write a Question..."
                onChange={handleTextArea}
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-end px-3 py-1 border-t ">
              <button
                type="submit"
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-center font-serif bg-slate-50 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-zinc-900 hover:text-white"
                onClick={() => {
                  setistext(true);
                }}
              >
                Add Question
              </button>
            </div>
          </div>
        )}
        {/* text question */}

        {Formate === "text" && istext && (
          <div className=" w-full flex flex-col justify-center items-center ">
            <div className="text-wrap flex  justify-center gap-7 w-full ">
              <div className="w-[50%]">
                {" "}
                <p className="font-serif font-medium "> {ques}</p>
              </div>

              <ul className=" flex flex-col w-1/2 gap-1">
                {Addoption.map((item, index) => (
                  <li
                    key={index}
                    className={`inline-flex justify-between items-center w-fit  py-2 pl-3 pr-1 text-sm font-medium  border gap-3 border-gray-200 text-gray-800 -mt-px rounded-md first:mt-0 cursor-pointer hover:bg-gray-800 hover:text-white  ${
                      Answer === index
                        ? "bg-green-500 text-white hover:bg-green-400"
                        : "bg-white"
                    }`}
                    onClick={() => handleanswer(item)}
                  >
                    {item}
                    <MdDelete
                      onClick={() => {
                        handledelete(item);
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className=" flex justify-centre gap-2 px-2 py-1 border-t  ">
              <button
                type="submit"
                className="inline-flex items-center py-2 px-4 text-xs font-medium text-center font-serif bg-slate-50 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-zinc-900 hover:text-white mt-4"
                onClick={() => {
                  setistext(false);
                }}
              >
                Edit Que
              </button>
              {Addoption.length === 4 &&
                Answer !== null &&
                ques !== undefined && (
                  <button
                    type="submit"
                    className="inline-flex items-center py-2 px-4 text-xs font-medium text-center font-serif bg-slate-50 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-zinc-900 hover:text-white mt-4"
                    onClick={handelfinalsubmit}
                  >
                    Submit
                  </button>
                )}
            </div>

            {/* option ke liye */}

            {Formate === "text" && istext && (
              <div className="flex flex-col w-full justify-center items-center py-2 ">
                <section className=" place-items-center p-5 ">
                  <div className="flex gap-4">
                    <input
                      className="h-8 min-w-[12rem] rounded-lg border-gray-800 indent-4  focus:outline-none focus:ring focus:ring-gray-400"
                      type="text"
                      value={onChange}
                      required
                      onChange={hanndlechange}
                      placeholder="options"
                    />

                    <button
                      className="h-8 min-w-[6rem] text-sm px-2 rounded-md border-1 border-emerald-60 bg-white hover:bg-gray-800 hover:text-white focus:ring focus:ring-gray-300"
                      onClick={() => {
                        const newvalue = onChange;
                        setAddoption([...Addoption, newvalue]);
                        setonChange("");
                      }}
                    >
                      Add Options
                    </button>
                  </div>
                </section>
                <div className=" flex w-fit justify-center items-center gap-2">
                  <button
                    className={`h-6 min-w-[6rem] text-sm px-1 pb-1 rounded-md border-1 border-emerald-60    hover:bg-green-500 hover:text-white focus:ring focus:ring-gray-300 ${
                      type === 1 ? "bg-green-500 text-white " : "bg-white"
                    }`}
                    onClick={() => {
                      handletype(1);
                    }}
                  >
                    Easy
                  </button>
                  <button
                    className={`h-6 min-w-[6rem] text-sm px-1 pb-1 rounded-md border-1 border-emerald-60 bg-white   hover:bg-yellow-400 hover:text-white focus:ring focus:ring-gray-300 ${
                      type === 2 ? "bg-yellow-400 text-white " : ""
                    }`}
                    onClick={() => {
                      handletype(2);
                    }}
                  >
                    Medium
                  </button>
                  <button
                    className={`h-6 min-w-[6rem] text-sm px-1 pb-1 rounded-md border-1 border-emerald-60 bg-white  focus:bg-red-500  hover:bg-red-500 hover:text-white focus:ring focus:ring-gray-300 ${
                      type === 3 ? "bg-red-500 text-white " : ""
                    }`}
                    onClick={() => {
                      handletype(3);
                    }}
                  >
                    Hard
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* image format */}

      {Formate === "Image" && (
        <div className="flex flex-col justify-center items-center w-1/2">
          <form className="w-1/2 mx-auto">
            <div className="mb-5">
              <label
                htmlFor="text"
                className="block mb-2 text-sm  text-gray-900 font-serif font-semibold "
              >
                Link
              </label>
              <input
                type="text"
                id="email"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter the link of image"
                required
                value={Qlink}
                onChange={handlelink}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-semibold text-gray-900 font-serif "
              >
                Answer
              </label>
              <input
                type="text"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                placeholder="correct option no."
                required
                value={Answer}
                onChange={handleanswer}
              />
            </div>

            <button
              className="font-serif bg-slate-100  hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 mb-4 text-center"
              onClick={handelImagesubmit}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreateQuestion;
