import React from "react";
import "../App.css";
import { WorkBox } from "./WorkBox";
export const DashBoard = () => {
  return (
    <div className="bg-slate-100 gridsystem  p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 min-h-full max-h-full overflow-scroll justify-items-center ">
      <WorkBox difficulty={3} />
      <WorkBox difficulty={2} />
      <WorkBox difficulty={1} />
      <WorkBox difficulty={2} />
      <WorkBox difficulty={3} />
    </div>
  );
};
