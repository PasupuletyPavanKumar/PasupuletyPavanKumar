import React, { useEffect } from "react";
import { useState } from "react";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";

// import Icon_eye from "..\\src\\assets\\icons\\Icon_eye.svg";
// import Icon_trash from "..\\src\\assets\\icons\\Icon_trash.svg";

import ReactPaginate from "react-paginate";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

// import Icon_eye from "/home/user/AiKno/AiKnoWebApp/AiKno_Mithun_Repo/AiKno/src/assets/icons/Icon_eye.svg";
// import Icon_trash from "/home/user/AiKno/AiKnoWebApp/AiKno_Mithun_Repo/AiKno/src/assets/icons/Icon_trash.svg";

import { Modal } from "react-bootstrap";
import * as ReactBootStrap from "react-bootstrap";

const ProjectSettings = () => {
  const authenticatedService = new AuthenticatedService();
  const [usercontrolchange, setUsercontrolchange] = useState("SETTINGS");
  const [allDocsList, setAllDocsList] = useState([]);
  const [projectList, setProjectList] = useState();
  const [settingsList, setSettingsList] = useState([]);
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [addSettingFields, setAddSettingFields] = useState({
    settingName: "",
    settingDescription: "",
  });
  const [settingInfo, setSettingInfo] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [showDeleteModal, setshowDeleteModal] = useState(false);
  const [addProjectFields, setAddProjectFields] = useState({
    projectName: "",
    projectType: "PO",
    description: "",
  });

  const handleSwitchChange = (e, index) => {
    console.log(e.target);
    // Destructuring
    const { value, checked } = e.target;

    console.log(`${value} is ${checked}`);

    setSettingInfo([
      index === 0 ? (checked ? true : false) : settingInfo[0],
      index === 1 ? (checked ? true : false) : settingInfo[1],
      index === 2 ? (checked ? true : false) : settingInfo[2],
      index === 3 ? (checked ? true : false) : settingInfo[3],
      index === 4 ? (checked ? true : false) : settingInfo[4],
      index === 5 ? (checked ? true : false) : settingInfo[5],
    ]);
  };

  const inputValidators = () => {
    let inputFields = true;
    let settingFields = false;
    if (
      addSettingFields.settingName == "" ||
      addSettingFields.settingDescription == ""
    ) {
      alert("All fields required");
      inputFields = false;
    }

    settingInfo.forEach((element) => {
      if (element === true) settingFields = true;
    });

    if (!settingFields && inputFields)
      alert("Any one of the setting should be selected");

    if (inputFields && settingFields) return true;
    else return false;
  };

  const createSetting = () => {
    if (inputValidators()) {
      console.log(settingInfo);
      console.log("Create Setting");
      var reqBody = new FormData();
      reqBody.append("settingName", addSettingFields.settingName);
      reqBody.append("settingDescription", addSettingFields.settingDescription);
      reqBody.append("isImageCorrectionOn", settingInfo[1]);
      reqBody.append("isRoiOn", settingInfo[2]);
      reqBody.append("isIqmOn", settingInfo[0]);
      reqBody.append("isOcrOn", settingInfo[4]);
      reqBody.append("isSignatureAndLogoOn", settingInfo[5]);
      reqBody.append("isTemplateDetectionOn", settingInfo[3]);
      reqBody.append("specialistId", sessionStorage.getItem("userId"));
      reqBody.append("byUser", sessionStorage.getItem("username"));
      reqBody.append("byUserRole", sessionStorage.getItem("role"));
      reqBody.append("isPdfMinerOn", "true");

      for (var pair of reqBody.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      authenticatedService.addSetting(reqBody).then((res) => {
        if (res) {
          console.log("Setting added successfully");
        }
      });
    }
  };

  const projectInputValidators = () => {
    if (
      addProjectFields.projectName == "" ||
      addProjectFields.description == ""
    ) {
      alert("All fields required");
      return false;
    } else {
      return true;
    }
  };

  const createProject = () => {
    if (projectInputValidators()) {
      var reqBody = new FormData();
      reqBody.append("projectName", addProjectFields.projectName);
      reqBody.append("projectDescription", addProjectFields.description);
      reqBody.append("projectType", addProjectFields.projectType);
      reqBody.append("specialistId", sessionStorage.getItem("userId"));
      reqBody.append(
        "settingId",
        selectedDetail ? selectedDetail.id : settingsList[0].id
      );
      reqBody.append("byUser", sessionStorage.getItem("username"));
      reqBody.append("byUserRole", sessionStorage.getItem("role"));
      reqBody.append("preprocessingConfigId", "dvz");
      reqBody.append("roiConfigId", "vdzxc");
      reqBody.append("iqmConfigId", "czc");
      reqBody.append("ocrConfigId", "zdc");
      reqBody.append("signatureAndLogoConfigId", "dcz");
      reqBody.append("templateDetectionConfigId", "cdzc");
      reqBody.append("nlpConfigId", "czdc");

      for (var pair of reqBody.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      authenticatedService.addProject(reqBody).then((res) => {
        if (res) {
          console.log("Project added successfully");
          handleClose();
        } else {
          alert("error in creating project");
          console.log("error in creating project");
        }
      });
    }
  };

  const setDocType = (docState) => {
    setUsercontrolchange(docState);
    console.log(docState);
    getProjectsSettingsList(docState);
  };

  const getProjectsSettingsList = (docState) => {
    if (docState === "SETTINGS") {
      getSettingsList();
    } else {
      getProjectList();
    }
  };

  const getSettingsList = () => {
    authenticatedService.getSettings().then((res) => {
      if (res) {
        if (res != "404") {
          setSettingsList(res);
          GetTableData(res);
          console.log(res);
        } else {
          GetTableData("");
        }
        // res != "404" ? GetTableData(res) : GetTableData("");
      }
      // console.log(res);
    });
  };

  const getProjectList = () => {
    authenticatedService.getProjects().then((res) => {
      if (res) {
        // res != "404" ? setProjectList(res) : setProjectList("No Projects yet");
        res != "404" ? GetTableData(res) : GetTableData("");
        console.log(res);
      }
      console.log(res);
    });
  };

  const getSettingName = (settingId) => {
    let name = null;
    authenticatedService.getIndividualSettings(settingId).then((res) => {
      if (res) {
        console.log(res.settingName);
        name = res.settingName;
        return name;
      }
    });
  };

  //pagination and get data-
  const [offset, setOffset] = useState(0);
  const [TableData, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    getSettingsList();
    // getTableList();
  }, [offset]);

  const getTableList = () => {
    authenticatedService.getSettings().then((res) => {
      if (res) {
        GetTableData(res);
      }
      console.log(res);
    });
    authenticatedService.getProjects().then((res) => {
      if (res) {
        GetTableData(res);
      }
      console.log(res);
    });
  };

  const GetTableData = (res) => {
    console.log("GetTableData---------->" + usercontrolchange);
    const TableData = res;
    const slice = TableData.slice(offset, offset + perPage);
    let postData;
    <div>
      <div class="d-flex align-items-start">
        <ReactBootStrap.Table>
          {
            (postData = slice.map((item) => (
              <tbody>
                {usercontrolchange === "PROJECT" && (
                  <tr key={item.id}>
                    <td>{item.date}</td>
                    <td>{item.projectName}</td>
                    <td>{item.projectType}</td>
                    <td>{item.projectDescription}</td>
                    {/* <td>{item.id}</td> */}
                    <td>{getSettingName(item.id)}</td>

                    <td style={{ display: "flex" }}>
                      <VisibilityIcon
                        className=" view-icons "
                        onClick={() => viewModal(item)}
                      />
                      &nbsp;
                      <DeleteIcon
                        className="view-icons"
                        onClick={() => deleteModal(item)}
                      />
                    </td>
                  </tr>
                )}
                {usercontrolchange === "SETTINGS" && (
                  <tr key={item.id}>
                    <td>{item.date}</td>
                    <td>{item.settingName}</td>
                    <td>{item.settingDescription}</td>
                    {/* <td>{item.id}</td> */}
                    <td>
                      {item.isIqmOn
                        ? "IQM"
                        : " " + "," + item.isImageCorrectionOn
                        ? "IC"
                        : " " + "," + item.isOcrOn
                        ? "OCR"
                        : " " + "," + item.isRoiOn
                        ? "ROI"
                        : " " + "," + item.isSignatureAndLogoOn
                        ? "SIGN"
                        : " " + "," + item.isTemplateDetectionOn
                        ? "TEMP"
                        : " "}
                    </td>

                    <td style={{ display: "flex" }}>
                      <VisibilityIcon
                        className=" view-icons "
                        onClick={() => viewModal(item)}
                      />
                      &nbsp;
                      <DeleteIcon
                        className="view-icons"
                        onClick={() => deleteModal(item)}
                      />
                    </td>
                  </tr>
                )}
              </tbody>
            )))
          }
        </ReactBootStrap.Table>
      </div>
    </div>;

    setData(postData);
    setPageCount(Math.ceil(TableData.length / perPage));
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showProjectModal, setshowProjectModal] = useState(false);
  const [showViewProjectModal, setshowViewProjectModal] = useState(false);
  const handleClose = () => setShow(false);
  const handleDetailsClose = () => setShowDetails(false);
  const handleShow = () => {
    setshowProjectModal(false);
    setAddProjectFields({
      projectName: "",
      projectType: "PO",
      description: "",
      settingName: "",
    });
    setShow(true);
  };

  const handleDetailsShow = () => {
    setshowViewProjectModal(false);
    setAddProjectFields({
      projectName: "",
      projectType: "",
      description: "",
      settingName: "",
    });
    setShowDetails(true);
  };

  const getSettingDetails = (e) => {
    console.log(e.target.value);
    const selected = e.target.value;
    settingsList.filter((data) => {
      if (data.settingName === selected) setSelectedDetail(data);
    });
  };

  const getProjectDetails = (e) => {
    console.log(e.target.value);
    const selected = e.target.value;
    projectList.filter((data) => {
      if (data.settingName === selected) setSelectedDetail(data);
    });
  };

  const handleInputFields = (event, field) => {
    setAddProjectFields({
      projectName:
        field === 1 ? event.target.value.trim() : addProjectFields.projectName,
      projectType:
        field === 2 ? event.target.value.trim() : addProjectFields.projectType,
      description:
        field === 3 ? event.target.value.trim() : addProjectFields.description,
      // settingName:
      //   field === 4 ? event.target.value.trim() : addProjectFields.settingName,
    });
  };

  const handleSettingInputFields = (event, field) => {
    setAddSettingFields({
      settingName:
        field === 1 ? event.target.value.trim() : addSettingFields.settingName,
      settingDescription:
        field === 2
          ? event.target.value.trim()
          : addSettingFields.settingDescription,
    });
  };

  const deleteEntry = () => {
    var reqBody = new FormData();
    reqBody.append("byUser", "");
    reqBody.append("byUserRole", "");

    authenticatedService.deleteEntry(reqBody).then((res) => {
      if (res) {
        handleClose();
      }
      console.log(res);
    });
  };

  const deleteModal = (item) => {
    setShowDetails(true);
    setshowDeleteModal(true);
  };

  const deletModal = () => {
    return (
      <div className="del-popup">
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={handleDetailsClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="delete-modal">Are you sure?</div>
        <br />

        <div className="delete-text">
          Do you want to delete this entry.
          <br />
          The process cannot be undone.
        </div>
        <br />
        <center>
          <button
            type="button"
            className="cancel-button"
            onClick={handleDetailsClose}
          >
            Cancel
          </button>
          &ensp;
          <button type="button" className="delete-button" onClick={deleteEntry}>
            Delete
          </button>
        </center>
      </div>
    );
  };
  const viewModal = (item) => {
    setshowDeleteModal(false);
    setAddProjectFields({
      projectName: item.projectName,
      projectType: item.projectType,
      description: item.description,
      settingName: item.setting,
    });
    setShowDetails(true);
    console.log(item);
  };

  const prView = () => {
    return (
      <div className="p-4">
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={handleDetailsClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        {usercontrolchange === "SETTINGS" && (
          <div>
            <div className="modal-heading">Setting Details</div>
            <form className="p-3">
              <div className="row">
                <div className="form-group col-sm-6 m-auto p-3">
                  <label for="setting" className="label-popup">
                    Setting Name
                  </label>
                  <br />

                  <input
                    name="SettingName"
                    id="settingName"
                    className="input-field"
                    value={settingsList.settingName}
                  />
                </div>

                <div className="form-group col-sm-6 m-auto p-3">
                  <label for="description" className="label-popup">
                    Setting Description
                  </label>
                  <br />
                  <input
                    type="text"
                    className="input-field"
                    id="description"
                    value={settingsList.description}
                  />
                </div>
                <div className="form-group col-sm-6 m-auto p-3">
                  <label for="description" className="label-popup">
                    Settings
                  </label>
                  <br />
                  <input
                    type="text"
                    className="input-field"
                    id="settings"
                    value={settingsList.settingInfo}
                  />
                </div>
              </div>
            </form>
          </div>
        )}

        {usercontrolchange === "PROJECT" && (
          <div>
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
                    id="ProjectName"
                    value={addProjectFields.projectName}
                  />
                </div>
                <div className="form-group col-sm-6 m-auto p-3">
                  <label for="type" className="label-popup">
                    Project Type
                  </label>
                  <br />
                  <input
                    type="text"
                    name="type"
                    id="type"
                    className="input-field"
                    value={addProjectFields.projectType}
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
                  />
                </div>
                <div className="form-group col-sm-6 m-auto p-3">
                  <label for="setting" className="label-popup">
                    Setting Name
                  </label>
                  <br />

                  <input
                    name="SettingName"
                    id="settingName"
                    className="input-field"
                    value={settingsList.settingName}
                    onChange={(e) => getSettingDetails(e)}
                  />
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    );
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

        <div className="modal-heading">Create Project</div>
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
              {/* <label for="type" className="label-popup">
                Project Type
              </label>
              <br />
              <input
                type="text"
                className="input-field"
                id="projectType"
                value={addProjectFields.projectType}
                onChange={(e) => handleInputFields(e, 2)}
              /> */}

              <div className="input-field">
                <label for="type" className="label-popup">
                  Project Type
                </label>
                <br />
                <select
                  name="Locations"
                  id="location"
                  className="select-pane"
                  value={addProjectFields.projectType}
                  onChange={(e) => handleInputFields(e, 2)}
                >
                  <option value="PO">PO</option>
                  <option value="MTR">MTR</option>
                  <option value="PR">PR</option>
                </select>
              </div>
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
                {settingsList.length > 0 && (
                  <select
                    name="SettingName"
                    id="settingName"
                    className="input-field"
                    value={settingsList.settingName}
                    onChange={(e) => getSettingDetails(e)}
                  >
                    {settingsList.map((e, key) => (
                      <option key={key} value={e.settingName}>
                        {e.settingName}
                      </option>
                    ))}
                    {/* <option value="test1">TEST1</option>
    <option value="test2">TEST2</option>
    <option value="test3">TEST3</option>
    <option value="test4">TEST4</option> */}
                  </select>
                )}
              </div>
            </div>
          </div>
        </form>
        <center>
          <button className="modal-button" onClick={createProject}>
            SUBMIT
          </button>
        </center>
      </div>
    );
  };

  return (
    <div className="main-screen screen-main">
      <div class="container ">
        <div className="row row-flex">
          <div className="col server-head">
            Project Settings
            <button
              type="button"
              onClick={handleShow}
              className="custom-button"
            >
              Create Project
            </button>
          </div>
        </div>

        <div className="project-setting-flex">
          <form className="p-3 m-2">
            <div className="row">
              <div className="form-group m-auto p-3">
                <label for="usr" className="label-popup">
                  Name
                </label>
                <br />
                <input
                  type="text"
                  className="input-field"
                  id="SettingName"
                  value={addSettingFields.settingName}
                  onChange={(e) => handleSettingInputFields(e, 1)}
                />
              </div>
              <div className="form-group m-auto p-3">
                <label for="usr" className="label-popup">
                  Description
                </label>
                <br />
                <input
                  type="text"
                  className="input-field"
                  id="ipAddre"
                  value={addSettingFields.settingDescription}
                  onChange={(e) => handleSettingInputFields(e, 2)}
                />
              </div>
              {/* <div className="form-group col-sm-4 m-auto p-3">
              <label for="usr" className="label-popup">
                Date
              </label>
              <br />
              <input
                type="date"
                className="input-field"
                id="ipAddre"
                value={addSettingFields.settingAddedDate}
                onChange={(e) => handleInputFields(e, 3)}
              />
            </div> */}
            </div>
          </form>
          <div class="setting-content">
            <div class="row">
              <div className="form-group m-2 p-3 setting-flex">
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customSwitch1"
                    value="IQM"
                    onChange={(e) => handleSwitchChange(e, 0)}
                  />
                  <label
                    class="custom-control-label setting-label"
                    for="customSwitch1"
                  >
                    IQM
                  </label>
                </div>
              </div>
              <div className="form-group m-2 p-3 setting-flex">
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customSwitch2"
                    value="IC"
                    onChange={(e) => handleSwitchChange(e, 1)}
                  />
                  <label
                    class="custom-control-label setting-label"
                    for="customSwitch2"
                  >
                    IC
                  </label>
                </div>
              </div>
              {/* </div>
        <div class="row"> */}
              <div className="form-group m-2 p-3 setting-flex">
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customSwitch3"
                    value="ROI"
                    onChange={(e) => handleSwitchChange(e, 2)}
                  />
                  <label
                    class="custom-control-label setting-label"
                    for="customSwitch3"
                  >
                    ROI
                  </label>
                </div>
              </div>

              <br />
              {/* <div class="row"> */}
              <div className="form-group m-2 p-3 setting-flex">
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customSwitch4"
                    value="TEMP"
                    onChange={(e) => handleSwitchChange(e, 3)}
                  />
                  <label
                    class="custom-control-label setting-label"
                    for="customSwitch4"
                  >
                    TEMP
                  </label>
                </div>
              </div>
              {/* </div>
        <div class="row"> */}
              <div className="form-group m-2 p-3 setting-flex">
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customSwitch5"
                    value="OCR"
                    onChange={(e) => handleSwitchChange(e, 4)}
                  />
                  <label
                    class="custom-control-label setting-label"
                    for="customSwitch5"
                  >
                    OCR
                  </label>
                </div>
              </div>

              <div className="form-group m-2 p-3 setting-flex">
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customSwitch6"
                    value="SIGN"
                    onChange={(e) => handleSwitchChange(e, 5)}
                  />
                  <label
                    class="custom-control-label setting-label"
                    for="customSwitch6"
                  >
                    SIGN
                  </label>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="col-sm-12">
            <div className="setting-button m-2 p-auto">
              <button className="modal-button mb-2" onClick={createSetting}>
                CREATE SETTING
              </button>
            </div>
          </div>
        </div>

        <div className="project-setting-flex">
          <div className="usersearchanddropdown">
            <div class="main assifnsearch">
              <div class="form-group has-search">
                <span class="fas fa-search form-control-feedback"></span>
                <input type="text" className="search" placeholder="Search" />
              </div>
              <div className="filterdropdown">
                <select className="assigndrop">
                  <option value="Filter">Filter</option>
                </select>
                &nbsp;
                <select className="assigndrop">
                  <option value="Export">Export</option>
                </select>
              </div>
            </div>
          </div>
          <div class="container">
            <div className="projectsettingheadings">
              <h6
                className={
                  usercontrolchange === "SETTINGS" ? "controlchange" : ""
                }
                onClick={() => setDocType("SETTINGS")}
              >
                {" "}
                SETTINGS
              </h6>

              <h6
                className={
                  usercontrolchange === "PROJECT" ? "controlchange" : ""
                }
                onClick={() => setDocType("PROJECT")}
              >
                {" "}
                PROJECTS
              </h6>
            </div>
            {usercontrolchange === "SETTINGS" && (
              <div class="table-responsive">
                <ReactBootStrap.Table className="table">
                  <thead>
                    <tr className="headingstyle1">
                      <th>DATE OF CREATED</th>
                      <th>SETTING NAME</th>
                      <th>DESCRIPTION</th>
                      <th>SETTINGS</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  {TableData}
                </ReactBootStrap.Table>
              </div>
            )}
            {usercontrolchange === "PROJECT" && (
              <div className="">
                <ReactBootStrap.Table className="table">
                  <thead>
                    <tr className="headingstyle1">
                      <th>DATE OF CREATION</th>
                      <th>PROJECT NAME</th>
                      <th>PROJECT TYPE</th>
                      <th>DESCRIPTION</th>
                      <th>SETTING NAME</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  {TableData}
                </ReactBootStrap.Table>
              </div>
            )}

            <ReactPaginate
              className="pagination justify-content-end mt-5"
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
              breakLinkClassName={"page-link"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
            />
          </div>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          size={"md"}
          className="bootstrap-modal"
        >
          {showProjectModal ? null : projectForm()}
        </Modal>
        <Modal
          show={showDetails}
          onHide={handleClose}
          size={"md"}
          className="bootstrap-modal"
        >
          {showDeleteModal ? deletModal() : prView()}
        </Modal>
      </div>
    </div>
  );
};

export default ProjectSettings;
