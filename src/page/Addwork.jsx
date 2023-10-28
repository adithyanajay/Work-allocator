import React, { useState } from "react";
import UserNavIcon from "../components/UserNavIcon";
import { userIcon } from "../assets";
import Todolist from "../components/Todolist";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateWork } from "../Redux/features/work/workSlice";

function Addwork({ users }) {
  const [workTitle, setWorkTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [selectedUser, setSelectedUser] = useState("");
  const [editUser, setEditUser] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitWork = () => {
    if (
      workTitle !== "" &&
      description !== "" &&
      selectedUser !== "" &&
      editUser !== true
    ) {
      dispatch(
        updateWork({
          title: workTitle,
          description: description,
          user: selectedUser,
          difficulty: difficulty
        })
      );
      navigate("/dashboard");
    }
  };

  return (
    <div className="work h-full bg-slate-100 flex justify-center pb-30">
      <div className="relative max-h-96 w-3/4 max-w-3xl bg-white px-5 py-10 rounded-md shadow-md h-fit mt-16 flex gap-5">
        <div className="content w-1/2 ">
          <div className="work-title flex items-center gap-3 ">
            <h1 className="text-mainGreen text-xl block">Work Title:</h1>
            <input
              type="text"
              name="worktitle"
              id="worktitle"
              className="border-2 border-mainGreen rounded-lg h-8 w-1/2 px-2 text-base"
              value={workTitle}
              onChange={(e) => setWorkTitle(e.target.value)}
            />
          </div>
          <div className="description mt-5">
            <h1 className="text-xl text-mainGreen mb-2">Description:</h1>
            <textarea
              name=""
              id=""
              cols="30"
              rows="2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border-2 border-mainGreen rounded-lg resize-none p-3 text-base"
            ></textarea>
          </div>
          <p className="text-mainGreen text-base mt-4">Difficulty:</p>
          <form className="difficulty flex h-5">
            <div className="container w-18 ">
              <input
                type="radio"
                id="easy"
                value={1}
                checked={difficulty == 1}
                onChange={() => setDifficulty(1)}
              />
              <label htmlFor="easy" className="text-base text-mainGreen pl-3">
                Easy
              </label>
            </div>
            <div className="container">
              <input
                type="radio"
                id="medium"
                value={2}
                checked={difficulty == 2}
                onChange={() => setDifficulty(2)}
              />
              <label htmlFor="meduim" className="text-base text-mainGreen pl-3">
                Medium
              </label>
            </div>
            <div className="container">
              <input
                type="radio"
                id="hard"
                value={3}
                checked={difficulty == 3}
                onChange={() => setDifficulty(3)}
              />
              <label htmlFor="easy" className="text-base text-mainGreen pl-3">
                Hard
              </label>
            </div>
          </form>

          <Todolist />
        </div>

        <div className="user border-l-2 border-slate-200 pl-5">
          <div className={`selected-user ${editUser ? "" : "hidden"}`}>
            <h1 className="text-mainGreen text-xl mb-5">Select user:</h1>
            <div className="users-selection">
              {users.map((user, key) => {
                return (
                  <div
                    className="container cursor-pointer my-2 hover:bg-slate-100 w-60 rounded-md"
                    key={key}
                    onClick={() => {
                      setEditUser(false);
                      setSelectedUser(user.name);
                    }}
                  >
                    <UserNavIcon icon={userIcon} name={user.name} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`selected-user ${editUser ? "hidden" : ""}`}>
            <h1 className="text-2xl text-mainGreen mb-5">Selected User:</h1>
            <UserNavIcon icon={userIcon} name={selectedUser} />
            <button
              className="bg-mainGreen text-white text-base px-4 py-2  rounded-md hover:text-mainGreen hover:bg-white border-2 border-mainGreen mt-5"
              onClick={() => {
                setEditUser(true);
                setSelectedUser("");
              }}
            >
              <p>Edit</p>
            </button>
          </div>
        </div>
        <button
          onClick={submitWork}
          className="absolute right-5 bottom-5 text-white bg-mainGreen px-3 py-2 text-lg rounded-md border-2 border-mainGreen hover:bg-white hover:text-mainGreen"
        >
          <p>Submit</p>
        </button>
      </div>
    </div>
  );
}

export default Addwork;
