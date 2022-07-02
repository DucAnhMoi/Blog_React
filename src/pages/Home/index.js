import React from "react";
import Title from "../../components/home/Title";
import Search from "../../components/home/Search";
import Contact from "../../components/home/Contact";

const Home = () => {
  return (
    <div className="flex flex-col home mt-nav">
      <Title />
      <Search />
      <Contact />
    </div>
  );
};

export default Home;
