// import from file
import styles from "./Button.module.scss";
// import library
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Button({ children }) {
  // UI
  return (
    <div
      className={`p-2 flex justify-center cursor-pointer ${cx(
        "wrapper"
      )} overflow-hidden`}
    >
      {/* outline button */}
      <div className={cx("cl-outline-1")}></div>
      <div className={cx("cl-outline-2")}></div>
      <div className={cx("cl-outline-3")}></div>
      <div className={cx("cl-outline-4")}></div>
      <div> {children} </div>
    </div>
  );
}

export default Button;
