import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Avatar, Card, Skeleton, Switch } from "antd";
import { StyledCarousel } from "../../styles/Carousel/carousel";
import { Container, Box, Button } from "@mui/material";
import CarouselImg from "../../../src/assets/img/Carousel/carousel.png";
const { Meta } = Card;

const Carousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledCarousel>
      <Container>
        <Slider {...settings}>
          <Box
            component="div"
            sx={{
              flexWrap: { xs: "wrap", md: "nowrap" },
              flexDirection: { xs: "column", md: "row" },
            }}
            className="slider_item"
          >
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
          <Box
            component="div"
            sx={{
              flexWrap: { xs: "wrap", md: "nowrap" },
              flexDirection: { xs: "column", md: "row" },
            }}
            className="slider_item"
          >
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
          <Box
            component="div"
            sx={{
              flexWrap: { xs: "wrap", md: "nowrap" },
              flexDirection: { xs: "column", md: "row" },
            }}
            className="slider_item"
          >
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
        </Slider>
      </Container>
      <Container>
        <Slider {...settings2} className="carousel__slider">
          <div>
            <Card
              style={{
                width: 300,
                marginTop: 16,
              }}
            >
              <Meta
                style={{
                  width: 400,
                }}
                avatar={
                  <Avatar src={CarouselImg} style={{ width: 60, height: 60 }} />
                }
                title="Card title"
                description="(6 items)"
              />
            </Card>
          </div>
          <div>
            <Card
              style={{
                width: 300,
                marginTop: 16,
              }}
            >
              <Meta
                style={{
                  width: 400,
                }}
                avatar={
                  <Avatar src={CarouselImg} style={{ width: 60, height: 60 }} />
                }
                title="Card title"
                description="(6 items)"
              />
            </Card>
          </div>
          <div>
            <Card
              style={{
                width: 300,
                marginTop: 16,
              }}
            >
              <Meta
                style={{
                  width: 400,
                }}
                avatar={
                  <Avatar src={CarouselImg} style={{ width: 60, height: 60 }} />
                }
                title="Card title"
                description="(6 items)"
              />
            </Card>
          </div>
          <div>
            <Card
              style={{
                width: 300,
                marginTop: 16,
              }}
            >
              <Meta
                style={{
                  width: 400,
                }}
                avatar={
                  <Avatar src={CarouselImg} style={{ width: 60, height: 60 }} />
                }
                title="Card title"
                description="(6 items)"
              />
            </Card>
          </div>
          <div>
            <Card
              style={{
                width: 300,
                marginTop: 16,
              }}
            >
              <Meta
                style={{
                  width: 400,
                }}
                avatar={
                  <Avatar src={CarouselImg} style={{ width: 60, height: 60 }} />
                }
                title="Card title"
                description="(6 items)"
              />
            </Card>
          </div>
        </Slider>
      </Container>
    </StyledCarousel>
  );
};
export default Carousel;
