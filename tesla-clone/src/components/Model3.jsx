import React from 'react'
import {FiChevronDown} from 'react-icons/fi'

const Model3 = () => {
  return (
    <div className="bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/92cbede0-6d73-4753-a640-7d2acbcd9f3f/bvlatuR/std/1927x4096/Homepage-Model-3-LHD-Mobile')] lg:bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/a269d7b4-87a9-4057-9ac5-2565e56a188e/bvlatuR/std/4096x2560/Homepage-Model-3-Desktop-LHD')] h-screen bg-cover bg-center">
        <div className='flex-col pt-24 inset-x-0 top-[15%] text-center'>
            <h1 className='text-4xl font-bold'>Model 3</h1>
            <p className='p-2 text-lg'>Leasing starting at $349/mo</p>
        </div>
        <div className='flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]'>
        <a href='https://www.tesla.com/model3/design#overview'> <button className='bg-[#393c41] rounded-mb w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-white'>Custom Order</button></a>
           <a href='https://www.tesla.com/drive'> <button className='bg-[#f4f4f4] rounded-mb w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-gray-700 font-bold'>Demo Drive</button></a>
        </div>
        <div className='flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]'>
            <FiChevronDown size={32}/>
        </div>
    </div>
  )
}

export default Model3;