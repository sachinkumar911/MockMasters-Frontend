import mocktestimg from "../assets/mockup1.webp";
import mockup2 from "../assets/mockup2.webp";
import mockup3 from "../assets/mockup3.webp";
import mockup4 from "../assets/mockup4.webp";
import sideimg from "../assets/testbookside.svg";

const Mockup = () => {
  return (
    <>
      <section
        id="mockup-section"
        className=" flex flex-col items-center justify-center    mb-18 "
      >
        <div className="flex justify-around max-md:flex-col items-center md:px-10 md:gap-4 mb-14  mt-5 ">
          <div className="flex justify-center items-center ">
            <img
              className="rounded-xl max-md:w-[80%]"
              src={sideimg}
              alt="leftsideimage"
            />
          </div>

          <div className="space-y-6 flex flex-col max-md:w-[80%] max-md:mt-6  md:w-[50%]">
            <div className="space-y-2 flex flex-col  ">
              <h2 className="font-bold text-2xl lg:text-3xl text-gray-800  ">
                Seamless exam prep, innovative solutions, and collaborative
                learning excellence.
              </h2>
              <p className="text-gray-500   ">
                MockMaster redefines exam preparation with tailored solutions,
                advanced features, and a collaborative community, fostering an
                environment for elevated learning and success.
              </p>
            </div>

            <ul role="list" className="space-y-2 sm:space-y-4">
              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
                  <svg
                    className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  <span className="font-bold">Streamlined Test </span>
                  Designing
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  Robust <span className="font-bold">Features </span>
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  Exceptional User Experience
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:flex hidden flex-col justify-center items-center w-[88%] mt-5">
          <div className="bg-orange-100 flex flex-col justify-center items-center rounded-xl w-full gap-4">
            <div className="flex flex-col justify-center items-center  pt-3">
              <h2 className="text-xl font-bold text-gray-800 uppercase">
              Test Series Dashboard
              </h2>
              <p className=" text-gray-800">
              Efficiently organize and navigate through comprehensive test series options
              </p>
            </div>

            <figure className="relative z-[1]  lg:w-[50rem] w-[45rem] h-auto rounded-b-lg">
              <div className="relative flex items-center w-full bg-gray-800 rounded-t-lg py-2 px-24 ">
                <div className="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
                  <span className="w-2 h-2 bg-gray-600 rounded-full "></span>
                  <span className="w-2 h-2 bg-gray-600 rounded-full "></span>
                  <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                </div>
                <div className="flex justify-center items-center w-full h-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] ">
                  MockMaster
                </div>
              </div>

              <div className="bg-gray-800 rounded-b-lg">
                <img
                  className="max-w-full h-auto"
                  src={mocktestimg}
                  alt="laptopimage"
                />
              </div>
            </figure>
          </div>

          {/* //mobile images */}

          <div className="flex justify-between gap-4">
            <div className="bg-blue-100 pt-8 px-10 mt-12 rounded-xl h-min">
              <div className="flex flex-col justify-center items-center mb-8">
                <h2 className="text-xl font-bold text-gray-800 uppercase">
                Diverse functionalities 
                </h2>
                <p className=" text-gray-800 text-sm text-center">
                Simplify user journey with accessible sidebar menu options
                </p>
              </div>
              <figure className="mx-auto max-w-full lg:w-60 h-auto">
                <div className="p-1.5 bg-gray-800 rounded-tl-2xl rounded-tr-2xl pb-0 ">
                  <img
                    className="max-w-full h-auto rounded-tl-2xl rounded-tr-2xl border-0"
                    src={mockup2}
                    alt="mobile1image"
                  />
                </div>
              </figure>
            </div>
            <div className="bg-green-100 pt-8 px-10 mt-12 rounded-xl h-min">
              <div className="flex flex-col justify-center items-center mb-8">
                <h2 className="text-xl font-bold text-gray-800 uppercase">
                Performance Analysis
                </h2>
                <p className=" text-gray-800 text-sm text-center">
                Performance highlights strengths and areas for improvement
                </p>
              </div>
              <figure className="mx-auto max-w-full lg:w-60 h-auto">
                <div className="p-1.5 bg-gray-800 rounded-tl-2xl rounded-tr-2xl pb-0 ">
                  <img
                    className="max-w-full h-auto rounded-tl-2xl rounded-tr-2xl border-0"
                    src={mockup3}
                    alt="mobile1image"
                  />
                </div>
              </figure>
            </div>

            <div className="bg-pink-100 pt-8 px-10 mt-12 rounded-xl h-min ">
              <div className="flex flex-col justify-center items-center  mb-8">
                <h2 className="text-xl font-bold text-gray-800 uppercase">
                Referral Rewards
                </h2>
                <p className=" text-gray-800 text-sm text-center ">
                Earn coins through referrals, explore rewards at MockMasters Store
                </p>
              </div>
              <figure className="mx-auto w-full lg:w-60 h-auto">
                <div className="p-1.5 bg-gray-800 rounded-tl-2xl rounded-tr-2xl pb-0 ">
                  <img
                    className="max-w-full h-auto rounded-tl-2xl rounded-tr-2xl border-0"
                    src={mockup4}
                    alt="mobile3image"
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mockup;
