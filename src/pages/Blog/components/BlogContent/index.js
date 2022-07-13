// import from file
import reactImg from "../../../../assets/img/react.jpg";
// import library
import React from "react";

const BlogContent = ({ author, time, title, paragraph }) => {
  return (
    <div>
      <div
        className={`hover:bg-slate-200 py-3 px-4 my-2 mx-6 flex rounded-lg shadow-lg bg-white cursor-pointer`}
      >
        <img src={reactImg} alt="react" className={`w-32 h-32 rounded-lg`} />
        <div className="ml-6">
          <div className="flex items-center">
            <h1 className="bg-mainColor3 p-1 text-sm rounded-lg text-white font-semibold">
              {author}
            </h1>
            <p className="px-2 text-textColor text-sm">- {time}</p>
          </div>
          <h1 className="rounded-lg text-xl font-medium text-black">{title}</h1>
          <p className="text-textColor text-xs">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
