import React from "react";

const PostItem = ({ post }) => {
  return (
    <div className="bg-white m-4 py-4 px-6 rounded-lg shadow-lg hover:bg-slate-300 cursor-pointer">
      <h1 className="text-mainColor1 text-2xl my-1">{post.title}</h1>
      <p className="text-textColor text-sm">{post.body}</p>
    </div>
  );
};

export default PostItem;
