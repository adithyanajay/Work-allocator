import React from "react";

function UserNavIcon({ icon, name, hover = "bg-slate-100" }) {
  return (
    <div
      className={`flex items-center justify-start gap-3 rounded-md px-2 py-2 hover:${hover}`}
    >
      <div className="icon w-8">
        <img src={icon} alt="" className="w-full rounded-full" />
      </div>

      <p className="text-black text-sm">{name}</p>
    </div>
  );
}

export default UserNavIcon;
