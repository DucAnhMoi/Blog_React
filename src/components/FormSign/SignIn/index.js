// import from file
import Brand from "../../components/Brand";
import ButtonWr from "../../components/Button";
import mountSlice from "../../sliceRedux/mountSlice";
import toastMessageSlice from "../../sliceRedux/toastMessageSlice";
import { mountForgetPasswordSelector } from "../../../redux/selector";
import styles from "./SignIn.module.scss";
// import library
import React, { useState } from "react";
import { nanoid } from "nanoid";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SignIn({ isSignIn }) {
  // Message rule
  const [textmessage, setTextMessage] = useState({
    msgEmail: "",
    msgPassword: "",
  });
  // Rule Submit
  const re = /\S+@\S+\.\S+/;
  const Rule = {
    isRequired: (data, type) => {
      if (!data && type === "email") {
        setTextMessage((prev) => ({
          ...prev,
          msgEmail: "Vui lòng nhập email",
        }));
        return false;
      } else if (!data && type === "password") {
        setTextMessage((prev) => ({
          ...prev,
          msgPassword: "Vui lòng nhập mật khẩu",
        }));
        return false;
      }
      return true;
    },
    isEmail: (data) => {
      if (!re.test(data) && data.trim().length > 0) {
        setTextMessage((prev) => ({
          ...prev,
          msgEmail: "Email không hợp lệ hoặc không tồn tại",
        }));
        return false;
      }
      return true;
    },
    min: (data, min) => {
      if (data.trim().length < min && data.trim().length > 0) {
        setTextMessage((prev) => ({
          ...prev,
          msgPassword: `Cần tối thiểu ${min} kí tự`,
        }));
        return false;
      }
      return true;
    },
    max: (data, max) => {
      if (data.trim().length > max) {
        setTextMessage((prev) => ({
          ...prev,
          msgPassword: `Tối đa ${max} kí tự`,
        }));
        return false;
      }
      return true;
    },
  };
  // Rule part
  const ruleEmail = () => {
    Rule.isEmail(data.email);
    Rule.isRequired(data.email, "email");
    if (Rule.isEmail(data.email) && Rule.isRequired(data.email, "email")) {
      return true;
    }
    return false;
  };
  const rulePassword = () => {
    Rule.min(data.password, 6);
    Rule.max(data.password, 32);
    Rule.isRequired(data.password, "password");
    if (
      Rule.min(data.password, 6) &&
      Rule.max(data.password, 32) &&
      Rule.isRequired(data.password, "password")
    ) {
      return true;
    }
    return false;
  };
  // Handle Submit
  const [data, setData] = useState({
    email: "",
    password: "",
    check: false,
  });
  const handleChangeEmail = (e) => {
    setData((prev) => ({ ...prev, email: e.target.value }));
  };
  const handleFocusEmail = () => {
    setTextMessage((prev) => ({ ...prev, msgEmail: "" }));
  };
  const handleBlurEmail = () => {
    ruleEmail();
  };
  const handleChangePassword = (e) => {
    setData((prev) => ({ ...prev, password: e.target.value }));
  };
  const handleFocusPassword = (e) => {
    setTextMessage((prev) => ({ ...prev, msgPassword: "" }));
  };
  const handleBlurPassword = (e) => {
    rulePassword();
  };
  const handleChangeCheck = (e) => {
    setData((prev) => ({ ...prev, check: !prev.check }));
  };
  const handleSubmit = () => {
    ruleEmail();
    rulePassword();
    if (ruleEmail() && rulePassword()) {
      dispatch(
        toastMessageSlice.actions.addToast({
          id: nanoid(),
          title: "Thành công",
          message: "Bạn đã đăng nhập thành công",
          type: "success",
          duration: 3000,
        })
      );
      setTimeout(() => dispatch(mountSlice.actions.isMountSignForm()), 3000);
    }
  };
  // Get state and dispatch action from redux store
  const dispatch = useDispatch();
  const changeSign = () => {
    dispatch(mountSlice.actions.isSignIn());
    messageScreen();
  };
  const handleMountForgetPassword = () => {
    dispatch(mountSlice.actions.isMountForgetPassword());
    dispatch(
      toastMessageSlice.actions.addToast({
        id: nanoid(),
        title: "Bạn đang ở",
        message: "Giao diện quên mật khẩu",
        type: "info",
        duration: 3000,
      })
    );
  };
  const isMountForgetPassword = useSelector(mountForgetPasswordSelector);
  const messageScreen = () => {
    dispatch(
      toastMessageSlice.actions.addToast({
        id: nanoid(),
        title: "Bạn đang ở",
        message: "Giao diện đăng ký tài khoản",
        type: "info",
        duration: 3000,
      })
    );
  };
  // UI
  return (
    <div
      className={`py-4 px-6 absolute ${cx("wrapper")}  w-full h-full`}
      style={
        isSignIn && isMountForgetPassword
          ? { left: "0", opacity: "100%" }
          : { left: "-100%", opacity: "0" }
      }
    >
      {/* Brand */}
      <div className="text-2xl font-bold text-mainColor1">Welcome to</div>
      <div className="ml-3 mt-3">
        <Brand />
      </div>
      <div className={`mb-4 mt-2 text-mainColor1 font-bold`}>Sign in</div>
      {/* Text Field Email */}
      <div className={`flex flex-col my-4`}>
        <TextField
          id="outlined-basic5"
          label="Email Address"
          variant="outlined"
          type="email"
          required
          value={data.email}
          onChange={handleChangeEmail}
          onFocus={handleFocusEmail}
          onBlur={handleBlurEmail}
        />
      </div>
      <p>{textmessage.msgEmail}</p>
      {/* Text Field Password */}
      <div className={`flex flex-col my-4`}>
        <TextField
          id="outlined-basic6"
          label="Password"
          variant="outlined"
          type="password"
          required
          value={data.password}
          onChange={handleChangePassword}
          onFocus={handleFocusPassword}
          onBlur={handleBlurPassword}
        />
      </div>
      <p>{textmessage.msgPassword}</p>
      {/* CheckBox Remember */}
      <div className={`flex items-center pt-2`}>
        <input
          type="checkbox"
          class="mr-2 w-4 h-4 cursor-pointer"
          checked={data.check}
          onChange={handleChangeCheck}
        />
        <h1>Remember Me</h1>
      </div>
      {/* Button Submit */}
      <div className="my-2">
        <ButtonWr>
          <div
            onClick={handleSubmit}
            className="text-mainColor1 py-2 font-bold cursor-pointer"
          >
            Sign in
          </div>
        </ButtonWr>
      </div>
      <div className={`flex items-center justify-between`}>
        {/* Button Change Sign Form */}
        <h1
          className="hover:text-mainColor1 cursor-pointer"
          onClick={handleMountForgetPassword}
        >
          Forget Password?
        </h1>
        {/* Button Change Sign Form */}
        <h1
          className="hover:text-mainColor1 cursor-pointer"
          onClick={changeSign}
        >
          Don't have an acount? Sign up
        </h1>
      </div>
    </div>
  );
}

export default SignIn;
