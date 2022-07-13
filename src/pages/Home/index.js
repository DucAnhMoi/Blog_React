// import from file
import Title from "./components/Title";
import Search from "./components/Search";
import Contact from "./components/Contact";
import Content from "./components/Content";
import HomeNav from "./components/HomeNav";
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
      <HomeNav />
      <Content />
    </div>
  );
};

export default Home;
