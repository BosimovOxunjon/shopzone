import React from "react";
import { StyledSearch } from "../../styles/Search/search";
import HeaderLogo from "../../assets/img/logo/logo.png";
import { Link } from "react-router-dom";
import { Button, Container, TextField, Autocomplete } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Search = () => {
  return (
    <StyledSearch>
      <Container sx={{ display: "flex", alignItems: "center" }}>
        <Link to={`/`}>
          <img className="header_logo" src={HeaderLogo} alt="logo-img" />
        </Link>
        <form className="search_form">
          <input
            className="search_form-input"
            type="text"
            name="name"
            placeholder="Search any things"
          />
          <Button variant="contained" className="search_form-btn">
            Search
          </Button>
        </form>
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
      </Container>
    </StyledSearch>
  );
};

export default Search;
