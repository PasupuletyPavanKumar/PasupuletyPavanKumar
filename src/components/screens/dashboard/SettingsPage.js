import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Policy from "./Policy";
import Security from "./Security";
import Settings from "./Settings";

const SettingsPage = () => {
  const [state, setstate] = useState("settings");
  const [value, setValue] = useState(false);
  return (

    <div className="container-fluid BGimage ">
      <div class="row justify-content-center">
        <div class="col-md-1"></div>
        {value ? null : (
          <div class="col-md-3  lcon">

            <h5 className={state === "Settings" ? "change" : ""}
              onClick={() => setstate("Settings")}
            >
              {" "}
              Account Settings</h5>
            <p>Persional information and email</p>
            <hr></hr>
            <h5 className={state === "Security" ? "change" : ""}
              onClick={() => setstate("Security")}
            >
              Security</h5>
            <p>change password</p>
            <hr></hr>

            <h5
              className={state === "Policy" ? "change" : ""}
              onClick={() => setstate("Policy")}
            >
              {" "}
              privacy & policy
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
  );
};

export default SettingsPage;
