import React from "react";
import {
  FacebookLogo,
  GroupIcon,
  HomeIcon,
  MenuIcon,
  MessengerIcon,
  NotificationIcon,
  PlayIcon,
  SearchIcon,
  ShopIcon,
} from "../icons";
const Header = () => {
  return (
    <header className=" h-14 w-full  fixed top-0 z-10 px-1 flex justify-between shadow-lg bg-white ">
      <div className="flex gap-2 items-center flex-1">
        <FacebookLogo className="w-8" />
        <label className="input input-bordered flex items-center gap-2 w-64 rounded-full h-10 ">
          <input type="texqt" className="grow" placeholder="Search" />
          <SearchIcon />
        </label>
      </div>
      {/* center-group-icons */}
      <div className="flex gap-2 flex-1 justify-center">
        <div className="flex justify-center w-20">
          <HomeIcon className="w-2/5 hover:border-b-2 hover:border-blue-900" />
        </div>
        <div className="flex justify-center w-20">
          <PlayIcon className="w-2/5 hover:border-b-2 hover:border-blue-900" />
        </div>
        <div className="flex justify-center w-20">
          <ShopIcon className="w-2/5 hover:border-b-2 hover:border-blue-900" />
        </div>
        <div className="flex justify-center w-20">
          <GroupIcon className="w-2/5 hover:border-b-2 hover:border-blue-900" />
        </div>
      </div>

      {/* right menu */}
      <div className="flex flex-1 justify-end">
        <div className="avatar gap-2 justify-center items-center">
          <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <MenuIcon className="w-1/2 " />
          </div>
          <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <MessengerIcon className="w-3/5 " />
          </div>
          <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <NotificationIcon className="w-3/5 " />
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className=" m-1 h-2 ">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content right-0 menu bg-red-100 rounded-box z-20 w-52 p-2 shadow"
          >
            <li className="bg-red-300">
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
