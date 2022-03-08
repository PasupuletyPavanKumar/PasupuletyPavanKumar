import React, { useState } from "react";
import { _LABELS } from "../../../config/constants/general-constants";
import { Button } from "react-bootstrap";

const OtpVerification = (props) => {
  const otpFields = ["", "", "", ""];
  const [inputFocus, setInputFoucs] = useState(0);
  // const [otpFields, setOptFields] = [
  //   {
  //     otp1: "",
  //     focus: true,
  //   },
  //   {
  //     otp2: "",
  //     focus: false,
  //   },
  //   {
  //     otp3: "",
  //     focus: false,
  //   },
  //   {
  //     otp4: "",
  //     focus: false,
  //   },
  // ];

  const onChangeinput = (ev, index) => {
    otpFields[index] = ev.target.value;
    // if (otpFields[0] != "") setInputFoucs(1);
  };

  const submitOtp = () => {
    let isValid = true;
    otpFields.forEach((otp) => {
      if (otp === "") isValid = false;
    });

    if (isValid) {
      props.parentCallBack(_LABELS[3].reset);
    } else {
      alert("OTP required");
    }
  };

  return (
    <div className="form-style">
      <div className="d-flex justify-content-between">
        {otpFields.map((otp, index) => (
          <div class="form-group ">
            <input
              key={index.toString()}
              type="text"
              class="form-control"
              className="otpVerification-input"
              // value={otpFields[index]}
              maxLength={1}
              //autoFocus={index === 0 ? true : false}
              onChange={(ev) => onChangeinput(ev, index)}
              style={{
                maxWidth: "60px",
                height: "60px",

                background: "rgba(0,43,114, 0.6)",
                color: "white",
                border: "none",

                webkitBoxShadow: "none",
                boxShadow: "none",
                borderRadius: "8px",
              }}
            />
          </div>
        ))}
      </div>
      <Button
        variant="primary"
        type="button"
        onClick={() => submitOtp()}
        className="submit-button"
      >
        {_LABELS[2].otp}
      </Button>
      <br />
      <br />
      <div>
        <center>
          <a
            onClick={() => props.parentCallBack(_LABELS[1].password)}
            className="label"
          >
            Go Back
          </a>
        </center>
      </div>
    </div>
  );
};

export default OtpVerification;
