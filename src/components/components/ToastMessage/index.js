// import library
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import from file
import styles from "./ToastMessage.module.scss";
import {
  faCircleCheck,
  faCircleExclamation,
  faCircleInfo,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ToastMessage = ({ id, title, message, type, duration, handleDelete }) => {
  const icontype = [
    faCircleCheck,
    faCircleExclamation,
    faCircleInfo,
    faCircleExclamation,
  ];
  var iconn, colorState;
  switch (type) {
    case "success":
      iconn = icontype[0];
      colorState = "#47d864";
      break;
    case "error":
      iconn = icontype[1];
      colorState = "#ff623d";

      break;
    case "info":
      iconn = icontype[2];
      colorState = "#2f86eb";

      break;
    case "warning":
      iconn = icontype[3];
      colorState = "#ffc021";

      break;
    default:
      iconn = icontype[0];
      colorState = "#47d864";
  }

  return (
    <div id={cx("toast")}>
      <div className={cx("toast")}>
        <div
          style={{ backgroundColor: colorState }}
          className={cx("line")}
        ></div>
        <FontAwesomeIcon
          style={{ color: colorState }}
          className={cx("icon")}
          icon={iconn}
        />
        <div className={cx("body")}>
          <h3 className={cx("title")}>{title}</h3>
          <p className={cx("message")}>{message}</p>
        </div>
        <FontAwesomeIcon
          style={{ color: colorState }}
          className={cx("close")}
          icon={faCircleXmark}
          onClick={(e) => handleDelete(e, id)}
        />
      </div>
    </div>
  );
};

export default ToastMessage;
