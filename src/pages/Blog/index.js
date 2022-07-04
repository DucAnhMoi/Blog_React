// import library
import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import from file
import styles from "./Blog.module.scss";
import { listBlogSelector } from "../../redux/selector";
import ContentBlog from "../../components/home/Content/ContentBlog";

const cx = className.bind(styles);

const Blog = () => {
  const listBlog = useSelector(listBlogSelector);
  const [type, setType] = useState("All");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div className="mt-24 px-4">
      <div className="flex items-center">
        <div className="mr-2">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Age"
            onChange={handleChange}
            className="bg-white cursor-pointer"
          >
            <MenuItem value={"New"}>New</MenuItem>
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"Hot"}>Hot</MenuItem>
          </Select>
        </div>
        <div>
          <TextField
            id="outlined-search"
            label="Search ..."
            type="search"
            variant="outlined"
            className={cx("search-input")}
          />
        </div>
        <div
          style={{
            backgroundColor: "var(--main-color-1)",
            color: "rgba(255,255,255)",
            fontSize: "1.2rem",
          }}
          className="py-2 px-8 ml-2 h-14 flex items-center rounded-lg cursor-pointer hover:opacity-50"
        >
          <FontAwesomeIcon className="text-xl" icon={faMagnifyingGlass} />
        </div>
      </div>
      <div>
        <div className={`w-full my-8 ${cx("content-sub")}`}>
          {listBlog.map((blog) => (
            <Link key={blog.id} to={`/Blog/blog${blog.id}`}>
              <ContentBlog
                author={blog.author}
                time={blog.time}
                title={blog.title}
                paragraph={blog.paragraph}
                isBlogMain={false}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
