import React from 'react'
import Footer from './Footer'

const Accessories = () => {
  return (
    <div className='relative'>
      <div className="snap-start bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Mobile-NA-APAC.jpg')] lg:bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg')] h-screen bg-cover bg-center relative">
        <div className="flex-col pt-32 inset-x-0 top-[15%] text-center">
          <h1 className="text-4xl font-bold text-gray-900">Accessories</h1>
        </div>
        <div className="flex-col absolute z-40 flex items-center justify-center text-sm lg:flex-row inset-x-0 bottom-[10%]">
          <a href="https://www.tesla.com/model3/design#overview">
            {" "}
            <button className="lg:mx-4 h-10 mb-6 md:mt-2 rounded-[0.250rem] bg-[#f4f4f4]/90 text-gray-900/70 tracking-wider w-72 lg:w-[16.5rem] font-semibold subpixel-antialiased">
              Shop Now
            </button>
          </a>
        </div>
      </div>
      <Footer/>
    </div>  
  )
}

export default Accessories