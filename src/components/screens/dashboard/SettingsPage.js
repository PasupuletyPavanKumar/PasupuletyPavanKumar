import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Policy from "./Policy";
import Security from "./Security";
import Settings from "./Settings";

const SettingsPage = () => {
  const [state, setstate] = useState("settings");
  return (
    <div className="container fullbg">
      <Row>
        <Col lg={4} className="maincol">
          <div className="container1">
            <h5
              className={state === "Settings" ? "change" : ""}
              onClick={() => setstate("Settings")}
            >
              {" "}
              Account Settings
            </h5>

            <div>
              <label className="label1">persional information,Email</label>
              <hr></hr>
            </div>
            <div>
              <h5
                className={state === "Security" ? "change" : ""}
                onClick={() => setstate("Security")}
              >
                Security
              </h5>
              <label className="label2">change password</label>
              <hr></hr>
            </div>
            <div>
              <h6
                className={state === "Policy" ? "change" : ""}
                onClick={() => setstate("Policy")}
              >
                {" "}
                privacy & policy
              </h6>
              <label className="label3">
                Lorem ipsum dolor sit amet Consectet...{" "}
              </label>
            </div>
          </div>
        </Col>

        <Col lg={8} className="container2">
          {state === "Settings" ? (
            <Settings />
          ) : state === "Security" ? (
            <Security />
          ) : state === "Policy" ? (
            <Policy />
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default SettingsPage;
