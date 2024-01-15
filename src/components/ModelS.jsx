import React from "react";

const ModelS = () => {
  return (
    <div>
      <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Mobile-LHD-6.22.jpg')] lg:bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg')] h-screen bg-cover bg-center relative snap-start">
        <div className="flex-col pt-32 inset-x-0 top-[15%] text-center">
          <h1 className="text-4xl font-bold text-gray-900">Model S</h1>
          <p className="p-2 pt-3 text-gray-900/90 underline text-sm">View Inventory</p>
        </div>
        <div className="flex-col absolute z-40 flex items-center justify-center text-sm lg:flex-row inset-x-0 bottom-[10%]">
          <a href="https://www.tesla.com/models/design#overview">
            <button className="rounded-[0.250rem] bg-[#1c2025]/80 text-gray-50 tracking-wider w-72 lg:w-[16.5rem] font-semibold lg:mx-4 h-10 mt-2">
            Order Now
          </button>
        </a>
        <a href="https://www.tesla.com/drive">
          <button className="bg-[#f4f4f4]/50 rounded-[0.250rem] w-72 lg:w-[16.5rem] lg:mx-4 h-10 mt-2 text-gray-700/90 font-bold">
            Demo Drive
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModelS;
