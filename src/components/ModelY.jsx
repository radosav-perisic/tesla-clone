import React from "react";
import teslaY from '../assets/modely.jpg'


const ModelY = () => {
  return (
    <div id='modelY'  style={{'--image-url': `url(${teslaY})`}}   className="snap-start bg-[image:var(--image-url)] h-screen bg-cover bg-center relative">
      <div className="flex-col pt-32 inset-x-0 top-[15%] text-center">
        <h1 className="text-[2.5rem] font-bold text-gray-900">Model Y</h1>
        <p className="text-gray-900/90 font-normal text-xl">Lease starting at $399/mo*</p>
      </div>
      <div className="flex-col absolute z-40 flex items-center justify-center text-sm lg:flex-row inset-x-0 bottom-[10%]">
        <a href="https://www.tesla.com/modely/design#overview">
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
