import React from "react";

const UserItem = ({ user }) => {
  return (
    <div className="bg-white m-4 py-4 px-6 rounded-lg shadow-lg hover:bg-slate-300 cursor-pointer">
      <h1 className="text-mainColor1 text-2xl my-1">Name: {user.name}</h1>
      <h1 className="text-textColor text-lg my-1">UserName: {user.username}</h1>
      <h1 className="text-textColor text-lg my-1">Email: {user.email}</h1>
    </div>
  );
};

export default UserItem;
