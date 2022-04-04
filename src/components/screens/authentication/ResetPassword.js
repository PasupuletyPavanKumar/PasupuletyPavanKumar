import React, { useState } from "react";
import { _LABELS } from "../../../config/constants/general-constants";
import { _PWD_VALIDATOR } from "../../../utils/Validators";
import {
  FormGroup,
  FormControl,
  FormLabel,
  Form,
  Button,
  FormCheck,
} from "react-bootstrap";

const ResetPassword = (props) => {
  const [inputFields, setInputFields] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleInputFields = (event, field) => {
    setInputFields({
      password: field === 1 ? event.target.value.trim() : inputFields.password,
      confirmPassword:
        field === 2 ? event.target.value.trim() : inputFields.confirmPassword,
    });
  };

  const validators = () => {
    if (inputFields.password == "" || inputFields.confirmPassword == "") {
      alert("All fields required");
      return false;
    } else if (
      _PWD_VALIDATOR(inputFields.password) ||
      _PWD_VALIDATOR(inputFields.confirmPassword)
    ) {
      alert("Pwd format shld be proper");
      return false;
    } else if (
      //inputFields.password.localeCompare(inputFields.confirmPassword)
      inputFields.password != inputFields.confirmPassword
    ) {
      alert("Pwd & Confirm Pwd should be same");
      return false;
    } else {
      return true;
    }
  };

  const submitResetPassword = () => {
    if (validators()) {
      console.log(inputFields);
      props.parentCallBack("done");
    }
  };

  return (
    <div class="form" className="form-style">
      <div class="form-group">
        <label for="usr" className="label">New Password</label>
        <br/>
        <input
          type="password"
          className="input-field"
          id="usr"
          value={inputFields.password}
          onChange={(e) => handleInputFields(e, 1)}
        />
      </div>

      <div class="form-group">
        <label  for="pwd" className="label"> Confirm Password</label>
        <br/>
        <input
          type="password"
         className="input-field"
          id="pwd"
          value={inputFields.confirmPassword}
          onChange={(e) => handleInputFields(e, 2)}
        />
      </div>
      <div class="form-group">
        <center>
          <button
            onClick={submitResetPassword}
            type="button"
            className="submit-button"
          >
            {_LABELS[3].reset}
          </button>
        </center>
      </div>
    </div>
  );
};

export default ResetPassword;
