import React from "react";

const AlbumItem = ({ album }) => {
  return (
    <div className="bg-white m-4 py-4 px-6 rounded-lg shadow-lg hover:bg-slate-300 cursor-pointer">
      <h1 className="text-mainColor1 text-2xl my-1">{album.title}</h1>
      <p className="text-textColor text-sm hover:text-mainColor1">See more</p>
    </div>
  );
};

export default AlbumItem;
