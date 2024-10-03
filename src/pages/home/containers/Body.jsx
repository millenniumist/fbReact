import React from "react";
import CreatePost from "./components/CreatePost";

const Body = () => {
  return (
    <div className="w-full mx-[280px] min-h-screen my-3 flex flex-col gap-4 rounded-lg">
      <CreatePost />
    </div>
  );
};

export default Body;
