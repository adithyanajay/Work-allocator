import React, { useEffect, useState } from "react";
import UserNavIcon from "./UserNavIcon";
import { userIcon } from "../assets";

export const WorkBox = ({ Title, date, user, difficulty, pro }) => {
  let color = "";

  if (difficulty == 1) {
    color = "bg-cardGreen";
  } else if (difficulty == 2) {
    color = "bg-cardBlue";
  } else {
    color = "bg-cardRed";
  }

  return (
    <div
      className={`box ${color} h-52 w-72 rounded-lg shadow-md cursor-pointer hover:opacity-95 p-5`}
    >
      <div className="content ">
        <h1 className="Work-title text-white text-3xl font-extrabold mb-5">
          Work Title
        </h1>

        {/* <p className="text-white text-lg font-semibold">Assigned to user</p> */}
        <UserNavIcon icon={userIcon} name={"Harigovind"} hover="" />
        <p className="text-white text-sm font-semibold my-2">
          Due date: 12/2/23
        </p>
      </div>

      <div className="bar w-full h-2 border border-white  rounded-md mt-5 flex justify-start items-center">
        <div className={`process w-${pro}/12 bg-white h-1  rounded-md`}></div>
      </div>
    </div>
  );
};
