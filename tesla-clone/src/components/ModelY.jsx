import React from 'react'

const ModelY = () => {
  return (
    <div className="bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/c485b2b4-d334-4a8f-87e3-5755103a367c/bvlatuR/std/800x2100/Homepage-ModelY-LHD-Mobile')] lg:bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/dfa1ee09-8585-422e-a32a-067e14159aa0/bvlatuR/std/2880x2400/Homepage-Model-Y-Global-Desktop')] h-screen bg-cover bg-center relative">
        <div className='flex-col pt-24 inset-x-0 top-[15%] text-center'>
            <h1 className='text-4xl font-bold'>Model Y</h1>
        </div>
        <div className='flex-col absolute z-40 flex items-center justify-center text-sm lg:flex-row inset-x-0 bottom-[10%]'>
        <a href='https://www.tesla.com/model3/design#overview'> <button className='bg-[#393c41] rounded-mb w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-white'>Custom Order</button></a>
           <a href='https://www.tesla.com/drive'> <button className='bg-[#f4f4f4] rounded-mb w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-gray-700 font-bold'>Demo Drive</button></a>
        </div>
    </div>
  )
}

export default ModelY