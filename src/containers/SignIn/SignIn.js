import axios from "axios";
import React from "react";
import "react-phone-input-2/lib/style.css";
import BackgroundImg from "../../assets/img/SignUp/background.png";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import MainImg from "../../assets/img/SignUp/SignIn.png";
import { StyledSignUp } from "../../styles/SignUp/signUp";
import keys from "../../configs/configs";

const SignIn = () => {
  const handleSignIn = async (values) => {
    const { data } = await axios.post(
      `${keys.BACKEND_API}/auth/sign-in`,
      {
        ...values,
      },
      {
        headers: {
          authorization: localStorage.getItem("user"),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data, "data from ign in");
    if (data && data.success === true) {
      return window.location.replace("/home");
    }
    localStorage.setItem("token", JSON.stringify(data));
    console.log(localStorage.setItem("token", JSON.stringify(data.token)));
  };
  return (
    <>
      <StyledSignUp>
        <div className="row">
          <div className="content_img">
            <div className="img_wrapper">
              <img
                src={BackgroundImg}
                className="img_item"
                alt="background-img"
              />
              <img src={MainImg} className="img_item" alt="background-img" />
            </div>
          </div>
          <div className="content_form">
            <div className="content_form-item"></div>
            <Form onFinish={handleSignIn} className="form_wrapper">
              <h2 className="title">Sign Up</h2>
              <p className="text">
                Do not you have an account?{" "}
                <Link to={`/signup`} className="link">
                  Sign Up
                </Link>
              </p>
              <Form.Item name="email">
                <Input
                  className="form_input"
                  type="mail"
                  name="mail"
                  placeholder="Email"
                  required
                />
              </Form.Item>
              <Form.Item name="password">
                <Input.Password
                  className="form_input"
                  style={{ padding: "15px" }}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </Form.Item>
              <Form.Item>
                <Button className="form_submit" htmlType="submit">
                  Next step
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </StyledSignUp>
    </>
  );
};

export default SignIn;
