import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const FinalSubmit = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    if (!sessionStorage.getItem("ExamResult")) {
      Navigate("/dashboard/test-series");
    }
    (async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/evaluated-exam",
          { ExamResult: JSON.parse(sessionStorage.getItem("ExamResult")) },
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

  return (
    <>
      <section id="final submit">
        <header className="z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start">
          <nav className="relative mx-2 mt-6 w-full max-w-[85rem] rounded-[36px]   bg-white px-4 py-3 md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto">
            <Link to="/dashboard/attempted-test">
              <button
                type="button"
                className="w-full flex items-center justify-center px-5 py-2 text-sm text-gray-700 font-medium hover:bg-gray-800 hover:text-white transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto "
              >
                <svg
                  className="w-5 h-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                <span>Go back</span>
              </button>
            </Link>
          </nav>
        </header>
        <h3 className="text-4xl font-bold mt-16 mb-10 text-center">
          Overall Score
        </h3>
        <div className="flex flex-col items-center ">
          <table className="border-collapse border w-3/5">
            <tbody>
              <tr className="bg-gray-200">
                <td className="p-2 py-4 border">
                  {" "}
                  <p className="font-bold text-center"> Subject </p>{" "}
                </td>
                <td className="p-2 border">
                  {" "}
                  <p className="font-bold text-center">
                    {" "}
                    Attempted Question
                  </p>{" "}
                </td>
                <td className="p-2 border">
                  {" "}
                  <p className="font-bold text-center">
                    {" "}
                    Correctly Answered
                  </p>{" "}
                </td>
                <td className="p-2 border">
                  {" "}
                  <p className="font-bold text-center"> Wrong Answered</p>{" "}
                </td>
                <td className="p-2 border">
                  {" "}
                  <p className="font-bold text-center"> Marks Obtained </p>{" "}
                </td>
              </tr>
              {typeof data?.attempted === "object" &&
                Object.entries(data?.attempted).map(([key, value]) => (
                  <tr key={key}>
                    <td className="p-2 border">
                      <p className="text-center">{key}</p>
                    </td>
                    <td className="p-2 border text-center">
                      {data.attempted[key].correct + data.attempted[key].wrong}
                    </td>
                    <td className="p-2 border text-center">
                      {data.attempted[key].correct}
                    </td>
                    <td className="p-2 border text-center">
                      {data.attempted[key].wrong}
                    </td>
                    <td className="p-2 border text-center">
                      {data.attempted[key].obtained}
                    </td>
                  </tr>
                ))}
              <tr className="bg-gray-200">
                <td className="p-2 border text-center font-bold">TOTAL</td>
                <td className="p-2 border "></td>
                <td className="p-2 border"></td>
                <td className="p-2 border"></td>
                <td className="p-2 border text-center  font-semibold">
                  {data.finalMarks}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex  justify-end w-3/5 pt-4 ">
            <Link
              to="/dashboard/attempted-test"
              className="inline-block py-2 text-base text-white bg-gray-800 px-6 hover:bg-gray-700 rounded-xl"
            >
              <button
                onClick={() => {
                  sessionStorage.removeItem("ExamResult");
                }}
              >
                Go to dashboard
              </button>
            </Link>
          </div>
        </div>

        {/* <hr className="mt-10 "/> */}
        {/* <div className="flex items-center justify-center space-x-4 mt-10  p-16">
          <div className="text-center  px-16 py-8 shadow-md">
            <h3 className="font-medium text-3xl ">
              <b>AIR</b>
            </h3>
            <div id="college">
              <h1 className="text-xl font-semibold">3301</h1>
            </div>
            <br />
            <p className="font-bold text-blue-500">This Rank is Dyanmic</p>
          </div>
          <div className="text-center  px-16 py-8 shadow-md">
            <h3 className="font-medium text-3xl">
              <b>Predicted College</b>
            </h3>
            <div id="college">
              <h1 className="text-xl font-semibold">
                No College Allotted. Work Hard!
              </h1>
            </div>
            <br />
            <a href="#" className="font-bold text-blue-500">
              View College Precedence
            </a>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default FinalSubmit;
