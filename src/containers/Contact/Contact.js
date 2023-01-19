import React from "react";
import { StyledContact } from "../../styles/Contact/contact";
import { Container, Box } from "@mui/system";
import { LocationOn } from "@mui/icons-material";

const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <Box component="div">
          Need help? Call us:{" "}
          <a className="contact_phone" href="tel: +998901234567">
            (+998) 90 123 45 67
          </a>
        </Box>
        <Box component="div" sx={{ ml: "auto", display: "flex" }}>
          <Box component="div">
            <LocationOn />
            Our store
          </Box>
          <Box component="div">
            <LocationOn />
            Track your order
          </Box>
        </Box>
      </Container>
    </StyledContact>
  );
};

export default Contact;
