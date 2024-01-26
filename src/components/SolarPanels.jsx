import React from 'react'

const SolarPanels = () => {
  return (
    <div>
      <div className="snap-start bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1576,w_600,c_fit,f_auto,q_auto:best/Homepage-SolarPanels-Mobile')] lg:bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_HP_SolarPanels_D')] h-screen bg-cover bg-center relative">
        <div className="flex-col pt-32 inset-x-0 top-[15%] text-center">
          <h1 className="text-4xl font-bold text-gray-900">Solar Panels</h1>
          <p className="p-2 pt-3 text-gray-900/90 text-sm">Lowest Cost Solar Panels in America</p>
        </div>
        <div className="flex-col absolute z-40 flex items-center justify-center text-sm lg:flex-row inset-x-0 bottom-[10%]">
          <a href="https://www.tesla.com/model3/design#overview">
            {" "}
            <button className="rounded-[0.250rem] bg-[#1c2025]/80 text-gray-50 tracking-wider w-72 lg:w-[16.5rem] font-semibold lg:mx-4 h-10 mt-2">
              Order Now
            </button>
          </a>
          <a href="https://www.tesla.com/drive">
            {" "}
            <button className="bg-[#f4f4f4]/50 rounded-[0.250rem] w-72 lg:w-[16.5rem] lg:mx-4 h-10 mt-2 text-gray-700/90 font-bold">
             Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SolarPanels