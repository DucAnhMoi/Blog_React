// // Store initial
// const initialState = {
//   isSignIn: true,
//   isMountForgetPassword: true,
//   isMountSignForm: false,
// };
// // Reducer
// const mountReducer = (state = initialState, action) => {
//   switch (action.type) {
//     // Sign Form
//     case "mount/isSignIn":
//       return {
//         muont: {
//           ...state,
//           isSignIn: (state.mount.isSignIn = !state.mount.isSignIn),
//         },
//       };
//     case "mount/isMountForgetPassword":
//       return {
//         mount: {
//           ...state,
//           isMountForgetPassword: (state.mount.isMountForgetPassword =
//             !state.mount.isMountForgetPassword),
//         },
//       };
//     case "mount/isMountSignForm":
//       return {
//         mount: {
//           ...state,
//           isMountSignForm: (state.mount.isMountSignForm =
//             !state.mount.isMountSignForm),
//         },
//       };
//     default:
//       return state;
//   }
// };

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
