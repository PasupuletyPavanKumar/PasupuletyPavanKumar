import React, { useState } from "react";
import { _LABELS } from "../../../config/constants/general-constants";
import { _EMAIL_VALIDATOR } from "../../../utils/Validators";
import {
  Button,
  FormControl,
  FormGroup,
  Form,
  FormLabel,
} from "react-bootstrap";

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
    if (inputField.username === "") {
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
    <Form className="form-style">
      <FormGroup controlId="username">
        <FormLabel for="usr" className="label">
          Email id/Username
        </FormLabel>{" "}
        <br />
        <FormControl
          type="email"
          style={{
            background: "transparent",
            color: "white",
            height: "5%",
            alignSelf: "center",
            borderRadius: 0,
            border: "none",
            boxShadow: "none",
            borderBottom: "1px solid rgb(101,170,255)",
          }}
          id="usr"
          value={inputField.username}
          onChange={handleInput}
        />
      </FormGroup>
      <br />
      <FormGroup controlId="username">
        <Button
          variant="primary"
          type="button"
          className="submit-button"
          onClick={submitForgotPassword}
        >
          {_LABELS[1].password}
        </Button>
        {/* <a onClick={() => props.parentCallBack(_LABELS[2].otp)}>
        {_LABELS[1].password}
      </a> */}
      </FormGroup>
      <br />
      <FormGroup>
        <center>
          <a
            onClick={() => props.parentCallBack(_LABELS[0].login)}
            className="link"
          >
            Back to Login
          </a>
        </center>
      </FormGroup>
    </Form>
  );
};

export default ForgotPassword;
