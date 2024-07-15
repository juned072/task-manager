import React, { useState } from "react";
import TaskCard from "./TaskCard";

const TaskContainer = () => {
  const [inputField, setInputField] = useState("");

  return (
    <div className="bg-slate-950 h-screen flex justify-center items-center ">
      <div className="w-[500px] min-h-[500px] bg-white rounded-md p-5">
        <h1 className="text-center font-semibold text-2xl text-gray-800 mb-5">
          Task Manager
        </h1>
        <form>
          <div className="flex justify-between items-center space-x-2 ">
            <input
              value={inputField}
              onChange={(e) => setInputField(e.target.value)}
              type="text"
              placeholder="Type your task..."
              className="bg-gray-100 rounded-md w-full p-3 outline-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 p-3 rounded-md text-white"
            >
              Add
            </button>
          </div>
          <p className="text-gray-500 py-2">All Tasks</p>
        </form>
        <div className="mt-5">
          <TaskCard />
        </div>
      </div>
    </div>
  );
};

export default TaskContainer;
