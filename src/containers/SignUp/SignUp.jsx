import React, { useState } from "react";
import {
  Container,
  Box,
  Grid,
  TextField,
  Text,
  Button,
  Link,
} from "@mui/material";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";

const SignUp = () => {
  const handleSubmit = async (e) => {
    console.log(e);
  };
  const [phone, setPhone] = useState("");

  const handleChangePhone = (newPhone) => {
    setPhone(newPhone);
    matchIsValidTel(newPhone);
  };
  return (
    <>
      <Container
        component="main"
        sx={{ display: "flex", flexWrap: { xs: "wrap", md: "nowrap" } }}
      >
        <Grid container columnSpacing={3} sx={{ height: "100vh" }}>
          <Box component="div" xs={12} sm={6}></Box>
        </Grid>
        <Grid container columnSpacing={9} sx={{ m: "auto", width: "inherit" }}>
          <Box sx={{ fontSize: "h1.fontSize" }}>Sign Up</Box>
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
