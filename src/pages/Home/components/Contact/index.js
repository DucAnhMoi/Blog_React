// import library
import React from "react";
// import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import from file
// import styles from "./Search.module.scss";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// const cx = classNames.bind(styles);

const Contact = () => {
  return (
    <div className="mt-12 flex justify-center items-center">
      <div
        className="text-xl mx-2 bg-slate-200 hover:bg-slate-300 hover:text-3xl w-14 h-14 flex justify-center items-center"
        style={{ borderRadius: "50%" }}
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </div>
      <div
        className="text-xl mx-2 bg-slate-200 hover:bg-slate-300 hover:text-3xl w-14 h-14 flex justify-center items-center"
        style={{ borderRadius: "50%" }}
      >
        <FontAwesomeIcon icon={faTwitter} />
      </div>
      <div
        className="text-xl mx-2 bg-slate-200 hover:bg-slate-300 hover:text-3xl w-14 h-14 flex justify-center items-center"
        style={{ borderRadius: "50%" }}
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </div>
      <div
        className="text-xl mx-2 bg-slate-200 hover:bg-slate-300 hover:text-3xl w-14 h-14 flex justify-center items-center"
        style={{ borderRadius: "50%" }}
      >
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  );
};

export default Contact;
