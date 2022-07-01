import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Policy from "./Policy";
import Security from "./Security";
import Settings from "./Settings";

const SettingsPage = () => {
  const [state, setstate] = useState("Settings");
  const [value, setValue] = useState(false);
  return (
    <div>
      <div className="main-screen screen-main">
        {/* <div className="container-fluid BGimage "> */}
        <div className="container">
          <div class="row settingsheading">Settings</div>
        </div>
        <div class="row justify-content-center">
          {value ? null : (
            <div class="col-11 col-md-5 col-lg-3  lcon">
              <h5
                className={state === "Settings" ? "change" : "dim"}
                onClick={() => setstate("Settings")}
              >
                {" "}
                Account Settings
              </h5>
              <p>Personal information and email</p>
              <hr></hr>
              <h5
                className={state === "Security" ? "change" : "dim"}
                onClick={() => setstate("Security")}
              >
                Security
              </h5>
              <p>Change password</p>
              <hr />

              <h5
                className={state === "Policy" ? "change" : "dim"}
                onClick={() => setstate("Policy")}
              >
                {" "}
                Privacy & Policy
              </h5>
              <p>Lorem ipsum dolor sit amet Consectet...</p>
            </div>
          )}

          <div class={value ? "col-md-9" : "col-md-6"}>
            {state === "Settings" ? (
              <Settings />
            ) : state === "Security" ? (
              <Security />
            ) : state === "Policy" ? (
              <Policy value={value} setValue={setValue} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
