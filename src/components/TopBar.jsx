import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const TopBar = ({ teamName }) => {
  const [display, setDisplay] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname == "/dashboard") {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [location]);

  const navigate = useNavigate();

  return (
    <div className="sticky topbar top-0 w-full right-0 bg-white flex py-2 px-5 shadow-sm items-center h-14">
      <div>
        <button
          className={`${
            display ? "" : "hidden"
          } btn rounded-lg bg-mainGreen p-1 hover:bg-secGreen`}
          onClick={() => {
            navigate("/addwork");
          }}
        >
          <h1 className="text-white font-bold text-lg py-1 px-3">ADD</h1>
        </button>
      </div>
      <div className="txt w-full text-center">{teamName}</div>
    </div>
  );
};
