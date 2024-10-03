import React from "react";
import SideBarItem from "./components/SideBarItem";

const RightSideBar = () => {
  return (
    <div className="fixed flex flex-col gap-2 pt-4 px-2 max-xl:hidden top-14 z-0 right-0 h-full  w-[280px] overflow-auto">

      <SideBarItem />
    </div>
  );
};

export default RightSideBar;
