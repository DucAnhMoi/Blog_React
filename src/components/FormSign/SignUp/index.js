// import from file
import ButtonWr from "../../components/Button";
import Brand from "../../Navbar/components/Brand";
import mountSlice from "../../componentsRedux/mountSlice";
import toastMessageSlice from "../../componentsRedux/toastMessageSlice";
import styles from "./SignUp.module.scss";
// import library
import { nanoid } from "nanoid";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
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

function SignUp({ isSignIn }) {
  // Handle Submit
  const schema = yup.object().shape({
    FirstName: yup.string().required("Please enter your firstname !!!"),
    LastName: yup.string().required("Please enter your lastname !!!"),
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
        message: "Bạn đã đăng ký thành công",
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
  // UI
  return (
    <div
      className={`py-4 px-6 absolute ${cx("wrapper")}  w-full h-full`}
      style={
        isSignIn
          ? { left: "200%", opacity: "0" }
          : { left: "0", opacity: "100%" }
      }
    >
      {/* Brand */}
      <div className="text-2xl font-bold text-mainColor1">Welcome to</div>
      <div className="ml-3 mt-3">
        <Brand textColor={"text-mainColor1"} />
      </div>
      <div className="mb-4 mt-2 text-mainColor1 font-bold">Sign up</div>
      {/* Text Field Group */}
      <div className={`flex`}>
        {/* Text Field FirstName */}
        <div className={`flex flex-col mr-4`}>
          <TextField
            {...register("FirstName")}
            id="outlined-basic"
            label="FirstName"
            variant="outlined"
            type="email"
          />
          <p>{errors.FirstName?.message}</p>
        </div>
        {/* Text Field LastName  */}
        <div className={`flex flex-col`}>
          <TextField
            {...register("LastName")}
            id="outlined-basic"
            label="LastName"
            variant="outlined"
            type="email"
          />
          <p>{errors.LastName?.message}</p>
        </div>
      </div>

      {/* Text Field Email */}
      <div className={`flex flex-col my-4`}>
        <TextField
          {...register("Email")}
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          type="email"
        />
        <p>{errors.Email?.message}</p>
      </div>
      {/* Text Field Password */}
      <div className={`flex flex-col my-4`}>
        <TextField
          {...register("Password")}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
        />
        <p>{errors.Password?.message}</p>
      </div>
      {/* Button Submit */}
      <div className="my-2">
        <ButtonWr>
          <div
            onClick={handleSubmit(onSubmit)}
            className="text-mainColor1 py-2 font-bold cursor-pointer"
          >
            Sign up
          </div>
        </ButtonWr>
      </div>
      {/* Button Change Sign Form */}
      <div className={`flex items-center justify-end`}>
        <h1
          className="hover:text-mainColor1 cursor-pointer"
          onClick={changeSign}
        >
          Already have an account? Sign in
        </h1>
      </div>
    </div>
  );
}

export default SignUp;
