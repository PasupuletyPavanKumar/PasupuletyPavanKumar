import React from "react";
import ImageAvatars from "./ImageAvatars";
import EditIcon from "@mui/icons-material/Edit";

const Settings = () => {
  return (
    <div className="containermainstyle">
      <div>
        <div style={{ float: "right" }}>{<EditIcon />}</div>
        <div className="avatars">{<ImageAvatars />}</div>
      </div>

      <div className="container2sub">
        <div className="container2sub1">
          <div className="twofields">
            <label className=" Fnamelabel">FirstName</label>
            <input className="inputallcontainer2" type="text"></input>
          </div>
          <div className="twofields">
            <label className="lnamelabel">LastName</label>
            <input className="inputallcontainer2" type="text"></input>
          </div>

          <div className="fourfields">
            <label className="unamelabel">UserName</label>
            <input className="inputallcontainer2" type="text"></input>
          </div>
          <div className="fourfields">
            <label className="emaillabel">EmailID</label>
            <input className="inputallcontainer2" type="text"></input>
          </div>

          <div className="fourfields">
            <label className="locationlabel">Location</label>
            <input className="inputallcontainer2" type="text"></input>
          </div>
          <div className="fourfields">
            <label className="numberlabel">MobileNumber</label>
            <input className="inputallcontainer2" type="text"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
