/* eslint-disable no-unused-vars */
import React from "react";
import taketestimg from "../assets/taketest.png";
import analyzeimg from "../assets/analyzetest.png";
import successimg from "../assets/getsuccess.png";
import refineimg from "../assets/refineapproach.png";
const About = () => {
  return (
    <>
      <section id="about-section" className="mt-56 mb-40">
        <h2 className="text-[22px] medium:text-[32px] leading-8 medium:leading-10 font-bold text-center regular:!text-left w-full regular:!w-auto font-inter text-gray-900 pb-0">
          Start Your Journey
        </h2>
        <h6 className="text-base medium:text-lg leading-6 medium:leading-[26px] font-light text-gray-650 text-center regular:!text-left">
          Embark on a journey of self-discovery, refine your skills, and achieve
          success.
        </h6>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
              <div className="space-y-6 lg:space-y-10">
                <div className="shadow-medium rounded-lg p-[14px] m-2 font-nunitoSans px-8 large:!px-7 !py-8 large:!py-7 flex flex-col items-start w-full regular:!w-[360px] large:!w-full xlarge:!w-96 gap-y-4 group  !text-center regular:!text-left  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:bg-[#F0F8FB]">
                  <div className="w-full">
                    <img src={taketestimg} alt="" className="mx-auto" />
                  </div>
                  <h3 className="text-gray-900 text-lg medium:text-xl leading-[26px] medium:leading-[30px] font-interSans font-bold text-center regular:!text-left w-full ">
                    Take a Test
                  </h3>
                  <p className="text-base medium:text-lg leading-6 medium:leading-[26px] font-light text-gray-650">
                    Consistently take our test to evaluate your commitment and
                    dedication to your goals.
                  </p>
                </div>
                <div className="shadow-medium rounded-lg p-[14px] m-2 font-nunitoSans px-8 large:!px-7 !py-8 large:!py-7 flex flex-col items-start w-full regular:!w-[360px] large:!w-full xlarge:!w-96 gap-y-4 group  !text-center regular:!text-left  large:bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:bg-[#FFF2F8]">
                  <div className="w-full">
                    <img src={analyzeimg} alt="" className="mx-auto" />
                  </div>
                  <h3 className="text-gray-900 text-lg medium:text-xl leading-[26px] medium:leading-[30px] font-interSans font-bold text-center regular:!text-left w-full ">
                    Analyze Your Test
                  </h3>
                  <p className="text-base medium:text-lg leading-6 medium:leading-[26px] font-light text-gray-650">
                    Analyze your test, then optimize your study approach with
                    the gained insights.
                  </p>
                </div>
              </div>

              <div className="space-y-6 lg:space-y-10">
                <div className="shadow-medium rounded-lg p-[14px] m-2 font-nunitoSans px-8 large:!px-7 !py-8 large:!py-7 flex flex-col items-start w-full regular:!w-[360px] large:!w-full xlarge:!w-96 gap-y-4 group  !text-center regular:!text-left  large:bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  hover:bg-[#F6FAFF]">
                  <div className="w-full">
                    <img src={refineimg} alt="" className="mx-auto" />
                  </div>
                  <h3 className="text-gray-900 text-lg medium:text-xl leading-[26px] medium:leading-[30px] font-interSans font-bold text-center regular:!text-left w-full ">
                    Refine Your Approach
                  </h3>
                  <p className="text-base medium:text-lg leading-6 medium:leading-[26px] font-light text-gray-650">
                    Refine your study methods by harnessing the insights gained
                    from dissecting your test.
                  </p>
                </div>
                <div className="shadow-medium rounded-lg p-[14px] m-2 font-nunitoSans px-8 large:!px-7 !py-8 large:!py-7 flex flex-col items-start w-full regular:!w-[360px] large:!w-full xlarge:!w-96 gap-y-4 group  !text-center regular:!text-left  large:bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:bg-[#FDF5FF] ">
                  <div className="w-full">
                    <img src={successimg} alt="" className="mx-auto" />
                  </div>
                  <h3 className="text-gray-900 text-lg medium:text-xl leading-[26px] medium:leading-[30px] font-interSans font-bold text-center regular:!text-left w-full ">
                    Get Success
                  </h3>
                  <p className="text-base medium:text-lg leading-6 medium:leading-[26px] font-light text-gray-650">
                    Repeated practice and skill refinement cultivate positive
                    habits, enhancing proficiency over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
