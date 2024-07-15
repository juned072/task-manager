import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div className="flex justify-between items-center p-3 shadow-sm border rounded-md mb-4">
      <div>
        <p>{task}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-sm">
          Edit
        </button>
        <button className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-sm">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
