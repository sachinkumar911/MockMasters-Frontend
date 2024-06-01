import React, { useState, useEffect } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner.jsx";
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

const TestResult = () => {
  const { userdetail } = useContext(UserContext);
  const [Data, setData] = useState();
  const Navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/attempted-exams`,
          { user_id: userdetail?._id },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        setData(response?.data?.data);
      } catch (error) {
        console.error(error.response.data.message);
      }
    })();
  }, []);

  const viewDetails = (_id) => {
    sessionStorage.setItem("ExamResult", JSON.stringify(_id));
    Navigate("/test/finalresult");
  };
  return (
    <>
      {Data ? (
        <section id="test-result" className={`py-4`}>
          <h2 className="text-3xl font-semibold mb-8 flex justify-center">
            Test Results
          </h2>
          <div className="mx-auto flex flex-col justify-center w-full items-center overflow-x-auto">
            <div className="mx-auto flex flex-col justify-center items-center">
              <TableContainer
                component={Paper}
                sx={{
                  maxWidth: 1000,
                  borderRadius: 2,
                  border: 6,
                  borderColor: "white",
                }}
              >
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Serial No.</StyledTableCell>
                      <StyledTableCell align="right">Test Name</StyledTableCell>
                      <StyledTableCell align="right">
                        Attempt Date
                      </StyledTableCell>
                      <StyledTableCell align="right">Marks</StyledTableCell>
                      <StyledTableCell align="right">Details</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Data?.map((item, key) => (
                      <StyledTableRow key={key}>
                        <StyledTableCell component="th" scope="row">
                          {key + 1}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {item.qpname}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {item.finalMarks}/{item.totalmarks}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <button
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={() => {
                              viewDetails(item._id);
                            }}
                          >
                            View Details
                          </button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </section>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default TestResult;
