import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OnlineExam = () => {
  const [AllData, setAllData] = useState();
  const [currentDisplay, setcurrentDisplay] = useState();
  const [currentPanel, setcurrentPanel] = useState();

  const Navigate = useNavigate();
  useEffect(() => {
    if (
      !sessionStorage.getItem("Question_id") &&
      !sessionStorage.getItem("All-Set")
    ) {
      Navigate("/dashboard/test-series");
    }
    (async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/examset/get-all-questions",
          {
            Q_id: sessionStorage.getItem("Question_id"),
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        if (response.data.success) {
          sessionStorage.removeItem("Question_id");
          sessionStorage.setItem(
            "All-Set",
            JSON.stringify(response.data.data[0])
          );
          setAllData(response.data.data[0]);
          // console.log(response.data.data[0]);
        }
      } catch (error) {
        console.error(error.response.data.message);
        if (sessionStorage.getItem("All-Set")) {
          setAllData(JSON.parse(sessionStorage.getItem("All-Set")));
        }
      }
    })();
  }, []);

  const changesubjectpanel = (e) => {
    // console.log(e.target.value);
    for (let i = 0; i < AllData?.questions.length; i++) {
      if (e.target.value === AllData?.questions[i].subjectname) {
        setcurrentPanel(AllData?.questions[i].questionIds);
        break;
      }
    }
  };
  const changeDisplay = (key) => {
    // console.log(currentPanel[key]);
    setcurrentDisplay(currentPanel[key]);
  };

  return (
    <>
      <section>
        <div className="h-[8vh] py-4 flex items-center justify-center">
          {AllData?.qpname}
        </div>
        {/* <div className="h-fit py-4 bg-red-200 flex items-center justify-center">
          <select
            onChange={(e) => {
              changesubjectpanel(e);
            }}
          >
            <option>choose subject</option>
            {AllData?.questions?.map((item, key) => (
              <option key={key} value={item.subjectname}>
                {item.subjectname}
              </option>
            ))}
          </select>
        </div> */}
        <div className=" bg-gray-100  h-fit ">
          <div className="sm:hidden flex justify-between ">
            <label htmlFor="Tab" className="sr-only">
              Tab
            </label>

            <select id="Tab" className="w-1/2 rounded-md border-gray-200">
              <option>Mathematics</option>
              <option>Logical Reasoning</option>
              <option>Computer</option>
              <option>English</option>
            </select>
          </div>

          <div className="hidden sm:block">
            <div className=" ">
              <nav className="flex  justify-between items-center mx-20">
                <div className="flex -mb-px  gap-3 ">
                  <button
                    href="#"
                    className="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    Mathematics
                  </button>

                  <button
                    href="#"
                    className="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    Logical Reasoning
                  </button>

                  <button
                    href="#"
                    className="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    Computer
                  </button>

                  <button
                    href="#"
                    className="shrink-0 rounded-t-lg border  border-transparent text-sm font-medium text-sky-600"
                  >
                    English
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mx-24">
          <div className="h-[77vh] bg-green-200 lg:w-[75vw] w-full ">
            <div>{currentDisplay?.txtquestion}</div>
            {currentDisplay?.options?.map((item, key) => (
              <div key={key}>
                <input
                  type="radio"
                  name={currentDisplay?._id}
                  id={currentDisplay?._id + key}
                />
                <label htmlFor={currentDisplay?._id + key}>{item}</label>
              </div>
            ))}
          </div>

          <div className="h-[77vh]  border-x border-y border-black bg-white w-[25vw]  hidden lg:flex  lg:flex-col ">
            <div className=" flex flex-col gap-2 w-full justify-center  mt-2  ml-3 ">
              <div className=" flex  gap-2 ">
                <div className=" h-6 w-6 bg-green-400"></div>
                Answered
              </div>

              <div className=" flex  gap-2 ">
                <div className=" h-6 w-6 bg-orange-400 "></div>
                Not Answered
              </div>

              <div className=" flex  gap-2 ">
                <div className=" h-6 w-6 bg-gray-300"></div>
                Not visited
              </div>
            </div>

            <div className="flex flex-wrap">
              {currentPanel?.map((item, key) => (
                <div
                  key={key}
                  onClick={() => {
                    changeDisplay(key);
                  }}
                  className="w-5 h-5 bg-blue-900 m-2 flex justify-center items-center rounded-sm"
                >
                  {key + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-fit py-4 bg-gray-200 flex items-center justify-evenly">
          <button
            className={`px-4 py-2 rounded transition-colors duration-300
                hover:bg-blue-700 bg-white text-black font-semibold`}
            id="save"
          >
            Previous
          </button>
          <button
            className={`px-4 py-2 rounded transition-colors duration-300
              hover:bg-blue-700 bg-gray-800 text-white font-semibold`}
            id="review"
          >
            Mark for Review &amp; Next
          </button>
          <button
            className={`px-4
                py-2
                rounded
                transition-colors
                duration-300
                hover:bg-blue-700 bg-white font-semibold`}
            id="save"
          >
            Save &amp; Next
          </button>
          <button
            className={`px-4
              py-2
              rounded
              transition-colors
              duration-300
              hover:bg-blue-700   bg-green-500 font-semibold`}
            id="submit"
          >
            Submit
          </button>
        </div>
      </section>
    </>
  );
};

export default OnlineExam;
