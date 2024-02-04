import React, { useState } from "react";

const CreateQuestion = () => {
  const [isdrop, setisdrop] = useState(false);
  const [Alreadyselected, setAlreadyselected] = useState(false);
  const [selected, setselected] = useState([]);
  const Subjects = [
    "Mathematics",
    "Logical Reasoning",
    "Computer",
    "English",
    "Sets",
    " probability ",
    "Averages",
    "Expansions",
    "Factorization",
    "Quadratic equations",
    "Surds and Imaginary numbers",
    "Arithmetic progressions",
    "geometric progressions",
    "harmonic progressions",
    "Logarithms",
    "coordinates",
    "Distance formula",
    "line",
    " lines",
    " circle",
    "Locus",
    "Triangle",
    "rectangle",
  ];

  const handledrop = () => {
    if (isdrop === false) setisdrop(true);
    else setisdrop(false);
  };

  const handleclick = (item) => {
    if (selected.includes(item)) {
      setAlreadyselected(true);
    } else {
      setselected([...selected, item]);
      setisdrop(false);
      setAlreadyselected(false);
    }
  };
  const handlecut = (item) => {
    const newv = selected.filter((it) => item !== it);
    setselected(newv);
  };

  return (
    <form className="flex justify-center items-center w-full">
      <div className="flex relative justify-center items-center w-full h-24 mt-9 ">
        <div
          className={` bg-gray-200 absolute z-10 top-24 rounded-md  flex flex-col ${
            isdrop ? "visible" : "hidden"
          }`}
        >
          <ul
            className="py-2 text-sm text-gray-700 "
            aria-labelledby="dropdown-button"
          >
            {Subjects.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => {
                    handleclick(item);
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="relative w-1/2  flex flex-wrap p-3  text-sm text-gray-900 bg-gray-100 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:border-blue-500"
          onClick={handledrop}
        >
          {selected.map((item, index) => (
            <div
              key={index}
              type="button"
              className="text-white   inline-flex gap-2 items-center bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {item}
              {/* <IoCloseSharp
                className="mt-1 cursor-pointer"
                onClick={() => {
                  handlecut(item);
                }}
              /> */}
            </div>
          ))}
          <div
            className={`absolute text-red-500 bottom-0 right-1 font-serif font-semibold ${
              Alreadyselected ? "visible" : "hidden"
            }`}
          >
            Aready selected{" "}
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateQuestion;
