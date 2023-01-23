import styled from "styled-components";

const StyledCarousel = styled.section`
  padding-top: 40px;
    .carousel_title {
      font-weight: 700;
      font-size: 43px;
      line-height: 64.5px;
      color: #1B5A7D;
    }
    .slider_item {
      display: flex!important;
      justify-content: space-around;
      align-items: center;
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
`;

export {StyledCarousel};