import React, { useState } from "react";
import {TfiClose} from 'react-icons/tfi'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="flex text-sm font-medium fixed justify-between bg-none bg-transparent mt-4 m-4 z-50 w-full top-0">
      <div>
        <a href="https://tesla.com">
          <img
            className="h-3 px-3 ml-3 m-3"
            src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjFhOS43IDkuNyAwIDAgMCA3IDdoMTFsLjUuMXYyNy42aDYuOFY3LjNMMjYgN2gxMWE5LjggOS44IDAgMCAwIDctN0gwem0yMzguNiAwaC02Ljh2MzQuOEgyNjNhOS43IDkuNyAwIDAgMCA2LTYuOGgtMzAuM1Ywem0tNTIuMyA2LjhjMy42LTEgNi42LTMuOCA3LjQtNi45bC0zOC4xLjF2MjAuNmgzMS4xdjcuMmgtMjQuNGExMy42IDEzLjYgMCAwIDAtOC43IDdoMzkuOXYtMjFoLTMxLjJ2LTdoMjR6bTExNi4yIDI4aDYuN3YtMTRoMjQuNnYxNGg2Ljd2LTIxaC0zOHpNODUuMyA3aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxMy44aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3pNMzA4LjUgN2gyNmE5LjYgOS42IDAgMCAwIDctN2gtNDBhOS42IDkuNiAwIDAgMCA3IDd6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4="
            alt="Tesla logo"
          />
        </a>
      </div>
      <div className="hidden lg:flex justify-center">
        <ul className="flex ml-16 justify-center tex hover:cursor-pointer">
          <li className="py-1.5 px-4 m-1 hover:rounded hover:bg-black/5 duration-500"><a href="https://tesla.com/models"> Model S</a></li>
          <li className="py-1.5 px-4 m-1 hover:rounded hover:bg-black/5 duration-500"><a href="https://tesla.com/model3"> Model 3</a></li>
          <li className="py-1.5 px-4 m-1 hover:rounded hover:bg-black/5 duration-500"><a href="https://tesla.com/modelx"> Model X</a></li>
          <li className="py-1.5 px-4 m-1 hover:rounded hover:bg-black/5 duration-500"><a href="https://tesla.com/modely"> Model Y</a></li>
          <li className="py-1.5 px-4 m-1 hover:rounded hover:bg-black/5 duration-500"><a href="https://tesla.com/solarroof">
            Solar Roof</a>
          </li>
          <li className="py-1.5 px-4 m-1 hover:rounded hover:bg-black/5 duration-500"><a href="https://tesla.com/solarpanels">
            Solar Panels</a>
          </li>
          <li className="py-1.5 px-4 m-1 hover:rounded hover:bg-black/5 duration-500"><a href="https://tesla.com/powerwall">
            Powerwall</a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex justify-end  mr-9">
        <ul className="flex justify-center hover:cursor-pointer">
          <li className="py-1.5 px-4 m-1 hover:rounded hover:bg-black/5 duration-500"><a href="https://shop.tesla.com">Shop</a></li>
          <li className="py-1.5 px-4 m-1 hover:rounded hover:bg-black/5 duration-500"><a href="https://tesla.com/teslaaccount">Account</a></li>
          <li onClick={handleNav} className="py-1.5 px-4 m-1 hover:rounded hover:bg-black/5 duration-500">Menu</li>
        </ul>
      </div>
      {/*Mobile Menu*/}
      <div className="lg:hidden items-end mr-9">
        <button onClick={handleNav} className="inline-flex items-center roaded-md py-2 px-4 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10">
          Menu
        </button>
      </div>
      <div className={nav ? "bg-white fixed top-0 ease-out duration-700 right-0 w-80 h-full z-10": 'fixed bg-transparent top-0 z-10 h-full w-80 ease-in duration-700 right-[-100%]'}>
       <div className="flex justify-end pr-8 pt-8">
       <TfiClose onClick={handleNav} className="rounded p-1 hover:bg-black/5 hover:cursor-pointer" size={28}/>
       </div>
       <ul className="pt-8 px-6">
       <a href="https://www.tesla.com/inventory/new/m3"><li className="py-3 pl-3 hover:rounded hover:bg-black/5">Existing Inventory</li></a>
       <a href="https://www.tesla.com/inventory/used/m3"><li className="py-3 pl-3 hover:rounded hover:bg-black/5">Used Inventory</li></a>
       <a href="https://www.tesla.com/tradein"><li className="py-3 pl-3 hover:rounded hover:bg-black/5">Trade-In</li></a>
       <a href="https://www.tesla.com/drive"><li className="py-3 pl-3 hover:rounded hover:bg-black/5">Demo Drive</li></a>
       <a href="https://www.tesla.com/insurance"><li className="py-3 pl-3 hover:rounded hover:bg-black/5">Insurance</li></a>
       <a href="https://www.tesla.com/cybertruck"><li className="py-3 pl-3 hover:rounded hover:bg-black/5">Cybertruck</li></a>
       <a href="https://www.tesla.com/roadster"><li className="py-3 pl-3 hover:rounded hover:bg-black/5">Roadster</li></a>
       <a href="https://www.tesla.com/semi"><li className="py-3 pl-3 hover:rounded hover:bg-black/5">Semi</li></a>
       <a href="https://www.tesla.com/charging"><li className="py-3 pl-3 hover:rounded hover:bg-black/5">Charging</li></a>
       <a href="https://www.tesla.com/commercial"><li className="py-3 pl-3 hover:rounded hover:bg-black/5">Commercial Energy</li></a>
       <a href="https://www.tesla.com/utilities"><li className="py-3 pl-3 hover:rounded hover:bg-black/5">Utilities</li></a>
       <a href="https://www.tesla.com/findus"><li className="py-3 pl-3 hover:rounded hover:bg-black/5">Find Us</li></a>
       <a href="https://www.tesla.com/support"><li className="py-3 pl-3 hover:rounded hover:bg-black/5">Support</li></a>
       <a href="https://ir.tesla.com/"><li className="py-3 pl-3 hover:rounded hover:bg-black/5">Investor Relations</li></a>
       

       </ul>
      </div>
    </div>
  );
};

export default Navbar;
