import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { StyledCarousel } from "../../styles/Carousel/carousel";
import { Container, Box, Button } from "@mui/material";
import CarouselImg from "../../../src/assets/img/Carousel/carousel.png";

const Carousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StyledCarousel>
      <Container>
        <Slider {...settings}>
          <Box component="div" className="slider_item">
            <div>
              <h1 className="carousel_title">
                Canon <br /> camera
              </h1>
              <Button
                variant="filledTonal"
                sx={{ background: "#EDA415", color: "white" }}
                className="carousel_btn"
              >
                Shop now
              </Button>
              <Button
                variant="outlined"
                sx={{ color: "#1B5A7D" }}
                className="carousel_btn carousel_btn-view"
              >
                View more
              </Button>
            </div>
            <div>
              <img src={CarouselImg} alt="carousel-img" />
            </div>
          </Box>
          <Box component="div" className="slider_item">
            <div>
              <h1>Canon camera</h1>
              <Button
                variant="filledTonal"
                sx={{ background: "#EDA415", color: "white" }}
                className="carousel_btn"
              >
                Shop now
              </Button>
              <Button
                variant="outlined"
                sx={{ color: "#1B5A7D" }}
                className="carousel_btn carousel_btn-view"
              >
                View more
              </Button>
            </div>
            <div>
              <img src={CarouselImg} alt="carousel-img" />
            </div>
          </Box>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </Container>
    </StyledCarousel>
  );
};
export default Carousel;
