/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContex";
import Last from "./Last";

function Question() {
  const [apidata, setapidata] = useState([]);
  const [crindx, setcrindx] = useState(0);

  const { updatsbtn } = useContext(UserContext);

  const fetchdata = async () => {
    try {
      const response = await fetch("./src/jason/Quiz.json");
      const data = await response.json();
      setapidata(data);
    } catch (e) {
      console.error("error fetching data:", e);
    }
  };

  const handlebtn = () => {
    setcrindx((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    fetchdata();
  }, []);
  useEffect(() => {
    updatsbtn({ handlebtn, crindx, apidata });
  }, [crindx]);

  return (
    <div className=" h-full w-full flex flex-col">
      {apidata.length > 0 && (
        <div className="py-10 px-10 w-full h-1/2">
          {apidata[crindx].question}
        </div>
      )}

      {apidata.length > 0 && (
        <div className="w-full h-fit  flex flex-col justify-center items-start py-10 px-10 gap-2">
          {apidata[crindx].answers.map((item, index) => (
            <button
              className="w-fit flex justify-center items-center gap-4 font-semibold"
              key={index}
            >
              <span>{index + 1}</span>
              {item}
            </button>
          ))}
        </div>
      )}

      <div>
        <Last></Last>
      </div>
    </div>
  );
}

export default Question;
