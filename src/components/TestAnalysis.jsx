import { useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import avatar1 from "../assets/avatar1.webp";
import avatar2 from "../assets/avatar2.webp";
import avatar3 from "../assets/avatar3.webp";
import avatar4 from "../assets/avatar4.webp";
import avatar5 from "../assets/avatar5.webp";
import LoadingSpinner from "./LoadingSpinner";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export const TestAnalysis = () => {
  let avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];
  const { userdetail } = useContext(UserContext);
  const Navigate = useNavigate();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const [currentDisplay, setcurrentDisplay] = useState();
  const [currentPanel, setcurrentPanel] = useState();
  const [currsubject, setcurrsubject] = useState(0);
  const [currquesindex, setcurrquesindex] = useState(0);

  const [oopen, setOopen] = useState(false);

  const openDrawer = () => setOopen(true);
  const closeDrawer = () => setOopen(false);

  useEffect(() => {
    if (!sessionStorage.getItem("ExamResult")) {
      Navigate("/dashboard/attempted-test");
    }
    (async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/test-analysis`,
          { ExamResult: JSON.parse(sessionStorage.getItem("ExamResult")) },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        setLoading(false);
        setData(response?.data?.data);
        setcurrentPanel(response.data.data?.qpset?.questions[0]?.questionIds);
        setcurrentDisplay(
          response.data.data?.qpset?.questions[0]?.questionIds[0]
        );
        // console.log(response?.data?.data);
      } catch (error) {
        console.error(error.response?.data?.message);
      }
    })();

    return () => {
      if (
        location.pathname === "/test/finalresult" ||
        location.pathname === "/test/finalresult/" ||
        location.pathname === "/test/test-analysis" ||
        location.pathname === "/test/test-analysis/"
      ) {
        console.log(location.pathname);
      } else {
        sessionStorage.removeItem("ExamResult");
        window.location.reload();
      }
    };
  }, []);

  const changesubjectpanel = (event, newValue) => {
    setcurrentPanel(data?.qpset?.questions[newValue].questionIds);
    setcurrsubject(newValue);
    setcurrentDisplay(data?.qpset?.questions[newValue].questionIds[0]);
    setcurrquesindex(0);
    closeDrawer();
  };
  const changeDisplay = (key) => {
    setcurrentDisplay(currentPanel[key]);
    setcurrquesindex(key);
    closeDrawer();
  };
  const prevques = () => {
    if (currquesindex > 0) {
      let tmp = currquesindex;
      setcurrentDisplay(currentPanel[tmp - 1]);
      setcurrquesindex(currquesindex - 1);
    }
  };
  const setanswer = () => {
    if (currquesindex < currentPanel.length - 1) {
      let tmp = currquesindex;
      setcurrentDisplay(currentPanel[tmp + 1]);
      setcurrquesindex(currquesindex + 1);
    }
  };

  return (
    <>
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
              {data?.qpset?.questions?.map((item, key) => (
                <Tab
                  key={key}
                  sx={{ fontSize: 12, fontWeight: "bold" }}
                  label={item.subjectname}
                />
              ))}
            </Tabs>
          </Box>
          <div className="border-2 border-gray-400 rounded-md bg-white h-full lg:flex  lg:flex-col">
            <hr />

            <div className="flex flex-wrap cursor-pointer">
              {currentPanel?.map((item, key) => (
                <div
                  key={key}
                  onClick={() => {
                    changeDisplay(key);
                  }}
                  className={`w-8 h-8 bg-gray-300 m-2 flex justify-center items-center rounded-sm ${
                    data?.response &&
                    data?.response[
                      data?.qpset?.questions[currsubject]?.subjectname
                    ] &&
                    data?.response[
                      data?.qpset?.questions[currsubject].subjectname
                    ][item?._id]
                      ? data?.qpset?.questions?.[currsubject]?.questionIds?.[
                          key
                        ]?.correctanswer ===
                        data?.response[
                          data?.qpset?.questions[currsubject].subjectname
                        ][item?._id]?.userOption
                        ? "bg-green-400"
                        : "bg-red-300"
                      : "bg-gray-300"
                  } ${currquesindex === key ? "border border-black" : ""}`}
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
        <>
          <div className="h-[7vh] flex justify-between items-center md:mx-[6rem] mx-1">
            <div
              className="text-center md:text-2xl select-none  font-semibold w-[4rem] hidden lg:flex"
              onClick={() => Navigate("/Dashboard/attempted-test")}
            >
              MockMasters.
            </div>
            <div className="py-4 flex items-center justify-center select-none md:text-xl font-semibold">
              {data?.qpset?.qpname}
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
          <div className="relative flex flex-col overflow-hidden">
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
                    {data?.qpset?.questions?.map((item, key) => (
                      <Tab
                        key={key}
                        sx={{ fontSize: 11, fontWeight: "bold" }}
                        label={item.subjectname}
                      />
                    ))}
                  </Tabs>
                </Box>
              </div>
            </div>
            {/* question and side showbar */}

            <div className="flex h-[76vh] justify-center lg:mx-24 md:mx-14 mx-1 my-0">
              {/* question section and option */}
              <div className=" h-full flex flex-col lg:w-[75vw] w-full">
                {/* question no and positve negative marking section */}
                <div className="  flex justify-between items-center  border-b-2 border-slate-300 mb-1 ">
                  <h2 className="py-3 text-center px-2 font-semibold">
                    Question {currquesindex + 1}
                  </h2>
                  <h2 className="py-3 text-center text-wrap px-2 font-semibold">
                    {" "}
                    <span className="text-[#08bd80] ">
                      +
                      {data?.qpset?.questions[currsubject]?.posM
                        ? (data?.qpset?.questions[currsubject]?.posM).toFixed(1)
                        : ""}
                    </span>{" "}
                    <span className="text-red-500 ">
                      -
                      {data?.qpset?.questions[currsubject]?.negM
                        ? (data?.qpset?.questions[currsubject]?.negM).toFixed(1)
                        : ""}
                    </span>
                  </h2>
                </div>
                {/* question  area */}
                <div className="flex flex-col justify-between h-full overflow-hidden">
                  <pre className="text-lg text-wrap max-h-[50%]  font-normal overflow-y-scroll">
                    {currentDisplay?.txtquestion ? (
                      currentDisplay?.txtquestion
                    ) : (
                      <img src={currentDisplay?.imgquestion} />
                    )}
                  </pre>

                  <div className="flex- flex-col justify-center  max-h-[38%] overflow-y-scroll items-center">
                    {currentDisplay?.options?.map((item, key) => (
                      <div
                        key={key}
                        className={`px-2 text-lg  flex items-center p-1.5 gap-2 border-2 ${
                          data?.qpset?.questions?.[currsubject]?.questionIds?.[
                            currquesindex
                          ]?.correctanswer === item
                            ? "bg-green-500 border-green-700"
                            : data?.response &&
                              data?.response[
                                data?.qpset?.questions[currsubject]?.subjectname
                              ] &&
                              data?.response[
                                data?.qpset?.questions[currsubject]?.subjectname
                              ][currentDisplay?._id]?.userOption === item
                            ? "border-red-500 bg-red-300"
                            : ""
                        }`}
                      >
                        <p
                          className="cursor-pointer" //option label
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* side show bar */}
              <div className="flex flex-col h-[80vh] justify-start">
                <div className="border-2 border-gray-400 rounded-sm bg-white lg:w-[23vw] h-full hidden lg:flex  lg:flex-col ">
                  <hr />

                  <div className="flex flex-wrap cursor-pointer">
                    {currentPanel?.map((item, key) => (
                      <div
                        key={key}
                        onClick={() => {
                          changeDisplay(key);
                        }}
                        className={`w-8 h-8 m-2 flex justify-center items-center rounded-sm ${
                          data?.response &&
                          data?.response[
                            data?.qpset?.questions[currsubject].subjectname
                          ] &&
                          data?.response[
                            data?.qpset?.questions[currsubject].subjectname
                          ][item?._id]
                            ? data?.qpset?.questions?.[currsubject]
                                ?.questionIds?.[key]?.correctanswer ===
                              data?.response[
                                data?.qpset?.questions[currsubject].subjectname
                              ][item?._id]?.userOption
                              ? "bg-green-400"
                              : "bg-red-300"
                            : "bg-gray-300"
                        } ${
                          currquesindex === key ? "border border-black" : ""
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
                <div className="flex justify-between max-md:flex-col items-center sm:py-3 px-2 py-1 gap-2 border-t">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex gap-1 sm:gap-2 justify-center items-center">
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
                        Next
                      </button>
                    </div>
                    <div className="flex justify-center  items-center gap-4">
                      <button
                        className={`px-4 py-2 max-sm:text-[10px] max-sm:px-2  transition-colors duration-300 text-white bg-[#647771] `}
                        id="submit"
                        onClick={() => Navigate("/test/finalresult")}
                      >
                        Go to summary
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
