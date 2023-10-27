// import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import { WorkBox } from "../components/WorkBox";

export const DashBoard = () => {
  const [work, setWork] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("work")) {
      localStorage.setItem(
        "work",
        JSON.stringify([
          {
            title: "Navbar",
            user: "Harigovind",
            dueDate: "12/2/2023",
          },
        ])
      );
    }
  }, []);
  return (
    <div className="bg-slate-100 gridsystem  p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 min-h-full max-h-full overflow-scroll justify-items-center items-center w-full">
      <WorkBox difficulty={3} />
      <WorkBox difficulty={2} />
      <WorkBox difficulty={1} />
      <WorkBox difficulty={2} />
      <WorkBox difficulty={3} />
      <WorkBox difficulty={2} />
      <WorkBox difficulty={1} />
      <WorkBox difficulty={2} />
      <WorkBox difficulty={3} />
    </div>
  );
};
