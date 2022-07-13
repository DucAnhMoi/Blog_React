// export default mountReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "mount",
  initialState: {
    isSignIn: true,
    isMountForgetPassword: true,
    isMountSignForm: false,
  },
  reducers: {
    isSignIn: (state, action) => {
      state.isSignIn = !state.isSignIn;
    },
    isMountForgetPassword: (state, action) => {
      state.isMountForgetPassword = !state.isMountForgetPassword;
    },
    isMountSignForm: (state, action) => {
      state.isMountSignForm = !state.isMountSignForm;
    },
  },
});
