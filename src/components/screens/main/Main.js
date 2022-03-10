import React, { useEffect, useState } from "react";
import AuthMain from "../authentication/Auth-Main";
import Logo from "..\\src\\assets\\logo\\lttslogo.svg";
import { Container, Col } from "react-bootstrap";
const Main = () => {
  const [splash, setSplash] = useState(true);

  const splashScreen = () => {
    return <div className="container-fluid-sm splash" />;
  };

  const regularFlow = () => {
    return (
      <div className="container-fluid-sm bgImage1">
        <div className="col-sm-6">
          <img src={Logo} className="lttslogo" />
        </div>
        <AuthMain />
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  });

  return (
    <div className="container-fluid-sm">
      {splash ? splashScreen() : regularFlow()}
    </div>
  );
};

export default Main;
