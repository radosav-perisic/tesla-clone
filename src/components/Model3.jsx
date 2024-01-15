import React from "react";


const Model3 = () => {
  return (
    <div className="bg-[url('https://digitalassets-secure.tesla.com/image/upload/f_auto,q_auto/tdbyegwl6nzchqza5jkh.jpg')] lg:bg-[url('https://digitalassets-secure.tesla.com/image/upload/f_auto,q_auto/xufyfcvqhmq36szytod7.jpg')] h-screen lg bg-cover bg-center relative snap-start">
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
