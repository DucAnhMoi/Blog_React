// import from file
import styles from "./ContentSub.module.scss";
import ContentBlog from "../ContentBlog";
import { listBlogSelector } from "../../../../redux/selector";
// import library
import className from "classnames/bind";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const cx = className.bind(styles);

const ContentSub = () => {
  const blogList = useSelector(listBlogSelector);
  return (
    <div className={`w-1/2 ${cx("content-sub")}`}>
      {blogList.map((blog, i) =>
        i > 2 && i < 12 ? (
          <Link key={blog.id} to={`/Blog/blog${blog.id}`}>
            <ContentBlog
              author={blog.author}
              time={blog.time}
              title={blog.title}
              paragraph={blog.paragraph}
            />
          </Link>
        ) : null
      )}
    </div>
  );
};

export default ContentSub;
