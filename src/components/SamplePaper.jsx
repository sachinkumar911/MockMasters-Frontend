import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
//MUI
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
//MUI

//MUI
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

//MUI

const SamplePaper = () => {
  const [examinfo, setexaminfo] = useState();

  //MUI
  const [value, setValue] = useState(0);
  const ExamTypeArray = ["NIMCET", "TACTM", "JEE"];

  const examhandleChange = async (event, newValue) => {
    setValue(newValue);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/examinfo/get-exam",
        { examtype: ExamTypeArray[newValue] },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setexaminfo(response.data.data[0]);
      console.log(response.data.data[0]);
    } catch (error) {
      setexaminfo();
      // console.error(error.response.data.message);
    }
  };

  const [expanded, setExpanded] = useState("");

  const handleChange = (panel, key) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    if (newExpanded) {
      console.log(examinfo?.markingschema[key].subjectname.subjectname);
    }
  };
  //MUI

  useEffect(() => {
    examhandleChange(0, 0);
  }, []);

  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <section id="sample-paper" className=" flex items-center justify-center">
        <div className="container w-[60%] mx-auto">
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 flex flex-col">
            <p className="text-2xl font-semibold mb-5">Create Exam Paper</p>
            <div className="mb-6">
              <Box
                className="border-b-2"
                sx={{
                  bgcolor: "background.paper",
                }}
              >
                <Tabs
                  value={value}
                  onChange={examhandleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label="NIMCET" />
                  <Tab label="TACTM" />
                  <Tab label="JEE" />
                </Tabs>
              </Box>
            </div>

            <div>
              {examinfo?.markingschema.map((item, key) => (
                <Accordion
                  key={key}
                  expanded={expanded === `panel${key + 1}`}
                  onChange={handleChange(`panel${key + 1}`, key)}
                >
                  <AccordionSummary
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                  >
                    <Typography className="w-full flex justify-between">
                      <span>{item.subjectname.subjectname}</span>
                      <span className="font-semibold">
                        0/{item?.noofquestions}
                      </span>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* <div className="overflow-auto max-h-48 overflow-x-hidden ">
                      <div className="flex items-center my-1 ps-4 border border-gray-200 rounded ">
                        <input
                          id="bordered-radio-1"
                          type="checkbox"
                          name="bordered-radio"
                          className="cursor-pointer text-blue-600 w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          type="text"
                          className="w-full py-4 ms-2 text-sm font-medium text-gray-900 outline-none"
                          placeholder="Enter Choice"
                        >
                          Solve the following equation for x:2x+5
                        </label>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-6 h-6 fill-green-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center my-1 ps-4 border border-gray-200 rounded ">
                        <input
                          id="bordered-radio-1"
                          type="checkbox"
                          name="bordered-radio"
                          className="cursor-pointer text-blue-600 w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          type="text"
                          className="w-full py-4 ms-2 text-sm font-medium text-gray-900 outline-none"
                          placeholder="Enter Choice"
                        >
                          Solve the following equation for x:2x+5
                        </label>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-6 h-6 fill-yellow-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center my-1 ps-4 border border-gray-200 rounded ">
                        <input
                          id="bordered-radio-1"
                          type="checkbox"
                          name="bordered-radio"
                          className="cursor-pointer text-blue-600 w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          type="text"
                          className="w-full py-4 ms-2 text-sm font-medium text-gray-900 outline-none"
                          placeholder="Enter Choice"
                        >
                          Solve the following equation for x:2x+5
                        </label>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-6 h-6 fill-red-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div> */}
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SamplePaper;
