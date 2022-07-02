import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
// Create Store Redux
const composeEnhancers = composeWithDevTools();
const store = createStore(rootReducer, composeEnhancers);

export default store;
