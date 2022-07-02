// import from file
import Brand from "./components/Brand";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Button from "../components/Button";
// import library
import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";

const cx = classNames.bind(styles);

const Navbar = () => {
  // UI
  return (
    <div
      className={`w-full h-20 flex items-center justify-between px-4 mb-4 z-10 fixed ${cx(
        "navbar"
      )}`}
    >
      <div className="flex items-center">
        {/* Brand */}
        <div className="">
          <Brand />
        </div>
        {/* Option */}
        <div className="flex items-center">
          <Button>
            <Link className={`${cx("link")}`} to="/">
              Home
            </Link>
          </Button>
          <Button>
            <Link className={`${cx("link")}`} to="/About">
              About
            </Link>
          </Button>
          <Button>
            <Link className={`${cx("link")}`} to="/Blog">
              Blog
            </Link>
          </Button>
          <Button>
            <Link className={`${cx("link")}`} to="/AddBlog">
              AddBlog
            </Link>
          </Button>
        </div>
      </div>
      {/* Sign In, Sign Out */}
      <div className="flex items-center">
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
};

export default Navbar;
