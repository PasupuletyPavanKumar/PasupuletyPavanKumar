import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";

const AdminManagement = () => {
  const authenticatedService = new AuthenticatedService();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const inputValidators = () => {};

  const [adminList, setadminList] = useState([]);
  const [addAdminFields, setAddAdminFields] = useState({
    firstname: "",
    lastname: "",
    username: "",
    emailid: "",
    location: "Bangalore",
    role: "",
  });

  const createAdmin = () => {
    console.log("Create Admin");
    // if (inputValidators()) {
    var reqBody = new FormData();
    reqBody.append("firstName", addAdminFields.firstname);
    reqBody.append("lastName", addAdminFields.lastname);
    reqBody.append("userName", addAdminFields.username);
    reqBody.append("email", addAdminFields.emailid);
    reqBody.append("location", addAdminFields.location);
    //reqBody.append("role", addAdminFields.role);
    reqBody.append("isSuperUser", false);
    reqBody.append("isAdmin", true);
    reqBody.append("isSpecialist", false);
    reqBody.append("isUser", false);

    console.log(addAdminFields);
    console.log(sessionStorage.getItem("accessToken"));
    console.log(sessionStorage.getItem("refreshToken"));

    for (var pair of reqBody.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    authenticatedService.addAdmin(reqBody).then((res) => {
      if (res) {
        <div>{handleClose()}</div>;
      }
    });
  };

  const getAdminsList = () => {
    authenticatedService.getAdmin().then((res) => {
      if (res) {
        setadminList(res);
      }
      console.log(res);
    });
  };

  useEffect(() => {
    getAdminsList();
  }, []);

  const handleInputFields = (event, field) => {
    setAddAdminFields({
      firstname:
        field === 1 ? event.target.value.trim() : addAdminFields.firstname,
      lastname:
        field === 2 ? event.target.value.trim() : addAdminFields.lastname,
      username:
        field === 3 ? event.target.value.trim() : addAdminFields.username,
      emailid: field === 4 ? event.target.value.trim() : addAdminFields.emailid,
      location:
        field === 5 ? event.target.value.trim() : addAdminFields.location,
      role: field === 6 ? event.target.value.trim() : addAdminFields.role,
    });
  };

  return (
    <div>
      <div className="text-right m-3">
        <Button type="button" onClick={handleShow} className="custom-button">
          Add Admin
        </Button>
      </div>
      <div class="container">
        <div class="row row-flex">
          <div className="welcome-tag"> Admin Management</div> <br /> <br />
          <br />
        </div>

        <div>
          <ReactBootStrap.Table className="tbl1">
            <thead>
              <tr className="title1">
                <th>DATE</th>

                <th>USERNAME</th>

                <th>FIRSTNAME</th>

                <th>EMAILID</th>

                <th>MOBILE NUMBER</th>

                <th>ROLE</th>
              </tr>
            </thead>

            <tbody>
              {adminList &&
                adminList.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>

                    <td>{item.userName}</td>

                    <td>{item.firstName}</td>

                    <td>{item.email}</td>

                    <td>{item.contactNumber}</td>

                    {/* <td>{item.onUser}</td> */}

                    <td>
                      {item.isAdmin
                        ? "Admin"
                        : item.isSpecialist
                        ? "Specialist"
                        : item.isUser
                        ? "User"
                        : "Role"}
                    </td>
                  </tr>
                ))}
            </tbody>
          </ReactBootStrap.Table>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        size={"lg"}
        className="bootstrap-modal"
      >
        <div className="modal-heading">Create New Admin</div>
        <form className="p-5">
          <div className="row">
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label">
                FirstName
              </label>
              <br />
              <input
                type="text"
                className="input-field"
                id="usr"
                value={addAdminFields.firstname}
                onChange={(e) => handleInputFields(e, 1)}
              />
            </div>
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label">
                LastName
              </label>
              <br />
              <input
                type="text"
                className="input-field"
                id="usr"
                value={addAdminFields.lastname}
                onChange={(e) => handleInputFields(e, 2)}
              />
            </div>
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label">
                Username
              </label>
              <br />
              <input
                type="text"
                className="input-field"
                id="usr"
                value={addAdminFields.username}
                onChange={(e) => handleInputFields(e, 3)}
              />
            </div>
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label">
                EmailID
              </label>
              <br />
              <input
                type="text"
                className="input-field"
                id="usr"
                value={addAdminFields.emailid}
                onChange={(e) => handleInputFields(e, 4)}
              />
            </div>
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label">
                Location
              </label>
              <br />
              {/* <input type="text" className="input-field" id="usr" /> */}
              <div className="input-field">
                <select
                  name="Locations"
                  id="location"
                  value={addAdminFields.location}
                  onChange={(e) => handleInputFields(e, 5)}
                >
                  <option value="Bangalore">Bangalore</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Mysore">Mysore</option>
                  <option value="Pune">Pune</option>
                </select>
              </div>
            </div>
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label">
                Role
              </label>
              <br />
              <input
                type="text"
                className="input-field"
                id="usr"
                value={addAdminFields.role}
                onChange={(e) => handleInputFields(e, 6)}
              />
            </div>
          </div>
        </form>
        <Button className="modal-button" onClick={createAdmin()}>
          Submit
        </Button>
      </Modal>
    </div>
  );
};

export default AdminManagement;
