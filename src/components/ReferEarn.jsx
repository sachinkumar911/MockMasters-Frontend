import React from "react";
import logo from "../assets/referlogo.webp";
import coinimg from "../assets/coin.webp";
const ReferEarn = () => {
  return (
    <>
      <section id="refer-earn">
        <div class="container mx-auto p-8 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-800">
          <div class="flex items-center justify-center mb-6">
            <span class="inline-block">
              <img class="h-16  w-auto" alt="Store" src={logo} />
            </span>
          </div>
          <div class="text-center mb-4">
            <h1 class="text-3xl font-semibold">
              <span class="text-white tracking-tighter">MockMasters</span>
              <span className=" font-light text-gray-400"> Store</span>
            </h1>
          </div>

          <div class="text-center text-gray-400">
            <p>
              Shop in our store or redeem our products for free by using Coins.
            </p>
          </div>
        </div>
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center ">
            <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
              <div class="h-52 flex  justify-center items-center bg-slate-600 rounded-t-xl">
                <img src={coinimg} className="w-16 h-16" />
                <p className="text-2xl text-yellow-400 font-semibold">+1</p>
              </div>

              <div class="p-4 md:p-6">
                <span class="block mb-1 text-xs font-semibold uppercase text-center">
                  Daily check-ins unlock a world of rewards 1 coin daily!
                </span>
              </div>
            </div>
            <div class="group flex flex-col h-full  bg-white border border-gray-200 shadow-sm rounded-xl">
              <div class="h-52 flex   justify-center items-center bg-slate-600 rounded-t-xl">
                <img src={coinimg} className="w-16 h-16" />
                <p className="text-2xl text-yellow-400 font-semibold">+50</p>
              </div>
              <div class="p-4 md:p-6">
                <span class="block mb-1 text-xs font-semibold uppercase text-center">
                  Invite your friends to join MockMasters using your referral
                  code
                </span>
              </div>
              <div class="mt-auto flex border-t  border-gray-200 divide-x divide-gray-200 ">
                <div class="flex items-center  py-2 w-full ">
                  <input
                    class="appearance-none text-center bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="FGHJKHG"
                    aria-label="Full name"
                  />
                  <a
                    href="#_"
                    class="px-5 py-2.5 text-white font-medium  bg-slate-500 hover:bg-slate-700 hover:text-white rounded-lg text-sm"
                  >
                    Copy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReferEarn;
