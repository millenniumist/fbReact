import React from "react";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import Body from "./components/Body";
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
