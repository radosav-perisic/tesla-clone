import React from "react";
import ArrowDown from '../components/ArrowDown'

const ModelY = () => {
  return (
    <div id='modelY'  className="snap-start bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/c485b2b4-d334-4a8f-87e3-5755103a367c/bvlatuR/std/800x2100/Homepage-ModelY-LHD-Mobile')] lg:bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/dfa1ee09-8585-422e-a32a-067e14159aa0/bvlatuR/std/2880x2400/Homepage-Model-Y-Global-Desktop')] h-screen bg-cover bg-center relative">
      <div className="flex-col pt-32 inset-x-0 top-[15%] text-center">
        <h1 className="text-4xl font-bold text-gray-900">Model Y</h1>
        <p className="p-2 pt-3 text-gray-900/90 underline text-sm">View Inventory</p>
      </div>
      <div className="flex-col absolute z-40 flex items-center  justify-center text-sm lg:flex-row inset-x-0 bottom-[10%]">
        <a href="https://www.tesla.com/model3/design#overview">
          <button className="rounded-[0.250rem] bg-[#171a20]/80 text-gray-50 tracking-wider w-72 lg:w-[16.5rem] font-semibold lg:mx-4 h-10 mt-2">
            Order Now
          </button>
        </a>
        <a href="https://www.tesla.com/drive">
          <button className="bg-[#f4f4f4]/50 rounded-[0.250rem]  w-72 lg:w-[16.5rem] lg:mx-4 h-10 mt-2 text-[#393c41]/90 font-semibold">
            Demo Drive
          </button>
        </a>
      </div>
    </div>
  );
};

export default ModelY;
