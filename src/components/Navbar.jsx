import React from "react";

function Navbar({}) {
  return (
    <div className="navbar w-1/6 max-w-lg bg-blue-900 min-h-screen left-0 top-0 sticky">
      <div className="logo w-full text-center py-10 border-b border-white">
        <h1 className="uppercase text-white font-extrabold text-xl">Logo</h1>
      </div>
    </div>
  );
}

export default Navbar;
