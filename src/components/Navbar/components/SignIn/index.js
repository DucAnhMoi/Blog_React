// import library
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
// import from file
import Button from "../../../components/Button";
import {
  mountSignForm,
  changeSignIn,
  addToast,
} from "../../../../redux/action";
import { isSignInState } from "../../../../redux/selector";

const SignIn = () => {
  // Get state and dispatch action from redux store
  const isSignIn = useSelector(isSignInState);
  const dispatch = useDispatch();
  const messageScreen = () => {
    dispatch(
      addToast({
        id: nanoid(),
        title: "Bạn đang ở",
        message: "Giao diện đăng nhập tài khoản",
        type: "info",
        duration: 3000,
      })
    );
  };
  const handleMountSignForm = () => {
    if (isSignIn) {
      dispatch(mountSignForm());
      messageScreen();
    } else {
      dispatch(changeSignIn());
      dispatch(mountSignForm());
      messageScreen();
    }
  };
  // UI
  return (
    <div
      style={{ fontSize: "1.5rem" }}
      className="py-2 px-5 rounded-lg"
      onClick={handleMountSignForm}
    >
      <Button>Sign in</Button>
    </div>
  );
};

export default SignIn;
