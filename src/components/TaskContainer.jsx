import React from "react";

const TaskContainer = () => {
  return (
    <div className="bg-slate-950 h-screen flex justify-center items-center ">
      <div className="w-[500px] min-h-[500px] bg-gray-200 rounded-md p-8">
        <h1 className="text-center font-semibold text-2xl text-gray-800 mb-5">
          Task Manager
        </h1>
        <form>
          <div className="flex justify-between items-center space-x-2 ">
            <input
              type="text"
              placeholder="type your task..."
              className="bg-white rounded-md w-full p-4 outline-blue-400"
            />
            <button className="bg-blue-600 hover:bg-blue-700 p-4 rounded-md text-white">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskContainer;
