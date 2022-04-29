import React, { useEffect, useState } from "react";
import ImageAvatars from "./ImageAvatars";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "react-bootstrap";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";

const Settings = () => {
  const [profileData, setProfileData] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [submitButtonShow, setSubmitButtonShow] = useState(false);
  const authenticatedService = new AuthenticatedService();

  const [profileDataFields, setProfileDataFields] = useState({
    firstname: "",
    lastname: "",
    username: "",
    emailid: "",
    location: "",
    role: "",
    phone: "",
  });

  const updateProfileDate = () => {
    setSubmitButtonShow(true);
    setDisabled(false);
  };

  const getProfileDetails = () => {
    authenticatedService.getProfileDetails().then((res) => {
      if (res) {
        setProfileDataFields({
          firstname: res.title,
          lastname: res.lastname,
          username: res.username,
          emailid: res.emailid,
          location: res.location,
          role: res.isAdmin
            ? "Admin"
            : res.isSpecialist
            ? "Specialist"
            : res.isUser
            ? "User"
            : "Role",
          phone: res.phone,
        });
      }
      console.log(res);
    });
  };

  const handleInputFields = (event, field) => {
    setProfileDataFields({
      firstname:
        field === 1 ? event.target.value.trim() : profileDataFields.firstname,
      lastname:
        field === 2 ? event.target.value.trim() : profileDataFields.lastname,
      username:
        field === 3 ? event.target.value.trim() : profileDataFields.username,
      emailid:
        field === 4 ? event.target.value.trim() : profileDataFields.emailid,
      location:
        field === 5 ? event.target.value.trim() : profileDataFields.location,
      phone: field === 6 ? event.target.value.trim() : profileDataFields.phone,
    });
  };

  const updateDetails = () => {
    var reqBody = new FormData();
    reqBody.append("firstName", profileDataFields.firstname);
    reqBody.append("lastName", profileDataFields.lastname);
    reqBody.append("userName", profileDataFields.username);
    reqBody.append("email", profileDataFields.emailid);
    reqBody.append("location", profileDataFields.location);
    reqBody.append("phone", profileDataFields.phone);
    reqBody.append("isSuperUser", "false");
    reqBody.append("isAdmin", "true");
    reqBody.append("isSpecialist", "false");
    reqBody.append("isUser", "false");
    reqBody.append("byUser", "");
    reqBody.append("byUserRole", "superUser");

    console.log(profileDataFields);
    console.log(sessionStorage.getItem("accessToken"));

    for (var pair of reqBody.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    authenticatedService.updateAdmin(reqBody).then((res) => {
      if (res) {
      }
    });
  };

  useEffect(() => {
    getProfileDetails();
  }, []);

  return (
    <div className="containermainstyle">
      <div>
        <div
          style={{ float: "right" }}
          className="cursor-pointer"
          onClick={updateProfileDate}
        >
          {<EditIcon />}
        </div>
        <div className="avatars">{<ImageAvatars />}</div>
      </div>

      <div className="container2sub">
        <div className="container2sub1">
          <div className="twofields">
            <label className=" Fnamelabel">FirstName</label>
            <input
              className="inputallcontainer2"
              type="text"
              disabled={disabled}
              value={profileDataFields.firstname}
              onChange={(e) => handleInputFields(e, 1)}
            ></input>
          </div>
          <div className="twofields">
            <label className="lnamelabel">LastName</label>
            <input
              className="inputallcontainer2"
              type="text"
              disabled={disabled}
              value={profileDataFields.lastname}
              onChange={(e) => handleInputFields(e, 2)}
            ></input>
          </div>

          <div className="fourfields">
            <label className="unamelabel">UserName</label>
            <input
              className="inputallcontainer2"
              type="text"
              disabled={disabled}
              value={profileDataFields.username}
              onChange={(e) => handleInputFields(e, 3)}
            ></input>
          </div>
          <div className="fourfields">
            <label className="emaillabel">EmailID</label>
            <input
              className="inputallcontainer2"
              type="text"
              disabled={disabled}
              value={profileDataFields.emailid}
              onChange={(e) => handleInputFields(e, 4)}
            ></input>
          </div>

          <div className="fourfields">
            <label className="locationlabel">Location</label>
            <input
              className="inputallcontainer2"
              type="text"
              disabled={disabled}
              value={profileDataFields.location}
              onChange={(e) => handleInputFields(e, 5)}
            ></input>
          </div>
          <div className="fourfields">
            <label className="numberlabel">MobileNumber</label>
            <input
              className="inputallcontainer2"
              type="text"
              disabled={disabled}
              value={profileDataFields.phone}
              onChange={(e) => handleInputFields(e, 6)}
            ></input>
          </div>
          {submitButtonShow ? (
            <div>
              <Button onClick={updateDetails}>Submit</Button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
