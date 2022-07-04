import About from "../pages/About";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Todos from "../pages/Todos";
// public
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/About", component: About },
  { path: "/Blog", component: Blog },
  { path: "/AddBlog", component: Todos },
];
// private
const privateRoutes = [];

export { publicRoutes, privateRoutes };
