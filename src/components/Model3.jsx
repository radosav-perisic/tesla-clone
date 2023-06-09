import React from "react";


const Model3 = () => {
  return (
    <div className="bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/92cbede0-6d73-4753-a640-7d2acbcd9f3f/bvlatuR/std/1927x4096/Homepage-Model-3-LHD-Mobile')] lg:bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/a269d7b4-87a9-4057-9ac5-2565e56a188e/bvlatuR/std/4096x2560/Homepage-Model-3-Desktop-LHD')] h-screen lg bg-cover bg-center relative snap-start">
      <div className="flex-col pt-32 inset-x-0 top-[15%] text-center">
        <h1 className="text-4xl font-bold text-gray-900">Model 3</h1>
        <p className="p-2 pt-3 text-gray-900/90 underline text-sm">View Inventory</p>
      </div>
      <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]">
        <a href="https://www.tesla.com/model3/design#overview">
          {" "}
          <button className=" lg:mx-4 h-10 mt-2 rounded-[0.250rem] bg-[#1c2025]/80 text-gray-50 tracking-wider w-72 lg:w-[16.5rem] font-semibold">
           Order Now
          </button>
        </a>
        <a href="https://www.tesla.com/drive">
          {" "}
          <button className="bg-[#f4f4f4]/70 rounded-[0.250rem] w-72 lg:w-[16.5rem] lg:mx-4 h-10 mt-2 text-gray-700/90 tracking-wide font-bold">
            Demo Drive
          </button>
        </a>
      </div>
    </div>
  );
};

export default Model3;
