import React from "react";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";

import { Autocomplete, Checkbox } from "@mui/material";
import { TextField } from "@mui/material";
import Upload from "../../../assets/icons/icon_upload.svg";
import file from "../../../assets/icons/file.svg";

let files = [];
let storedFiles = [];

const UploadAssign = () => {
  const myoption = ["Rahul", "Riya", "Himanshu", "Ashwin", "Aravind"];
  const projectoption = ["MTR", "PO", "PR"];
  const authenticatedService = new AuthenticatedService();
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const [usersList, setUsersList] = useState();
  const [usersResponse, setUsersResponse] = useState();
  const [userValues, setUserValues] = useState();
  const [filesList, setFilesList] = useState();
  const [projectRes, setProjectRes] = useState();
  const [selectedProjName, setSelectedProjName] = useState(null);
  const [selectedFile, setSelectedFile] = useState([]);
  const [checkBoxInput, setCheckBox] = useState([]);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    files = [];
    setshowDeleteModal(false);
    setIsEdit(false);
    setShow(true);
  };

  const [adminList, setadminList] = useState([]);

  const [showDeleteModal, setshowDeleteModal] = useState(false);
  const handleDeleteModalClose = () => setshowDeleteModal(false);
  const handleDeleteModalShow = () => setshowDeleteModal(true);

  const showFiles = (value) => {
    const id = extractProjectId(value);
    // console.log(extractProjectId(value));
    authenticatedService.getFiles(id).then((res) => {
      if (res) {
        res != "404" ? setFilesList(res) : setFilesList("");
        console.log(res);
      }
      console.log(res);
    });
  };

  const setSelectedPdfFiles = () => {
    const files = [];
    storedFiles.forEach((item) => {
      const projectName = extractProjectName(item.projectId);
      files.push({
        fileReference: item.id,

        fileName: item.fileName,

        fileType: "pdf",

        documentType: "PO",

        projectId: item.projectId,

        projectName: projectName,
      });
    });

    console.log("files ---->", files);

    return files;
  };

  const assignFiles = () => {
    console.log(userValues);

    const reqObj = {
      assignedToUserId: userValues.id,

      assignedToUserName: userValues.userName,

      assignedToUserEmail: userValues.email,

      assignedBySpecialistId: "6274d9472381980ad0f0c763",

      assignedBySpecialistName: sessionStorage.getItem("username"),

      assignedBySpecialistEmail: "Mithun652@ltts.com",

      assignedDocumentsList: setSelectedPdfFiles(),
    };

    authenticatedService.assignFiles(reqObj).then((res) => {
      if (res) {
        console.log("Assigned docs successfully");
        setProjectList([]);
      }
    });

    console.log("reqObj ---------->", reqObj);
  };

  const storeUsersValues = (res) => {
    const arr = [];
    res.forEach((ele) => {
      arr.push(ele.userName);
    });
    console.log(arr);
    setUsersResponse(res);
    setUsersList(arr);
  };

  const extractUserValue = (value) => {
    usersResponse.filter((ele) => {
      if (value === ele.userName) {
        setUserValues(ele);
      }
    });
  };

  const storeProjectValues = (res) => {
    const arr = [];
    res.forEach((ele) => {
      arr.push(ele.projectName);
    });
    console.log(arr);
    setProjectRes(res);
    setProjectList(arr);
  };

  const extractProjectId = (value) => {
    let id = null;
    projectRes.filter((ele) => {
      if (value === ele.projectName) id = ele.id;
    });

    return id;
  };

  const extractProjectName = (value) => {
    let name = null;
    projectRes.filter((ele) => {
      if (value === ele.id) name = ele.projectName;
    });

    return name;
  };

  const getProjectList = () => {
    authenticatedService.getProjects().then((res) => {
      if (res) {
        res != "404"
          ? storeProjectValues(res)
          : setProjectList("No Projects yet");
        console.log(res);
      }
      console.log(res);
    });
  };

  const getUsersList = () => {
    authenticatedService.getUserByUserRole().then((res) => {
      if (res) {
        storeUsersValues(res);
      }
      console.log(res);
    });
  };

  useEffect(() => {
    getProjectList();
    getUsersList();
  }, []);

  const selectedProject = (e) => {
    setSelectedProjName(e.target.value);
  };

  const changeHandler = (event) => {
    console.log("length -->", event.target.files.length);
    const FileLength = event.target.files.length;

    for (const file in event.target.files) {
      if (file <= FileLength) files.push(event.target.files[file]);
    }

    console.log(files);
    setSelectedFile(files);
    // setIsSelected(true);
  };

  const uploadDocs = () => {
    if (files.length > 0) {
      const id = extractProjectId(
        selectedProjName ? selectedProjName : projectList[0]
      );

      var reqBody = new FormData();

      for (let index = 0; index < files.length; index++) {
        reqBody.append("document", files[index], files[index].name);
      }

      reqBody.append("documentType", "PO");
      reqBody.append("uploadedBy", "6274d9472381980ad0f0c763");
      reqBody.append("projectId", id);
      reqBody.append("byUser", sessionStorage.getItem("username"));
      reqBody.append("byUserRole", sessionStorage.getItem("role"));

      for (var pair of reqBody.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      authenticatedService.uploadDocs(reqBody).then((res) => {
        if (res) {
          console.log("Uploaded docs successfully");
        }
      });
    } else {
      alert("Upload atleast one document");
    }
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

        <div className="modal-heading">Upload Files</div>
        <form className="p-3">
          <div className="row">
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label-popup">
                Project Name
              </label>
              <br />
              {/* <input type="text" className="input-field" id="usr" /> */}
              <div className="input-field">
                <select
                  name="projectname"
                  id="projectname"
                  className="select-pane"
                  value={selectedProjName ? selectedProjName : projectList[0]}
                  onChange={(e) => selectedProject(e)}
                >
                  {projectList.map((e, index) => (
                    <option key={index} value={projectList[index]}>
                      {projectList[index]}
                    </option>
                  ))}
                  {/* <option value="Thales">Thales</option>
                  <option value="HaliBurton">HaliBurton</option> */}
                </select>
              </div>
            </div>
            <div className="form-group col-sm-2 m-auto p-3">
              <button className="upload-button">Upload</button>
            </div>
            <div className="form-group col-sm-2 m-auto p-3">
              <button
                className="upload-submit"
                onClick={uploadDocs}
                type="button"
              >
                Submit
              </button>
            </div>
          </div>

          <div>
            <input
              class="form-control"
              type="file"
              id="formFileMultiple"
              onChange={changeHandler}
              multiple
            />
          </div>
        </form>
      </div>
    );
  };

  const selectFiles = (item) => {
    let isDataAvailable = false;

    //if item present uncheck

    if (storedFiles.length > 0) {
      storedFiles.filter((list, index) => {
        if (list.id === item.id) {
          isDataAvailable = true;
          storedFiles.splice(index, 1);
        }
      });
    }

    //else item store
    if (
      (!isDataAvailable && storedFiles.length > 0) ||
      (storedFiles.length === 0 && !isDataAvailable)
    )
      storedFiles.push(item);

    setCheckBox(storedFiles);
    console.log(storedFiles);
  };

  return (
    //container start
    <div className="container-fluid main-screen screen-main">
      {/* heading */}
      <div className="row row-flex">
        <div className="assign-head">Upload and Assign User</div>
        <br /> <br />
        <br />
      </div>
      {/* Main Tab */}
      <div class="d-flex main-tab p-2">
        <div class="col">
          {/* first row */}
          <div class="row row-flex">
            {/* Assign flex */}
            <div class="col-12 col-sm-8 assign-tab">
              <div className="row-md-12 divleft">
                <div className="form-group col-sm-4 p-3">
                  <Autocomplete
                    autoSelect
                    options={usersList}
                    style={{
                      height: "4vh",
                      width: "30vw",
                    }}
                    onChange={(event, value) => extractUserValue(value)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Select User"
                      />
                    )}
                  />
                </div>

                <div className="col-sm-4 right-side">
                  <button
                    type="button"
                    className="assign-button"
                    onClick={assignFiles}
                  >
                    Assign
                  </button>
                </div>
              </div>
            </div>
            {/* end of assign flex */}
            {/* Upload */}
            <div class="col-12 col-sm-3 assign-tab ">
              <div className="row-sm-3 divleft">
                <div className="col-sm-1 upload-left">
                  <img
                    src={Upload}
                    className="upload-img"
                    onClick={handleShow}
                  />
                </div>
              </div>
              <div className="col-sm-2 upload-right">
                <label className="upload-text">Upload</label>
              </div>
            </div>
            {/* end of upload */}
          </div>
          <br />
          <div class="main-tab">
            <div className="row-sm-12">
              <div className="form-group col-sm-3 mt-4 ml-4">
                <Autocomplete
                  autoSelect
                  options={projectList}
                  // style={{ height: "5vh", width: "35vw" }}
                  className="combo"
                  onChange={(event, value) => showFiles(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Select Project"
                    />
                  )}
                />
              </div>
            </div>

            <div className="row row-flex">
              {filesList &&
                filesList.map((item, index) => (
                  <div className="col-12 col-sm-2 tab-flex">
                    <div className="tab-left">
                      <img src={file} className="file-img" />
                    </div>
                    <div className="tab-right">
                      <label className="tab-text">{item.fileName}</label>
                      <p className="">description</p>
                      <p className="">{item.documentType}</p>
                    </div>
                    <div className="checkbox2">
                      <input
                        type="checkbox"
                        onClick={() => selectFiles(item)}
                        // checked={
                        //   checkBoxInput.length > 0 &&
                        //   index <= checkBoxInput.length
                        //     ? item.id === checkBoxInput[index].id
                        //       ? true
                        //       : false
                        //     : false
                        // }
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        size={"md"}
        className="upload-modal"
      >
        {showDeleteModal ? null : adminForm()}
      </Modal>
    </div>
  );
};

export default UploadAssign;
