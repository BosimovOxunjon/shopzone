import React from "react";
import { Container } from "@mui/material";
import { Row, Col } from "antd";
import BackgroundImg from "../../assets/img/advertisement/laptop.png";
import { StyledAdvertisement } from "../../styles/Advertisement/advertisement";

const Advertisement = () => {
  return (
    <StyledAdvertisement>
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </StyledAdvertisement>
  );
};

export default Advertisement;
