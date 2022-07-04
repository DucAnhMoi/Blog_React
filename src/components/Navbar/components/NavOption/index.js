// import from file
import Button from "../../../components/Button";
import styles from "./NavOption.module.scss";
// import library
import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const NavOption = ({ flexType, items }) => {
  return (
    <div className={`flex ${flexType} ${items}`}>
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
        <Link className={`${cx("link")}`} to="/Todos">
          Todos
        </Link>
      </Button>
    </div>
  );
};

export default NavOption;
