import React, { useState } from "react";
import { Container } from "@mui/material";
import { Card, Col, Row, Rate, Button, Pagination } from "antd";
import MainImg from "../../assets/img/Products/headphone.svg";
import { StyledProducts } from "../../styles/Products/products";

const { Meta } = Card;

const Products = () => {
  return (
    <StyledProducts>
      <Container>
        <Row
          style={{
            alignItems: "center",
          }}
        >
          <h1>Popular products</h1>
          <div className="links_wrapper">
            <Button>Cameras</Button>
            <Button>Laptops</Button>
            <Button>Tablets</Button>
            <Button>Mouse</Button>
          </div>
        </Row>
        <Row
          style={{
            justifyContent: "space-between",
          }}
        >
          <Col className="card__wrapper">
            <Card
              hoverable
              style={{ width: 280 }}
              cover={<img alt="example" src={MainImg} />}
            >
              <Meta
                style={{
                  paddingTop: 0,
                }}
                title="Wireless headphones"
              />
              <div className="additional">
                <p className="price">20$</p>
                <Rate allowHalf defaultValue={0} />
              </div>
            </Card>
          </Col>
          <Col className="card__wrapper">
            <Card
              hoverable
              style={{ width: 280 }}
              cover={<img alt="example" src={MainImg} />}
            >
              <Meta
                style={{
                  paddingTop: 0,
                }}
                title="Wireless headphones"
              />
              <div className="additional">
                <p className="price">20$</p>
                <Rate allowHalf defaultValue={0} />
              </div>
            </Card>
          </Col>
          <Col className="card__wrapper">
            <Card
              hoverable
              style={{ width: 280 }}
              cover={<img alt="example" src={MainImg} />}
            >
              <Meta
                style={{
                  paddingTop: 0,
                }}
                title="Wireless headphones"
              />
              <div className="additional">
                <p className="price">20$</p>
                <Rate allowHalf defaultValue={0} />
              </div>
            </Card>
          </Col>
          <Col className="card__wrapper">
            <Card
              hoverable
              style={{ width: 280 }}
              cover={<img alt="example" src={MainImg} />}
            >
              <Meta
                style={{
                  paddingTop: 0,
                }}
                title="Wireless headphones"
              />
              <div className="additional">
                <p className="price">20$</p>
                <Rate allowHalf defaultValue={0} />
              </div>
            </Card>
          </Col>
          <Col className="card__wrapper">
            <Card
              hoverable
              style={{ width: 280 }}
              cover={<img alt="example" src={MainImg} />}
            >
              <Meta
                style={{
                  paddingTop: 0,
                }}
                title="Wireless headphones"
              />
              <div className="additional">
                <p className="price">20$</p>
                <Rate allowHalf defaultValue={0} />
              </div>
            </Card>
          </Col>
          <Col className="card__wrapper">
            <Card
              hoverable
              style={{ width: 280 }}
              cover={<img alt="example" src={MainImg} />}
            >
              <Meta
                style={{
                  paddingTop: 0,
                }}
                title="Wireless headphones"
              />
              <div className="additional">
                <p className="price">20$</p>
                <Rate allowHalf defaultValue={0} />
              </div>
            </Card>
          </Col>
          <Col className="card__wrapper">
            <Card
              hoverable
              style={{ width: 280 }}
              cover={<img alt="example" src={MainImg} />}
            >
              <Meta
                style={{
                  paddingTop: 0,
                }}
                title="Wireless headphones"
              />
              <div className="additional">
                <p className="price">20$</p>
                <Rate allowHalf defaultValue={0} />
              </div>
            </Card>
          </Col>
          <Col className="card__wrapper">
            <Card
              hoverable
              style={{ width: 280 }}
              cover={<img alt="example" src={MainImg} />}
            >
              <Meta
                style={{
                  paddingTop: 0,
                }}
                title="Wireless headphones"
              />
              <div className="additional">
                <p className="price">20$</p>
                <Rate allowHalf defaultValue={0} />
              </div>
            </Card>
          </Col>
          <Col className="card__wrapper">
            <Card
              hoverable
              style={{ width: 280 }}
              cover={<img alt="example" src={MainImg} />}
            >
              <Meta
                style={{
                  paddingTop: 0,
                }}
                title="Wireless headphones"
              />
              <div className="additional">
                <p className="price">20$</p>
                <Rate allowHalf defaultValue={0} />
              </div>
            </Card>
          </Col>
          <Col className="card__wrapper">
            <Card
              hoverable
              style={{ width: 280 }}
              cover={<img alt="example" src={MainImg} />}
            >
              <Meta
                style={{
                  paddingTop: 0,
                }}
                title="Wireless headphones"
              />
              <div className="additional">
                <p className="price">20$</p>
                <Rate allowHalf defaultValue={0} />
              </div>
            </Card>
          </Col>
          <Col className="card__wrapper">
            <Card
              hoverable
              style={{ width: 280 }}
              cover={<img alt="example" src={MainImg} />}
            >
              <Meta
                style={{
                  paddingTop: 0,
                }}
                title="Wireless headphones"
              />
              <div className="additional">
                <p className="price">20$</p>
                <Rate allowHalf defaultValue={0} />
              </div>
            </Card>
          </Col>
        </Row>
        <Pagination defaultCurrent={1} total={50} />
      </Container>
    </StyledProducts>
  );
};

export default Products;
