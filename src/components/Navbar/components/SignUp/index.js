// import library
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
// import from file
import {
  mountSignForm,
  changeSignIn,
  addToast,
} from "../../../../redux/action";
import { isSignInState } from "../../../../redux/selector";

const SignUp = () => {
  // Get state and dispatch action from redux store
  const isSignIn = useSelector(isSignInState);
  const dispatch = useDispatch();
  const messageScreen = () => {
    dispatch(
      addToast({
        id: nanoid(),
        title: "Bạn đang ở",
        message: "Giao diện đăng ký tài khoản",
        type: "info",
        duration: 3000,
      })
    );
  };
  const handleMountSignForm = () => {
    if (isSignIn) {
      dispatch(mountSignForm());
      dispatch(changeSignIn());
      messageScreen();
    } else {
      dispatch(mountSignForm());
      messageScreen();
    }
  };
  // UI
  return (
    <div
      style={{
        backgroundColor: "var(--main-color-1)",
        color: "rgba(255,255,255)",
        fontSize: "1.5rem",
      }}
      className="py-2 px-5 rounded-lg cursor-pointer hover:opacity-50"
      onClick={handleMountSignForm}
    >
      Sign up
    </div>
  );
};

export default SignUp;
