import React from "react";

const PhotoItem = ({ photo }) => {
  return (
    <div className="bg-white m-4 py-4 px-6 rounded-lg shadow-lg hover:bg-slate-300 cursor-pointer">
      <h1 className="text-mainColor1 text-2xl my-1">{photo.title}</h1>
      <img className="w-[32px] h-[32px]" src={photo.url} alt={photo.id} />
    </div>
  );
};

export default PhotoItem;
