import React, { useEffect, useState } from "react";
import AuthMain from "../authentication/Auth-Main";
import Logo from "..\\src\\assets\\logo\\lttslogo.svg";
import { Container, Col } from "react-bootstrap";
const Main = () => {
  const [splash, setSplash] = useState(true);

  const splashScreen = () => {
    return <Container fluid className="splash" />;
  };

  const regularFlow = () => {
    return (
      <Container fluid className="bgImage1">
        <Col xs={6} md={6}>
          <img src={Logo} className="lttslogo" />
        </Col>
        <AuthMain />
      </Container>
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
