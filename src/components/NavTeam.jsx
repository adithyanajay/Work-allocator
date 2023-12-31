import React, { useState } from "react";
import NavDropdown from "./NavDropdown";
import { plus } from "../assets";
import { projects } from "../constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetWork } from "../Redux/features/work/workSlice";

function NavTeam({ setTeam, setTeamName }) {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="teams">
      <div className="heading flex items-center justify-start gap-3 border-b-2 py-2">
        <p className="text-black text-sm">Teams</p>
        <div
          className="symbol w-5 cursor-pointer"
          onClick={() => {
            setDisplay(!display);
          }}
        >
          <img src={plus} alt="" className="w-full" />
        </div>
      </div>
      <div
        className={`users ${display ? "" : "hidden"} overflow-scroll max-h-33`}
      >
        {projects.map((item, key) => {
          return (
            <div
              key={key}
              onClick={() => {
                setTeam(item.team);
                navigate("/dashboard");
                dispatch(resetWork());
                setTeamName(item.name)
              }}
              className="cursor-pointer my-2 bg-mainGreen rounded-md shadow-md hover:bg-secGreen"
            >
              <p className="text-white font-bold p-3">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavTeam;
