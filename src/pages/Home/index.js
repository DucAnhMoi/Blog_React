// import from file
import Title from "../../components/home/Title";
import Search from "../../components/home/Search";
import Contact from "../../components/home/Contact";
import Content from "../../components/home/Content";
// import library
import React from "react";
import className from "classnames/bind";
import styles from "./Home.module.scss";

const cx = className.bind(styles);

const Home = () => {
  return (
    <div className={`flex flex-col items-center mt-nav ${cx("home")}`}>
      <Title />
      <Search />
      <Contact />
      <Content />
    </div>
  );
};

export default Home;
