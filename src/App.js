// import library
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
// import { nanoid } from "nanoid";
// import from file
import FormSign from "./components/FormSign";
import Navbar from "./components/Navbar";
import { publicRoutes } from "./router";
import { mountSignFormState } from "./redux/selector";
// import { addToast } from "./redux/action";
import ListToast from "./components/components/ListToast";

function App() {
  // Get state and dispatch action from redux store
  // const dispatch = useDispatch();
  // const handleAddToast = () => {
  //   dispatch(
  //     addToast({
  //       id: nanoid(),
  //       title: "success",
  //       message: "message",
  //       type: "success",
  //       duration: 3000,
  //     })
  //   );
  // };
  const isMountForgetPassword = useSelector(mountSignFormState);
  // UI
  return (
    <div>
      {isMountForgetPassword && <FormSign />}
      <div className="App flex items-center flex-col">
        <Navbar />
        <div className="wrapper w-app px-2">
          <Routes>
            {publicRoutes.map((route, index) => {
              let Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Routes>
        </div>
      </div>
      <ListToast />
    </div>
  );
}

export default App;
