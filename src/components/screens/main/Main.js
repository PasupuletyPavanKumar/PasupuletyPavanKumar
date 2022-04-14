import React, { useEffect, useState } from "react";
import AuthMain from "../authentication/Auth-Main";
//import Logo from "..\\src\\assets\\logo\\lttslogo.svg";
import Logo from "/home/user/AiKno/AiKnoWebApp/AiKnoFrontEnd_v2/AiKnoFrontend/src/assets/logo/lttslogo.svg";
import AiknoLogo from "/home/user/AiKno/AiKnoWebApp/AiKnoFrontEnd_v2/AiKnoFrontend/src/assets/logo/AiKnologo.svg";

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
    <div className="container-fluid">
      <div class="row">
        {/*left container*/}
          <div className="col-sm-6 bgImage1">
            <div className="col-sm-6">
              {/*ltts logo */}
              <img src={Logo} className="lttslogo" /> 
               {/*AiKnoSSD logo */}
              <img src={AiknoLogo} className="aiknologo" />
           </div>
        </div> 
            
            {/*right container*/}
            <div className="col-sm-6 bgImage2">
              {/*navigate to Auth-Main.js which consist of login forms*/}
              <AuthMain />
            </div>  
        </div>
    </div>
  );
};

export default Main;
