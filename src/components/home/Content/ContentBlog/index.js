// import from file
import styles from "./ContentBlog.module.scss";
import reactJpg from "../../../../assets/img/react.jpg";
import reactImg from "../../../../assets/img/react.png";
// import library
import React from "react";
import className from "classnames/bind";
const cx = className.bind(styles);

const ContentBlog = ({ isBlogMain, author, time, title, paragraph }) => {
  return (
    <div>
      {isBlogMain ? (
        <div
          className={`${cx(
            "content-blog"
          )} hover:bg-slate-200 bg-white rounded-lg py-3 px-4 mt-2 mb-4 mx-6 cursor-pointer`}
        >
          <img
            src={reactJpg}
            alt="react"
            className={`w-[640px] h-64 rounded-lg`}
          />
          <div>
            <div className="flex items-center py-3">
              <h1 className="bg-mainColor3 p-1 rounded-lg text-white font-bold">
                {author}
              </h1>
              <p className="px-2 text-textColor text-base">- {time}</p>
            </div>
            <h1 className="rounded-lg text-3xl font-semibold text-black">
              {title}
            </h1>
            <p className="text-textColor text-base py-2">{paragraph}</p>
          </div>
        </div>
      ) : (
        <div
          className={`${cx(
            "content-blog"
          )} hover:bg-slate-200 py-3 px-4 my-2 mx-6 flex rounded-lg shadow-lg bg-white cursor-pointer`}
        >
          <img src={reactImg} alt="react" className={`w-32 h-32 rounded-lg`} />
          <div className="ml-6">
            <div className="flex items-center">
              <h1 className="bg-mainColor3 p-1 text-sm rounded-lg text-white font-semibold">
                {author}
              </h1>
              <p className="px-2 text-textColor text-sm">- {time}</p>
            </div>
            <h1 className="rounded-lg text-xl font-medium text-black">
              {title}
            </h1>
            <p className="text-textColor text-xs">{paragraph}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentBlog;
