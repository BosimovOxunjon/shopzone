import React, { useState } from "react";
import { StyledSearch } from "../../styles/Search/search";
import HeaderLogo from "../../assets/img/logo/logo.png";
import { Link } from "react-router-dom";
import { Button, Container, Grid, FormControl } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DehazeIcon from "@mui/icons-material/Dehaze";

const Search = () => {
  const [show, setShow] = useState(false);
  return (
    <StyledSearch>
      <Container sx={{ display: "flex", alignItems: "center" }}>
        <Link to={`/`}>
          <img className="header_logo" src={HeaderLogo} alt="logo-img" />
        </Link>
        <FormControl
          sx={{
            display: { xs: "none", sm: "block" },
          }}
          className="search_form"
        >
          <input
            className="search_form-input"
            type="text"
            name="name"
            placeholder="Search any things"
          />
          <Button variant="contained" className="search_form-btn">
            Search
          </Button>
        </FormControl>
        <DehazeIcon
          sx={{
            display: { xs: "inline-block", md: "none" },
            color: "white",
            cursor: "pointer",
            ml: "auto",
          }}
          onClick={() => setShow(!show)}
        />
        <Grid
          component="div"
          sx={{
            display: show ? "grid" : { xs: "none", md: "block" },
            justifyContent: show ? "center" : "inherit",
            visibility: show ? "visible" : { xs: "hidden", md: "visible" },
            position: { xs: "absolute", md: "inherit" },
            right: show ? "0" : "auto",
            left: show ? "0" : "auto",
            top: show ? "90px" : "auto",
            background: "#003f62",
            ml: { xs: "0", md: "auto" },
            zIndex: show ? "1" : "0",
          }}
        >
          <Button className="search_link" sx={{ ml: "auto" }}>
            <PersonOutlineOutlinedIcon
              className="search_icon"
              sx={{ mr: "10px" }}
            />
            Sign in
          </Button>
          <Button className="search_link">
            <FavoriteBorderOutlinedIcon className="search_icon" />
            <span className="search_counts">0</span>
            Sign in
          </Button>
          <Button className="search_link">
            <ShoppingCartOutlinedIcon className="search_icon" />
            <span className="search_counts">0</span>
            Cart
          </Button>
        </Grid>
      </Container>
    </StyledSearch>
  );
};

export default Search;
