import taketestimg from "../assets/taketest.png";
import analyzeimg from "../assets/analyzetest.png";
import successimg from "../assets/getsuccess.png";
import refineimg from "../assets/refineapproach.png";
const About = () => {
  return (
    <>
      <section
        id="about-section"
        className="mt-56 mb-20 flex flex-col justify-center items-center"
      >
        <h2 className="text-2xl md:text-[32px] leading-8 md:leading-10 font-bold text-center  w-full  text-gray-900 pb-0">
          START YOUR JOURNEY
        </h2>
        <h6 className="text-base md:text-lg leading-6 md:leading-[26px] font-light text-gray-650 text-center  ">
          Embark on a journey of self-discovery, refine your skills, and achieve
          success.
        </h6>

        <div className="flex justify-center items-center  mt-6 py-4 md:px-10 px-5 lg:w-[65%]">
          <div className="flex flex-col justify-center items-center  gap-8">
            <div className="w-full flex justify-center items-center max-sm:flex-col gap-8 flex-row">
              <div className="  rounded-lg   font-nunitoSans px-8  py-8 flex flex-col justify-center gap-3  items-center w-full   text-center  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:bg-[#F0F8FB]">
                <div className="w-full">
                  <img
                    src={taketestimg}
                    alt="taketestimage"
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-gray-900 text-lg md:text-xl leading-[26px] md:leading-[30px] font-interSans font-bold text-center  w-full ">
                  Take a Test
                </h3>
                <p className="text-base text-wrap md:text-lg leading-6 md:leading-[26px] font-light text-gray-650">
                  Consistently take our test to evaluate your commitment and
                  dedication to your goals.
                </p>
              </div>

              <div className=" rounded-lg  px-8 py-8 gap-3  font-nunitoSans  flex flex-col justify-center items-center w-full   text-center   lg:bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:bg-[#FFF2F8]">
                <div className="w-full">
                  <img
                    src={analyzeimg}
                    alt="analyzetestiamge"
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-gray-900 text-lg md:text-xl leading-[26px] md:leading-[30px] font-interSans font-bold text-center  w-full ">
                  Analyze Your Test
                </h3>
                <p className="text-base text-wrap md:text-lg leading-6 md:leading-[26px] font-light text-gray-650">
                  Analyze your test, then optimize your study approach with the
                  gained insights.
                </p>
              </div>
            </div>

            <div className=" w-full flex justify-center items-center max-sm:flex-col flex-row gap-8 ">
              <div className="  rounded-lg  font-nunitoSans px-8  py-10  flex flex-col justify-center items-center w-full gap-3   text-center  lg:bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  hover:bg-[#F6FAFF]">
                <div className="w-full">
                  <img src={refineimg} alt="refineimage" className="mx-auto" />
                </div>
                <h3 className="text-gray-900 text-lg medium:text-xl leading-[26px] medium:leading-[30px] font-interSans font-bold text-center  w-full ">
                  Refine Your Approach
                </h3>
                <p className="text-base text-wrap md:text-lg leading-6 md:leading-[26px] text-center font-light text-gray-650">
                  Refine your study methods by harnessing the insights gained
                  from dissecting your test.
                </p>
              </div>
              <div className=" rounded-lg  font-nunitoSans px-8 py-10  flex flex-col justify-center items-center w-full gap-3 text-center lg:bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:bg-[#FDF5FF] ">
                <div className="w-full">
                  <img
                    src={successimg}
                    alt="successimage"
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-gray-900 text-lg md:text-xl leading-[26px] md:leading-[30px] font-interSans font-bold text-center  w-full ">
                  Get Success
                </h3>
                <p className="text-base text-wrap md:text-lg leading-6 md:leading-[26px] text-center font-light text-gray-650">
                  Repeated practice and skill refinement cultivate positive
                  habits, enhancing proficiency over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
