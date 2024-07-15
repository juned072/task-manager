import React from "react";

const TaskCard = () => {
  return (
    <div className="flex justify-between items-center p-3 shadow-md border rounded-md">
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          odio.
        </p>
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
