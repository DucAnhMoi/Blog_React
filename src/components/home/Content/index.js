// import from file
import ContentSub from "./ContentSub";
import ContentMain from "./ContentMain";
// import library
import className from "classnames/bind";
import styles from "./Content.module.scss";
const cx = className.bind(styles);

const Content = () => {
  var col;
  if (window.innerWidth < 768) {
    col = "flex-col items-center";
  }
  return (
    <div className={`flex justify-center ${cx("content")} ${col} w-full mt-16`}>
      <ContentMain />
      <ContentSub />
    </div>
  );
};

export default Content;
