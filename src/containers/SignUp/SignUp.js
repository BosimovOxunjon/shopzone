import axios from "axios";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import BackgroundImg from "../../assets/img/SignUp/background.png";
import { Form, Input, Button, Radio } from "antd";
import { Link } from "react-router-dom";
import MainImg from "../../assets/img/SignUp/signup.png";
import { StyledSignUp } from "../../styles/SignUp/signUp";
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
  const handleSignUp = async (value) => {
    const { data } = await axios.post(`${keys.BACKEND_API}/auth/sign-up`, {
      ...value,
    });
    setUser(data);
    if (data && data.success == true) {
      return window.location.replace("/home");
    }
    localStorage.setItem("token", JSON.stringify(data.token));
    localStorage.setItem("user", JSON.stringify(data));
    console.log(data);
    return data;
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
            <Form onFinish={handleSignUp} className="form_wrapper">
              <h2 className="title">Sign Up</h2>
              <p className="text">
                Already have an account.{" "}
                <Link to={`/signin`} className="link">
                  Log in
                </Link>
              </p>
              <Form.Item name="firstName">
                <Input
                  className="form_input"
                  type="text"
                  name="Name"
                  placeholder="First name"
                  required
                />
              </Form.Item>
              <Form.Item name="lastName">
                <Input
                  className="form_input"
                  type="text"
                  placeholder="Last name"
                  required
                />
              </Form.Item>
              <Form.Item name="phone">
                <PhoneInput
                  className="form_input-phone"
                  country={"uz"}
                  value={phone}
                  onChange={(phone) => setPhone({ phone })}
                />
              </Form.Item>
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

export default SignUp;
