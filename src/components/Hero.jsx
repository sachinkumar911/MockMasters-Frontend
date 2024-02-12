import React from "react";
import heroimage from "../assets/Desktopimage.svg";
import mockimage from "../assets/mock.png";
import rewardimg from "../assets/reward.png";
import usersimg from "../assets/usersimage.png";
import graphimg from "../assets/graoh.png";

const Hero = () => {
  return (
    <>
    {/* bg-gradient-to-r from-green-50 to-purple-200 */}
      <section id="hero-section" className="h-[90vh] pt-[90px] bg-hero-bg relative">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className=" mb-4 text-6xl font-semibold  tracking-normal leading-none md:text-5xl xl:text-6xl">
            Master Your Exams
            <br/>
            with
              <span className="text-blue-600 text-7xl font-bold"> MockMasters</span>
            </h1>
            <p className="max-w-2xl mb-6 font-normal text-gray-700 lg:mb-14 md:text-lg lg:text-3xl ">
              Elevate Your Exam Performance!
            </p>
            <a
              href="#about-section"
              className="inline-flex items-center justify-center px-5 py-3 text-white bg-blue-600 text-base font-medium text-center  border border-gray-300 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-gray-100 "
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </div>
       
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src={heroimage}
              alt="mockup"
              className="object-cover w-full h-full"
            />
          </div>
      
        </div>

        <div className=" absolute left-[50%] bottom-[0%] translate-x-[-50%]  translate-y-[50%] w-[75%] px-4 py-10 sm:px-6 lg:px-8 lg:py-4 mx-auto  rounded-xl shadow-lg bg-white">
          <div className="text-center mb-5"></div>
          <div className=" grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-8 ">
            <div className="items-center justify-center flex flex-col  border-r">
              <img
                src={mockimage}
                alt="Your Image Alt Text"
                className="sm:w-16 sm:h-16 w-8 h-8 bg-center bg-no-repeat bg-cover"
              />
              <h4 className="text-sm md:text-xl font-bold text-[#1B2124] mt-2">
                Mock Tests
              </h4>
              <div className="md:text-base text-xs font-medium text-[#1B2124]">
                Free mock tests
              </div>
            </div>
            <div className="items-center justify-center flex flex-col border-r">
              <img
                src={usersimg}
                alt="Your Image Alt Text"
                className="sm:w-16 sm:h-16 w-8 h-8 bg-center bg-no-repeat bg-cover"
              />
              <h4 className="text-sm md:text-xl font-bold text-[#1B2124] mt-2">
                1000+
              </h4>
              <div className="md:text-base text-xs font-medium text-[#1B2124]">
                Active Users Community
              </div>
            </div>

            <div className="items-center justify-center flex flex-col border-r">
              <img  
                src={graphimg}
                alt="Your Image Alt Text"
                className="sm:w-16 sm:h-16 w-8 h-8 bg-center bg-no-repeat bg-cover"
              />
              <h4 className="text-sm md:text-xl font-bold text-[#1B2124] mt-2">
                Analytics
              </h4>
              <div className="md:text-base text-xs font-medium text-[#1B2124]">
                Strategic Performance Analysis
              </div>
            </div>
            <div className="items-center justify-center flex flex-col ">
            <img
                src={rewardimg}
                alt="Your Image Alt Text"
                className="sm:w-16  sm:h-16 w-8 h-8 bg-center bg-no-repeat bg-cover"
              />
              <h4 className="text-sm md:text-xl font-bold text-[#1B2124] mt-2">
                Coins
              </h4>
              <div className="md:text-base text-xs font-medium text-[#1B2124]">
                Earn Reward with Coins
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
