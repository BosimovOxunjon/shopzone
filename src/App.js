import "./App.css";
import SignUp from "./containers/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";
import Header from "./containers/Header/Header";
import Search from "./containers/Search/Search";
import Footer from "./containers/Footer/Footer";
import Carousel from "./containers/Carousel/Carousel";
import Home from "./containers/Home/Home";
import Contact from "./containers/Contact/Contact";
import SignIn from "./containers/SignIn/SignIn";
import Products from "./containers/Products/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
