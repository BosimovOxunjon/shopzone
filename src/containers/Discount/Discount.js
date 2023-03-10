import React from "react";
import { Container } from "@mui/material";
import { Row, Col } from "antd";
// import BackgroundImg from "../../assets/img/discount/laptop.png";
import { StyledDiscount } from "../../styles/Discount/discount";

const Discount = () => {
  return (
    <StyledDiscount>
      <Container className="discount_container">
        <Row>
          <Col>Discount</Col>
          <Col></Col>
        </Row>
      </Container>
    </StyledDiscount>
  );
};

export default Discount;
