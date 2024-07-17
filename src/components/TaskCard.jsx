import React from "react";
import { MdEditSquare, MdDelete } from "react-icons/md";

const TaskCard = ({ task, handleDeleteTask, handleEditTask }) => {
  return (
    <div className="flex justify-between items-center p-4 shadow-sm border rounded-md mb-4">
      <div>
        <p className="w-40 md:w-72 break-words mr-2">{task.text}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleEditTask(task.id)}
          className="p-1 bg-blue-500 hover:bg-blue-600 text-white rounded-sm"
        >
          <MdEditSquare />
        </button>
        <button
          onClick={() => handleDeleteTask(task.id)}
          className="p-1 bg-red-500 hover:bg-red-600 text-white rounded-sm"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
