import React from "react";
import SideBar from "../Sidebar/Sidebar";
import CreatePost from "../CreatePost/CreatePost";

function HomePage() {
  return (
    <div className="container flex flex-row">
      <SideBar />
      <div className="container-fluid flex flex-row"></div>
      <CreatePost />
    </div>
  );
}

export default HomePage;
