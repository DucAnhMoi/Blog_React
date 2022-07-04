// import from file
import styles from "./ContentMain.module.scss";
import ContentBlog from "../ContentBlog";
import { listBlogSelector } from "../../../../redux/selector";
// import library
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import className from "classnames/bind";
const cx = className.bind(styles);

const ContentMain = () => {
  const blogList = useSelector(listBlogSelector);
  return (
    <div className={`w-1/2 ${cx("content-sub")}`}>
      {blogList.map((blog, i) =>
        i < 3 ? (
          <Link key={blog.id} to={`/Blog/blog${blog.id}`}>
            <ContentBlog
              author={blog.author}
              time={blog.time}
              title={blog.title}
              paragraph={blog.paragraph}
              isBlogMain={true}
            />
          </Link>
        ) : null
      )}
    </div>
  );
};

export default ContentMain;
