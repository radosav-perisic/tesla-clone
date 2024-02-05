import React from 'react';

const Footer = () => {
  return (
    <div className="w-full h-28 flex z-20 absolute bottom-0 left-0 right-0 items-center justify-center bg-transparent px-6 text-white/80">
      
      <div className="flex space-x-10 md:items-center">
      <div className='space-x-3 md:flex grid grid-cols-3 mt-10 gap-[4.4px] '>
        <a href="https://www.tesla.com/about" className="md:text-xs text-[11px] hover:text-white duration-150">
          Tesla © 2024
        </a>
        <a href="https://www.tesla.com/legal" className="md:text-xs text-[11px] hover:text-white duration-150">
          Privacy & Legal
        </a>
        <a href="https://www.tesla.com/vin-recall-search" className="md:text-xs text-[11px] hover:text-white duration-150">
          Vehicle Recalls
        </a>
        <a href="https://www.tesla.com/contact" className="md:text-xs text-[11px] hover:text-white duration-150">
          Contact
        </a>
        <a href="https://www.tesla.com/blog" className="md:text-xs text-[11px] hover:text-white duration-150">
          News
        </a>
        <a href="https://www.tesla.com/updates" className="md:text-xs text-[11px] hover:text-white duration-150">
          Get Updates
        </a>
        <a href="https://www.tesla.com/findus/list" className="md:text-xs text-[11px] hover:text-white duration-150">
          Locations
        </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;