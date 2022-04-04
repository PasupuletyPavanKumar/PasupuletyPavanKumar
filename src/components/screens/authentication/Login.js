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
  Row,
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
      var urlencoded = new URLSearchParams();
      urlencoded.append("grant_type", "password");
      urlencoded.append("client_id", "aikno-ssd");
      urlencoded.append("client_secret", "L38cGElKRUJSkX6ZkImNViw7c9KiGyg4");
      urlencoded.append("username", loginFields.username);
      urlencoded.append("password", loginFields.password);
      urlencoded.append("scope", "openid");

      const reqBody = {
        grant_type: "password",
        client_id: "aikno-ssd",
        client_secret: "L38cGElKRUJSkX6ZkImNViw7c9KiGyg4",
        scope: "openid",
        username: loginFields.username,
        password: loginFields.password,
        scope: "openid",
      };
      authService.login(urlencoded).then((res) => {
        if (res) {
          navigate("/dashboard");
        }
      });
      // console.log(loginFields);
      //
    }
  };

  const handleInputFields = (event, field) => {
    setLoginFields({
      username: field === 1 ? event.target.value.trim() : loginFields.username,
      password: field === 2 ? event.target.value.trim() : loginFields.password,
    });
  };

  return (
    <div class="form" className="form-style">
      <div class="form-group">
        <label for="usr" className="label">Username</label>
        <br/>
        <input
          type="text"
          className="input-field"
          id="usr"
          value={loginFields.username}
          onChange={(e) => handleInputFields(e, 1)}
        />
      </div>

      <div class="form-group">
        <label className="label">Password</label>
        <br/>
        <input
          type="password"
          className="input-field"
          id="pwd"
          value={loginFields.password}
          onChange={(e) => handleInputFields(e, 2)}
        />
      </div>

      <div class="form-group">
        <div class="row">
        <FormCheck type="checkbox" label="Remember me" className="check" />
        <text
          onClick={() => props.parentCallBack(_LABELS[1].password)}
          className="link"
        >
          {_LABELS[1].password}
        </text>
        </div>
      </div>
      <center>
        <ReCAPTCHA
          className="captcha"
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          //onChange={onChange}
        />
      </center>
      <button
        variant="primary"
        type="button"
        className="submit-button"
        onClick={submitLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
