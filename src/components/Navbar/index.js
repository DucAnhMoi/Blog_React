// import from file
import Brand from "./components/Brand";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Button from "../components/Button";
import NavOption from "./components/NavOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import library
import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const Navbar = () => {
  const [mountNav, setmountNav] = useState(false);
  if (mountNav) {
    window.onclick = () => setmountNav(!mountNav);
  }
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
        {window.innerWidth >= 768 ? (
          <NavOption items={"items-center"} />
        ) : (
          <div className="relative">
            <Button>
              <FontAwesomeIcon
                className="text-[1.2rem] pt-2 relative"
                icon={faBars}
                onClick={(e) => {
                  setmountNav(!mountNav);
                  e.stopPropagation();
                }}
              />
            </Button>
            {mountNav && (
              <div
                className="absolute bg-slate-100 shadow-2xl p-2 w-40 left-1/2 top-full"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <NavOption flexType={"flex-col"} items={"justify-start"} />
              </div>
            )}
          </div>
        )}
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
