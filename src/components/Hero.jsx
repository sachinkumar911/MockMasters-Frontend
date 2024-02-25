import React from "react";
import heroimage from "../assets/Desktopimage.svg";
import mockimage from "../assets/mock.webp";
import rewardimg from "../assets/reward.webp";
import usersimg from "../assets/usersimage.webp";
import graphimg from "../assets/graph.webp";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <section
        id="hero-section"
        className="h-[90vh] pt-[90px] bg-hero-bg relative -z-10"
      >
        <div className="relative max-w-screen-xl mx-auto ">
          <div className="container mx-auto">
            <div className="flex flex-wrap ">
              <div className="w-full px-4 lg:w-5/12 mt-10">
                <div className="hero-content">
                  <h1 className="mb-3 text-4xl font-bold leading-tight text-dark sm:text-[42px] lg:text-[40px] xl:text-[52px] ">
                    Elevate Your Success with
                    <span className="text-blue-600 ml-3 font-semibold text-7xl">
                      MockMasters
                    </span>
                  </h1>
                  <p className="mb-8 max-w-[480px] text-xl font-light text-gray-700">
                    Welcome to MockMaster, your gateway to empowered learning
                    through comprehensive mock tests.
                  </p>
                  <ul className="flex flex-wrap items-center">
                    <li>
                      <Link
                        to="/about"
                        className="z-40 inline-flex cursor-pointer items-center text-white justify-center px-6 py-3 text-base font-medium text-center rounded-md bg-gray-700 hover:bg-gray-800 lg:px-9"
                      >
                        Get Started
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden px-4 lg:block lg:w-1/12"></div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="lg:ml-auto lg:text-right">
                  <div className="relative z-10 inline-block pt-11 lg:pt-0">
                    <img
                      src={heroimage}
                      alt="heroimage"
                      className="max-w-full  lg:ml-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" absolute left-[50%] bottom-[0%] translate-x-[-50%]  translate-y-[50%] w-[75%] px-4 py-10 sm:px-6 lg:px-8 lg:py-4 mx-auto  rounded-xl shadow-lg bg-white">
          <div className="text-center mb-5"></div>
          <div className=" grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-8 ">
            <div className="items-center justify-center flex flex-col  border-r">
              <img
                src={mockimage}
                alt="mocktestimage"
                className="sm:w-16 sm:h-16 w-8 h-8 bg-center bg-no-repeat bg-cover"
              />
              <h4 className="text-sm md:text-xl font-bold text-[#1B2124] mt-2">
                Mock Tests
              </h4>
              <div className="md:text-base text-xs font-normal text-[#1B2124]">
                Unlimited Mock Tests
              </div>
            </div>
            <div className="items-center justify-center flex flex-col border-r">
              <img
                src={usersimg}
                alt="usersimage"
                className="sm:w-16 sm:h-16 w-8 h-8 bg-center bg-no-repeat bg-cover"
              />
              <h4 className="text-sm md:text-xl font-bold text-[#1B2124] mt-2">
                1000+
              </h4>
              <div className="md:text-base text-xs font-normal text-[#1B2124]">
                Active Users Community
              </div>
            </div>

            <div className="items-center justify-center flex flex-col border-r">
              <img
                src={graphimg}
                alt="graphimage"
                className="sm:w-16 sm:h-16 w-8 h-8 bg-center bg-no-repeat bg-cover"
              />
              <h4 className="text-sm md:text-xl font-bold text-[#1B2124] mt-2">
                Analytics
              </h4>
              <div className="md:text-base text-xs font-normal text-[#1B2124]">
                Strategic Performance Analysis
              </div>
            </div>
            <div className="items-center justify-center flex flex-col ">
              <img
                src={rewardimg}
                alt="rewardiamge"
                className="sm:w-16  sm:h-16 w-8 h-8 bg-center bg-no-repeat bg-cover"
              />
              <h4 className="text-sm md:text-xl font-bold text-[#1B2124] mt-2">
                Coins
              </h4>
              <div className="md:text-base text-xs font-normal text-[#1B2124]">
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
