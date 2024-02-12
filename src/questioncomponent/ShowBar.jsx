/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { UserContext } from "../context/UserContex";

const ShowBar = () => {
  const { user, savebtn } = useContext(UserContext);
  var name = user.subject;
  var ind = savebtn.crindx;

  let selectarray = [];

  const Math = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ];
  const LR = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  ];
  const Comp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const Eng = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  if (name === "Mathematics") {
    selectarray = Math;
  } else if (name === "Logical Reasoning") {
    selectarray = LR;
  } else if (name === "Computer") {
    selectarray = Comp;
  } else {
    selectarray = Eng;
  }
  const active = `bg-blue-700`;

  return (
    <>
    <div className="flex flex-col justify-center items-center gap-5">
      <div className=" flex flex-col gap-5 w-full ">
       <div className=" flex  gap-4">
        <div className=" h-8 w-8 bg-green-400">
        </div>
        Answered
       </div>

       <div className=" flex  gap-4">
        <div className=" h-8 w-8 bg-orange-400">
        </div>
        Not Answered
       </div>

       <div className=" flex  gap-4">
        <div className=" h-8 w-8 bg-rsc">
        </div>
        Not visited
       </div>
      </div>
      <div className=" flex flex-wrap  ">
        {selectarray.map((item, index) => (
          <span
            key={index}
            className={`  h-8 w-8 bg-rsc    m-1 text-center text-lg pt-0.5`}
          >
            {item}
          </span>
        ))}
      </div>
      </div>
    </>
  );
};

export default ShowBar;
