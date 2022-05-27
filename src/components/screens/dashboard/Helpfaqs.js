import React from "react";
// import helpfarsnin from "..\\src\\assets\\icons\\fullscreen.svg";

import helpfarsnin from "/home/user/AiKno/AiKnoWebApp/AiKno_Mithun_Repo/AiKno/src/assets/icons/fullscreen.svg";

function Helpfaqs({ maxmin, setMaxmin }) {
  return (
    <div>
      <div className="Helpheading">FAQs (Frequently Asked Question)</div>
      <div className="faqsbg">
        <div className="minmaxfaqs">
          <img onClick={() => setMaxmin(!maxmin)} src={helpfarsnin}></img>
        </div>
      </div>
    </div>
  );
}

export default Helpfaqs;
