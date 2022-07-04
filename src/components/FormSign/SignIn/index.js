// import from file
import Brand from "../../Navbar/components/Brand";
import ButtonWr from "../../components/Button";
// import {
//   changeSignIn,
//   mountForgetPassword,
//   addToast,
// } from "../../../redux/action";
import mountSlice from "../../componentsRedux/mountSlice";
import toastMessageSlice from "../../componentsRedux/toastMessageSlice";
import { mountForgetPasswordSelector } from "../../../redux/selector";
import styles from "./SignIn.module.scss";
// import library
import React from "react";
import { nanoid } from "nanoid";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { setLocale } from "yup";

setLocale({
  string: {
    email: "Email is incorrect !!!",
    min: "Password must be at least 8 characters !!!",
    max: "Password must be at most 32 characters !!!",
  },
});

const cx = classNames.bind(styles);

function SignIn({ isSignIn }) {
  // Handle Submit
  const schema = yup.object().shape({
    Email: yup.string().email().required("Please enter your email !!!"),
    Password: yup
      .string()
      .min(8)
      .max(16)
      .required("Please enter your password !!!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    dispatch(
      toastMessageSlice.actions.addToast({
        id: nanoid(),
        title: "Thành công",
        message: "Bạn đã đăng nhập thành công",
        type: "success",
        duration: 3000,
      })
    );
    reset();
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
          {...register("Email")}
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          type="email"
          required
        />
      </div>
      <p>{errors.Email?.message}</p>
      {/* Text Field Password */}
      <div className={`flex flex-col my-4`}>
        <TextField
          {...register("Password")}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          required
        />
      </div>
      <p>{errors.Password?.message}</p>
      {/* CheckBox Remember */}
      <div className={`flex items-center pt-2`}>
        <input
          {...register("Check")}
          type="checkbox"
          class="mr-2 w-4 h-4 cursor-pointer"
        />
        <h1>Remember Me</h1>
      </div>
      {/* Button Submit */}
      <div className="my-2">
        <ButtonWr>
          <div
            onClick={handleSubmit(onSubmit)}
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
