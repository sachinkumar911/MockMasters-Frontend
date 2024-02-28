import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { dailyEliteCoin } from "../services/dailyEliteCoin.js";

const Pattern = () => {
  const errornotify = (msg) => toast.error(msg);
  const successnotify = (msg) => toast.success(msg);

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
          "http://localhost:8000/api/v1/test/start-test",
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
      <h3 className="text-xl font-bold mt-20 mb-10 text-center">
        {Data?.qpname} ( Subject-wise distribution of Marks )
      </h3>
      <div className="flex flex-col items-center ">
        <table className="border-collapse border w-3/5">
          <tbody>
            <tr className="bg-gray-200">
              <td className="p-2 py-4 border">
                {" "}
                <p className="font-bold"> Subject </p>{" "}
              </td>
              <td className="p-2 border">
                {" "}
                <p className="font-bold"> No. of Questions </p>{" "}
              </td>
              <td className="p-2 border">
                {" "}
                <p className="font-bold"> Marks Awarded </p>{" "}
              </td>
              <td className="p-2 border">
                {" "}
                <p className="font-bold"> Negative Marking </p>{" "}
              </td>
              <td className="p-2 border">
                {" "}
                <p className="font-bold"> Marks </p>{" "}
              </td>
            </tr>
            {Data?.examinfo?.markingschema?.map((item, key) => (
              <tr key={key}>
                <td className="p-2 border">
                  <p>{item.subname}</p>
                </td>
                <td className="p-2 border">{item.noofquestions}</td>
                <td className="p-2 border">{item.posmarks}</td>
                <td className="p-2 border">{item.negmarks}</td>
                <td className="p-2 border">
                  {item.noofquestions * item.posmarks}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex  justify-end w-3/5 pt-4">
          <Link to="/dashboard/test-series">
            <button
              type="button"
              className="flex bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 font-medium rounded-lg text-base px-4 py-2.5 text-center me-2 mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              Back
            </button>
          </Link>
          <button
            type="button"
            className="text-white flex bg-cyan-500 border font-medium rounded-lg   text-sm px-4 py-2.5 text-center me-2 mb-2 "
            onClick={finalStart}
          >
            {JSON.parse(sessionStorage.getItem("Data"))?.isResume
              ? "Resume test"
              : "Start test"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Pattern;
