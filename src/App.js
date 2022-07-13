// import library
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Todos from "./pages/Todos";
// import from file
import Layout from "./components/Layout";
import { statusSelector } from "./redux/selector";
import { useSelector } from "react-redux";

function App() {
  const status = useSelector(statusSelector);
  // UI
  return (
    <Layout>
      <Routes>
        <Route key={1} path="/*" element={<Home />} />
        <Route key={2} path="/About" element={<About />} />
        <Route key={3} path="/Blog" element={<Blog />} />
        <Route key={4} path="/Todos" element={<Todos />} />
      </Routes>
      {status === "loading" ? <div>Loading.....</div> : <div></div>}
    </Layout>
  );
}

export default App;
