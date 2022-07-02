// import from file
import Brand from "../../Navbar/components/Brand";
import ButtonWr from "../../components/Button";
import { mountForgetPassword, addToast } from "../../../redux/action";
import styles from "./ForgetPassword.module.scss";
import { mountForgetPasswordState } from "../../../redux/selector";
// import library
import TextField from "@mui/material/TextField";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { setLocale } from "yup";

setLocale({
  string: {
    email: "Email is incorrect !!!",
  },
});
const cx = classNames.bind(styles);

const ForgetPassword = () => {
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
    reset();
  };
  // Get state and dispatch action from redux store
  const dispatch = useDispatch();
  const changeMountForget = () => {
    dispatch(mountForgetPassword());
    messageScreen();
  };
  const isMountForgetPassword = useSelector(mountForgetPasswordState);
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
  // UI
  return (
    <div
      className={`p-6 absolute ${cx("wrapper")}  w-full h-full `}
      style={
        isMountForgetPassword
          ? { top: "100%", left: "0", opacity: "0" }
          : { top: "0", left: "0", opacity: "100%" }
      }
    >
      {/* Brand */}
      <div className="text-2xl font-bold text-mainColor1">Welcome to</div>
      <div className="ml-3 mt-3">
        <Brand textColor={"text-mainColor1"} />
      </div>
      <div className="mb-4 mt-6 text-mainColor1 font-bold">Forget password</div>
      {/* Text Field Email */}
      <div className={`flex flex-col my-4`}>
        <TextField
          {...register("Email")}
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          type="email"
        />
      </div>
      <p>{errors.Email?.message}</p>
      {/* Button Submit */}
      <div className="my-3">
        <ButtonWr>
          <div
            onClick={handleSubmit(onSubmit)}
            className="text-mainColor1 py-2 font-bold cursor-pointer"
          >
            Continue
          </div>
        </ButtonWr>
      </div>
      {/* Button Change Sign Form */}
      <div className={`flex items-center justify-end`}>
        <h1
          className="hover:text-mainColor1 cursor-pointer"
          onClick={changeMountForget}
        >
          Already have an account? Sign in
        </h1>
      </div>
    </div>
  );
};

export default ForgetPassword;
