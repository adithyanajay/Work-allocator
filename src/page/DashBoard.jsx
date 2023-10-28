import "../App.css";
import { WorkBox } from "../components/WorkBox";

export const DashBoard = () => {
  return (
    <div className="bg-slate-100 gridsystem  p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 min-h-full max-h-screen overflow-y-auto justify-items-center  w-full pb-32">
      <WorkBox difficulty={3} pro={3} />
    </div>
  );
};
