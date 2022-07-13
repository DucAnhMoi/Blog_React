// import from file
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgetPassword from "./ForgetPassword";
import { isSignInSelector } from "../../redux/selector";
import mountSlice from "../sliceRedux/mountSlice";
// import library
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames/bind";
import styles from "./FormSign.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function FormSign() {
  // Get state and dispatch action from redux store
  const dispatch = useDispatch();
  const isSignIn = useSelector(isSignInSelector);
  const handleMountSignForm = (e) => {
    dispatch(mountSlice.actions.isMountSignForm());
    e.stopPropagation();
  };
  var cssLeft;
  // from innerWidth set Css
  if (!isSignIn) {
    if (window.innerWidth <= 768) {
      cssLeft = { left: "0" };
    } else {
      cssLeft = { left: "50%" };
    }
  } else {
    cssLeft = { left: "0" };
  }
  // UI
  return (
    <div className={`${cx("formsignin")} flex items-center justify-center`}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${cx("bgform")} flex items-center relative overflow-hidden`}
      >
        <img
          src="https://ben.com.vn/tin-tuc/wp-content/uploads/2020/09/hinh-nen-may-tinh-anime-phong-canh.jpg"
          alt="anh1"
          className={`${cx("img")}`}
        />
        <FontAwesomeIcon
          className={cx("icon")}
          icon={faCircleXmark}
          onClick={(e) => handleMountSignForm(e)}
        />
        <div className={`${cx("bgform-2")} absolute `} style={cssLeft}>
          <div className={`${cx("bgform-3")} relative overflow-hidden`}>
            {/* Sign form */}
            <SignIn isSignIn={isSignIn} />
            <SignUp isSignIn={isSignIn} />
            <ForgetPassword />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSign;
