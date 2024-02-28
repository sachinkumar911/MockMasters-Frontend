import React, { useState, useEffect } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      <section id="test-result" className={`py-18`}>
        <div className="container mx-auto p-8 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-semibold mb-8">Test Results</h2>
          <table className="w-full bg-white border-2   border-gray-300 shadow-md">
            <thead>
              <tr className="bg-gray-50 border">
                <th className="py-2 px-4 border-r border-gray-300 max-md:hidden">
                  Sr. No.
                </th>
                <th className="py-2 px-4 border-r border-gray-300">
                  Test Name
                </th>
                <th className="py-2 px-4 border-r border-gray-300">
                  Attempt Date
                </th>
                <th className="py-2 px-4 border-r border-gray-300">Marks</th>
                <th className="py-2 px-4 border-r border-gray-300">Details</th>
              </tr>
            </thead>
            <tbody className="">
              {Data?.map((item, key) => (
                <tr key={key} className="border-b border-gray-300 ">
                  <td className="py-2 px-4 border-r border-gray-300 text-center max-md:hidden ">
                    {key + 1}
                  </td>
                  <td className="py-2 px-4 border-r border-gray-300 text-center">
                    {item.qpname}
                  </td>
                  <td className="py-2 px-4 border-r border-gray-300 text-center">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border-r border-gray-300 text-center">
                    {item.finalMarks}/{item.totalmarks}
                  </td>
                  <td className="py-2 px-4 flex justify-center">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                      onClick={() => {
                        viewDetails(item._id);
                      }}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default TestResult;
