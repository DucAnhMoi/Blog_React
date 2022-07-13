import React from "react";
import classNames from "classnames/bind";
import styles from "./Brand.module.scss";

const cx = classNames.bind(styles);

const Brand = ({ textColor }) => {
  return (
    <div className={`font-indieFlo text-5xl mr-6 ${cx("brand")} ${textColor}`}>
      DucAnhMoi
    </div>
  );
};

export default Brand;
