// import library
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
// import from file
import mountSlice from "../../../sliceRedux/mountSlice";
import toastMessageSlice from "../../../sliceRedux/toastMessageSlice";
import { isSignInSelector } from "../../../../redux/selector";

const SignUpBtn = () => {
  // Get state and dispatch action from redux store
  const isSignIn = useSelector(isSignInSelector);
  const dispatch = useDispatch();
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
  const handleMountSignForm = (e) => {
    if (isSignIn) {
      dispatch(mountSlice.actions.isMountSignForm());
      dispatch(mountSlice.actions.isSignIn());
      messageScreen();
      e.stopPropagation();
    } else {
      dispatch(mountSlice.actions.isMountSignForm());
      messageScreen();
      e.stopPropagation();
    }
  };
  // UI
  return (
    <div
      style={{
        backgroundColor: "var(--main-color-1)",
        color: "rgba(255,255,255)",
        fontSize: "1.2rem",
      }}
      className="py-2 px-2 rounded-lg cursor-pointer hover:opacity-50"
      onClick={(e) => handleMountSignForm(e)}
    >
      Sign up
    </div>
  );
};

export default SignUpBtn;
