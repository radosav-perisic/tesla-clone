import React from 'react'
import {FiChevronDown} from 'react-icons/fi'

const Model = () => {
  return (
    <div>
        <div className='absolute inset-x-0 top-[15%] text-center'>
            <h1 className='text-4xl font-bold'>Model 3</h1>
            <p>Order Online for Touchless Delivery</p>
        </div>
        <div>
            <button>Custom Order</button>
            <button>Existing Inventory</button>
        </div>
        <div>
            <FiChevronDown />
        </div>
    </div>
  )
}

export default Model