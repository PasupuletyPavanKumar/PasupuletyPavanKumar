import React, { useState } from "react";

import My_ticket from "../../.././assets/icons/My_ticket.svg";
import Help_center from "../../.././assets/icons/Help_center.svg";
import FAQ from "../../.././assets/icons/FAQ.svg";

// import My_ticket from "..\\src\\assets\\icons\\My_ticket.svg";
// import Help_center from "..\\src\\assets\\icons\\Help_center.svg";
// import FAQ from "..\\src\\assets\\icons\\FAQ.svg";

import Mytickets from "./Mytickets";
import Helpcenter from "./Helpcenter";
import Helpfaqs from "./Helpfaqs";
import SearchIcon from "@mui/icons-material/Search";

const Help = () => {
  const [controlchange, setControlchange] = useState("Mytickets");
  const [maxmin, setMaxmin] = useState(false);
  // const [next, setNext] = useState(false);

  return (
    <div className="container main-screen screen-main">
      <div class="row">
        <div className="container">
          <div class="row settingsheading">Help and Support</div>
        </div>
        <div class="col-lg-12 col-sm-12 col-md-12  helpcontainer">
          <div>
            <div>
              <div class="row">
                {maxmin ? null : (
                  <div class=" col-10 col-md-5 col-lg-3  leftcon">
                    <p>Lets take a step ahead and help you better.</p>
                    <div class="form-group has-search">
                      {<SearchIcon />}
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                      />
                    </div>
                    <div
                      className={
                        controlchange === "Mytickets" ? "change" : "dim"
                      }
                      style={{
                        display: "flex",
                        width: "272px",
                        height: "73px",
                      }}
                    >
                      <img className="helpicons" src={My_ticket}></img>
                      <div style={{ padding: "2px" }}>
                        <h5
                          className="cursor"
                          onClick={() => setControlchange("Mytickets")}
                        >
                          {" "}
                          My Tickets
                        </h5>
                        <p>You can see the statu your existing</p>
                      </div>
                    </div>
                    <div
                      className={
                        controlchange === "Helpcenter" ? "change" : "dim"
                      }
                      style={{ display: "flex" }}
                    >
                      <img className="helpicons" src={Help_center}></img>
                      <div style={{ padding: "2px" }}>
                        <h5
                          className="cursor"
                          onClick={() => setControlchange("Helpcenter")}
                        >
                          {" "}
                          Help Center
                        </h5>
                        <p>Issues-tree of up three levels</p>
                      </div>
                    </div>

                    <div
                      className={
                        controlchange === "Helpfaqs" ? "change" : "dim"
                      }
                      style={{ display: "flex" }}
                    >
                      <img className="helpicons" src={FAQ}></img>
                      <div style={{ padding: "2px" }}>
                        <h5
                          className="cursor"
                          onClick={() => setControlchange("Helpfaqs")}
                        >
                          {""}
                          FAQs
                        </h5>
                        <p>Issues-tree of up to three levels</p>
                      </div>
                    </div>
                  </div>
                )}

                <div class={maxmin ? "col-md-12" : "col-md-6 col-lg-8"}>
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
