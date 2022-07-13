// import from file
import Posts from "./Posts";
import Comments from "./Comments";
import Albums from "./Albums";
import Photos from "./Photos";
import Todos from "./Todos";
import Users from "./Users";

// import library
import { Route, Routes } from "react-router-dom";

const Content = () => {
  return (
    <Routes>
      <Route key={1} path="/" element={<Posts />} />
      <Route key={2} path="/Home/Comments" element={<Comments />} />
      <Route key={3} path="/Home/Albums" element={<Albums />} />
      <Route key={4} path="/Home/Photos" element={<Photos />} />
      <Route key={5} path="/Home/Todos" element={<Todos />} />
      <Route key={6} path="/Home/Users" element={<Users />} />
    </Routes>
  );
};

export default Content;
