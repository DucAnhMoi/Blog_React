import About from "../pages/About";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import AddBlog from "../pages/AddBlog";
// public
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/About", component: About },
  { path: "/Blog", component: Blog },
  { path: "/AddBlog", component: AddBlog },
];
// private
const privateRoutes = [];

export { publicRoutes, privateRoutes };
