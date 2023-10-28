import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const TopBar = () => {
  const [display, setDisplay] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname == "/dashboard") {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [location]);

  return (
    <div className="sticky topbar top-0 w-full right-0 bg-white flex py-2 px-5 shadow-sm items-center h-14">
      <div>
        <a href="/addwork">
          <button
            className={`${
              display ? "" : "hidden"
            } btn rounded-lg bg-mainGreen p-1 hover:bg-secGreen`}
          >
            <h1 className="text-white font-bold text-lg py-1 px-3">ADD</h1>
          </button>
        </a>
      </div>
      <div className="txt w-full text-center">Team Name</div>
    </div>
  );
};
