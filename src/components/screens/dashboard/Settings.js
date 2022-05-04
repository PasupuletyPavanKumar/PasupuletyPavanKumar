import React, { useEffect, useState } from "react";
import ImageAvatars from "./ImageAvatars";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "react-bootstrap";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";


const Settings = () => {
  const [profileData, setProfileData] = useState([]);
  const [disabled, setDisabled] = useState(true);
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
    <div class="col-md-6">
      <div class="scon">
        <div class="userimage">
          <p class="settingsimage">image</p>
          <div
            style={{ float: "right" }}
            className="cursor-pointer"
            onClick={updateProfileDate}
          >
            {<EditIcon />}

          </div>
        </div>
        <div class="form-group">
          <label for="usr">First Name</label>
          <input type="text" class="form-control commonforall text-primary" id="usr" name="firstname"
            disabled={disabled}
            value={profileDataFields.firstname}
            onChange={(e) => handleInputFields(e, 1)}
          />
        </div>
        <div class="form-group">
          <label for="pwd">Last Name</label>
          <input type="text" class="form-control commonforall" id="usr" name="lastname"
            disabled={disabled}
            value={profileDataFields.lastname}
            onChange={(e) => handleInputFields(e, 2)}
          />
        </div>
        <div class="form-group">
          <label for="usr">User Name</label>
          <input type="text" class="form-control commonforall" id="usr" name="username"
            disabled={disabled}
            value={profileDataFields.username}
            onChange={(e) => handleInputFields(e, 3)}

          />
        </div><div class="form-group">
          <label for="pwd">Email ID</label>
          <input type="text" class="form-control commonforall" id="usr" name="emailid"

            disabled={disabled}
            value={profileDataFields.emailid}
            onChange={(e) => handleInputFields(e, 4)}
          />
        </div><div class="form-group">
          <label for="usr">Location</label>
          <input type="text" class="form-control commonforall" id="usr" name="location"
            disabled={disabled}
            value={profileDataFields.location}
            onChange={(e) => handleInputFields(e, 5)}
          />
        </div><div class="form-group"><label for="pwd">Mobile Number</label>
          <input type="text" class="form-control commonforall" id="usr" name="mobilenumber"
            disabled={disabled}
            value={profileDataFields.phone}
            onChange={(e) => handleInputFields(e, 6)}
          /></div>
      </div>
    </div>
  );
};

export default Settings;