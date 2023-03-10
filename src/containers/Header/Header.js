import React, { useState } from "react";
import { StyledHeader } from "../../styles/Header/header";
import {
  Container,
  Tabs,
  Tab,
  Box,
  Button,
  Menu,
  MenuItem,
  Grid,
} from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import HeaderLogo from "../../assets/img/logo/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledHeader>
        <Container>
          <Box sx={{ width: "100%", display: "flex" }}>
            <Button
              sx={{
                fontWeight: "600",
                color: "white",
                background: "#EDA415",
                p: "0 10px",
                "&:hover": {
                  background: "#e3bf78",
                },
              }}
              id="browse-categories"
              aria-controls={open ? "browse-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Browse categories
            </Button>
            <DehazeIcon
              sx={{
                display: { xs: "inline-block", md: "none" },
                color: "#000",
                cursor: "pointer",
                ml: "auto",
              }}
              onClick={() => setShow(!show)}
            />
            <Grid
              component="div"
              sx={{
                display: show ? "grid" : { xs: "none", md: "flex" },
                justifyContent: show ? "center" : "inherit",
                visibility: show ? "visible" : { xs: "hidden", md: "visible" },
                position: { xs: "absolute", md: "inherit" },
                right: show ? "0" : "auto",
                left: show ? "0" : "auto",
                top: show ? "90px" : "auto",
                ml: { xs: "0", md: "auto" },
                zIndex: show ? "1" : "0",
              }}
            >
              <Menu
                id="browse-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "browse-categories",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
              <Tabs
                sx={{ ml: "10%", flexDirection: { xs: "column", md: "row" } }}
                onChange={handleChange}
                value={value}
                aria-label="Tabs where selection follows focus"
                selectionFollowsFocus
              >
                {/* </Tab> */}
                <Tab label="Home" className="header_link" />
                <Tab label="Catalog" className="header_link" />
                <Tab label="Blog" className="header_link" />
                <Tab label="Pages" className="header_link" />
                <Tab label="About us" className="header_link" />
              </Tabs>
              <Button
                sx={{
                  color: "#003F62",
                  fontWeight: "700",
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  ml: "auto",
                }}
                variant="text"
              >
                30 Days Free Return
              </Button>
            </Grid>
          </Box>
        </Container>
      </StyledHeader>
    </>
  );
};

export default Header;
