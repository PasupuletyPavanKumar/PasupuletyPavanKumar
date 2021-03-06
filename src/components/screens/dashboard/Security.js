import React, { useState } from "react";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";
import { _PWD_VALIDATOR } from "../../../utils/Validators";
import ResetPassword from "../authentication/ResetPassword";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
const Security = () => {
  const authenticatedService = new AuthenticatedService();
  const [inputFields, setInputFields] = useState({
    password: "",
    confirmPassword: "",
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
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
          <div>{handleClose()}</div>;
          console.log("password changed");

          //  refreshPage();
        } else {
          alert("Error in creating Admin");
        }
      });
    }
  };

  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div class="  ">
      <div className="container">
        <div class="row">
          <div class="scon1 col-lg-10 col-md-12">
            <div class="userimage"></div>
            {/* <div className="container details"> */}
            {/* <div className="row"> */}

            {/* <div className="row"> */}

            <div class="form-group col-12 col-md-12 col-lg-8">
              <div class="form-group">
                <label for="usr" className="label">
                  New Password
                </label>
                <br />
                <input
                  type="password"
                  className="input-field"
                  id="usr"
                  value={inputFields.password}
                  onChange={(e) => handleInputFields(e, 1)}
                />
              </div>
              {/* <label className="label2" for="usr">
                NEW PASSWORD
              </label>
              <input
                type="text"
                class="text-field1"
                id="usr"
                name="firstname"
                value={inputFields.password}
                onChange={(e) => handleInputFields(e, 1)}
              /> */}
            </div>

            {/* </div> */}
            {/* <div className="row"> */}
            <div class="form-group col-12 col-md-12 col-lg-8">
              <div class="form-group">
                <label for="pwd" className="label">
                  {" "}
                  Confirm Password
                </label>
                <br />
                <input
                  className="input-field"
                  id="pwd"
                  type={passwordType}
                  onChange={handlePasswordChange}
                  value={passwordInput}
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="input-group-btn">
                <button
                  className="btn btn-outline-primary"
                  onClick={togglePassword}
                >
                  {passwordType === "password" ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )}
                </button>
              </div>
              {/* <label className="label2" for="usr">
                CONFIRM PASSWORD
              </label>
              <input
                type="text"
                class="text-field1"
                id="usr"
                name="username"
                value={inputFields.confirmPassword}
                onChange={(e) => handleInputFields(e, 2)}
              /> */}
            </div>

            {/* </div> */}

            <div
              class="col-lg-10"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <button onClick={resetPassword} className="submit-button1 p-2">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
