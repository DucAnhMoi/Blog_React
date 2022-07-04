// import library
import React from "react";
import classNames from "classnames/bind";
// import from file
import styles from "./Title.module.scss";

const cx = classNames.bind(styles);

const Title = () => {
  return (
    <div>
      <div
        className={`font-extrabold text-5xl justify-center flex mt-10 text-black ${cx(
          "main"
        )}`}
      >
        Plan Your Success !
      </div>
      <div
        className={`font-extrabold text-xl justify-center py-2 flex ${cx(
          "sub"
        )}`}
      >
        Search us on all platforms
      </div>
    </div>
  );
};

export default Title;
