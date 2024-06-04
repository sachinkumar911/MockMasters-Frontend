/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
/* eslint-disable no-unsafe-optional-chaining */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import io from "socket.io-client";
import Modal from "@mui/material/Modal";
import Countdown from "react-countdown";
import LoadingSpinner from "./LoadingSpinner";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import avatar1 from "../assets/avatar1.webp";
import avatar2 from "../assets/avatar2.webp";
import avatar3 from "../assets/avatar3.webp";
import avatar4 from "../assets/avatar4.webp";
import avatar5 from "../assets/avatar5.webp";
import unattempt_ico from "../assets/unattempt.svg";
import redalarm_ico from "../assets/red-alarm.svg";
import checked_ico from "../assets/checked.svg";
import marked_ico from "../assets/marked.svg";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

var socket = null;

//Modal Style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
};

const OnlineExam = () => {
  const [oopen, setOopen] = React.useState(false);

  const openDrawer = () => setOopen(true);
  const closeDrawer = () => setOopen(false);

  let avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];
  const { userdetail } = useContext(UserContext);

  const [attemptCount, setattemptCount] = useState(0);
  const [markedCount, setmarkedCount] = useState(0);
  const [TestExpiry, setTestExpiry] = useState(0);

  //Fullscreen
  const [isFullscreen, setIsFullscreen] = useState(false);

  //FULL_SCREEN
  const enterFullscreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
    setIsFullscreen(true);
  };

  //Modal State
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setTimeLeft(TestExpiry - Date.now());
    setOpen(true);

    //socket-updating TimeLeft on DB
    // socket.emit("updateTimeLeft", sessionStorage.getItem("startTest_id"));
    // socket.off("updateTimeReply").on("updateTimeReply", (newTL) => {
    //   setTimeLeft(newTL);
    // });
    let c = 0;
    for (const key in Answers) {
      for (let k in Answers[key]) {
        if (Answers[key][k] !== undefined && Answers[key][k] !== "") {
          c++;
        }
      }
    }
    setattemptCount(c);

    let m = 0;
    for (const key in MarkReview) {
      for (let k in MarkReview[key]) {
        if (MarkReview[key][k] !== undefined) {
          m++;
        }
      }
    }
    setmarkedCount(m);
  };
  const handleClose = () => {
    setTimeLeft(TestExpiry - Date.now());
    setOpen(false);

    //socket-updating TimeLeft on DB
    // socket.emit("updateTimeLeft", sessionStorage.getItem("startTest_id"));
    // socket.off("updateTimeReply").on("updateTimeReply", (newTL) => {
    //   setTimeLeft(newTL);
    // });
  };

  const [AllData, setAllData] = useState();
  const [currentDisplay, setcurrentDisplay] = useState();
  const [currentPanel, setcurrentPanel] = useState();
  const [currsubject, setcurrsubject] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currquesindex, setcurrquesindex] = useState(0);
  const [MarkReview, setMarkReview] = useState(
    JSON.parse(localStorage.getItem("MarkforReviews"))
      ? JSON.parse(localStorage.getItem("MarkforReviews"))
      : {}
  );
  const [Answers, setAnswer] = useState({});
  const Navigate = useNavigate();

  const [TimeLeft, setTimeLeft] = useState(10000);

  useEffect(() => {
    sessionStorage.removeItem("ExamResult");

    if (
      (!sessionStorage.getItem("Question_id") &&
        !sessionStorage.getItem("All-Set")) ||
      !sessionStorage.getItem("startTest_id")
    ) {
      Navigate("/dashboard/test-series");
    }

    // Add event listener for fullscreen change
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    (async () => {
      try {
        const response = await axios.post(
          `${
            import.meta.env.VITE_APP_BACKEND_URL
          }/api/v1/examset/get-all-questions`,
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
          // sessionStorage.removeItem("Question_id");
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

          // Retrieving User Answers
          const resp = await axios.post(
            `${
              import.meta.env.VITE_APP_BACKEND_URL
            }/api/v1/test/retrieve-user-answers`,
            {
              startTest_id: sessionStorage.getItem("startTest_id"),
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );

          if (resp.data.success) {
            setAnswer(resp.data.data);
          }
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

          // Retrieving User Answers
          const resp = await axios.post(
            `${
              import.meta.env.VITE_APP_BACKEND_URL
            }/api/v1/test/retrieve-user-answers`,
            {
              startTest_id: sessionStorage.getItem("startTest_id"),
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );

          if (resp.data.success) {
            setAnswer(resp.data.data);
          }
        } else {
          Navigate("/dashboard/test-series");
        }
      }
      if (!socket) {
        socket = io(import.meta.env.VITE_APP_ENDPOINT);
        if (socket && sessionStorage.getItem("startTest_id")) {
          socket.emit("sendID", sessionStorage.getItem("startTest_id"));
        }
      }
      socket.off("StartTimeLeft").on("StartTimeLeft", (TL) => {
        setTimeLeft(Math.floor(TL.TimeLeft / 1000) * 1000);
        setTestExpiry(TL.ExpireTime);
      });
      setLoading(false);
    })();

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );

      if (
        location.pathname === "/test/ongoing" ||
        location.pathname === "/test/ongoing/"
      ) {
        console.log(location.pathname);
      } else {
        socket.disconnect();
        window.location.reload();
        console.log("Go back");
      }
    };
  }, []);

  const changesubjectpanel = (event, newValue) => {
    setcurrentPanel(AllData?.questions[newValue].questionIds);
    setcurrsubject(newValue);
    setcurrentDisplay(AllData?.questions[newValue].questionIds[0]);
    setcurrquesindex(0);
    closeDrawer();

    //socket-updating TimeLeft on DB
    socket.emit("updateTimeLeft", sessionStorage.getItem("startTest_id"));
    socket.off("updateTimeReply").on("updateTimeReply", (newTL) => {
      setTimeLeft(newTL.TT);
      setTestExpiry(newTL.exp);
    });
  };

  const changeDisplay = (key) => {
    // console.log(currentDisplay?.txtquestion);
    setcurrentDisplay(currentPanel[key]);
    setcurrquesindex(key);
    closeDrawer();

    setTimeLeft(TestExpiry - Date.now());
  };

  const setanswer = () => {
    setTimeLeft(TestExpiry - Date.now());
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

      if (
        JSON.parse(localStorage.getItem("MarkforReviews")) &&
        JSON.parse(localStorage.getItem("MarkforReviews"))[
          AllData?.questions[currsubject].subjectname
        ]
      ) {
        let obj = JSON.parse(localStorage.getItem("MarkforReviews"));
        let j = obj[AllData?.questions[currsubject].subjectname];
        j[currentDisplay?._id] = undefined;
        obj[AllData?.questions[currsubject].subjectname] = j;
        localStorage.setItem("MarkforReviews", JSON.stringify(obj));
        setMarkReview(obj);
      }

      //socket-sending data to DB
      socket.emit("updateAnswer", {
        startTest_id: `${sessionStorage.getItem("startTest_id")}`,
        subject: AllData?.questions[currsubject].subjectname,
        quesId: currentDisplay._id,
        answer: op,
      });

      socket.off("updateReply").on("updateReply", (reply) => {
        console.log(reply);
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
    setTimeLeft(TestExpiry - Date.now());
    if (currquesindex > 0) {
      let tmp = currquesindex;
      setcurrentDisplay(currentPanel[tmp - 1]);
      setcurrquesindex(currquesindex - 1);
    }
  };

  const clearresponse = () => {
    setTimeLeft(TestExpiry - Date.now());
    setSelectedOption(null);
    setAnswer({
      ...Answers,
      [AllData?.questions[currsubject].subjectname]: {
        ...Answers[AllData?.questions[currsubject].subjectname],
        [currentDisplay._id]: undefined,
      },
    });

    //socket-sending data to DB
    socket.emit("updateAnswer", {
      startTest_id: `${sessionStorage.getItem("startTest_id")}`,
      subject: AllData?.questions[currsubject].subjectname,
      quesId: currentDisplay._id,
      answer: "",
    });

    socket.off("updateReply").on("updateReply", (reply) => {
      console.log(reply);
    });

    if (
      JSON.parse(localStorage.getItem("MarkforReviews")) &&
      JSON.parse(localStorage.getItem("MarkforReviews"))[
        AllData?.questions[currsubject].subjectname
      ]
    ) {
      let obj = JSON.parse(localStorage.getItem("MarkforReviews"));
      let j = obj[AllData?.questions[currsubject].subjectname];
      j[currentDisplay?._id] = undefined;
      obj[AllData?.questions[currsubject].subjectname] = j;
      localStorage.setItem("MarkforReviews", JSON.stringify(obj));
      setMarkReview(obj);
    }
  };

  const markforreview = () => {
    setTimeLeft(TestExpiry - Date.now());
    if (
      Answers[AllData?.questions[currsubject].subjectname] &&
      Answers[AllData?.questions[currsubject].subjectname][currentDisplay?._id]
    ) {
      setAnswer({
        ...Answers,
        [AllData?.questions[currsubject].subjectname]: {
          ...Answers[AllData?.questions[currsubject].subjectname],
          [currentDisplay._id]: undefined,
        },
      });
      //socket-sending data to DB
      socket.emit("updateAnswer", {
        startTest_id: `${sessionStorage.getItem("startTest_id")}`,
        subject: AllData?.questions[currsubject].subjectname,
        quesId: currentDisplay._id,
        answer: "",
      });

      socket.off("updateReply").on("updateReply", (reply) => {
        console.log(reply);
      });
    }

    if (!localStorage.getItem("MarkforReviews")) {
      var op = "";
      for (let i = 0; i < currentDisplay.options.length; i++) {
        if (document.getElementById(`${currentDisplay?._id}_${i}`).checked) {
          op = currentDisplay.options[i];
          break;
        }
      }
      let j = {};
      j[currentDisplay?._id] = op;
      let obj = {};
      obj[AllData?.questions[currsubject].subjectname] = j;
      localStorage.setItem("MarkforReviews", JSON.stringify(obj));
      setMarkReview(obj);
    } else if (
      localStorage.getItem("MarkforReviews") &&
      !JSON.parse(localStorage.getItem("MarkforReviews"))[
        AllData?.questions[currsubject].subjectname
      ]
    ) {
      var op = "";
      for (let i = 0; i < currentDisplay.options.length; i++) {
        if (document.getElementById(`${currentDisplay?._id}_${i}`).checked) {
          op = currentDisplay.options[i];
          break;
        }
      }
      let j = {};
      j[currentDisplay?._id] = op;
      let obj = JSON.parse(localStorage.getItem("MarkforReviews"));
      obj[AllData?.questions[currsubject].subjectname] = j;
      localStorage.setItem("MarkforReviews", JSON.stringify(obj));
      setMarkReview(obj);
    } else if (
      localStorage.getItem("MarkforReviews") &&
      JSON.parse(localStorage.getItem("MarkforReviews"))[
        AllData?.questions[currsubject].subjectname
      ]
    ) {
      var op = "";
      for (let i = 0; i < currentDisplay.options.length; i++) {
        if (document.getElementById(`${currentDisplay?._id}_${i}`).checked) {
          op = currentDisplay.options[i];
          break;
        }
      }
      let obj = JSON.parse(localStorage.getItem("MarkforReviews"));
      let j = obj[AllData?.questions[currsubject].subjectname];
      j[currentDisplay?._id] = op;
      obj[AllData?.questions[currsubject].subjectname] = j;
      localStorage.setItem("MarkforReviews", JSON.stringify(obj));
      setMarkReview(obj);
    }
    setSelectedOption(null);
    if (currquesindex < currentPanel.length - 1) {
      let tmp = currquesindex;
      setcurrentDisplay(currentPanel[tmp + 1]);
      setcurrquesindex(currquesindex + 1);
    }
  };

  const Completionist = () => <span className="text-red-500">Times up!</span>;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      if (socket) {
        socket.emit("updateTimeLeft", sessionStorage.getItem("startTest_id"));
        socket.off("updateTimeReply").on("updateTimeReply", (newTL) => {
          setTimeLeft(newTL.TT);
          setTestExpiry(newTL.exp);
        });
      }
      if (TestExpiry - Date.now() <= 0) {
        sendFinalResponse();
      }

      return <Completionist />;
    } else {
      return (
        <span>
          {hours < 10 ? `0${hours}` : hours}:
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
      );
    }
  };

  const [loading, setLoading] = useState(true);
  const [disablebtn, setdisablebtn] = useState(false);

  const sendFinalResponse = async () => {
    setdisablebtn(true);
    setLoading(true);
    await socket.disconnect();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/evaluate-exam`,
        { startTest_id: sessionStorage.getItem("startTest_id") },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      sessionStorage.setItem(
        "ExamResult",
        JSON.stringify(response?.data?.data)
      );
      sessionStorage.removeItem("Question_id");
      sessionStorage.removeItem("All-Set");
      localStorage.removeItem("MarkforReviews");
      sessionStorage.removeItem("startTest_id");
      if (sessionStorage.getItem("ExamResult")) {
        setLoading(false);
        Navigate("/test/finalresult");
      }
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const handleFullscreenChange = () => {
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    ) {
      //socket-updating TimeLeft on DB
      if (socket) {
        socket.emit("updateTimeLeft", sessionStorage.getItem("startTest_id"));
        socket.off("updateTimeReply").on("updateTimeReply", (newTL) => {
          setTimeLeft(newTL.TT);
          setTestExpiry(newTL.exp);
        });
      }

      console.log("Entered fullscreen mode");
    } else {
      //socket-updating TimeLeft on DB
      if (socket) {
        socket.emit("updateTimeLeft", sessionStorage.getItem("startTest_id"));
        socket.off("updateTimeReply").on("updateTimeReply", (newTL) => {
          setTimeLeft(newTL.TT);
          setTestExpiry(newTL.exp);
        });
      }

      setIsFullscreen(false);
      console.log("Exited fullscreen mode");
    }
  };

  return (
    <>
      <section>
        {/* header */}
        <div className="h-[7vh] flex justify-between items-center md:mx-[6rem] mx-1">
          <div
            onClick={enterFullscreen}
            className="text-center md:text-2xl select-none  font-semibold w-[4rem]"
          >
            MockMasters.
          </div>
          <div className="py-4 flex items-center justify-center select-none md:text-xl font-semibold">
            {AllData?.qpname}
          </div>
          <div className="select-none">
            <img
              src={avatars[userdetail?.avatar - 1]}
              alt="Avatar"
              className={`cursor-pointer  rounded-full shadow-lg  border-4 border-white transition-transform transform-gpu md:w-11 md:h-11 h-10 w-fit 
                          focus:outline-none`}
            />
          </div>
        </div>

        <div className="lg:hidden">
          <button
            onClick={openDrawer}
            className="bg-gray-400 absolute right-0 top-[50%] z-10 p-1 rounded-xl"
          >
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </button>
          <Drawer
            placement="right"
            open={oopen}
            onClose={closeDrawer}
            className="p-4 z-20"
          >
            <Box
              className=""
              sx={{
                bgcolor: "#fafafa",
              }}
            >
              <Tabs
                orientation="vertical"
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
            <div className="border-2 border-gray-400 rounded-md bg-white h-full lg:flex  lg:flex-col">
              <div className="flex flex-wrap w-full justify-between items-center lg:gap-3  my-2  px-5">
                <div className=" flex  gap-2 py-2 text-sm">
                  <div className=" h-7 w-7 bg-green-500"></div>
                  Answered
                </div>
                <div className=" flex  gap-2 py-2 text-sm">
                  <div className="  h-7 w-7 bg-violet-500"></div>
                  Marked for Review
                </div>

                <div className=" flex  gap-2 py-2 text-sm">
                  <div className="  h-7 w-7 bg-gray-300"></div>
                  Not Visited
                </div>
                {/* <div className=" flex  gap-2 py-2 text-sm  pr-4 mr-3 ">
                      <div className=" h-5 w-5 bg-red-500  "></div>
                      Not Answered
                    </div> */}
              </div>
              <hr />

              <div className="flex flex-wrap cursor-pointer">
                {currentPanel?.map((item, key) => (
                  <div
                    key={key}
                    onClick={() => {
                      // console.log(item);
                      changeDisplay(key);
                    }}
                    className={`w-8 h-8 bg-gray-300 m-2 flex justify-center items-center rounded-sm ${
                      currquesindex === key ? "border border-black" : ""
                    } ${
                      Answers[AllData?.questions[currsubject]?.subjectname] &&
                      Answers[AllData?.questions[currsubject]?.subjectname][
                        item._id
                      ]
                        ? "bg-green-500 text-white"
                        : ""
                    } ${
                      MarkReview[
                        AllData?.questions[currsubject]?.subjectname
                      ] &&
                      (MarkReview[AllData?.questions[currsubject]?.subjectname][
                        item?._id
                      ] ||
                        MarkReview[
                          AllData?.questions[currsubject]?.subjectname
                        ][item?._id] === "")
                        ? "bg-violet-500 text-white"
                        : ""
                    }`}
                  >
                    {key + 1}
                  </div>
                ))}
              </div>
            </div>
          </Drawer>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="relative flex flex-col overflow-hidden">
            {/* fullscreen mod and */}
            <div
              className={`absolute top-0 left-0 backdrop-blur w-full h-full z-10 ${
                isFullscreen ? "hidden" : ""
              } flex justify-center items-center`}
            >
              <button
                className={`px-4 py-2 rounded transition-colors duration-300 text-white bg-cyan-500 hover:bg-cyan-600 font-bold`}
                onClick={() => {
                  enterFullscreen();
                  setIsFullscreen(!isFullscreen);
                }}
              >
                GO BACK TO TEST
              </button>
            </div>

            {/* subject section */}

            <div className="h-[7vh] bg-white flex justify-between items-center max-2xl:px-24  max-xl:px-[80px]  max-md:px-1 lg:px-24 overflow-hidden border-2 border-gray-300">
              <div className="bg-white max-xl:w-[75%] max-lg:w-[63%] max-sm:w-[50%] lg:flex hidden h-fit">
                <Box
                  className=""
                  sx={{
                    bgcolor: "#fff",
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
                        sx={{ fontSize: 11, fontWeight: "bold" }}
                        label={item.subjectname}
                      />
                    ))}
                  </Tabs>
                </Box>
              </div>

              <div className="self-center md:text-xl text-md font-semibold py-2">
                Time Left :
                <span id="ExamTImer" className=" self-center px-2">
                  <Countdown date={Date.now() + TimeLeft} renderer={renderer} />
                </span>
              </div>
            </div>
            {/* question and side showbar */}

            <div className="flex h-[76vh] justify-center lg:mx-24 md:mx-14 mx-1 my-0 ">
              {/* question section and option */}
              <div className=" h-full flex flex-col lg:w-[75vw] w-full">
                {/* question no and positve negative marking section */}
                <div className="  flex justify-between items-center  border-b-2 border-slate-300 mb-1 ">
                  <h2 className="py-3 text-center px-2 font-semibold">
                    Question {currquesindex + 1}
                  </h2>
                  <h2 className="py-3 text-center text-wrap px-2 font-semibold">
                    {" "}
                    <span className=" max-sm:hidden">
                      {" "}
                      Single correct option,
                    </span>
                    <span className="text-[#08bd80] ">
                      +
                      {AllData?.questions[currsubject]?.posM
                        ? (AllData?.questions[currsubject]?.posM).toFixed(1)
                        : ""}
                    </span>{" "}
                    <span className="text-red-500 ">
                      -
                      {AllData?.questions[currsubject]?.negM
                        ? (AllData?.questions[currsubject]?.negM).toFixed(1)
                        : ""}
                    </span>
                  </h2>
                </div>
                {/* question  area */}
                <div className="flex flex-col justify-between h-full overflow-hidden">
                  <pre className="text-lg text-wrap max-h-[55%]  font-normal overflow-y-scroll">
                    {currentDisplay?.txtquestion ? (
                      currentDisplay?.txtquestion
                    ) : (
                      <img src={currentDisplay?.imgquestion} />
                    )}
                  </pre>
                  {/* option area */}

                  <div className="flex- flex-col justify-center  max-h-[35%] overflow-y-scroll items-center">
                    {currentDisplay?.options?.map((item, key) => (
                      <div
                        key={key}
                        className="px-2 text-lg  flex items-center p-1.5 gap-2   "
                      >
                        <input
                          type="radio"
                          name={currentDisplay?._id}
                          id={`${currentDisplay?._id}_${key}`}
                          className=" h-6 w-6"
                          checked={
                            selectedOption ===
                              `${currentDisplay?._id}_${key}` ||
                            (Answers[
                              AllData?.questions[currsubject]?.subjectname
                            ] &&
                              Answers[
                                AllData?.questions[currsubject]?.subjectname
                              ][currentDisplay?._id] === `${item}`) ||
                            (localStorage.getItem("MarkforReviews") &&
                              JSON.parse(
                                localStorage.getItem("MarkforReviews")
                              )[AllData?.questions[currsubject].subjectname] &&
                              JSON.parse(
                                localStorage.getItem("MarkforReviews")
                              )[AllData?.questions[currsubject].subjectname][
                                currentDisplay?._id
                              ] === item)
                          }
                          onChange={() => {
                            setSelectedOption(`${currentDisplay?._id}_${key}`);
                            setTimeLeft(TestExpiry - Date.now());
                          }}
                        />

                        <label
                          className="cursor-pointer" //option label
                          htmlFor={`${currentDisplay?._id}_${key}`}
                        >
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* side show bar */}
              <div className="flex flex-col h-[80vh] justify-start">
                <div className="border-2 border-gray-400 rounded-sm bg-white lg:w-[23vw] h-full hidden lg:flex  lg:flex-col ">
                  <div className="flex flex-wrap w-full justify-between items-center lg:gap-3  my-2  px-5">
                    <div className=" flex  gap-2 py-2 text-sm">
                      <div className=" h-7 w-7 bg-green-500"></div>
                      Answered
                    </div>
                    <div className=" flex  gap-2 py-2 text-sm">
                      <div className="  h-7 w-7 bg-violet-500"></div>
                      Marked for Review
                    </div>

                    <div className=" flex  gap-2 py-2 text-sm">
                      <div className="  h-7 w-7 bg-gray-300"></div>
                      Not Visited
                    </div>
                    {/* <div className=" flex  gap-2 py-2 text-sm  pr-4 mr-3 ">
                      <div className=" h-5 w-5 bg-red-500  "></div>
                      Not Answered
                    </div> */}
                  </div>
                  <hr />

                  <div className="flex flex-wrap cursor-pointer">
                    {currentPanel?.map((item, key) => (
                      <div
                        key={key}
                        onClick={() => {
                          // console.log(item);
                          changeDisplay(key);
                        }}
                        className={`w-8 h-8 bg-gray-300 m-2 flex justify-center items-center rounded-sm ${
                          currquesindex === key ? "border border-black" : ""
                        } ${
                          Answers[
                            AllData?.questions[currsubject]?.subjectname
                          ] &&
                          Answers[AllData?.questions[currsubject]?.subjectname][
                            item._id
                          ]
                            ? "bg-green-500 text-white"
                            : ""
                        } ${
                          MarkReview[
                            AllData?.questions[currsubject]?.subjectname
                          ] &&
                          (MarkReview[
                            AllData?.questions[currsubject]?.subjectname
                          ][item?._id] ||
                            MarkReview[
                              AllData?.questions[currsubject]?.subjectname
                            ][item?._id] === "")
                            ? "bg-violet-500 text-white"
                            : ""
                        }`}
                      >
                        {key + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* button area */}
            <div className="md:max-h-[10vh] w-full lg:px-20 md:px-4 px-0 bg-white border-2 border-gray-400">
              <div className={`flex flex-col space-x-4 justify-between`}>
                <div className="flex justify-between max-md:flex-col items-center   sm:py-3 px-2 py-1 gap-2 border-t">
                  <div className="flex justify-between items-center w-[74%] max-md:w-full max-lg:w-[85%]">
                    <div className="flex gap-1 sm:gap-2 justify-center items-center max-sm:flex-col  ">
                      <button
                        className={`px-4 py-2  max-sm:text-[10px]  max-xl:text-[14px] max-md:px-7  transition-colors duration-300 bg-white text-gray-600 font-semibold border hover:text-gray-900 border-gray-500`}
                        id="save"
                        onClick={prevques}
                      >
                        Previous
                      </button>
                      <button
                        className={`px-4 py-2 max-sm:text-[10px]  max-xl:text-[14px] max-md:px-5  transition-colors duration-300 text-white bg-blue-500 hover:bg-blue-600`}
                        id="save"
                        type="button"
                        onClick={setanswer}
                      >
                        Save &amp; Next
                      </button>
                    </div>
                    <div className="flex gap-1 sm:gap-2 max-sm:flex-col">
                      <button
                        className={`px-4 py-2  max-sm:text-[10px] max-xl:text-[14px] max-sm:px-2 max-sm:py-2    transition-colors duration-300 text-white bg-cyan-500 hover:bg-cyan-600`}
                        id="clear"
                        onClick={clearresponse}
                      >
                        Clear Response
                      </button>
                      <button
                        className={`px-4 py-2  max-sm:text-[10px] max-xl:text-[14px] max-sm:px-2  transition-colors duration-300 text-white bg-cyan-500 hover:bg-cyan-600 `}
                        id="review"
                        onClick={markforreview}
                      >
                        Mark for Review &amp; Next
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center  items-center gap-4 max-md:w-full">
                    <button
                      className={`px-4 py-2 max-md:w-full  max-sm:text-[10px] max-sm:px-2  transition-colors duration-300 text-white bg-[#08bd80] `}
                      id="submit"
                      onClick={handleOpen}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="md:w-[400px] w-[300px]">
            <div className="modal-content ">
              <div className=" flex flex-col items-center justify-center bg-blue-500 text-white py-4 px-4 ">
                <div className="mo-header-logo text-center px-5 pb-2">
                  <div className="h5  mtsmh uppercase">
                    "Are you sure you want to submit the test ?"
                  </div>
                </div>
              </div>
              <div className="modal-body py-5 px-12 max-sm:px-8">
                <ul className="list-group space-y-2">
                  <li className="flex ">
                    <img src={redalarm_ico} alt="" className="me-2" /> Time
                    Left:
                    <span className="ms-auto list-span timeLeftSpanId">
                      <Countdown
                        date={Date.now() + TimeLeft}
                        renderer={renderer}
                      />
                    </span>
                  </li>
                  <li className="flex ">
                    <img src={checked_ico} alt="" className="me-2" /> Attempted:
                    <span
                      className="ms-auto list-span"
                      id="totalAttemptedQuestionCountId"
                    >
                      {attemptCount}
                    </span>
                  </li>
                  <li className="flex ">
                    <img src={unattempt_ico} alt="" className="me-2" />{" "}
                    Unattempt:
                    <span
                      className="ms-auto list-span"
                      id="totalUnAttemptedQuestionCountId"
                    >
                      {AllData?.noofquestions - attemptCount}
                    </span>
                  </li>
                  <li className="flex ">
                    <img src={marked_ico} alt="" className="me-2" /> Marked for
                    Review:
                    <span
                      className="ms-auto list-span"
                      id="totalReviewQuestionCountId"
                    >
                      {markedCount}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center items-center space-x-4 p-2">
                <button
                  type="button"
                  className="bg-gray-300 py-2 px-8 text-center text-sm rounded-sm font-medium "
                  data-bs-dismiss="modal"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="bg-blue-600 py-2 px-8 text-center text-white text-sm rounded-sm font-medium"
                  id="submitToServerBtn"
                  onClick={sendFinalResponse}
                  disabled={disablebtn}
                >
                  Submit
                </button>
              </div>
            </div>
          </Box>
        </Modal>
      </section>
    </>
  );
};

export default OnlineExam;
