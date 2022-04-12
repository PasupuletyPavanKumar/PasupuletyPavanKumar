import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";

const AdminManagement = () => {
  const authService = new AuthenticatedService();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const inputValidators = () => {};

  const createAdmin = () => {
    console.log("Create Admin");
    // if (inputValidators()) {
    //   var reqBody = new FormData();
    //   reqBody.append("userName", "");
    //   reqBody.append("firstName", "");
    //   reqBody.append("lastName", "");
    //   reqBody.append("email", "");
    //   reqBody.append("location", "");
    //   reqBody.append("isSuperUser", false);
    //   reqBody.append("isAdmin", true);
    //   reqBody.append("isSpecialist", false);
    //   reqBody.append("isUser", false);

    //   // const reqBody = {
    //   //   userName: "",
    //   //   firstName: "",
    //   //   lastName: "",
    //   //   email: "",
    //   //   location: "",
    //   //   isSuperUser: false,
    //   //   isAdmin: true,
    //   //   isSpecialist: false,
    //   //   isUser: false,
    //   // };
    //   authService.addAdmin(reqBody).then((res) => {
    //     if (res) {
    //       <div>{handleClose()}</div>;
    //     }
    //   });
    // }
  };

  return (
    <div>
      <div className="text-right m-3">
        <Button type="button" onClick={handleShow} className="custom-button">
          Add Admin
        </Button>
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
              <input type="text" className="input-field" id="usr" />
            </div>
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label">
                LastName
              </label>
              <br />
              <input type="text" className="input-field" id="usr" />
            </div>
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label">
                Username
              </label>
              <br />
              <input type="text" className="input-field" id="usr" />
            </div>
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label">
                EmailID
              </label>
              <br />
              <input type="text" className="input-field" id="usr" />
            </div>
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label">
                Location
              </label>
              <br />
              {/* <input type="text" className="input-field" id="usr" /> */}
              <div className="input-field">
                {/* <label for="cars">Choose a car:</label> */}
                <select name="cars" id="cars">
                  <option value="volvo">Bangalore</option>
                  <option value="saab">Chennai</option>
                  <option value="opel">Mysore</option>
                  <option value="audi">Pune</option>
                </select>
              </div>
            </div>
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label">
                Role
              </label>
              <br />
              <input type="text" className="input-field" id="usr" />
            </div>
          </div>
        </form>
        <Button className="modal-button" onClick={createAdmin}>
          Submit
        </Button>
      </Modal>
    </div>
  );
};

export default AdminManagement;
