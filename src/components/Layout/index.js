// import library
import { useSelector, useDispatch } from "react-redux";
// import from file
import FormSign from "../FormSign";
import Navbar from "../Navbar";
import { mountSignFormSelector } from "../../redux/selector";
import mountSlice from "../sliceRedux/mountSlice";
import Footer from "../Footer";
import ListToast from "../components/ListToast";

function Layout({ children }) {
  // Get state and dispatch action from redux store
  const dispatch = useDispatch();
  const isMountForm = useSelector(mountSignFormSelector);
  window.onclick = () => {
    if (isMountForm) {
      dispatch(mountSlice.actions.isMountSignForm());
    }
  };
  // UI
  return (
    <div className="bg-slate-100 overflow-hidden">
      {isMountForm && <FormSign />}
      <div className="App flex items-center flex-col">
        <Navbar />
        <div className="wrapper w-app px-2">{children}</div>
        <Footer />
      </div>
      <ListToast />
    </div>
  );
}

export default Layout;
