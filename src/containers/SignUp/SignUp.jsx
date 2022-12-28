import axios from "axios";
import React, { useState } from "react";
import {
  createTheme,
  ThemeProvider,
  Container,
  Box,
  Grid,
  TextField,
  Button,
  Link,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import BackgroundImg from "../../assets/img/SignUp/background.png";
import MainImg from "../../assets/img/SignUp/signup.png";
import keys from "../../configs/configs";

const SignUp = () => {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleSubmit = async (value) => {
    value.preventDefault();
    const { data } = await axios.post(`${keys.BACKEND_API}/auth/sign-up`, {
      ...value,
    });
    // data =;
    setUser(data);
    return data;
  };

  const handleChangePhone = (newPhone) => {
    setPhone(newPhone);
    matchIsValidTel(newPhone);
  };

  const theme = createTheme({
    status: {
      danger: orange[500],
    },
  });

  return (
    <>
      <Container
        component="section"
        sx={{
          display: "flex",
          p: "0!important",
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        <Grid
          container
          columnSpacing={{ md: 6, xs: 12 }}
          sx={{
            display: "flex",
            height: "100vh",
            ml: "0!important",
            overflow: "hidden",
          }}
        >
          <Box component="div" className="" xs={12} sm={6}>
            <ImageList
              sx={{
                justifyItems: "center",
                mt: 0,
                width: "100%",
                height: "100%",
              }}
            >
              {/* <ImageListItem cols={10}> */}
              <Box
                component="img"
                src={BackgroundImg}
                sx={{
                  width: { xs: "100vw", md: "50vw" },
                }}
              />
              {/* </ImageListItem> */}
              <Box
                component="img"
                src={MainImg}
                sx={{
                  mt: 3,
                  position: "absolute",
                }}
              />
            </ImageList>
          </Box>
        </Grid>
        <Grid
          container
          columnSpacing={{ md: 6, xs: 12 }}
          m="auto"
          sx={{
            m: "auto!important",
            width: "inherit",
            pt: { xs: 5, md: 0 },
            pl: 3,
          }}
        >
          <Box
            sx={{
              fontSize: { lg: "h1.fontSize", xs: "h3.fontSize" },
              fontWeight: 600,
            }}
          >
            Sign Up
          </Box>
          <Box
            component="form"
            xs={12}
            sm={6}
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container justifyContent="flex-start" sx={{ mb: 3 }}>
              <Grid item>
                Already have an account?
                <Link href="#" variant="body2">
                  Sign in
                </Link>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <MuiTelInput
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  defaultCountry={"UZ"}
                  value={phone}
                  onChange={handleChangePhone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default SignUp;
