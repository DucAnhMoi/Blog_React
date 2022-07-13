import { configureStore } from "@reduxjs/toolkit";

import mountSlice from "../components/sliceRedux/mountSlice";
import toastMessageSlice from "../components/sliceRedux/toastMessageSlice";
import blogSlice from "../components/sliceRedux/blogSlice";
import homeSlice from "../components/sliceRedux/homeSlice";

const store = configureStore({
  reducer: {
    mount: mountSlice.reducer,
    toastMessage: toastMessageSlice.reducer,
    blog: blogSlice.reducer,
    home: homeSlice.reducer,
  },
});

export default store;
