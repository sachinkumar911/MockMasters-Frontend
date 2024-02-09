import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import coin from "../assets/coin.png";
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
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
//blurbackground mui
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
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
  const toastId = React.useRef(null);
  const sendingnotify = (msg) => (toastId.current = toast.loading(msg));
  const dismiss = () => toast.dismiss(toastId.current);
  const errornotify = (msg) => toast.error(msg);
  const successnotify = (msg) => toast.success(msg);

  const [examinfo, setexaminfo] = useState();

  //MUI
  const [value, setValue] = useState(0);
  const ExamTypeArray = ["NIMCET", "TACTM", "JEE"];
  const[displayQues,setDisplayQues] = useState();
  //MUI for Backgorund
  const [open, setOpen] = React.useState(false);
  const handleOpen = (it) => {
    setOpen(true);
    setDisplayQues(it);
    // console.log(it);
  };
  const handleClose = () => setOpen(false);

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
      setSelectedQuestions({});
      setQuestions({});
      setExpanded("");
    } catch (error) {
      setexaminfo();
      // console.error(error.response.data.message);
    }
  };

  const [expanded, setExpanded] = useState("");
  const [Questions, setQuestions] = useState({});

  const handleChange = (panel, key) => async (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    if (newExpanded) {
      const subname = examinfo?.markingschema[key].subjectname.subjectname;
      if (Questions[subname]) {
        return;
      }
      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/questions/get-all-questions-subject",
          { subject: subname },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        setQuestions({ ...Questions, [subname]: response.data.data });
      } catch (error) {
        // console.error(error.response.data.message);
      }
    }
  };
  //MUI

  const [SelectedQuestions, setSelectedQuestions] = useState({});

  function selectingQuestion(e, it, item, noofquestions) {
    let arr = SelectedQuestions[item] ? SelectedQuestions[item] : [];

    if (!arr?.includes(it._id)) {
      if (arr.length === noofquestions) {
        e.target.checked = false;
        return;
      }
      arr?.push(it._id);
      setSelectedQuestions({ ...SelectedQuestions, [item]: arr });
    } else {
      let newArray = arr.filter((j) => j !== it._id);
      setSelectedQuestions({ ...SelectedQuestions, [item]: newArray });
    }
  }

  useEffect(() => {
    examhandleChange(0, 0);
  }, []);

  const [price, setprice] = useState(0);

  const finalSubmitExamSet = async () => {
    for (let i = 0; i < examinfo?.markingschema?.length; i++) {
      if (
        examinfo.markingschema[i].noofquestions !==
        SelectedQuestions[examinfo.markingschema[i].subjectname.subjectname]
          ?.length
      ) {
        errornotify("Insufficient Questions");
        return;
      }
    }
    sendingnotify("Creaing new ExamSet...");
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/create-examset",
        {
          questions: SelectedQuestions,
          price,
          examtype: ExamTypeArray[value],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dismiss();
      successnotify("New ExamSet created");
    } catch (error) {
      dismiss();
      errornotify(error.response.data.message);
      console.error(error.response.data.message);
    }
  };

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
                      <span className="font-semibold bg-white px-2 rounded-lg shadow-[inset_-2px_-6px_4px_#46464620]">
                        {SelectedQuestions[item.subjectname.subjectname]
                          ?.length || 0}
                        /{item?.noofquestions}
                      </span>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {Questions[item.subjectname.subjectname]?.map((it, key) => (
                      <div
                        key={key}
                        className="overflow-auto max-h-48 overflow-x-hidden "
                      >
                        <div className="flex items-center my-1 ps-4 border border-gray-200 rounded ">
                          <input
                            id="bordered-radio-1"
                            type="checkbox"
                            name="bordered-radio"
                            className="cursor-pointer text-blue-600 w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            onClick={(e) => {
                              selectingQuestion(
                                e,
                                it,
                                item.subjectname.subjectname,
                                item?.noofquestions
                              );
                            }}
                          />
                          <label
                            type="text"
                            className="w-full overflow-hidden cursor-pointer py-4 ms-2 text-sm font-medium text-gray-900 outline-none"
                            placeholder="Enter Choice"
                            onClick={()=>{handleOpen(it)}}
                          >
                            {it.txtquestion}
                            
                          </label>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className={`w-6 h-6 ${
                              it.complexity === 1
                                ? "fill-green-600"
                                : it.complexity === 2
                                ? "fill-yellow-500"
                                : "fill-red-600"
                            }`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "12ch" },
                mt:2,
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Price"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" className="w-full">
                      <img className="w-6 h-6" src={coin} alt="" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <div>
             
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ backdropFilter: "blur(4px)" }}
              >
                <Box className="w-[500px] bg-gray-100 p-6 rounded-md shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    className="text-2xl font-semibold mb-4"
                  >
                    {displayQues?.txtquestion}
                  </Typography>
                  {displayQues?.options.map((item,key)=>(
                    <Typography key={key} className="mb-2 text-lg">{key+1}) {item}</Typography>
                  ))}
                </Box>
              </Modal>
            </div>
            <button
              type="button"
              className="mt-10 w-full bg-gray-800 hover:bg-opacity-90 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              onClick={finalSubmitExamSet}
            >
              Submit Exam Set
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SamplePaper;
