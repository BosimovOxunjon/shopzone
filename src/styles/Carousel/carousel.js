import styled from "styled-components";

const StyledCarousel = styled.section`
  padding-top: 40px;
  .carousel_title {
    font-weight: 700;
    font-size: 43px;
    line-height: 64.5px;
    color: #1b5a7d;
  }
  .slider_item {
    display: flex !important;
    justify-content: space-around;
    align-items: flex-start;
  }
  .carousel_btn {
    font-weight: 900;
    font-size: 12px;
    line-height: 24px;
    border-radius: 20px;
    padding: 10px 20px;
  }
  .carousel_btn-view {
    margin-left: 10px;
  }
  button::after,
  button::before {
    display: none;
  }
  .carousel__slider {
    align-items: center;
    justify-content: center;
  }
`;

export { StyledCarousel };
