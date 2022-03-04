import React, { useState } from "react";
import {
  _AUTHTITLES,
  _LABELS,
} from "../../../config/constants/general-constants";
import { Button } from "react-bootstrap";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import OtpVerification from "./OtpVerification";
import ResetPassword from "./ResetPassword";

const AuthMain = () => {
  const [login, setLogin] = useState(_LABELS[0].login);

  const getTitle = () => {
    switch (login) {
      case _LABELS[0].login:
        return _AUTHTITLES[0];
      case _LABELS[1].password:
        return _AUTHTITLES[1];
      case _LABELS[2].otp:
        return _AUTHTITLES[2];
      case _LABELS[3].reset:
        return _AUTHTITLES[3];
    }
  };

  const setTitle = () => {
    const title = getTitle();
    return (
      <div>
        <div>{title.title}</div>
        <div>{title.desc}</div>
      </div>
    );
  };

  const check = (value) => {
    switch (value) {
      case _LABELS[0].login:
        return setLogin(_LABELS[0].login);
      case _LABELS[1].password:
        return setLogin(_LABELS[1].password);
      case _LABELS[2].otp:
        return setLogin(_LABELS[2].otp);
      case _LABELS[3].reset:
        return setLogin(_LABELS[3].reset);
    }
    // if (value === "forgotPassword") setLogin("forgotPassword");
  };

  const renderComponent = () => {
    return (
      <div>
        {login === _LABELS[0].login ? (
          <Login parentCallBack={check.bind()} />
        ) : login === _LABELS[1].password ? (
          <ForgotPassword parentCallBack={check.bind()} />
        ) : login === _LABELS[2].otp ? (
          <OtpVerification parentCallBack={check.bind()} />
        ) : login === _LABELS[3].reset ? (
          <ResetPassword parentCallBack={check.bind()} />
        ) : (
          <div>thankyou</div>
        )}
      </div>
    );
  };

  return (
    <div className="authmain-section">
      <div className="authmain-flex">
        {/* <div className="logo">sdkflsd</div> */}
        <div className="logo text-center">{setTitle()}</div>
        <div className="bg-design p-4 mt-4">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default AuthMain;
