import React from "react";

function UserNavIcon({ icon, name }) {
  return (
    <div className="flex items-center justify-start gap-3">
      <div className="icon w-8">
        <img src={icon} alt="" className="w-full rounded-full" />
      </div>

      <p className="text-white text-sm">{name}</p>
    </div>
  );
}

export default UserNavIcon;
