// // Store initial
// const initialState = [];

// // Reducer
// const toastMessageReducer = (state = initialState, action) => {
//   switch (action.type) {
//     // ToastMessage
//     case "toastMessage/deleteToast":
//       return {
//         listToast: state.listToast.filter(
//           (toast) => toast.id !== action.payload
//         ),
//       };
//     case "toastMessage/addToast":
//       return {
//         listToast: [...state.listToast, action.payload],
//       };
//     default:
//       return state;
//   }
// };

// export default toastMessageReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "toastMessage",
  initialState: [],
  reducers: {
    addToast: (state, action) => {
      let list = [...state, action.payload];
      return list;
    },
    deleteToast: (state, action) => {
      let list = state.filter((item) => item.id !== action.payload);
      return list;
    },
  },
});
