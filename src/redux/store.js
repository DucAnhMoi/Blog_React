// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./reducers";
// // Create Store Redux
// const composeEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composeEnhancers);

// export default store;

import { configureStore } from "@reduxjs/toolkit";

import mountSlice from "../components/componentsRedux/mountSlice";
import toastMessageSlice from "../components/componentsRedux/toastMessageSlice";
import blogSlice from "../components/componentsRedux/blogSlice";

const store = configureStore({
  reducer: {
    mount: mountSlice.reducer,
    toastMessage: toastMessageSlice.reducer,
    blog: blogSlice.reducer,
  },
});

export default store;
