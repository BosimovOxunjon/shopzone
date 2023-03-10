import React from "react";
import { StyledContact } from "../../styles/Contact/contact";
import { Container, Box } from "@mui/material";
import { LocationOn, LocalShipping } from "@mui/icons-material";

const Contact = () => {
  return (
    <StyledContact>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: { xs: "wrap", sm: "nowrap" },
          m: "15px auto",
          fontSize: { xs: "small", sm: "medium" },
        }}
      >
        <Box
          component="div"
          sx={{ mb: { xs: "10px", sm: "0" }, mr: { xs: "10px", sm: "0" } }}
        >
          Need help? Call us:{" "}
          <a className="contact_phone" href="tel: +998901234567">
            (+998) 90 123 45 67
          </a>
        </Box>
        <Box
          component="div"
          sx={{
            ml: "auto",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            ml: { xs: "0", sm: "auto" },
            mb: { xs: "10px", sm: "0" },
          }}
        >
          <Box component="div" className="contact_info" sx={{ mr: "20px" }}>
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
