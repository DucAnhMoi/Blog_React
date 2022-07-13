import React from "react";

const CommentItem = ({ comment }) => {
  return (
    <div className="bg-white m-4 py-4 px-6 rounded-lg shadow-lg hover:bg-slate-300 cursor-pointer">
      <h1 className="text-black text-xs my-1">from {comment.email}</h1>
      <h1 className="text-mainColor1 text-2xl my-1">{comment.name}</h1>
      <p className="text-textColor text-sm">{comment.body}</p>
    </div>
  );
};

export default CommentItem;
