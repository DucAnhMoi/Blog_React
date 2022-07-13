// import from file
import styles from "./NavOption.module.scss";
import "./NavOption.css";
import ButtonLine from "../../../components/ButtonLine";
// import library
import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const NavOption = ({ flexType, items }) => {
  return (
    <div className={`flex ${flexType} ${items}`}>
      <ButtonLine activeclassname="active">
        <NavLink className={`${cx("link")} py-1`} to="/">
          Home
        </NavLink>
      </ButtonLine>
      <ButtonLine activeclassname="active">
        <NavLink className={`${cx("link")} py-1`} to="/About">
          About
        </NavLink>
      </ButtonLine>
      <ButtonLine activeclassname="active">
        <NavLink className={`${cx("link")} py-1`} to="/Blog">
          Blog
        </NavLink>
      </ButtonLine>
      <ButtonLine activeclassname="active">
        <NavLink className={`${cx("link")} py-1`} to="/Todos">
          Todos
        </NavLink>
      </ButtonLine>
    </div>
  );
};

export default NavOption;
