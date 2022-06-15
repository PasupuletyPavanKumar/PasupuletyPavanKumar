import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import { Button } from "react-bootstrap";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";
import Policy from "./Policy";
import Security from "./Security";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Settings = () => {
  const [profileData, setProfileData] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [first, setFirst] = useState(true);
  const [submitButtonShow, setSubmitButtonShow] = useState(false);
  const authenticatedService = new AuthenticatedService();
  const [show, setShow] = useState(false);

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

  const handleClose = () => setShow(false);

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
        <div>{handleClose()}</div>;

        //  refreshPage();
      } else {
        alert("Error in creating Admin");
      }
    });
  };

  useEffect(() => {
    getProfileDetails();
  }, []);

  return (
    <div class="">
      <div className="container">
        <div class="row">
          <div class="scon col-lg-12 col-md-12">
            <div style={{ display: "flex", width: "100%" }}>
              <div class="userimage">
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 120, height: 120 }}
                />
              </div>
              {/* <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png"></img> */}
              <div
                className={disabled ? "xxx" : "yyy"}
                onClick={updateProfileDate}
              >
                {<EditIcon />}
              </div>
            </div>

            {/* <div className="container details"> */}
            {/* <div className="row"> */}

            {/* <div className="row"> */}

            <div class="form-group col-12 col-md-12 col-lg-6">
              <label className="label1" for="usr">
                First Name
              </label>
              <input
                type="text"
                class="text-field"
                id="usr"
                name="firstname"
                disabled={disabled}
                value={profileDataFields.firstname}
                onChange={(e) => handleInputFields(e, 1)}
              />
            </div>
            <div class="form-group col-12 col-md-12 col-lg-6">
              <label className="label1" for="pwd">
                Last Name
              </label>
              <input
                type="text"
                class="text-field"
                id="usr"
                name="lastname"
                disabled={disabled}
                value={profileDataFields.lastname}
                onChange={(e) => handleInputFields(e, 2)}
              />
            </div>
            {/* </div> */}
            {/* <div className="row"> */}
            <div class="form-group col-12 col-md-12 col-lg-6">
              <label className="label1" for="usr">
                User Name
              </label>
              <input
                type="text"
                class="text-field"
                id="usr"
                name="username"
                disabled={disabled}
                value={profileDataFields.username}
                onChange={(e) => handleInputFields(e, 3)}
              />
            </div>
            <div class="form-group col-12 col-md-12 col-lg-6">
              <label className="label1" for="pwd">
                Email ID
              </label>
              <input
                type="text"
                class="text-field"
                id="usr"
                name="emailid"
                disabled={disabled}
                value={profileDataFields.emailid}
                onChange={(e) => handleInputFields(e, 4)}
              />
            </div>
            {/* </div> */}
            {/* <div className="row"> */}
            <div class="form-group col-12 col-md-12 col-lg-6">
              <label className="label1" for="usr">
                Location
              </label>
              <select
                className="select-pane1"
                class="text-field"
                id="usr"
                name="location"
                disabled={disabled}
                value={profileDataFields.location}
                onChange={(e) => handleInputFields(e, 5)}
              >
                <option value="Bangalore">Bangalore</option>

                <option value="Chennai">Chennai</option>

                <option value="Mysore">Mysore</option>

                <option value="Pune">Pune</option>
              </select>
            </div>
            <div class="form-group col-12 col-md-12 col-lg-6">
              <label className="label1" for="pwd">
                Mobile Number
              </label>
              <input
                type="text"
                class="text-field"
                id="usr"
                name="phone"
                disabled={disabled}
                value={profileDataFields.phone}
                onChange={(e) => handleInputFields(e, 6)}
              />
            </div>
            <br />
            {/* </div> */}
            {submitButtonShow ? (
              <div>
                <button className="submit-button1 p-2" onClick={updateDetails}>
                  Submit
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
