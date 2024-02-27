import React, { useEffect, useState } from "react";
import coinimage from "../assets/coin.webp";
import axios from "axios";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";
import coinimg from "../assets/extracoins.webp";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  bgcolor: "background.paper",
};

const TestSeries = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { userdetail } = useContext(UserContext);

  const [examsets, setexamsets] = useState();
  const Navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/examset/show",
          {
            _id: userdetail._id,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        // console.log(response?.data?.data);
        setexamsets(response?.data?.data);
        // console.log(response?.data?.data);
      } catch (error) {
        console.error(error.response.data.message);
      }
    })();
  }, []);

  const startTest = (item) => {
    if (userdetail.elitecoin >= item.paperprice) {
      item.isResume = false;
      sessionStorage.setItem("Data", JSON.stringify(item));
      Navigate("/test/marking-scheme");
    } else {
      handleOpen();
    }
  };

  const checkCoins = (item, coin) => {
    if (userdetail.elitecoin >= coin) {
      resumeTest(item);
    } else {
      handleOpen();
    }
  };

  const resumeTest = (item) => {
    // console.log(item);
    sessionStorage.setItem("Data", JSON.stringify(item));
    sessionStorage.setItem("startTest_id", item.startTest_id);
    Navigate("/test/marking-scheme");
  };

  return (
    <>
      <section id="test-section" className={`my-10 z-0`}>
        <div className="flex flex-col  justify-center items-center space-y-6 ">
          {examsets?.map((item, key) => (
            <div
              key={key}
              id={item.qpname}
              className=" rounded-lg relative overflow-hidden bg-white border-t shadow-md  lg:w-[600px] md:w-[70%] w-[90%] "
            >
              <div className="absolute right-0 top-0 h-16 w-16">
                <div
                  className={
                    item.paperprice === 0
                      ? "absolute transform rotate-45 bg-yellow-400 text-center max-sm:text-[13px] text-white font-semibold py-1 max-sm:py-0 right-[-35px] max-sm:right-[-55px]  top-[32px] w-[170px]"
                      : "absolute transform flex items-center gap-1 justify-center rotate-45 max-sm:text-[13px] bg-gray-600 text-center text-white font-semibold py-1 max-sm:py-0 max-sm:right-[-55px]  right-[-35px] top-[32px] w-[170px]"
                  }
                >
                  {item.paperprice === 0 ? (
                    "FREE"
                  ) : (
                    <>
                      {item.paperprice}
                      <img
                        src={coinimage}
                        alt="coinimage"
                        className="h-4 w-4"
                      ></img>
                    </>
                  )}
                </div>
              </div>
              <h5 className=" border-neutral-100 px-6 pt-2 md:text-xl text-sm font-medium leading-tight">
                {item.qpname}
              </h5>
              <div className="p-5 max-sm:p-3  flex  md:text-lg text-xs">
                <p className="px-1">{item.noofquestions} Questions</p>
                <p className="px-1 text-gray-400">|</p>
                <p className="px-1">{item.totalmarks} marks</p>
                <p className="px-1 text-gray-400">|</p>
                <p className="px-1">
                  {humanizeDuration(item.examinfo?.duration)}
                </p>
              </div>
              <div className="mx-6 mb-3 flex items-center justify-between max-sm:flex-col max-sm:items-center   gap-2">
                <div className="flex">
                  <button
                    onClick={() => startTest(item)}
                    type="button"
                    className="inline-block rounded text-white bg-blue-500 hover:bg-blue-600 border-blue-500  border-2 px-4 py-2 text-sm max-sm:text-[10px] max-sm:p-1 leading-normal"
                  >
                    {item.isResume ? "Start new test" : "Start Test"}
                  </button>
                  {item.isResume ? (
                    <>
                      {" "}
                      <button
                        onClick={() => checkCoins(item, 50)}
                        type="button"
                        className="flex rounded text-blue-500 bg-white border-blue-500 border-2 hover:bg-blue-600 max-sm:text-[10px] max-sm:p-1 hover:text-white px-3 py-[0.4rem] ml-2 text-sm font-medium leading-normal"
                      >
                        Resume Test 50
                        <img src={coinimage} className="w-5" alt="coins" />
                      </button>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div className="bg-green-300 max-sm:text-[10px] max-sm:py-0.5 max-sm:px-1.5  w-max px-2  text-green-900 rounded-2xl text-xs font-semibold flex items-center h-min py-[5px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mr-1 max-sm:w-4 max-sm:h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>
                  {item.paperprice === 0
                    ? "10% of marks rewarded as coins"
                    : "15% of marks rewarded as coins"}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Modal
          style={{ backdropFilter: "blur(4px)" }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="bg-gray-100">
            <div className=""></div>
            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full min-h-screen ">
              <div className="w-full max-w-[400px]  bg-slate-50 py-5 px-5 text-center md:py-[10px] md:px-[12px]  rounded-md">
                <div className="h-52 flex  justify-center items-center flex-col bg-slate-600 rounded-lg">
                  <img src={coinimg} className="w-12 h-12" />
                  <p className="text-xl text-yellow-400 font-semibold uppercase  ">
                    Insufficient Elitecoins !!
                  </p>
                </div>
                <span className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary"></span>
                <p className="mb-10 text-base leading-relaxed text-gray-500 ">
                  "Initiate the test seamlessly by ensuring a sufficient elite
                  coin balance. Earn coins effortlessly to unlock the test !"
                </p>
                <div className="flex flex-wrap">
                  <div className="w-1/2 px-3">
                    <button
                      onClick={handleClose}
                      className="block w-full p-2 text-base font-normal text-center  border text-gray-500 bg-gray-100  hover:bg-gray-200 hover:text-gray-600 rounded-md "
                    >
                      Go Back
                    </button>
                  </div>
                  <div className="w-1/2 px-3">
                    <Link to="/Dashboard/refer&earn">
                      <button className=" flex justify-center gap-2 w-full p-2 text-base font-medium text-center transition border  hover:bg-slate-700 text-white bg-slate-600 rounded-md ">
                        Earn
                        <img src={coinimg} className="w-6 h-6" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </section>
    </>
  );
};

export default TestSeries;