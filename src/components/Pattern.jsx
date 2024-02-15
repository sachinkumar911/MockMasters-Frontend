import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Pattern = () => {
  const errornotify = (msg) => toast.error(msg);
  const successnotify = (msg) => toast.success(msg);

  const [Data, setData] = useState();
  const Navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("Data")) {
      setData(JSON.parse(sessionStorage.getItem("Data")));
    } else {
      Navigate("/");
    }
    //
  }, []);

  const { userdetail } = useContext(UserContext);

  const finalStart = async () => {
    // Deduct Coins
    // console.log(Data);
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
      sessionStorage.removeItem("Data");
      sessionStorage.setItem("startTest_id", response.data.data);
      sessionStorage.setItem("Question_id", Data._id);
      setTimeout(() => {
        Navigate("/test/ongoing");
      }, 1000);
    } catch (error) {
      console.error(error.response);
      errornotify(error.response.data.message);
      sessionStorage.removeItem("Data");
      setTimeout(() => {
        Navigate("/dashboard/test-series");
      }, 1500);
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
              className="text-green-700 hover:text-white border border-green-700 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Back
            </button>
          </Link>
          <button
            type="button"
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
            onClick={finalStart}
          >
            Start test
          </button>
        </div>
      </div>
    </>
  );
};

export default Pattern;
