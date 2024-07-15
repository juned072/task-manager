import React, { useState } from "react";
import TaskCard from "./TaskCard";

const TaskContainer = () => {
  const [inputField, setInputField] = useState("");
  const [Task, SetTask] = useState([]);

  const handleSubmitTask = (e) => {
    e.preventDefault();
    if (inputField.trim()) {
      SetTask((prevTask) => [inputField, ...prevTask]);
      setInputField("");
    }
  };

  const handleDeleteTask = (id) => {
    SetTask((prevTask) => prevTask.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-slate-950 h-screen flex justify-center items-center ">
      <div className="w-[500px] min-h-[500px] max-h-[500px] overflow-auto bg-white rounded-md p-5">
        <h1 className="text-center font-semibold text-2xl text-gray-800 mb-5">
          Task Manager
        </h1>
        <form onSubmit={handleSubmitTask}>
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
          {Task.length === 0 ? (
            <p className="text-gray-400 py-4"> 0 Task Available</p>
          ) : (
            <p className="text-gray-500 py-4">All Tasks</p>
          )}
        </form>
        <div className="mt-5">
          {Task.length === 0 ? (
            <div className="flex justify-center items-center h-60">
              <p className="text-slate-500">No Task!</p>
            </div>
          ) : (
            <>
              {Task.map((task, index) => {
                return (
                  <TaskCard
                    key={index}
                    task={task}
                    handleDeleteTask={handleDeleteTask}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskContainer;
