// import library
import React from "react";
import classNames from "classnames/bind";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import from file
import styles from "./Search.module.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const Search = () => {
  return (
    <div>
      <div
        className={`flex justify-center items-center mt-6 px-6 h-24 rounded-xl bg-white ${cx(
          "wrapper"
        )}`}
      >
        <TextField
          id="outlined-search"
          label="Search ..."
          type="search"
          variant="outlined"
          className={cx("search-input")}
        />
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
    </div>
  );
};

export default Search;
