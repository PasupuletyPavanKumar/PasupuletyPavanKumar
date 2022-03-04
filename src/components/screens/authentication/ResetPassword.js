import React, { useState } from "react";
import { _LABELS } from "../../../config/constants/general-constants";
import { _PWD_VALIDATOR } from "../../../utils/Validators";

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
      alert("Pwd & COnfirm Pwd should be identical");
      return false;
    } else {
      return true;
    }
  };

  const submitResetPassword = () => {
    if (validators()) {
      console.log(inputFields);
    }
  };

  return (
    <div>
      <div class="form-group">
        <label for="usr">New Password</label>
        <input
          type="password"
          class="form-control"
          id="usr"
          value={inputFields.password}
          onChange={(e) => handleInputFields(e, 1)}
        />
      </div>
      <div class="form-group">
        <label for="pwd">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          id="pwd"
          value={inputFields.confirmPassword}
          onChange={(e) => handleInputFields(e, 2)}
        />
      </div>
      <a onClick={submitResetPassword}>{_LABELS[3].reset}</a>
    </div>
  );
};

export default ResetPassword;
