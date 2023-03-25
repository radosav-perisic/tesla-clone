import React from 'react'

const SolarRoof = () => {
  return (
    <div>
      <div className=" snap-start bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/3f6f20d2-ad05-41b7-b181-9fb6f01af119/bvlatuR/std/800x2100/Homepage-SolarRoof-Mobile')] lg:bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/4a41ec0e-7316-46a8-8ce9-e2f195ba644d/bvlatuR/std/2880x1800/Homepage-SolarRoof-Desktop')] h-screen bg-cover bg-center relative">
        <div className="flex-col pt-32 inset-x-0 top-[15%] text-center">
          <h1 className="text-4xl font-bold text-gray-900">Solar Roof</h1>
        </div>
        <div className="flex-col absolute z-40 flex items-center justify-center text-sm lg:flex-row inset-x-0 bottom-[10%]">
          <a href="https://www.tesla.com/model3/design#overview">
            {" "}
            <button className="bg-[#222326]/80 rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-white">
              Order Now
            </button>
          </a>
          <a href="https://www.tesla.com/drive">
            {" "}
            <button className="bg-[#f4f4f4]/50 rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-gray-700/90 font-bold">
              View Inventory
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SolarRoof