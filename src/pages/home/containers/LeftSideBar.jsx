import React from "react";
import { FriendIcon, ClockIcon,BookmarkIcon, PlayIcon,ShopIcon,MoreIcon  } from "../icons";
import Avatar from "./components/Avatar";
import MenuItem from "./components/MenuItem";

const LeftSideBar = () => {
  const icons = [
    { icon: Avatar, name: "Andy" ,imgSrc:"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80", text:"Your Profile", className:"w-10 rounded-full"},
    { icon: FriendIcon, name: "Friends" },
    { icon: ClockIcon, name: "Memories" },
    { icon: BookmarkIcon, name: "Saved" },
    { icon: PlayIcon, name: "Videos" },
    { icon: ShopIcon, name: "Marketplace" },
    { icon: MoreIcon, name: "See More" }
  ];

  const items = icons.map((item, index) => (
    <MenuItem key={index} icon={item.icon} text={item.name} className="w-10" />
  ));

  return (
    <div className="fixed top-14 h-full w-[280px] overflow-auto flex flex-col gap-2 min-w-[220px] max-xl:w-[200px] ">
      {items}
    </div>
  );
};
export default LeftSideBar;
