import React, { useState } from "react";
import {
  _AUTHTITLES,
  _LABELS,
} from "../../../config/constants/general-constants";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import OtpVerification from "./OtpVerification";
import ResetPassword from "./ResetPassword";
import { Container, Col } from "react-bootstrap";
//import Logo from "..\\src\\assets\\icons\\Icon-checkmark-circle.svg";
import Logo from "../../../assets/icons/Icon-checkmark-circle.svg";
//import Logo from "/home/user/AiKno/AiKnoWebApp/AiKnoFrontEnd_v2/AiKnoFrontend/src/assets/icons/Icon-checkmark-circle.svg";

//Description:Auth-Main function get description of login screens heading from "config\constants\general-constant.js" and set the
//login screens heading (login screen:login heading, forgot password:forgot password heading, etc) respectively.
// It also contain the container for all the login forms.
//input:null
//path:navigate to Login.js
//output:returns heading and flex for all the login screen forms
const AuthMain = () => {
  //intially state of screens is set to login to display login page first
  const [login, setLogin] = useState(_LABELS[0].login);

  //getTitle function retrieves the heading from authtitles constant from general-constant.js and return it
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

  //setTitle function set the title that is returned by the getTitle function
  const setTitle = () => {
    const title = getTitle();
    return (
      // displays the title with defined css
      <div className="title">
        <div className="heading">{title.title}</div>
        <div className="subheading">{title.desc}</div>
      </div>
    );
  };

  //check function checks the label value to set the state of the login screen
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
      default:
        setLogin("done");
    }
    // if (value === "forgotPassword") setLogin("forgotPassword");
  };

  //resetSuccess function redirects thank you page to login page after 3 seconds
  const resetSuccess = () => {
    setTimeout(() => {
      setLogin(_LABELS[0].login);
    }, 3000);
    return (
      <div className="form-style">
        <center>
          <img src={Logo} className="thankyou" />
          <br />
          <label className="head">Thank you!</label>
          <label className="subhead">
            Your registration has been successfully completed
          </label>
        </center>
      </div>
    );
  };

  //renderComponent function navigate the content of the login screens according to
  //the label and return back on parent callback
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
          <div>{resetSuccess()}</div>
        )}
      </div>
    );
  };

  return (
    //container for all login forms
    <div class="container authmain-flex">
      <div>
        {/*displays the title*/}
        <div class="title">
          {login != "done" && (
            <div className="logo text-center">{setTitle()}</div>
          )}
          {/* {setTitle()} */}
        </div>

        {/*displays the container for forms*/}
        <div class="formbox">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default AuthMain;
