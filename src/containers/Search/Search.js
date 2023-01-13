import React from "react";
import { StyledSearch } from "../../styles/Search/search";
import { Content, Button, Form, Input } from "antd";
import HeaderLogo from "../../assets/img/logo/logo.png";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <StyledSearch>
      <Link to={`/`}>
        <img className="header_logo" src={HeaderLogo} alt="logo-img" />
      </Link>
      <Form>
        {/* <Form.Item> */}
        <Input />
        {/* </Form.Item>
        <Form.Item> */}
        <Button type="success">Search</Button>
        {/* </Form.Item> */}
      </Form>
      {/* <Content></Content> */}
    </StyledSearch>
  );
};

export default Search;
