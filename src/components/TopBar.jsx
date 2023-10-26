import React from "react";

export const TopBar = () => {
  return (

    <div className="topbar sticky top-0 left-0 right-0 bg-mainGreen flex py-2 px-2">
      <div>
        <button className="btn rounded-lg bg-white p-1">Add</button>
      </div>
      <div className="txt w-full text-center">Team Name</div>

    </div>
  );
};
