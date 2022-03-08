import React, { useState } from "react";
import { _LABELS } from "../../../config/constants/general-constants";
import { _EMAIL_VALIDATOR, _PWD_VALIDATOR } from "../../../utils/Validators";
import ReCAPTCHA from "react-google-recaptcha";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  //const [login, setLogin] = useState("login");
  const navigate = useNavigate();
  const [loginFields, setLoginFields] = useState({
    userName: "",
    password: "",
  });

  const inputValidators = () => {
    if (loginFields.userName == "" || loginFields.password == "") {
      alert("All fields required");
      return false;
    } else if (_EMAIL_VALIDATOR(loginFields.userName)) {
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
      console.log(loginFields);
      navigate("/dashboard");
    }
  };

  const handleInputFields = (event, field) => {
    setLoginFields({
      userName: field === 1 ? event.target.value.trim() : loginFields.userName,
      password: field === 2 ? event.target.value.trim() : loginFields.password,
    });
  };

  return (
    <div>
      {/* <form onSubmit={submitLogin}> */}
      <div className="form-group">
        <label for="usr">Username</label>
        <input
          type="text"
          className="form-control"
          id="usr"
          value={loginFields.userName}
          onChange={(e) => handleInputFields(e, 1)}
        />
      </div>
      <div className="form-group">
        <label for="pwd">Password</label>
        <input
          type="password"
          className="form-control"
          id="pwd"
          value={loginFields.password}
          onChange={(e) => handleInputFields(e, 2)}
        />
      </div>

      <div className="d-flex justify-content-between">
        <div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="" />
              Remember me
            </label>
          </div>
        </div>
        <a onClick={() => props.parentCallBack(_LABELS[1].password)}>
          {_LABELS[1].password}
        </a>
      </div>

      <div>
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          //onChange={onChange}
        />
      </div>
      <button className="submit" type="submit" onClick={submitLogin}>
        Login
      </button>
      {/* </form> */}
    </div>
  );
};

export default Login;
