import React, { useState } from "react";

// import maximize from "..\\src\\assets\\icons\\fullscreen.svg";

import maximize from "/home/user/AiKno/AiKnoWebApp/AiKno_Mithun_Repo/AiKno/src/assets/icons/fullscreen.svg";

const Policy = ({ value, setValue }) => {
  return (
    <div className="policybg">
      <div className="policyicon">
        <img onClick={() => setValue(!value)} src={maximize}></img>
      </div>
    </div>
  );
};

export default Policy;
