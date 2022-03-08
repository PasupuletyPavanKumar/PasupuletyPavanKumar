import React, { useEffect, useState } from "react";
import AuthMain from "../authentication/Auth-Main";
import Logo from "..\\src\\assets\\logo\\lttslogo.svg";

const Main = () => {
  const [splash, setSplash] = useState(true);

  const splashScreen = () => {
    return <div className="splash"></div>;
  };

  const regularFlow = () => {
    return (
      <div className="bgImage1">
        {/* <div className="logo">Logo</div> */}
        <img src={Logo} className="lttslogo" />
        <AuthMain />
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  });

  return <div>{splash ? splashScreen() : regularFlow()}</div>;
};

export default Main;
