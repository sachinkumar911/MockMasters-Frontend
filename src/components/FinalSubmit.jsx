import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import coinimg from "../assets/coin.webp";
import rankimg from "../assets/group.webp";
import clockimg from "../assets/clock.webp";
import percentimg from "../assets/percent.webp";
import humanizeDuration from "humanize-duration";
import LoadingSpinner from "./LoadingSpinner";

const FinalSubmit = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem("ExamResult")) {
      Navigate("/dashboard/test-series");
    }
    (async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/evaluated-exam`,
          { ExamResult: JSON.parse(sessionStorage.getItem("ExamResult")) },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        setLoading(false);
        setData(response?.data?.data);
      } catch (error) {
        console.error(error.response?.data?.message);
      }
    })();

    return () => {
      if (
        location.pathname === "/test/finalresult" ||
        location.pathname === "/test/finalresult/"
      ) {
        console.log(location.pathname);
      } else {
        sessionStorage.removeItem("ExamResult");
        window.location.reload();
      }
    };
  }, []);

  const shortEnglishHumanizer = humanizeDuration.humanizer({
    language: "shortEn",
    languages: {
      shortEn: {
        h: () => "h",
        m: () => "m",
        s: () => "s",
        ms: () => "ms",
      },
    },
  });

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <section id="final submit" className=" overflow-x-scroll">
            {/* go to dashboard button */}
            <header className="z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start">
              <nav className="relative mx-2 mt-6 w-full max-w-[85rem] rounded-[36px]   bg-white px-4 py-3 md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto">
                <Link to="/Dashboard/attempted-test">
                  <button
                    type="button"
                    className="w-full flex items-center justify-center px-5 py-2 text-sm text-gray-700 font-medium hover:bg-gray-800 hover:text-white transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto "
                    onClick={() => {
                      sessionStorage.removeItem("ExamResult");
                    }}
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
                    <span>Go to Test Result</span>
                  </button>
                </Link>
              </nav>
            </header>

            
            <div id="table-div" className="flex flex-col justify-center items-center  w-full">
              <div className=" mx-auto px-4 ">
            <h3 className="text-4xl max-sm:text-2xl font-semibold my-14 text-center tracking-tighter">
              Overall Performance Summary
            </h3>
              <div className="flex flex-col items-center ">
                <table className="border-collapse border shadow-md table-auto min-w-full text-left text-sm ">
                  <tbody>
                    <tr className="bg-gray-200">
                      <td className="px-2 py-4 border">
                        {" "}
                        <p className="font-bold text-center"> Subject </p>{" "}
                      </td>
                      <td className="px-2 py-4 border">
                        {" "}
                        <p className="font-bold text-center">
                          {" "}
                          Attempted Question
                        </p>{" "}
                      </td>
                      <td className="px-2 py-4 border">
                        {" "}
                        <p className="font-bold text-center">
                          {" "}
                          Correctly Answered
                        </p>{" "}
                      </td>
                      <td className="px-2 py-4 border">
                        {" "}
                        <p className="font-bold text-center">
                          {" "}
                          Wrong Answered
                        </p>{" "}
                      </td>
                      <td className="px-2 py-4 border">
                        {" "}
                        <p className="font-bold text-center">
                          {" "}
                          Marks Obtained{" "}
                        </p>{" "}
                      </td>
                    </tr>
                    {typeof data?.attempted === "object" &&
                      Object.entries(data?.attempted).map(([key, value]) => (
                        <tr key={key}>
                          <td className="px-2 py-3 border">
                            <p className="text-center">{key}</p>
                          </td>
                          <td className="px-2 py-3 border text-center">
                            {data.attempted[key].correct +
                              data.attempted[key].wrong}
                          </td>
                          <td className="px-2 py-3 border text-center">
                            {data.attempted[key].correct}
                          </td>
                          <td className="px-2 py-3 border text-center">
                            {data.attempted[key].wrong}
                          </td>
                          <td className="px-2 py-3 border text-center">
                            {data.attempted[key].obtained}
                          </td>
                        </tr>
                      ))}
                    <tr className="bg-gray-200">
                      <td className="p-2 border text-center font-bold">
                        TOTAL
                      </td>
                      <td className="p-2 border "></td>
                      <td className="p-2 border"></td>
                      <td className="p-2 border"></td>
                      <td className="p-2 border text-center  font-semibold">
                        {data.finalMarks}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-8 border shadow-md mt-10 mb-10">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2 ">
                  <div className="flex rounded-xl border shadow-sm bg-[#F8FAFB] ">
                    <div className="  w-full flex justify-between p-4 md:p-5">
                      <div className="flex items-center gap-x-2 ">
                        <img src={clockimg} className="w-11 h-11" />
                        <p className="text-sm uppercase tracking-wide text-gray-800">
                          Total Time Taken
                        </p>
                      </div>
                      <div className="mt-1 flex items-center gap-x-2 ">
                        <h3 className="text-xl font-medium text-gray-800 sm:text-2xl ">
                          {shortEnglishHumanizer(
                            Math.floor(data.timeTaken / 1000) * 1000
                          )}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex rounded-xl border shadow-sm bg-[#F8FAFB] ">
                    <div className="  w-full flex justify-between p-4 md:p-5">
                      <div className="flex items-center gap-x-2 ">
                        <img src={coinimg} className="w-11 h-11" />
                        <p className="text-sm uppercase tracking-wide text-gray-800">
                          Total Coins Earned
                        </p>
                      </div>
                      <div className="mt-1 flex items-center gap-x-2 ">
                        <h3 className="text-xl font-medium text-gray-800 sm:text-2xl ">
                          {data.reward}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex rounded-xl border shadow-sm bg-[#F8FAFB] ">
                    <div className="  w-full flex  justify-between p-4 md:p-5">
                      <div className="flex  items-center gap-x-2 ">
                        <img src={percentimg} className="w-11 h-11" />
                        <p className="text-sm uppercase tracking-wide text-gray-800">
                          Percentile
                        </p>
                      </div>
                      <div className="mt-1 flex items-center gap-x-2 ">
                        <h3 className="text-xl font-medium text-gray-800 sm:text-2xl ">
                          {((data.finalMarks * 100) / data.totalmarks).toFixed(
                            1
                          )}
                          %
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex rounded-xl border shadow-sm bg-[#F8FAFB] ">
                    <div className="  w-full flex justify-between p-4 md:p-5">
                      <div className="flex items-center gap-x-2 ">
                        <img src={rankimg} className="w-11 h-11" />
                        <p className="text-sm uppercase tracking-wide text-gray-800">
                          Rank
                        </p>
                      </div>
                      <div className="mt-1 flex items-center gap-x-2 ">
                        <h3 className="text-xl font-medium text-gray-800 sm:text-2xl ">
                          --
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex items-center justify-center space-x-4 mt-10 border p-16">
              <div className="text-center  px-16 py-8 shadow-md bg-[#F8FAFB]">
                <h3 className="font-medium text-3xl ">
                  <b>AIR</b>
                </h3>
                <div id="college">
                  <h1 className="text-xl font-semibold">3301</h1>
                </div>
                <br />
                <p className="font-bold text-blue-500">This Rank is Dyanmic</p>
              </div>
              <div className="text-center  px-16 py-8 shadow-md bg-[#F8FAFB]">
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
              </div>
              </div>
            </div>


          </section>
        </>
      )}
    </>
  );
};

export default FinalSubmit;
