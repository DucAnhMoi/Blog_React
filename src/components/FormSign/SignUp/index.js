// import from file
import ButtonWr from "../../components/Button";
import Brand from "../../components/Brand";
import mountSlice from "../../sliceRedux/mountSlice";
import toastMessageSlice from "../../sliceRedux/toastMessageSlice";
import styles from "./SignUp.module.scss";
// import library
import { useState } from "react";
import { nanoid } from "nanoid";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SignUp({ isSignIn }) {
  // Message rule
  const [textMessage, setTextMessage] = useState({
    msgFirstName: "",
    msgLastName: "",
    msgEmail: "",
    msgPassword: "",
  });
  // Rule Submit
  const re = /\S+@\S+\.\S+/;
  const rt = /(^[a-z ]+$)/i;
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
      } else if (!data && type === "firstName") {
        setTextMessage((prev) => ({
          ...prev,
          msgFirstName: "Vui lòng nhập firstName",
        }));
        return false;
      } else if (!data && type === "lastName") {
        setTextMessage((prev) => ({
          ...prev,
          msgLastName: "Vui lòng nhập lastName",
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
    max: (data, max, type) => {
      if (data.trim().length > max && type === "password") {
        setTextMessage((prev) => ({
          ...prev,
          msgPassword: `Tối đa ${max} kí tự`,
        }));
        return false;
      } else if (data.trim().length > max && type === "firstName") {
        setTextMessage((prev) => ({
          ...prev,
          msgFirstName: `Tối đa ${max} kí tự`,
        }));
        return false;
      } else if (data.trim().length > max && type === "lastName") {
        setTextMessage((prev) => ({
          ...prev,
          msgLastName: `Tối đa ${max} kí tự`,
        }));
        return false;
      }
      return true;
    },
    isText: (data, type) => {
      if (!rt.test(data) && type === "firstName" && data.trim().length > 0) {
        setTextMessage((prev) => ({
          ...prev,
          msgFirstName: `Tên người dùng không hợp lệ`,
        }));
        return false;
      } else if (
        !rt.test(data) &&
        type === "lastName" &&
        data.trim().length > 0
      ) {
        setTextMessage((prev) => ({
          ...prev,
          msgLastName: `Tên người dùng không hợp lệ`,
        }));
        return false;
      }
      return true;
    },
  };
  // Rule part
  const ruleFirstName = () => {
    Rule.isText(data.firstName, "firstName");
    Rule.max(data.firstName, 8, "firstName");
    Rule.isRequired(data.firstName, "firstName");
    if (
      Rule.isText(data.firstName, "firstName") &&
      Rule.max(data.firstName, 8, "firstName") &&
      Rule.isRequired(data.firstName, "firstName")
    ) {
      return true;
    }
    return false;
  };
  const ruleLastName = () => {
    Rule.isText(data.lastName, "lastName");
    Rule.max(data.lastName, 8, "lastName");
    Rule.isRequired(data.lastName, "lastName");
    if (
      Rule.isText(data.firstName, "lastName") &&
      Rule.max(data.firstName, 8, "lastName") &&
      Rule.isRequired(data.firstName, "lastName")
    ) {
      return true;
    }
    return false;
  };
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
    Rule.max(data.password, 32, "password");
    Rule.isRequired(data.password, "password");
    if (
      Rule.min(data.password, 6) &&
      Rule.max(data.password, 32, "password") &&
      Rule.isRequired(data.password, "password")
    ) {
      return true;
    }
    return false;
  };
  // Handle Submit
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChangeFirstName = (e) => {
    setData((prev) => ({ ...prev, firstName: e.target.value }));
  };
  const handleFocusFirstName = () => {
    setTextMessage((prev) => ({
      ...prev,
      msgFirstName: "",
    }));
  };
  const handleBlurFirstName = () => {
    ruleFirstName();
  };
  const handleChangeLastName = (e) => {
    setData((prev) => ({ ...prev, lastName: e.target.value }));
  };
  const handleFocusLastName = () => {
    setTextMessage((prev) => ({
      ...prev,
      msgLastName: "",
    }));
  };
  const handleBlurLastName = () => {
    ruleLastName();
  };

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
  const handleSubmit = () => {
    ruleFirstName();
    ruleLastName();
    ruleEmail();
    rulePassword();
    if (ruleEmail() && rulePassword() && ruleFirstName() && ruleLastName()) {
      dispatch(
        toastMessageSlice.actions.addToast({
          id: nanoid(),
          title: "Thông tin",
          message: "Sử dụng tài khoản vừa đăng ký",
          type: "info",
          duration: 3000,
        })
      );
      dispatch(
        toastMessageSlice.actions.addToast({
          id: nanoid(),
          title: "Thành công",
          message: "Bạn đã đăng ký thành công",
          type: "success",
          duration: 3000,
        })
      );
      setTimeout(() => dispatch(mountSlice.actions.isSignIn()), 3000);
    }
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
            id="outlined-basic1"
            label="FirstName"
            variant="outlined"
            type="email"
            value={data.firstName}
            onChange={handleChangeFirstName}
            onFocus={handleFocusFirstName}
            onBlur={handleBlurFirstName}
          />
          <p>{textMessage.msgFirstName}</p>
        </div>
        {/* Text Field LastName  */}
        <div className={`flex flex-col`}>
          <TextField
            value={data.lastName}
            id="outlined-basic2"
            label="LastName"
            variant="outlined"
            type="email"
            onChange={handleChangeLastName}
            onFocus={handleFocusLastName}
            onBlur={handleBlurLastName}
          />
          <p>{textMessage.msgLastName}</p>
        </div>
      </div>

      {/* Text Field Email */}
      <div className={`flex flex-col my-4`}>
        <TextField
          value={data.email}
          id="outlined-basic3"
          label="Email Address"
          variant="outlined"
          type="email"
          onChange={handleChangeEmail}
          onFocus={handleFocusEmail}
          onBlur={handleBlurEmail}
        />
        <p>{textMessage.msgEmail}</p>
      </div>

      {/* Text Field Password */}
      <div className={`flex flex-col my-4`}>
        <TextField
          value={data.password}
          id="outlined-basic4"
          label="Password"
          variant="outlined"
          type="password"
          onChange={handleChangePassword}
          onFocus={handleFocusPassword}
          onBlur={handleBlurPassword}
        />
        <p>{textMessage.msgPassword}</p>
      </div>

      {/* Button Submit */}
      <div className="my-2">
        <ButtonWr>
          <div
            onClick={handleSubmit}
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
