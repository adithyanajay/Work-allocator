import React, { useEffect, useState } from "react";
import { editIcon, userIcon } from "../assets";
import UserNavIcon from "../components/UserNavIcon";
import { useNavigate } from "react-router-dom";

function Team() {
  const [edit, setEdit] = useState(true);
  const [teamName, setTeamName] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (teamName !== "" && users.length != 0) {
      setSubmit(true);
    }
  }, [teamName, users]);

  return (
    <div className="h-full bg-slate-100 flex justify-center ">
      <div className=" w-3/4 max-w-3xl bg-white px-5 py-10 rounded-md shadow-md h-fit mt-16">
        <div className="container ">
          <div className="mb-10 m-auto uppercase text-xl text-center font-bold w-1/2 p-3 bg-mainGreen text-white rounded-md">
            <div className={`container flex gap-3 ${edit ? "" : "hidden"}`}>
              <input
                type="text"
                className="w-full bg-mainGreen placeholder:text-slate-100 border-2 border-white rounded-lg p-2"
                placeholder="Enter Team Name"
                value={teamName}
                onChange={(e) => {
                  setTeamName(() => e.target.value);
                }}
              />
              <button
                className="text-2xl hover:bg-white hover:text-mainGreen border-2 border-white rounded-xl h-12 w-12"
                onClick={() => {
                  if (teamName !== "") {
                    setEdit(false);
                  }
                }}
              >
                <p className="">+</p>
              </button>
            </div>
            <div
              className={`${!edit ? "" : "hidden"} flex gap-4 justify-center `}
            >
              <h1>{teamName}</h1>
              <button className="w-6" onClick={() => setEdit(true)}>
                <img src={editIcon} alt="" className="w-full" />
              </button>
            </div>
          </div>
          <div className="content px-10 flex gap-8">
            <form
              className=""
              onSubmit={(e) => {
                e.preventDefault();
                if (userName !== "" && userEmail !== "") {
                  setUsers((prev) => [
                    ...prev,
                    { name: userName, email: userEmail },
                  ]);
                  setUserName("");
                  setUserEmail("");
                }
              }}
            >
              <h1 className="text-mainGreen text-xl font-bold mb-5">
                Add Team member:
              </h1>
              <div className="input mb-5 flex gap-5 items-center">
                <p htmlFor="name" className="text-mainGreen text-lg w-15">
                  Name:
                </p>
                <input
                  type="name"
                  placeholder="Enter name"
                  className="border-2 border-mainGreen px-3 py-2 rounded-lg "
                  value={userName}
                  onChange={(e) => {
                    setUserName(() => e.target.value);
                  }}
                />
              </div>

              <div className="input flex gap-5 items-center">
                <p htmlFor="name" className="text-mainGreen text-lg w-15">
                  Email:
                </p>
                <input
                  type="text"
                  placeholder="Enter email"
                  className="border-2 border-mainGreen px-3 py-2 rounded-lg "
                  value={userEmail}
                  onChange={(e) => {
                    setUserEmail(() => e.target.value);
                  }}
                />
              </div>

              <button
                type="submit"
                className={`bg-mainGreen text-white font-bold text-lg py-1 px-3 rounded-lg mt-5 hover:bg-white hover:text-mainGreen border-2 border-mainGreen`}
              >
                Add
              </button>
            </form>

            <div className="users border-l-2 border-slate-200">
              {users !== ""
                ? users.map((user, key) => {
                    return (
                      <UserNavIcon name={user.name} icon={userIcon} key={key} />
                    );
                  })
                : ""}
            </div>
          </div>
        </div>

        <button
          className={`${
            submit ? "" : "hidden"
          }  relative right-0 bg-mainGreen text-white font-bold text-lg py-1 px-3 rounded-lg mt-5 hover:bg-white hover:text-mainGreen border-2 border-mainGreen`}
          onClick={() => navigate("/dashboard")}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Team;
