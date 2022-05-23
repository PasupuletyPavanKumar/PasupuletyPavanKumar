import React, { useEffect } from "react";
import { useState } from "react";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";
import Icon_eye from "..\\src\\assets\\icons\\Icon_eye.svg";
import Icon_trash from "..\\src\\assets\\icons\\Icon_trash.svg";
import { Modal } from "react-bootstrap";

const ProjectSettings = () => {
  const [usercontrolchange, setUsercontrolchange] = useState("ALL FILES");
  const [allDocsList, setAllDocsList] = useState([]);

  const authenticatedService = new AuthenticatedService();

  const setDocType = (docState) => {
    setUsercontrolchange(docState);
    console.log(docState);
  };

  const getAssignedByMeList = () => {
    authenticatedService.docsAssignedByMeList().then((res) => {
      if (res) {
        res != "404" ? setAllDocsList(res) : setAllDocsList("No Docs Assigned");
        console.log(res);
      }
      console.log(res);
    });
  };

  useEffect(() => {
    let page = window.location.pathname;
    page = page.replace(/[/]/g, "");
    console.log(page);
    if (page === "assignToUser") {
      // specialist get the docs assigned to user
      getAssignedByMeList();
    } else {
      console.log("call assign to me api");
    }
  }, []);

  const [show, setShow] = useState(false);
  const [showProjectModal, setshowProjectModal] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setshowProjectModal(false);
    setAddProjectFields({
      projectName: "",
      projectType: "",
      description: "",
      settingName: "",
    });
    setShow(true);
  };

  const [addProjectFields, setAddProjectFields] = useState({
    projectName: "",
    projectType: "",
    description: "",
    settingName: "",
  });

  const handleInputFields = (event, field) => {
    setAddProjectFields({
      projectName:
        field === 1 ? event.target.value.trim() : addProjectFields.projectName,
      projectType:
        field === 2 ? event.target.value.trim() : addProjectFields.projectType,
      projectDescription:
        field === 3 ? event.target.value.trim() : addProjectFields.description,
      settingName:
        field === 4 ? event.target.value.trim() : addProjectFields.settingName,
    });
  };

  const projectForm = () => {
    return (
      <div className="p-4">
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={handleClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <div className="modal-heading">Project Details</div>
        <form className="p-3">
          <div className="row">
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label-popup">
                Project Name
              </label>
              <br />
              <input
                type="text"
                className="input-field"
                id="ServerName"
                value={addProjectFields.projectName}
                onChange={(e) => handleInputFields(e, 1)}
              />
            </div>
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="type" className="label-popup">
                Project Type
              </label>
              <br />
              <input
                type="text"
                className="input-field"
                id="projectType"
                value={addProjectFields.projectType}
                onChange={(e) => handleInputFields(e, 2)}
              />
            </div>
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="description" className="label-popup">
                Project Description
              </label>
              <br />
              <input
                type="text"
                className="input-field"
                id="description"
                value={addProjectFields.description}
                onChange={(e) => handleInputFields(e, 3)}
              />
            </div>
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="setting" className="label-popup">
                Setting Name
              </label>
              <br />
              <div className="input-field">
                <select
                  name="SettingName"
                  id="settingName"
                  className="input-field"
                  value={addProjectFields.settingName}
                  onChange={(e) => handleInputFields(e, 4)}
                >
                  <option value="test1">TEST1</option>
                  <option value="test2">TEST2</option>
                  <option value="test3">TEST3</option>
                  <option value="test4">TEST4</option>
                </select>
              </div>
            </div>
          </div>
        </form>
        <center>
          <button className="modal-button">SUBMIT</button>
        </center>
      </div>
    );
  };

  return (
    <div>
      <div className="project-head">
        Project Settings
        <button type="button" onClick={handleShow} className="project-button">
          Create Project
        </button>
      </div>

      <div className="project-setting-flex">
        <form className="p-3 mt-2">
          <div className="row">
            <div className="form-group col-sm-4">
              <label for="usr" className="label-popup">
                Name
              </label>
              <br />
              <input
                type="text"
                className="input-field"
                id="SettingName"
                //value={addServerFields.serverName}
                //onChange={(e) => handleInputFields(e, 1)}
              />
            </div>
            <div className="form-group col-sm-4">
              <label for="usr" className="label-popup">
                Description
              </label>
              <br />
              <input
                type="text"
                className="input-field"
                id="ipAddre"
                //value={addServerFields.ipAddress}
                //onChange={(e) => handleInputFields(e, 2)}
              />
            </div>
            <div className="form-group col-sm-4">
              <label for="usr" className="label-popup">
                Date
              </label>
              <br />
              <input
                type="text"
                className="input-field"
                id="ipAddre"
                //value={addServerFields.ipAddress}
                //onChange={(e) => handleInputFields(e, 3)}
              />
            </div>
          </div>
        </form>

        <div class="row">
          <div className="form-group col-3 m-auto p-auto setting-flex">
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customSwitch1"
              />
              <label class="custom-control-label" for="customSwitch1">
                IQM
              </label>
            </div>
          </div>
          <div className="form-group col-3 m-auto p-auto setting-flex">
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customSwitch2"
              />
              <label class="custom-control-label" for="customSwitch2">
                IC
              </label>
            </div>
          </div>
          {/* </div>
        <div class="row"> */}
          <div className="form-group col-3 m-auto p-auto setting-flex">
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customSwitch3"
              />
              <label class="custom-control-label" for="customSwitch3">
                ROI
              </label>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div className="form-group col-3 m-auto p-auto setting-flex">
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customSwitch4"
              />
              <label class="custom-control-label" for="customSwitch4">
                TEMP
              </label>
            </div>
          </div>
          {/* </div>
        <div class="row"> */}
          <div className="form-group col-3 m-auto p-auto setting-flex">
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customSwitch5"
              />
              <label class="custom-control-label" for="customSwitch5">
                OCR
              </label>
            </div>
          </div>

          <div className="form-group col-3 m-auto p-auto setting-flex">
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customSwitch6"
              />
              <label class="custom-control-label" for="customSwitch6">
                SIGN
              </label>
            </div>
          </div>

          <br />
          <div className="col-sm-12">
            <div className="setting-button m-4 p-auto">
              <button className="modal-button">CREATE SETTING</button>
            </div>
          </div>
        </div>
      </div>

      <div className="project-setting-flex">
        <div className="usersearchanddropdown">
          <div class="main assifnsearch">
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input type="text" className="search" placeholder="Search" />
            </div>
            <div className="filterdropdown">
              <select className="assigndrop">
                <option value="Filter">Filter</option>
              </select>
              <select className="assigndrop">
                <option value="Export">Export</option>
              </select>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-12">
              <div className="projectsettingheadings">
                <h6
                  className={
                    usercontrolchange === "SETTINGS" ? "controlchange" : ""
                  }
                  onClick={() => setDocType("SETTINGS")}
                >
                  SETTINGS
                </h6>
                <h6
                  className={
                    usercontrolchange === "PROJECT" ? "controlchange" : ""
                  }
                  onClick={() => setDocType("PROJECT")}
                >
                  PROJECT
                </h6>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th>DATE OF CREATION</th>
                    <th>PROJECT NAME</th>
                    <th>PROJECT TYPE</th>
                    <th>DESCRIPTION</th>
                    <th>SETTING NAME</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {allDocsList &&
                    allDocsList.map((item) => (
                      <tr key={item.id}>
                        <td>{item.dateOfAssignment}</td>

                        <td>{item.projectId}</td>

                        <td>{item.projectType}</td>

                        <td>{item.description}</td>

                        <td>{item.settingId}</td>

                        {/* <td>{item.contactNumber}</td> */}
                        <td>
                          <img src={Icon_eye}></img>
                          <img src={Icon_trash}></img>
                        </td>

                        {/* <td>{item.onUser}</td> */}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        size={"md"}
        className="project-modal"
      >
        {showProjectModal ? null : projectForm()}
      </Modal>
    </div>
  );
};

export default ProjectSettings;
