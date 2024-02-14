import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Pattern = () => {
  const [Data, setData] = useState();
  useEffect(() => {
    setData(JSON.parse(sessionStorage.getItem("Data")));
  }, []);

  const finalStart = () => {
    // Deduct Coins
  };

  return (
    <>
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
