import React, { useDebugValue, useEffect, useState } from "react";
import UserNavIcon from "./UserNavIcon";
import { dropdown, userIcon } from "../assets";
import { project_1 } from "../constants";
import NavDropdown from "./NavDropdown";
import NavTeam from "./NavTeam";

function Navbar({ setUser }) {
  const [team, setTeam] = useState(project_1);
  useEffect(() => {
    setUser(team.users);
  }, [team]);
  return (
    <div className="navbar p-2 w-1/6 max-w-lg bg-whtie shadow-lg min-h-screen left-0 top-0 max-h-screen">
      <div className="logo w-full text-center py-10 border-b border-white">
        <h1 className=" uppercase text-black font-extrabold text-xl">Logo</h1>
      </div>
      <div className="usericons my-3">
        <UserNavIcon name={"Harigovind"} icon={userIcon} />
      </div>
      <div className="Memebers">
        <NavDropdown heading={"Members"} icons={dropdown} items={team} />
      </div>
      <div className="team">
        <NavTeam setTeam={setTeam} />
      </div>
    </div>
  );
}

export default Navbar;
