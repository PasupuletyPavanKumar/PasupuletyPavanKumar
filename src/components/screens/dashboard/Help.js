import React, { useState } from "react";
import "./Help.css";
import My_ticket from "..\\src\\assets\\icons\\My_ticket.svg";
import Help_center from "..\\src\\assets\\icons\\Help_center.svg";
import FAQ from "..\\src\\assets\\icons\\FAQ.svg";

//import My_ticket from "/home/user/AiKno/AiKnoWebApp/AiKno_Mithun_Repo/AiKno/src/assets/icons/My_ticket.svg";
//import Help_center from "/home/user/AiKno/AiKnoWebApp/AiKno_Mithun_Repo/AiKno/src/assets/icons/Help_center.svg";
//import FAQ from "/home/user/AiKno/AiKnoWebApp/AiKno_Mithun_Repo/AiKno/src/assets/icons/FAQ.svg";

import Mytickets from "./Mytickets";
import Helpcenter from "./Helpcenter";
import Helpfaqs from "./Helpfaqs";

const Help = () => {
  const [controlchange, setControlchange] = useState("Mytickets");
  const [maxmin, setMaxmin] = useState(false);
  // const [next, setNext] = useState(false);

  return (
    <div className="container-fluid">
      <div class="row">
        <div class="col-md-11 helpcontainer">
          <div>
            <div>
              <div class="row">
                {maxmin ? null : (
                  <div class="col-md-3 leftcon">
                    <p>Lets take a step ahead and help you better.</p>
                    <div class="form-group has-search">
                      <span class="fa fa-search form-control-feedback"></span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                      />
                    </div>
                    <div
                      className={
                        controlchange === "Mytickets" ? "onchange" : ""
                      }
                      style={{
                        display: "flex",
                        width: "272px",
                        height: "73px",
                      }}
                    >
                      <img className="helpicons" src={My_ticket}></img>
                      <div style={{ padding: "2px" }}>
                        <h6
                          className="cursor"
                          onClick={() => setControlchange("Mytickets")}
                        >
                          {" "}
                          My Tickets
                        </h6>
                        <p>You can see the status your existing</p>
                      </div>
                    </div>
                    <div
                      className={
                        controlchange === "Helpcenter" ? "onchange" : ""
                      }
                      style={{ display: "flex" }}
                    >
                      <img className="helpicons" src={Help_center}></img>
                      <div style={{ padding: "2px" }}>
                        <h6
                          className="cursor"
                          onClick={() => setControlchange("Helpcenter")}
                        >
                          {" "}
                          Help Center
                        </h6>
                        <p>Issues-tree of up three levels</p>
                      </div>
                    </div>

                    <div
                      className={controlchange === "Helpfaqs" ? "onchange" : ""}
                      style={{ display: "flex" }}
                    >
                      <img className="helpicons" src={FAQ}></img>
                      <div style={{ padding: "2px" }}>
                        <h6
                          className="cursor"
                          onClick={() => setControlchange("Helpfaqs")}
                        >
                          {""}
                          FAQs section
                        </h6>
                        <p>Issues-tree of up to three levels</p>
                      </div>
                    </div>
                  </div>
                )}

                <div class={maxmin ? "col-md-12" : "col-md-8"}>
                  {controlchange === "Mytickets" ? (
                    <Mytickets />
                  ) : controlchange === "Helpcenter" ? (
                    <Helpcenter />
                  ) : controlchange === "Helpfaqs" ? (
                    <Helpfaqs maxmin={maxmin} setMaxmin={setMaxmin} />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
