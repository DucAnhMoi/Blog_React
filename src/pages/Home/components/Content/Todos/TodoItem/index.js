import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <div className="bg-white m-4 py-4 px-6 rounded-lg shadow-lg hover:bg-slate-300 cursor-pointer flex items-center">
      <input
        type="checkbox"
        className="w-4 h-4 mx-3"
        checked={todo.completed}
      />
      <h1 className="text-mainColor1 text-2xl my-1">{todo.title}</h1>
    </div>
  );
};

export default TodoItem;
