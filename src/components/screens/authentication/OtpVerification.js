import React, { useState } from "react";
import { _LABELS } from "../../../config/constants/general-constants";

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

  return (
    <div className="mt-2">
      <div className="d-flex justify-content-between">
        {otpFields.map((otp, index) => (
          <div class="form-group ">
            <input
              key={index.toString()}
              type="text"
              class="form-control"
              className="otpVerification-input"
              value={otpFields[index]}
              maxLength={1}
              autoFocus={index === 0 ? true : false}
              onChange={(ev) => onChangeinput(ev, index)}
            />
          </div>
        ))}
      </div>

      <a onClick={() => props.parentCallBack(_LABELS[3].reset)}>
        {_LABELS[2].otp}
      </a>
      <div>
        <a onClick={() => props.parentCallBack(_LABELS[1].password)}>Go Back</a>
      </div>
    </div>
  );
};

export default OtpVerification;
