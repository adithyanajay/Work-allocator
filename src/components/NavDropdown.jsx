import React, { useState } from "react";
import { userIcon } from "../assets";
import UserNavIcon from "./UserNavIcon";

function NavDropdown({ heading, items, icons }) {
  const [display, setDisplay] = useState(true);
  return (
    <div className="">
      <div className="heading flex items-center justify-start gap-3">
        <p className="text-white text-sm">{heading}</p>
        <div
          className="symbol w-5 cursor-pointer"
          onClick={() => setDisplay(!display)}
        >
          <img src={icons} alt="" className="w-full" />
        </div>
      </div>
      <div className={`users ${display ? "" : "hidden"}`}>
        {items.users.map((item, key) => {
          return <UserNavIcon name={item.name} key={key} icon={userIcon} />;
        })}
      </div>
    </div>
  );
}

export default NavDropdown;
