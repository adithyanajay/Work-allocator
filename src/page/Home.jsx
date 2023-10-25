import React from "react";
import Navbar from "../components/Navbar";
import { TopBar } from "../components/TopBar";
import { DashBoard } from "../components/DashBoard";

function Home() {
  return (
    <div>
      <TopBar/>
      <DashBoard/>
    </div>
  );
}

export default Home;
