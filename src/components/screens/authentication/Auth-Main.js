import React, { useState } from "react";
import {
  _AUTHTITLES,
  _LABELS,
} from "../../../config/constants/general-constants";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import OtpVerification from "./OtpVerification";
import ResetPassword from "./ResetPassword";
import { FormLabel } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "..\\src\\assets\\icons\\Icon-checkmark-circle.svg";

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
      <div className="title">
        <div className="heading">{title.title}</div>
        <div className="subheading">{title.desc}</div>
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
      default:
        setLogin("done");
    }
    // if (value === "forgotPassword") setLogin("forgotPassword");
  };

  const resetSuccess = () => {
    setTimeout(() => {
      setLogin(_LABELS[0].login);
    }, 3000);
    return (
      <div>
        <img src={Logo} className="lttslogo" />
        <FormLabel className="heading mt-4 thankYou">Thank You!</FormLabel>
        <FormLabel className="subheading mt-4 thankYou">
          Your registration has been successfully completed
        </FormLabel>
      </div>
    );
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
          <div>{resetSuccess()}</div>
        )}
      </div>
    );
  };

  return (
    <Container fluid={true} className="authmain-flex">
      <Row>
        <Col
          xs={{ span: 3, offset: 6 }}
          md={{ span: 4, offset: 7 }}
          className="title"
        >
          {login != "done" && (
            <div className="logo text-center">{setTitle()}</div>
          )}
          {/* {setTitle()} */}
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ span: 3, offset: 6 }}
          md={{ span: 4, offset: 7 }}
          className="formbox"
        >
          {renderComponent()}
        </Col>
      </Row>
    </Container>
  );
};

export default AuthMain;
