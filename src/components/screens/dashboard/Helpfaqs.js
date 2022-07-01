import React from "react";

// import helpfarsnin from "..\\src\\assets\\icons\\fullscreen.svg";

import helpfarsnin from "../../.././assets/icons/fullscreen.svg";

function Helpfaqs({ maxmin, setMaxmin }) {
  return (
    <div>
      <div className="Helpheading">FAQs (Frequently Asked Question)</div>
      <div className="helpbg col-md-12 col-lg-12 ">
        <div className="policyicon ">
          <img onClick={() => setMaxmin(!maxmin)} src={helpfarsnin}></img>
        </div>
      </div>
    </div>
  );
}

export default Helpfaqs;
