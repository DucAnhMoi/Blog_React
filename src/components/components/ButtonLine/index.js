// import from file
import styles from "./ButtonLine.module.scss";
// import library
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function ButtonLine({ children }) {
  // UI
  return (
    <div
      className={`mx-2 py-1 flex justify-center cursor-pointer ${cx(
        "wrapper"
      )} overflow-hidden`}
    >
      {/* outline button */}
      <div> {children} </div>
      <div className={cx("cl-outline")}></div>
    </div>
  );
}

export default ButtonLine;
