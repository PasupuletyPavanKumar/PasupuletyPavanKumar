import React, { useState } from "react";
import { _LABELS } from "../../../config/constants/general-constants";
import { _EMAIL_VALIDATOR, _PWD_VALIDATOR } from "../../../utils/Validators";
import ReCAPTCHA from "react-google-recaptcha";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
import {
  FormGroup,
  FormControl,
  FormLabel,
  Form,
  Button,
  FormCheck,
} from "react-bootstrap";
import { AuthenticationService } from "../../../services/authentication-service/AuthenticationService";

const Login = (props) => {
  //const [login, setLogin] = useState("login");
  const navigate = useNavigate();
  const authService = new AuthenticationService();
  const [loginFields, setLoginFields] = useState({
    username: "",
    password: "",
  });

  const inputValidators = () => {
    if (loginFields.username === "" || loginFields.password === "") {
      alert("All fields required");
      return false;
    } else if (_EMAIL_VALIDATOR(loginFields.username)) {
      alert("Enter valid email");
      return false;
    } else if (_PWD_VALIDATOR(loginFields.password)) {
      alert("Enter valid pwd");
      return false;
    } else {
      return true;
    }
  };

  const submitLogin = () => {
    if (inputValidators()) {
      const reqBody = {
        grant_type: "password",
        client_id: "aikno - ssd",
        client_secret: "xxx",
        scope: "openid",
        username: loginFields.username,
        password: loginFields.password,
      };
      authService.login(reqBody).then((res) => {
        if (res) {
          console.log(res);
        }
      });
      // console.log(loginFields);
      // navigate("/dashboard");
    }
  };

  const handleInputFields = (event, field) => {
    setLoginFields({
      username: field === 1 ? event.target.value.trim() : loginFields.username,
      password: field === 2 ? event.target.value.trim() : loginFields.password,
    });
  };

  return (
    <Form className="form-style">
      <FormGroup controlId="username">
        <FormLabel className="label">Username</FormLabel>
        <FormControl
          type="email"
          style={{
            background: "transparent",
            color: "white",
            height: "5%",
            alignSelf: "center",
            borderRadius: 0,
            border: "none",
            borderBottom: "1px solid rgb(101, 170, 255)",
            webkitBoxShadow: "none",
            boxShadow: "none",
          }}
          id="usr"
          value={loginFields.username}
          onChange={(e) => handleInputFields(e, 1)}
        />
      </FormGroup>

      <FormGroup controlId="username">
        <FormLabel className="label">Password</FormLabel>
        <FormControl
          type="password"
          style={{
            background: "transparent",
            color: "white",
            height: "5%",
            borderRadius: 0,
            border: "none",
            borderBottom: "1px solid rgb(101, 170, 255)",
            webkitBoxShadow: "none",
            boxShadow: "none",
          }}
          id="pwd"
          value={loginFields.password}
          onChange={(e) => handleInputFields(e, 2)}
        />
      </FormGroup>

      <FormGroup controlId="checkbox" className="check">
        <FormCheck type="checkbox" label="Remember me" className="label" />
        <a
          onClick={() => props.parentCallBack(_LABELS[1].password)}
          className="link"
        >
          {_LABELS[1].password}
        </a>
      </FormGroup>
      <center>
        <ReCAPTCHA
          className="captcha"
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          //onChange={onChange}
        />
      </center>
      <Button
        variant="primary"
        type="button"
        className="submit-button"
        onClick={submitLogin}
      >
        Login
      </Button>
    </Form>
  );
};

export default Login;
