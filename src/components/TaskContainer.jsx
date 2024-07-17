import React, { useState } from "react";
import TaskCard from "./TaskCard";

const TaskContainer = () => {
  const [inputField, setInputField] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEdited, setIsEdited] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmitTask = (e) => {
    e.preventDefault();
    if (isEdited) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editId ? { ...task, text: inputField } : task
        )
      );
      setIsEdited(false);
      setEditId(null);
    } else {
      if (inputField.trim()) {
        const newTask = { id: Date.now(), text: inputField };
        setTasks((prevTasks) => [newTask, ...prevTasks]);
      }
    }
    setInputField("");
  };

  const handleEditTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setInputField(taskToEdit.text);
      setIsEdited(true);
      setEditId(id);
    }
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-slate-950 h-screen flex justify-center items-center">
      <div className="md:min-w-[500px] md:max-w-[500px] w-80 min-h-[500px] max-h-[500px] overflow-auto bg-white rounded-md p-5">
        <h1 className="text-center font-semibold text-2xl text-gray-800 mb-5">
          Task Manager
        </h1>
        <form onSubmit={handleSubmitTask}>
          <div className="flex justify-between items-center space-x-2">
            <input
              value={inputField}
              onChange={(e) => setInputField(e.target.value)}
              type="text"
              placeholder="Type your task..."
              className="bg-gray-100 rounded-md w-full p-3 outline-blue-400"
            />
            <button
              type="submit"
              className={`${
                isEdited
                  ? "bg-red-600 hover:bg-red-700 p-3 rounded-md text-white"
                  : "bg-blue-600 hover:bg-blue-700 p-3 rounded-md text-white"
              }  `}
            >
              {isEdited ? "Update" : "Add"}
            </button>
          </div>
          {tasks.length === 0 ? (
            <p className="text-gray-400 py-4">0 Task Available</p>
          ) : (
            <p className="text-gray-500 py-4">All Tasks</p>
          )}
        </form>
        <div className="mt-5">
          {tasks.length === 0 ? (
            <div className="flex justify-center items-center h-60">
              <p className="text-slate-500">No Task!</p>
            </div>
          ) : (
            <>
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  handleEditTask={handleEditTask}
                  handleDeleteTask={handleDeleteTask}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskContainer;
