import React, { useState } from "react";
import { userIcon } from "../assets";
import UserNavIcon from "./UserNavIcon";

function NavDropdown({ heading, items, icons }) {
  const [display, setDisplay] = useState(true);
  return (
    <div className="">
      <div
        className="heading flex items-center justify-start gap-3 cursor-pointer border-b-2 pb-2"
        onClick={() => setDisplay(!display)}
      >
        <p className="text-black text-sm">{heading}</p>
        <div className="symbol w-5 cursor-pointer">
          <img src={icons} alt="" className="w-full" />
        </div>
      </div>
      <div
        className={`users ${display ? "" : "hidden"} max-h-44 overflow-scroll`}
      >
        {items.users.map((item, key) => {
          return (
            <div className="my-2" key={key}>
              <UserNavIcon name={item.name} key={key} icon={userIcon} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavDropdown;
