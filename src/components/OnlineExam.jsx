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

var socket = null;

//Modal Style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
};

const OnlineExam = () => {
  const [attemptCount, setattemptCount] = useState(0);
  const [markedCount, setmarkedCount] = useState(0);
  const [TestExpiry, setTestExpiry] = useState(0);

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

          // Retrieving User Answers
          const resp = await axios.post(
            "http://localhost:8000/api/v1/test/retrieve-user-answers",
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
            "http://localhost:8000/api/v1/test/retrieve-user-answers",
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

    //socket-updating TimeLeft on DB
    socket.emit("updateTimeLeft", sessionStorage.getItem("startTest_id"));
    socket.off("updateTimeReply").on("updateTimeReply", (newTL) => {
      setTimeLeft(newTL.TT);
      setTestExpiry(newTL.exp);
    });
  };

  const changeDisplay = (key) => {
    // console.log(currentPanel[key]);
    setcurrentDisplay(currentPanel[key]);
    setcurrquesindex(key);

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

  const TestCompleted = () => {
    console.log("Finished/...");
  };

  const Completionist = () => <span className="text-red-500">Times up!</span>;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // TestCompleted();

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

  const sendFinalResponse = async () => {
    setLoading(true);
    await socket.disconnect();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/evaluate-exam",
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

        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="max-h-[8vh] bg-gray-200 flex justify-between items-center px-24">
              <Box
                className="lg:w-fit"
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
                Time Left:
                <span id="ExamTImer" className=" self-center px-2">
                  <Countdown date={Date.now() + TimeLeft} renderer={renderer} />
                </span>
              </div>
            </div>
            <div className="flex h-[77vh] justify-center items-center mx-24">
              <div className=" h-full flex flex-col  lg:w-[75vw] w-full ">
                <div className=" h-fit flex justify-between items-center  border-b-2 border-slate-300 mb-1 ">
                  <h2 className="py-3 px-2 font-semibold">
                    Question {currquesindex + 1}
                  </h2>
                  <h2 className="py-3 px-2 font-semibold">
                    {" "}
                    Single correct option,
                    <span className="text-green-400 ">
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
                        (Answers[
                          AllData?.questions[currsubject]?.subjectname
                        ] &&
                          Answers[AllData?.questions[currsubject]?.subjectname][
                            currentDisplay?._id
                          ] === `${item}`) ||
                        (localStorage.getItem("MarkforReviews") &&
                          JSON.parse(localStorage.getItem("MarkforReviews"))[
                            AllData?.questions[currsubject].subjectname
                          ] &&
                          JSON.parse(localStorage.getItem("MarkforReviews"))[
                            AllData?.questions[currsubject].subjectname
                          ][currentDisplay?._id] === item)
                      }
                      onChange={() => {
                        setSelectedOption(`${currentDisplay?._id}_${key}`);
                        setTimeLeft(TestExpiry - Date.now());
                      }}
                    />
                    <label htmlFor={`${currentDisplay?._id}_${key}`}>
                      {item}
                    </label>
                  </div>
                ))}
                <div className=" w-full">
                  <div
                    className={`flex flex-col space-x-4 px-4 py-2 justify-between`}
                  >
                    <div className=" ms-2  flex bg-slate-50  py-3 px-2 justify-between">
                      <button
                        className={`px-4 py-2 rounded transition-colors duration-300 hover:text-white bg-green-500`}
                        id="review"
                        onClick={markforreview}
                      >
                        Mark for Review &amp; Next
                      </button>
                      <button
                        className={`px-4 py-2 rounded transition-colors duration-300 hover:text-white bg-indigo-700`}
                        id="clear"
                        onClick={clearresponse}
                      >
                        Clear Response
                      </button>
                    </div>
                    <div className="flex justify-between items-center mt-4 bg-slate-50 py-3 px-2 ">
                      <div className="flex gap-2 justify-center items-center">
                        <button
                          className={`px-4 py-2 rounded transition-colors duration-300 hover:text-white bg-white text-black font-semibold`}
                          id="save"
                          onClick={prevques}
                        >
                          Previous
                        </button>
                        <button
                          className={`px-4 py-2 rounded transition-colors duration-300 hover:text-white bg-sky-800`}
                          id="save"
                          type="button"
                          onClick={setanswer}
                        >
                          Save &amp; Next
                        </button>
                      </div>
                      <button
                        className={`px-4 py-2 rounded transition-colors duration-300 hover:text-white bg-cyan-400`}
                        id="submit"
                        onClick={handleOpen}
                      >
                        Final Submit
                      </button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <div className="modal-content ">
                            <div className=" flex flex-col items-center justify-center bg-blue-500 text-white py-4 px-4 ">
                              <div className="mo-header-logo text-center px-5 pb-3">
                                {/* <img src="https://www.mockers.in/frontend/img/mockers-while-logo.svg" alt=""/>  */}
                                <div className="h5  mtsmh">
                                  Are you sure want to submit test
                                </div>
                                <p className="mb-0  mtsmsh">
                                  After submitting test, you won’t be able to
                                  re-attempt
                                </p>
                              </div>
                            </div>
                            <div className="modal-body py-5 px-12">
                              <ul className="list-group space-y-2">
                                <li className="flex ">
                                  <img
                                    src="https://www.mockers.in/frontend/img/red-alarm.svg"
                                    alt=""
                                    className="me-2"
                                  />{" "}
                                  Time Left:
                                  <span className="ms-auto list-span timeLeftSpanId">
                                    <Countdown
                                      date={Date.now() + TimeLeft}
                                      renderer={renderer}
                                    />
                                  </span>
                                </li>
                                <li className="flex ">
                                  <img
                                    src="https://www.mockers.in/frontend/img/checked.svg"
                                    alt=""
                                    className="me-2"
                                  />{" "}
                                  Attempted:
                                  <span
                                    className="ms-auto list-span"
                                    id="totalAttemptedQuestionCountId"
                                  >
                                    {attemptCount}
                                  </span>
                                </li>
                                <li className="flex ">
                                  <img
                                    src="https://www.mockers.in/frontend/img/unattempt.svg"
                                    alt=""
                                    className="me-2"
                                  />{" "}
                                  Unattempt:
                                  <span
                                    className="ms-auto list-span"
                                    id="totalUnAttemptedQuestionCountId"
                                  >
                                    {AllData?.noofquestions - attemptCount}
                                  </span>
                                </li>
                                <li className="flex ">
                                  <img
                                    src="https://www.mockers.in/frontend/img/marked.svg"
                                    alt=""
                                    className="me-2"
                                  />{" "}
                                  Marked for Review:
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
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </Box>
                      </Modal>
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
                          ? "bg-pink-400"
                          : ""
                      }`}
                    >
                      {key + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default OnlineExam;
