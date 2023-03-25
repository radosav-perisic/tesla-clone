import React from 'react'

const SolarPanels = () => {
  return (
    <div>
      <div className="snap-start bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/da02ce3e-3ede-4fa4-8fcb-e8d5d6681cfb/bvlatuR/std/600x1576/Homepage-SolarPanels-Mobile')] lg:bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D')] h-screen bg-cover bg-center relative">
        <div className="flex-col pt-32 inset-x-0 top-[15%] text-center">
          <h1 className="text-4xl font-bold text-gray-900">Solar Panels</h1>
    
        </div>
        <div className="flex-col absolute z-40 flex items-center justify-center text-sm lg:flex-row inset-x-0 bottom-[10%]">
          <a href="https://www.tesla.com/model3/design#overview">
            {" "}
            <button className="bg-[#222326]/80 rounded-mb w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-white">
              Custom Order
            </button>
          </a>
          <a href="https://www.tesla.com/drive">
            {" "}
            <button className="bg-[#f4f4f4]/50 rounded-mb w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-gray-700/90 font-bold">
              View Inventory
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SolarPanels