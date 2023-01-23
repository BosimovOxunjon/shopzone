import React from 'react';
import Header from "../Header/Header";
import Carousel from "../Carousel/Carousel";
import Search from "../Search/Search";
import Contact from "../Contact/Contact";

const Home = () => {
        return (
            <>
                    <Contact/>
                <Search/>
                    <Header/>
                <Carousel/>
            </>
        );
}

export default Home;