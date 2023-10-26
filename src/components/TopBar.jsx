import React from "react";

export const TopBar = () => {
  return (
    <div className="sticky topbar top-0 w-full right-0 bg-white flex py-2 px-5 shadow-sm items-center ">
      <div>
        <button className="btn rounded-lg bg-mainGreen p-1 hover:bg-secGreen">
          <h1 className="text-white font-bold text-lg py-1 px-3">ADD</h1>
        </button>
      </div>
      <div className="txt w-full text-center">Team Name</div>
    </div>
  );
};
