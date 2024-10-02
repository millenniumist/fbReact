import React from "react";

const LeftSideBar = () => {
  return (
    <div className="fixed top-14 h-full w-[280px] overflow-auto flex flex-col gap-2 min-w-[220px] max-xl:w-[200px] ">
      <div className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 rounded-none gap-2">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <p>Menu Item</p>
      </div>
      <div className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 rounded-none gap-2">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <p>Menu Item</p>
      </div>
      <div className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 rounded-none gap-2">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <p>Menu Item</p>
      </div>
    </div>
  );
};

export default LeftSideBar;
