import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { dailyEliteCoin } from "../services/dailyEliteCoin.js";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Pattern = () => {
  const errornotify = (msg) => toast.error(msg);
  const successnotify = (msg) => toast.success(msg);

  const [disablebtn, setdisablebtn] = useState(false);

  const [Data, setData] = useState();
  const Navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("Data")) {
      setData(JSON.parse(sessionStorage.getItem("Data")));
    } else {
      Navigate("/dashboard/test-series");
    }
    //
  }, []);

  const { userdetail } = useContext(UserContext);

  const finalStart = async () => {
    setdisablebtn(true);
    // Deduct Coins
    // console.log(Data);
    if (JSON.parse(sessionStorage.getItem("Data"))?.isResume) {
      sessionStorage.setItem(
        "startTest_id",
        JSON.parse(sessionStorage.getItem("Data"))?.startTest_id
      );
      sessionStorage.setItem("Question_id", Data?._id);
      sessionStorage.removeItem("Data");
      const resp = await dailyEliteCoin(-50);
      if (resp) {
        Navigate("/test/ongoing");
      }
    } else {
      localStorage.removeItem("MarkforReviews");
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/test/start-test`,
          {
            userId: userdetail?._id,
            qpsetId: Data?._id,
            timeleft: Data?.examinfo?.duration,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        successnotify(response.data.message);
        sessionStorage.setItem("startTest_id", response.data.data);
        sessionStorage.setItem("Question_id", Data._id);
        const amount = Data?.paperprice;
        console.log(amount);
        sessionStorage.removeItem("Data");
        const resp = await dailyEliteCoin(amount * -1);
        if (resp) {
          Navigate("/test/ongoing");
        }
      } catch (error) {
        console.error(error.response);
        errornotify(error.response.data.message);
        sessionStorage.removeItem("Data");
        setTimeout(() => {
          Navigate("/dashboard/test-series");
        }, 1500);
      }
    }
  };

  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <section
        id="pattern-section"
        className="flex flex-col items-center h-screen"
      >
        <h3 className="text-xl font-bold mt-20 mb-10 text-center">
          {Data?.qpname} ( Subject-wise distribution of Marks )
        </h3>

        <TableContainer
          component={Paper}
          sx={{
            maxWidth: 1000,
            borderRadius: 2,
            border: 6,
            borderColor: "white",
          }}
        >
          <Table sx={{ minWidth: 800 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Subject</StyledTableCell>
                <StyledTableCell align="right">
                  No. of Questions
                </StyledTableCell>
                <StyledTableCell align="right">Marks Awarded</StyledTableCell>
                <StyledTableCell align="right">
                  Negative Marking
                </StyledTableCell>
                <StyledTableCell align="right">Marks</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Data?.examinfo?.markingschema?.map((item, key) => (
                <StyledTableRow key={key}>
                  <StyledTableCell component="th" scope="row">
                    {item.subname}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.noofquestions}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.posmarks}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.negmarks}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.noofquestions * item.posmarks}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="flex pt-4 gap-2 justify-end max-sm:justify-center ">
          <Link to="/dashboard/test-series">
            <button
              type="button"
              className="flex bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 font-medium rounded-lg text-base px-4 py-2.5 text-center  mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              Back
            </button>
          </Link>
          <button
            type="button"
            className="text-white flex bg-cyan-500 border font-medium rounded-lg   text-sm px-4 py-2.5 text-center  mb-2 "
            onClick={finalStart}
            disabled={disablebtn}
          >
            {JSON.parse(sessionStorage.getItem("Data"))?.isResume
              ? "Resume test"
              : "Start test"}
          </button>
        </div>
      </section>
    </>
  );
};

export default Pattern;
