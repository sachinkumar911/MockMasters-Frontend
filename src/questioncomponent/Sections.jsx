/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContex";

const Sections = () => {
  const { savebtn } = useContext(UserContext);

  const initialTime = 0.5 * 60;
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <>
      <div className="">
        <div className="sm:hidden flex justify-between ">
          <label htmlFor="Tab" className="sr-only">
            Tab
          </label>

          <select id="Tab" className="w-1/2 rounded-md border-gray-200">
            <option>Mathematics</option>
            <option>Logical Reasoning</option>
            <option>Computer</option>
            <option>English</option>
          </select>
        </div>

        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="flex  justify-between items-center mx-20">
              <div className="flex -mb-px  gap-3 ">
                <button
                  href="#"
                  className="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Mathematics
                </button>

                <button
                  href="#"
                  className="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Logical Reasoning
                </button>

                <button
                  href="#"
                  className="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Computer
                </button>

                <button
                  href="#"
                  className="shrink-0 rounded-t-lg border  border-transparent text-sm font-medium text-sky-600"
                >
                  English
                </button>
              </div>
              <div className=" text-xl ">
                <p
                  className={`font-semibold ${
                    minutes < 10 ? "text-red-500" : ""
                  }`}
                >
                  <span className="font-semibold text-black">Time</span>:
                  {minutes < 10 ? `0${minutes}` : minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </p>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sections;
