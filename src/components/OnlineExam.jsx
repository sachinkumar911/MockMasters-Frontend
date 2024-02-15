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
        <div className="bg-gray-200 h-[10vh] flex items-center justify-center">
          {AllData?.qpname}
        </div>
        <div className="h-[10vh] bg-red-200 flex items-center justify-center">
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
        </div>
        <div className="flex">
          <div className="h-[70vh] bg-green-200 w-[75vw]">
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
          <div className="h-[70vh] bg-yellow-200 w-[25vw]">
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
        <div className="h-[10vh] bg-blue-400 flex items-center justify-evenly">
          <button className="border-2 border-white rounded-md py-1 px-3 bg-blue-600">
            prev
          </button>
          <button className="border-2 border-white rounded-md py-1 px-3 bg-blue-600">
            mark for review
          </button>
          <button className="border-2 border-white rounded-md py-1 px-3 bg-blue-600">
            next
          </button>
          <button className="border-2 border-white rounded-md py-1 px-3 bg-blue-600">
            Submit
          </button>
        </div>
      </section>
    </>
  );
};

export default OnlineExam;
