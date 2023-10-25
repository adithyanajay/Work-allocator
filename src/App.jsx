import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Workspace from "./page/Workspace";
import Notfound from "./page/Notfound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Workspace />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
