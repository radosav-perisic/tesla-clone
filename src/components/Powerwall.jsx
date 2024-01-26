import React from "react";

const Powerwall = () => {
  return (
    <div>
      <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-Mobile.jpg')] lg:bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-Desktop.jpg')] h-screen bg-cover bg-center relative snap-start">
      <div className="flex-col pt-32 inset-x-0 top-[15%] text-center">
        <h1 className="text-[2.5rem] font-bold text-gray-900">Powerwall</h1>
      </div>
        <div className="flex-col absolute z-40 flex items-center justify-center text-sm lg:flex-row inset-x-0 bottom-[10%]">
          <a href="https://www.tesla.com/powerwall/design">
            <button className="bg-[#f4f4f4]/80 rounded-[0.250rem] w-72 lg:w-[16.5rem] lg:mx-4 h-10 mt-2 text-gray-700/90 font-bold">
            Order Now
          </button>
        </a>
        <a href="https://www.tesla.com/powerwall">
          <button className="rounded-[0.250rem] bg-[#1c2025]/50 text-gray-50 tracking-wider w-72 lg:w-[16.5rem] font-semibold lg:mx-4 h-10 mt-2">
            Learn More
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Powerwall;
