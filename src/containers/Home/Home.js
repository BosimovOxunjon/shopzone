import React from "react";
import Header from "../Header/Header";
import Carousel from "../Carousel/Carousel";
import Search from "../Search/Search";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";

const Home = () => {
  return (
    <>
      <Contact />
      <Search />
      <Header />
      <Carousel />
      <Products />
    </>
  );
};

export default Home;
