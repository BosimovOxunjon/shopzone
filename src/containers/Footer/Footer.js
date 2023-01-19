import React from "react";
import { styled } from "@mui/system";
import { Container } from "@mui/material";

const StyledFooter = styled("div")({
  backgroundColor: "#E2F4FF",
  height: 100,
  width: 100,
});

const Footer = () => {
  return (
    <StyledFooter>
      <Container></Container>
    </StyledFooter>
  );
};

export default Footer;
