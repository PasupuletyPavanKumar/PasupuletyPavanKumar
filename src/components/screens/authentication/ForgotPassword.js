import React, { useState } from "react";
import { _LABELS } from "../../../config/constants/general-constants";
import { _EMAIL_VALIDATOR } from "../../../utils/Validators";

const ForgotPassword = (props) => {
  const [inputField, setInput] = useState({
    username: "",
  });

  console.log(props);

  const handleInput = (event) => {
    setInput({
      username: event.target.value.trim(),
    });
  };

  const inputValidator = () => {
    if (inputField.username == "") {
      alert("Email is required");
      return false;
    } else if (_EMAIL_VALIDATOR(inputField.username)) {
      alert("Enter valid Email");
      return false;
    } else {
      return true;
    }
  };

  const submitForgotPassword = () => {
    if (inputValidator()) {
      console.log(inputField);
      props.parentCallBack(_LABELS[2].otp);
    }
  };

  return (
    <div>
      <div class="form-group">
        <label for="usr">Emailid/username</label>
        <input
          type="text"
          class="form-control"
          id="usr"
          value={inputField.username}
          onChange={handleInput}
        />
      </div>
      <a onClick={submitForgotPassword}>{_LABELS[1].password}</a>
      {/* <a onClick={() => props.parentCallBack(_LABELS[2].otp)}>
        {_LABELS[1].password}
      </a> */}
      <div>
        <a onClick={() => props.parentCallBack(_LABELS[0].login)}>
          Back to Login
        </a>
      </div>
    </div>
  );
};

export default ForgotPassword;
