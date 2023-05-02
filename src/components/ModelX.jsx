import React from "react";

const ModelX = () => {
  return (
    <div className="snap-start bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/09f6a9e7-bdef-4d92-8c1e-2bcc3ddb7fee/bvlatuR/std/800x2100/Homepage-Model-X-LHD-Mobile')] lg:bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/05a76324-947e-453b-a628-8b2d759756fa/bvlatuR/std/2880x1800/Homepage-Model-X-Desktop-LHD')] h-screen bg-cover bg-center relative">
      <div className="flex-col pt-32 inset-x-0 top-[15%] text-center">
        <h1 className="text-4xl font-bold text-gray-900">Model X</h1>
        <p className="p-2 pt-3 text-gray-900/90 underline text-sm">View Inventory</p>
      </div>
      <div className="flex-col absolute z-40 flex items-center justify-center text-sm lg:flex-row inset-x-0 bottom-[10%]">
        <a href="https://www.tesla.com/model3/design#overview">        
        <button className="rounded-[0.250rem] bg-[#121418]/80 text-gray-50 tracking-wider w-72 lg:w-[16.5rem] font-semibold lg:mx-4 h-10 mt-2">
            Order Now
          </button>
        </a>
        <a href="https://www.tesla.com/drive">
          <button className="bg-[#f4f4f4]/60 rounded-[0.250rem] w-72 lg:w-[16.5rem] lg:mx-4 h-10 mt-2 text-gray-700/90 font-bold">
            Demo Drive
          </button>
        </a>
      </div>
    </div>
  );
};

export default ModelX;
