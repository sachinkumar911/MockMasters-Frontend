import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const OnlineExam = () => {
  const [AllData, setAllData] = useState();
  const [currentDisplay, setcurrentDisplay] = useState();
  const [currentPanel, setcurrentPanel] = useState();
  const [currsubject, setcurrsubject] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currquesindex, setcurrquesindex] = useState(0);

  const [Answers, setAnswer] = useState({});

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
          setcurrentPanel(response.data.data[0]?.questions[0]?.questionIds);
          setcurrentDisplay(
            response.data.data[0]?.questions[0]?.questionIds[0]
          );
          // console.log(response.data.data[0]);
        }
      } catch (error) {
        // console.error(error.response.data.message);
        if (sessionStorage.getItem("All-Set")) {
          setAllData(JSON.parse(sessionStorage.getItem("All-Set")));
          setcurrentPanel(
            JSON.parse(sessionStorage.getItem("All-Set"))?.questions[0]
              ?.questionIds
          );
          setcurrentDisplay(
            JSON.parse(sessionStorage.getItem("All-Set"))?.questions[0]
              ?.questionIds[0]
          );
        }
      }
    })();
  }, []);

  const changesubjectpanel = (event, newValue) => {
    setcurrentPanel(AllData?.questions[newValue].questionIds);
    setcurrsubject(newValue);
    setcurrentDisplay(AllData?.questions[newValue].questionIds[0]);
    setcurrquesindex(0);
  };

  const changeDisplay = (key) => {
    // console.log(currentPanel[key]);
    setcurrentDisplay(currentPanel[key]);
    setcurrquesindex(key);
  };

  const setanswer = () => {
    var op;
    for (let i = 0; i < currentDisplay.options.length; i++) {
      if (document.getElementById(`${currentDisplay?._id}_${i}`).checked) {
        op = currentDisplay.options[i];
        break;
      }
    }
    if (op) {
      let x = Answers[AllData?.questions[currsubject].subjectname];
      setAnswer({
        ...Answers,
        [AllData?.questions[currsubject].subjectname]: {
          ...Answers[AllData?.questions[currsubject].subjectname],
          [currentDisplay._id]: op,
        },
      });
    }
    setSelectedOption(null);
    if (currquesindex < currentPanel.length - 1) {
      let tmp = currquesindex;
      setcurrentDisplay(currentPanel[tmp + 1]);
      setcurrquesindex(currquesindex + 1);
    }
  };

  const prevques = () => {
    if (currquesindex > 0) {
      let tmp = currquesindex;
      setcurrentDisplay(currentPanel[tmp - 1]);
      setcurrquesindex(currquesindex - 1);
    }
  };
  const clearresponse = () => {
    setSelectedOption(null);
    setAnswer({
      ...Answers,
      [AllData?.questions[currsubject].subjectname]: {
        ...Answers[AllData?.questions[currsubject].subjectname],
        [currentDisplay._id]: undefined,
      },
    });
  };

  return (
    <>
      <section>
        <div className=" h-fit flex justify-between items-center mx-[6rem] ">
          <div className="self-center md:text-2xl  font-semibold">
            MockMasters.
          </div>
          <div className=" py-4 flex items-center justify-center md:text-xl font-semibold">
            {AllData?.qpname}
          </div>
          <div className=" py-[0.5px] pr-1 rounded-full self-center text-xl font-semibold h-8  w-8 bg-slate-300 px-3">
            S
          </div>
        </div>

        <div className="max-h-[8vh] bg-gray-200 flex justify-between items-center px-24">
          <Box
            className="lg:w-fit" /*-[65vw] to  making it fit for timer component temporary*/
            sx={{
              bgcolor: "#fafafa",
            }}
          >
            <Tabs
              value={currsubject}
              onChange={changesubjectpanel}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              {AllData?.questions?.map((item, key) => (
                <Tab
                  key={key}
                  sx={{ fontSize: 12, fontWeight: "bold" }}
                  label={item.subjectname}
                />
              ))}
            </Tabs>
          </Box>

          <div className="self-center md:text-xl font-semibold">
            Time <span className=" self-center">00:00</span>
          </div>
        </div>

        <div className="flex h-[77vh] justify-center items-center mx-24">
          <div className=" h-full flex flex-col  lg:w-[75vw] w-full ">
            <div className=" h-fit flex justify-between items-center  border-b-2 border-slate-300 mb-1 ">
              <h2 className="py-3 px-2 font-semibold">Question 8</h2>
              <h2 className="py-3 px-2 font-semibold">
                {" "}
                Single correct option,
                <span className="text-green-400 ">+12.0</span>{" "}
                <span className="text-red-500 ">-3.0</span>
              </h2>
            </div>

            <div className="px-2 lg:text-lg h-[60%]  ">
              {currentDisplay?.txtquestion}
            </div>
            {currentDisplay?.options?.map((item, key) => (
              <div key={key} className="px-2 lg:text-lg">
                <input
                  type="radio"
                  name={currentDisplay?._id}
                  id={`${currentDisplay?._id}_${key}`}
                  className=" h-6 w-6 bg-slate-200"
                  checked={
                    selectedOption === `${currentDisplay?._id}_${key}` ||
                    (Answers[AllData?.questions[currsubject]?.subjectname] &&
                      Answers[AllData?.questions[currsubject]?.subjectname][
                        currentDisplay?._id
                      ] === `${item}`)
                  }
                  onChange={() =>
                    setSelectedOption(`${currentDisplay?._id}_${key}`)
                  }
                />
                <label htmlFor={`${currentDisplay?._id}_${key}`}>{item}</label>
              </div>
            ))}
            <div className=" w-full   ">
              <div
                className={`flex flex-col space-x-4 px-4 py-2 justify-between  `}
              >
                <div className=" ms-2  flex bg-slate-50  py-3 px-2 justify-between">
                  <button
                    className={`px-4 py-2 rounded transition-colors duration-300 hover:bg-blue-700 bg-green-500`}
                    id="review"
                  >
                    Mark for Review &amp; Next
                  </button>
                  <button
                    className={`px-4 py-2 rounded transition-colors duration-300 hover:bg-blue-700 bg-indigo-700`}
                    id="clear"
                    onClick={clearresponse}
                  >
                    Clear Response
                  </button>
                </div>
                <div className="flex justify-between items-center mt-4 bg-slate-50 py-3 px-2 ">
                  <div className="flex gap-2 justify-center items-center">
                    <button
                      className={`px-4 py-2 rounded transition-colors duration-300 hover:bg-blue-700 bg-white text-black font-semibold`}
                      id="save"
                      onClick={prevques}
                    >
                      Previous
                    </button>
                    <button
                      className={`px-4 py-2 rounded transition-colors duration-300 hover:bg-blue-700 bg-sky-800`}
                      id="save"
                      type="button"
                      onClick={setanswer}
                    >
                      Save &amp; Next
                    </button>
                  </div>
                  <button
                    className={`px-4
              py-2
              rounded
              transition-colors
              duration-300
              hover:bg-blue-700 bg-cyan-400`}
                    id="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full border-x border-y border-black bg-white w-[25vw]  hidden lg:flex  lg:flex-col ">
            <div className="flex flex-wrap w-full justify-between items-center lg:gap-3   my-2  px-5">
              <div className=" flex  gap-2 py-2 text-sm  ">
                <div className=" h-6 w-6 bg-green-400"></div>
                Answered
              </div>

              <div className=" flex  gap-2 py-2 text-sm  pr-4 ">
                <div className=" h-6 w-6 bg-orange-400  "></div>
                Not Answered
              </div>

              <div className=" flex  gap-2 py-2 text-sm  ">
                <div className=" h-6 w-6 bg-gray-300"></div>
                Not visited
              </div>
              <div className=" flex  gap-2 py-2 text-sm ">
                <div className=" h-6 w-6 bg-pink-500"></div>
                Mark for reviwed
              </div>
            </div>

            <div className="flex flex-wrap">
              {currentPanel?.map((item, key) => (
                <div
                  key={key}
                  onClick={() => {
                    // console.log(item);
                    changeDisplay(key);
                  }}
                  className={`w-6 h-6 bg-gray-300 m-2 flex justify-center items-center rounded-sm ${
                    currquesindex === key ? "border-4 border-blue-500" : ""
                  } ${
                    Answers[AllData?.questions[currsubject]?.subjectname] &&
                    Answers[AllData?.questions[currsubject]?.subjectname][
                      item._id
                    ]
                      ? "bg-green-500"
                      : ""
                  }`}
                >
                  {key + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineExam;
