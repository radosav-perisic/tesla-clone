import React from 'react'

const Accessories = () => {
  return (
    <div>
      <div className="bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/12f15753-d4af-4f4a-920b-65e9e260c521/bvlatuR/std/800x2100/Homepage-Accessories-Mobile')] lg:bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/0x0/dd739764-bcaa-4263-9488-8c73bc9fb046')] h-screen bg-cover bg-center relative">
        <div className="flex-col pt-32 inset-x-0 top-[15%] text-center">
          <h1 className="text-4xl font-bold text-gray-900">Accessories</h1>
        </div>
        <div className="flex-col absolute z-40 flex items-center justify-center text-sm lg:flex-row inset-x-0 bottom-[10%]">
          <a href="https://www.tesla.com/model3/design#overview">
            {" "}
            <button className="bg-[#222326] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-white">
              Shop Now
            </button>
          </a>
        </div>
      </div>
    </div>  
  )
}

export default Accessories