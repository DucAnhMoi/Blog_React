// import library
import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import from file
import styles from "./Blog.module.scss";
import { listBlogSelector } from "../../redux/selector";
import BlogContent from "../Blog/components/BlogContent";

const cx = className.bind(styles);

const Blog = () => {
  const listBlog = useSelector(listBlogSelector);
  const [textSearch, setTextSearch] = useState({
    type: "All",
    text: "",
  });

  const handleChangeTextField = (event) => {
    setTextSearch((prev) => ({ ...prev, text: event.target.value }));
  };

  const handleChangeOption = (event) => {
    setTextSearch((prev) => ({ ...prev, type: event.target.value }));
  };

  const handleSubmit = () => {
    console.log(textSearch);
  };

  return (
    <div className="mt-24 px-4">
      <div className="flex items-center">
        <div className="mr-2">
          <select
            value={textSearch.type}
            onChange={(e) => handleChangeOption(e)}
            className="bg-white cursor-pointer p-4 text-lg"
          >
            <option value="New">All</option>
            <option value="All">New</option>
            <option value="Hot">Hot</option>
          </select>
        </div>
        <div>
          <TextField
            value={textSearch.text}
            id="outlined-search"
            label="Search ..."
            type="search"
            variant="outlined"
            className={cx("search-input")}
            onChange={(e) => handleChangeTextField(e)}
          />
        </div>
        <div
          style={{
            backgroundColor: "var(--main-color-1)",
            color: "rgba(255,255,255)",
            fontSize: "1.2rem",
          }}
          className="py-2 px-8 ml-2 h-14 flex items-center rounded-lg cursor-pointer hover:opacity-50"
          onClick={handleSubmit}
        >
          <FontAwesomeIcon className="text-xl" icon={faMagnifyingGlass} />
        </div>
      </div>
      <div>
        <div className={`w-full my-8 ${cx("content-sub")}`}>
          {listBlog.map((blog) => (
            <Link key={blog.id} to={`/Blog/blog${blog.id}`}>
              <BlogContent
                author={blog.author}
                time={blog.time}
                title={blog.title}
                paragraph={blog.paragraph}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
