import React from 'react'
import { FiChevronDown } from "react-icons/fi";
import {Link} from 'react-scroll'

const ArrowDown = () => {
  return (
    <button >
<Link className="flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]" to='modelY' smooth={true} duration={500}>
  <FiChevronDown size={32}/>
</Link>
</button>
  )
}

export default ArrowDown

