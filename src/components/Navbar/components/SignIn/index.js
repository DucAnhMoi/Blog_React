// import library
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
// import from file
import Button from "../../../components/Button";
import mountSlice from "../../../componentsRedux/mountSlice";
import toastMessageSlice from "../../../componentsRedux/toastMessageSlice";
import { isSignInSelector } from "../../../../redux/selector";

const SignIn = () => {
  // Get state and dispatch action from redux store
  const isSignIn = useSelector(isSignInSelector);
  const dispatch = useDispatch();
  const messageScreen = () => {
    dispatch(
      toastMessageSlice.actions.addToast({
        id: nanoid(),
        title: "Bạn đang ở",
        message: "Giao diện đăng nhập tài khoản",
        type: "info",
        duration: 3000,
      })
    );
  };
  const handleMountSignForm = (e) => {
    if (isSignIn) {
      dispatch(mountSlice.actions.isMountSignForm());
      messageScreen();
      e.stopPropagation();
    } else {
      dispatch(mountSlice.actions.isSignIn());
      dispatch(mountSlice.actions.isMountSignForm());
      messageScreen();
      e.stopPropagation();
    }
  };
  // UI
  return (
    <div
      style={{ fontSize: "1.2rem" }}
      className="py-2 px-2 rounded-lg"
      onClick={(e) => handleMountSignForm(e)}
    >
      <Button>Sign in</Button>
    </div>
  );
};

export default SignIn;
