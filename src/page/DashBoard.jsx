import "../App.css";
import { WorkBox } from "../components/WorkBox";
import { useSelector } from "react-redux";

export const DashBoard = () => {
  const work = useSelector((state) => state.work.data);
  return (
    <div className="bg-slate-100 gridsystem  p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 min-h-full max-h-screen overflow-y-auto justify-items-center  w-full pb-32">
      {work.map((work, key) => {
        return (
          <WorkBox
            title={work.title}
            user={work.user}
            difficulty={work.difficulty}
            pro={2}
            key={key}
          />
        );
      })}
    </div>
  );
};
