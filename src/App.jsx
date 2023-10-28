
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import { TopBar } from "./components/TopBar";
import { DashBoard } from "./page/DashBoard";
import Team from "./page/Team";
import Notfound from "./page/Notfound";
import Addwork from "./page/Addwork";

function App() {
  return (
    <div className="max-h-screen">
      <div className="max-h-screen flex ">
        <Navbar />
        <div className="content w-full max-h-screen overflow-hidden">
          <TopBar />
          <Routes>
            <Route path="/" element={<Team />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/addwork" element={<Addwork />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
