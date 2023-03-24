import React from "react";

const Navbar = () => {
  return (
    <div className="flex text-sm font-medium fixed justify-between bg-none bg-transparent mt-4 m-4 z-50 w-full top-0">
      <div>
        <a href="https://tesla.com">
          <img
            className="h-3 px-3 ml-3 m-2"
            src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjFhOS43IDkuNyAwIDAgMCA3IDdoMTFsLjUuMXYyNy42aDYuOFY3LjNMMjYgN2gxMWE5LjggOS44IDAgMCAwIDctN0gwem0yMzguNiAwaC02Ljh2MzQuOEgyNjNhOS43IDkuNyAwIDAgMCA2LTYuOGgtMzAuM1Ywem0tNTIuMyA2LjhjMy42LTEgNi42LTMuOCA3LjQtNi45bC0zOC4xLjF2MjAuNmgzMS4xdjcuMmgtMjQuNGExMy42IDEzLjYgMCAwIDAtOC43IDdoMzkuOXYtMjFoLTMxLjJ2LTdoMjR6bTExNi4yIDI4aDYuN3YtMTRoMjQuNnYxNGg2Ljd2LTIxaC0zOHpNODUuMyA3aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxMy44aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3pNMzA4LjUgN2gyNmE5LjYgOS42IDAgMCAwIDctN2gtNDBhOS42IDkuNiAwIDAgMCA3IDd6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4="
            alt="Tesla logo"
          />
        </a>
      </div>
      <div className="hidden lg:flex justify-center">
        <ul className="flex ml-16 justify-center hover:cursor-pointer">
          <li className="px-3 m-1 hover:rounded hover:bg-black/5"><a href="https://tesla.com/models"> Model S</a></li>
          <li className="px-3 m-1 hover:rounded hover:bg-black/5"><a href="https://tesla.com/model3"> Model 3</a></li>
          <li className="px-3 m-1 hover:rounded hover:bg-black/5"><a href="https://tesla.com/modelx"> Model X</a></li>
          <li className="px-3 m-1 hover:rounded hover:bg-black/5"><a href="https://tesla.com/modely"> Model Y</a></li>
          <li className="px-3 m-1 hover:rounded hover:bg-black/5"><a href="https://tesla.com/solarroof">
            Solar Roof</a>
          </li>
          <li className="px-3 m-1 hover:rounded hover:bg-black/5"><a href="https://tesla.com/solarpanels">
            Solar Panels</a>
          </li>
          <li className="px-3 m-1 hover:rounded hover:bg-black/5"><a href="https://tesla.com/powerwall">
            Powerwall</a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex justify-end  mr-9">
        <ul className="flex justify-center hover:cursor-pointer">
          <li className="px-3 m-1 hover:rounded hover:bg-black/5">Shop</li>
          <li className="px-3 m-1 hover:rounded hover:bg-black/5">Account</li>
          <li className="px-3 m-1 hover:rounded hover:bg-black/5">Menu</li>
        </ul>
      </div>
      {/*Mobile Menu*/}
      <div className="lg:hidden items-end mr-9">
        <button className="inline-flex items-center roaded-md py-2 px-4 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10">
          Menu
        </button>
      </div>
    </div>
  );
};

export default Navbar;
