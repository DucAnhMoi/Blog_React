// import from file
import { storeContext, storeContextInit } from "./context/storeContext";
import storeRedux from "./redux/store";
import GlobalStyles from "./components/GlobalStyles";
import App from "./App";
// import library
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Check
  <React.StrictMode>
    {/* Store Context */}
    <storeContext.Provider value={storeContextInit}>
      {/* Router */}
      <BrowserRouter>
        {/* Store Redux */}
        <Provider store={storeRedux}>
          {/* Styles css global */}
          <GlobalStyles>
            {/* Main */}
            <App />
          </GlobalStyles>
        </Provider>
      </BrowserRouter>
    </storeContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
