import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CloseIcon from "../../../assets/icons/close.svg";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import * as XLSX from "xlsx/xlsx.mjs";

const AdminManagement = () => {
  const authenticatedService = new AuthenticatedService();
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setshowDeleteModal(false);
    setIsEdit(false);
    setAddAdminFields({
      firstname: "",
      lastname: "",
      username: "",
      emailid: "",
      location: "Bangalore",
      role: "",
    });
    setShow(true);
  };

  const [showDeleteModal, setshowDeleteModal] = useState(false);
  const handleDeleteModalClose = () => setshowDeleteModal(false);
  const handleDeleteModalShow = () => setshowDeleteModal(true);

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
    reqBody.append("isSuperUser", "false");
    reqBody.append("isAdmin", "true");
    reqBody.append("isSpecialist", "false");
    reqBody.append("isUser", "false");
    reqBody.append("byUser", sessionStorage.getItem("username"));
    reqBody.append("byUserRole", "role");

    console.log(addAdminFields);
    console.log(sessionStorage.getItem("accessToken"));
    //console.log(sessionStorage.getItem("refreshToken"));

    for (var pair of reqBody.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    if (!isEdit) {
      authenticatedService.addAdmin(reqBody).then((res) => {
        if (res) {
          <div>{handleClose()}</div>;
        }
      });
    } else {
      console.log("Call Edit Api", reqBody);
      authenticatedService.updateAdmin(reqBody).then((res) => {
        if (res) {
          <div>{handleClose()}</div>;
        }
      });
    }
  };

  const createSpecialistUser = () => {
    console.log("createSpecialistUser");
  };

  const getAdminsList = () => {
    authenticatedService.getAdmin().then((res) => {
      if (res) {
        setadminList(res);
      }
      console.log(res);
    });
  };

  const deleteAdmin = () => {
    var reqBody = new FormData();
    reqBody.append("byUser", "");
    reqBody.append("byUserRole", "");

    authenticatedService.deleteAdmin(reqBody).then((res) => {
      if (res) {
        handleClose();
      }
      console.log(res);
    });
  };

  const exportFile = () => {
    authenticatedService.exportFile().then((res) => {
      if (res) {
        downloadToExcel(res);
      }
      console.log(res.headers);
    });
  };

  const downloadToExcel = (data) => {
    let ws = XLSX.utils.json_to_sheet(data);
    let wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "sheet");
    let buf = XLSX.write(wb, { bookType: "xlsx", type: "buffer" }); // generate a nodejs buffer
    let str = XLSX.write(wb, { bookType: "xlsx", type: "binary" }); // generate a binary string in web browser
    XLSX.writeFile(wb, `myfilename.xlsx`);
  };

  const isAdmin = (item) => {
    return item.isAdmin
      ? "Admin"
      : item.isSpecialist
      ? "Specialist"
      : item.isUser
      ? "User"
      : "Role";
  };

  const updateAdmin = (item) => {
    setIsEdit(true);
    setshowDeleteModal(false);
    setAddAdminFields({
      firstname: item.title,
      lastname: item.lastname,
      username: item.username,
      emailid: item.email,
      location: item.location,
      role: isAdmin(item),
    });
    setShow(true);
    console.log(item);
  };

  const deleteAdminModal = (item) => {
    setShow(true);
    setshowDeleteModal(true);
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

  const adminForm = () => {
    return (
      <div className="popup">
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={handleClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <div className="modal-heading">
          {isEdit
            ? sessionStorage.getItem("role") === "super-user"
              ? "Edit Admin Details"
              : "Edit Specialist/User Details"
            : sessionStorage.getItem("role") === "super-user"
            ? "Create New Admin"
            : "Add Specialist/User"}
        </div>
        <form className="p-3">
          <div className="row">
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label-popup">
                First Name
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
              <label for="usr" className="label-popup">
                Last Name
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
              <label for="usr" className="label-popup">
                User Name
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
              <label for="usr" className="label-popup">
                Email ID
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
              <label for="usr" className="label-popup">
                Location
              </label>
              <br />
              {/* <input type="text" className="input-field" id="usr" /> */}
              <div className="input-field">
                <select
                  name="Locations"
                  id="location"
                  className="select-pane"
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
            <div className="form-group col-sm-6 m-auto p-2">
              <label for="usr" className="label-popup">
                Role
              </label>
              <br />
              <div className="input-field">
                {sessionStorage.getItem("role") === "super-user" ? (
                  <select
                    name="Role"
                    id="role"
                    className="select-pane"
                    value={addAdminFields.role}
                    onChange={(e) => handleInputFields(e, 6)}
                  >
                    <option value="Admin">Admin</option>
                  </select>
                ) : (
                  <select
                    name="Role"
                    id="role"
                    className="select-pane"
                    value={addAdminFields.role}
                    onChange={(e) => handleInputFields(e, 6)}
                  >
                    <option value="Specialist">Specialist</option>
                    <option value="User">User</option>
                  </select>
                )}
              </div>
              {/* <input
                type="text"
                className="input-field"
                id="role"
                value={addAdminFields.role}
                onChange={(e) => handleInputFields(e, 6)}
              /> */}
            </div>
          </div>
        </form>
        <center>
          <button className="modal-button" onClick={createAdmin}>
            SUBMIT
          </button>
        </center>
        {/* <Button
          className="modal-button"
          onClick={
            sessionStorage.getItem("role") === "super-user"
              ? createAdmin
              : createSpecialistUser
          }
        >
          Submit
        </Button> */}
      </div>
    );
  };

  const deletModal = () => {
    return (
      <div className="del-popup">
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={handleClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="delete-modal">Are you sure?</div>
        <br />

        <div className="delete-text">
          Do you want to delete this admin.
          <br />
          The process cannot be undone.
        </div>
        <br />
        <center>
          <button type="button" className="cancel-button" onClick={handleClose}>
            Cancel
          </button>
          &ensp;
          <button type="button" className="delete-button" onClick={deleteAdmin}>
            Delete
          </button>
        </center>
      </div>
    );
  };

  return (
    <div>
      <div className="text-right m-3">
        <button type="button" onClick={handleShow} className="custom-button">
          {sessionStorage.getItem("role") === "super-user"
            ? "Add Admin"
            : "Add Specialist/User"}
        </button>
      </div>
      <div className="container">
        <div className="row row-flex">
          <div className="welcome-tag"> Admin Management</div> <br /> <br />
          <br />
        </div>

        <div class="main">
          <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" class="form-control" placeholder="Search" />
          </div>
          <div className="Drop">
            <select className="filter">filter</select>
            <div className="text-right m-3">
              <Button type="button" onClick={exportFile}>
                Export
              </Button>
            </div>
            {/* <select className="export">export</select> */}
          </div>
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

                <th style={{ minWidth: "160px" }}>ROLE</th>
              </tr>
            </thead>

            <tbody>
              {adminList &&
                adminList.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>

                    <td>{item.id}</td>

                    <td>{item.firstName}</td>

                    <td>{item.email}</td>

                    <td>{item.contactNumber}</td>

                    {/* <td>{item.onUser}</td> */}

                    <td className="d-flex justify-content-between">
                      <div>{isAdmin(item)} </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => updateAdmin(item)}
                      >
                        EDIT
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => deleteAdminModal(item)}
                      >
                        DELETE
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </ReactBootStrap.Table>
        </div>
      </div>

      {/* Edit/Add Admin Modal  */}

      <Modal
        show={show}
        onHide={handleClose}
        size={"md"}
        className="bootstrap-modal"
      >
        {showDeleteModal ? deletModal() : adminForm()}
      </Modal>
    </div>
  );
};

export default AdminManagement;
