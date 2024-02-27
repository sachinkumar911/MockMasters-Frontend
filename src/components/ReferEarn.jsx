/* eslint-disable react/prop-types */
import logo from "../assets/referlogo.webp";
import coinimg from "../assets/coin.webp";
const ReferEarn = ({ side }) => {
  return (
    <>
      <section
        id="refer-earn"
        className={`${side ? "lg:blur-none blur-sm" : " "}`}
      >
        <div
          className={`container mx-auto p-8 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-800  `}
        >
          <div className="flex items-center justify-center mb-6">
            <span className="inline-block">
              <img className="h-16  w-auto" alt="Store" src={logo} />
            </span>
          </div>
          <div className="text-center mb-4">
            <h1 className="text-3xl font-semibold">
              <span className="text-white tracking-tighter">MockMasters</span>
              <span className=" font-light text-gray-400"> Store</span>
            </h1>
          </div>

          <div className="text-center text-gray-400">
            <p>
              Shop in our store or redeem our products for free by using Coins.
            </p>
          </div>
        </div>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center ">
            <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
              <div className="h-48 flex  justify-center items-center bg-gradient-to-br from-slate-800 via-slate-600 to-slate-700  rounded-t-xl">
                <img src={coinimg} className="w-16 h-16" />
                <p className="text-2xl text-yellow-400 font-semibold">+1</p>
              </div>

              <div className="p-4 md:p-6">
                <span className="block mb-1 text-xs font-semibold uppercase text-center">
                  Daily check-ins unlock a world of rewards 1 coin daily!
                </span>
                {/* <span className="block mb-1 text-xs font-bold uppercase text-center">
                Our daily check-ins not only help you stay on track but also open the door to a myriad of exciting rewards. 
                </span> */}
              </div>
            </div>
            <div className="group flex flex-col h-full  bg-white border border-gray-200 shadow-sm rounded-xl">
              <div className="h-48 flex   justify-center items-center bg-gradient-to-br from-slate-800 via-slate-600 to-slate-700  rounded-t-xl">
                <img src={coinimg} className="w-16 h-16" />
                <p className="text-2xl text-yellow-400 font-semibold">+50</p>
              </div>
              <div className="p-4 md:p-6">
                <span className="block mb-1 text-xs font-semibold uppercase text-center">
                  Invite your friends to join MockMasters using your referral
                  code
                </span>
              </div>
              <div className="mt-auto flex border-t  border-gray-200 divide-x divide-gray-200 ">
                <div className="flex items-center  py-2 w-full ">
                  <input
                    className="appearance-none text-center bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="FGHJKHG"
                    aria-label="Full name"
                  />
                  <a
                    href="#_"
                    className="px-5 py-2.5 text-white font-medium  bg-slate-600 hover:bg-slate-700 hover:text-white rounded-lg text-sm"
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
