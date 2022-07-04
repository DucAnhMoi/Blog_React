// import library
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import from file
import FormSign from "./components/FormSign";
import Navbar from "./components/Navbar";
import { publicRoutes } from "./router";
import Blog1 from "./pages/Blog/Blog1";
import Blog2 from "./pages/Blog/Blog2";
import { mountSignFormSelector } from "./redux/selector";
import { mountSignForm } from "./redux/action";
import Footer from "./components/Footer";
import ListToast from "./components/components/ListToast";

function App() {
  // Get state and dispatch action from redux store
  const dispatch = useDispatch();
  const isMountForm = useSelector(mountSignFormSelector);
  window.onclick = () => {
    if (isMountForm) {
      dispatch(mountSignForm());
    }
  };
  // UI
  return (
    <div className="bg-slate-100 overflow-hidden">
      {isMountForm && <FormSign />}
      <div className="App flex items-center flex-col">
        <Navbar />
        <div className="wrapper w-app px-2">
          <Routes>
            {publicRoutes.map((route, index) => {
              let Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
            <Route path={"/Blog/blog1"} element={<Blog1 />} />
            <Route path={"/Blog/blog2"} element={<Blog2 />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <ListToast />
    </div>
  );
}

export default App;
