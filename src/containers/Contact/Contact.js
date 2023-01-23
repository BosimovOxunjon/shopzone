import React from "react";
import { StyledContact } from "../../styles/Contact/contact";
import { Container, Box } from "@mui/material";
import { LocationOn, LocalShipping } from "@mui/icons-material";

const Contact = () => {
  return (
    <StyledContact>
      <Container sx={{ display: "flex", alignItems: "center" }}>
        <Box component="div">
          Need help? Call us:{" "}
          <a className="contact_phone" href="tel: +998901234567">
            (+998) 90 123 45 67
          </a>
        </Box>
        <Box
          component="div"
          sx={{ ml: "auto", display: "flex", alignItems: "center" }}
        >
          <Box component="div" className="contact_info" sx={{ mr: "10px" }}>
            <LocationOn className="contact_icon" />
            Our store
          </Box>
          <Box component="div" className="contact_info">
            <LocalShipping className="contact_icon" />
            Track your order
          </Box>
        </Box>
      </Container>
    </StyledContact>
  );
};

export default Contact;
