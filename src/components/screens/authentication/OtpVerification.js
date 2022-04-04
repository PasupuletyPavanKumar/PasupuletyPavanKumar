import React, { useState } from "react";
import { _LABELS } from "../../../config/constants/general-constants";

/*update this with vinay's code*/
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
      
        <div className="d-flex">
        {otpFields.map((otp, index) => (
            <input
              key={index.toString()}
              type="text" 
              pattern="[0-9]+"
              // value={otpFields[index]}
              maxLength={1}
              //autoFocus={index === 0 ? true : false}
              onChange={(ev) => onChangeinput(ev, index)}
              className="otpinput"
            />
        ))}
       </div>
       <br/>
      <button
        variant="primary"
        type="button"
        onClick={submitOtp}
        className="submit-button"
      >
        {_LABELS[2].otp}
      </button>
      <br />
      <br />
      <div>
        <center>
          <text
            onClick={() => props.parentCallBack(_LABELS[1].password)}
            className="backlink"
          >
            Go Back
          </text>
        </center>
      </div>
    </div>

  );
};

export default OtpVerification;
