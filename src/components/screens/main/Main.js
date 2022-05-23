import React, { useEffect, useState } from "react";
import AuthMain from "../authentication/Auth-Main";

import Logo from "..\\src\\assets\\logo\\lttslogo.svg";
import AiknoLogo from "..\\src\\assets\\logo\\AiKnologo.svg";

<<<<<<< Updated upstream
// import Logo from "/home/user/AiKno/AiKnoWebApp/AiKno_Mithun_Repo/AiKno/src/assets/logo/lttslogo.svg";
// import AiknoLogo from "/home/user/AiKno/AiKnoWebApp/AiKno_Mithun_Repo/AiKno/src/assets/logo/AiKnologo.svg";
=======
//import Logo from "/home/user/AiKno/AiKnoWebApp/AiKno_Mithun_Repo/AiKno/src/assets/logo/lttslogo.svg";
//import AiknoLogo from "/home/user/AiKno/AiKnoWebApp/AiKno_Mithun_Repo/AiKno/src/assets/logo/AiKnologo.svg";
>>>>>>> Stashed changes

//Description:main function consist of the background implementation of the login screens.
//input:null
//path:navigate to Auth-Main.js
//output:returns a background screen with two containers:
//left container - consist of the logo and description of AiknoSSD
//right container - flex for login form
const Main = () => {
  /*const [splash, setSplash] = useState(true);

    const splashScreen = () => {
      return <div className="container-fluid-sm splash" />;
    };
    
    const regularFlow = () => {
      */

  return (
    <div className="container-fluid screen-split">
      {/*left container*/}
      <div class="row">
        <div className="col-md-6 bgImage1">
          <img src={Logo} className="lttslogo" />

          <img src={AiknoLogo} className="aiknologo" />
        </div>
        {/*right container*/}
        <div className="col-md-6 bgImage2">
          <AuthMain />
        </div>
      </div>
    </div>
  );
};

export default Main;
