import React from "react";
import Navbar from "../components/Navbar";
import { TopBar } from "../components/TopBar";
import { DashBoard } from "../components/DashBoard";

function Home() {
  return (
    <div className="max-h-screen flex ">
      <Navbar />
      <div className="content w-full max-h-screen overflow-hidden">
        <TopBar />
        <DashBoard />
      </div>
    </div>
  );
}

export default Home;
