import React, { useState } from "react";

//import maximize from "..\\src\\assets\\icons\\fullscreen.svg";

import maximize from "../../.././assets/icons/fullscreen.svg";

const Policy = ({ value, setValue }) => {
  return (
    <div className="policybg col-md-12 col-lg-12 ">
      <div className="policyicon ">
        <img onClick={() => setValue(!value)} src={maximize}></img>
      </div>
    </div>
  );
};

export default Policy;
