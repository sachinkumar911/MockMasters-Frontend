import React, { useState } from "react";
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
  //MUI
  const [value, setValue] = useState(0);

  const examhandleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  //MUI

  return (
    <>
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
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Mathematics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography>
                    Analytical Ability And Logical Reasoning
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>Computer Awareness</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  aria-controls="panel4d-content"
                  id="panel4d-header"
                >
                  <Typography>General English</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="overflow-auto max-h-48 overflow-x-hidden ">
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
                          fill-rule="evenodd"
                          d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                          clip-rule="evenodd"
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
                          fill-rule="evenodd"
                          d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                          clip-rule="evenodd"
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
                          fill-rule="evenodd"
                          d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default SamplePaper;
