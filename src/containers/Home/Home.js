import React from "react";
import Header from "../Header/Header";
import Carousel from "../Carousel/Carousel";
import Search from "../Search/Search";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import Discount from "../Discount/Discount";

const Home = () => {
  return (
    <>
      <Contact />
      <Search />
      <Header />
      <Carousel />
      <Products />
      <Discount />
    </>
  );
};

export default Home;
