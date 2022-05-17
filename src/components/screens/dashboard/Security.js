import React, { useState } from "react";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";
import { _PWD_VALIDATOR } from "../../../utils/Validators";
import ResetPassword from "../authentication/ResetPassword";

const Security = () => {
  const authenticatedService = new AuthenticatedService();
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

  const resetPassword = () => {
    if (validators()) {
      console.log(inputFields);
      alert("reset Password");
      var reqBody = new FormData();
      reqBody.append("password", inputFields.password);
      reqBody.append("userName", sessionStorage.getItem("username"));
      reqBody.append("byUserRole", sessionStorage.getItem("role"));

      authenticatedService.updateProfilePassword(reqBody).then((res) => {
        if (res) {
          console.log(res);
        }
      });
    }
  };

  return (
    <div className="securitybg">
      <div className="securityitems">
        <div class="form-group">
          <label for="usr">NEW PASSWORD</label>
          <input
            type="password"
            class="form-control commonforall text-primary"
            id="usr"
            name="firstname"
            value={inputFields.password}
            onChange={(e) => handleInputFields(e, 1)}
          />
        </div>
        <div class="form-group">
          <label for="pwd">CONFIRM PASSWORD</label>
          <input
            type="password"
            class="form-control commonforall"
            id="usr"
            name="lastname"
            value={inputFields.confirmPassword}
            onChange={(e) => handleInputFields(e, 2)}
          />
        </div>
        <input
          class="btn btn-primary"
          type="submit"
          value="Submit"
          onClick={resetPassword}
        ></input>
      </div>
    </div>
  );
};

export default Security;
