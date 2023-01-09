import React from "react";
import { StyledHeader } from "../../styles/Header/header";
import { Form, Input } from "antd";
import HeaderLogo from "../../assets/img/logo/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <Link to={`/header`}>
        <img className="header_logo" src={HeaderLogo} alt="logo-img" />
      </Link>
      <Form>
        <Input />
      </Form>
    </StyledHeader>
  );
};

export default Header;
