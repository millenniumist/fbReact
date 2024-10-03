import React from "react";
import Header from "./containers/Header";
import LeftSideBar from "./containers/LeftSideBar";
import RightSideBar from "./containers/RightSideBar";
import Body from "./containers/Body";
const HomePage = () => {
  return (
    <div className="min-h-screen ">
      <Header />
      <main className="flex relative w-full h-screen pt-14  ">
        <LeftSideBar />
        <RightSideBar />
        <Body />
      </main>
    </div>
  );
};

export default HomePage;
