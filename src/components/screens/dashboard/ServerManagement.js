import * as ReactBootStrap from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { Modal } from "react-bootstrap";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";

const ServerManagement = () => {
  const authenticatedService = new AuthenticatedService();
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setshowDeleteModal(false);
    setIsEdit(false);
    setAddServerFields({
      serverName: "",
      ipAddress: "",
      location: "Bangalore",
      startDate: "",
      stopDate: "",
      serverStatus: "Active",
      listOfApplication: "IC",
      cpu: "",
      GPU: "",
      RAM: "",
      storage: "",
    });
    setShow(true);
  };

  const [showDeleteModal, setshowDeleteModal] = useState(false);
  const handleDeleteModalClose = () => setshowDeleteModal(false);
  const handleDeleteModalShow = () => setshowDeleteModal(true);

  const [serversList, setServersList] = useState([]);
  const [addServerFields, setAddServerFields] = useState({
    serverName: "",
    ipAddress: "",
    location: "Bangalore",
    startDate: "",
    stopDate: "",
    serverStatus: "Active",
    listOfApplication: "IC",
    cpu: "",
    GPU: "",
    RAM: "",
    storage: "",
  });

  const getServersList = () => {
    authenticatedService.getServerList().then((res) => {
      if (res) {
        setServersList(res);
      }
      console.log(res);
    });
  };

  useEffect(() => {
    getServersList();
  }, []);

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const handleInputFields = (event, field) => {
    setAddServerFields({
      serverName:
        field === 1 ? event.target.value.trim() : addServerFields.serverName,
      ipAddress:
        field === 2 ? event.target.value.trim() : addServerFields.ipAddress,
      location:
        field === 3 ? event.target.value.trim() : addServerFields.location,
      startDate:
        field === 4 ? event.target.value.trim() : addServerFields.startDate,
      stopDate:
        field === 5 ? event.target.value.trim() : addServerFields.stopDate,
      serverStatus:
        field === 6 ? event.target.value.trim() : addServerFields.serverStatus,
      listOfApplication:
        field === 7
          ? event.target.value.trim()
          : addServerFields.listOfApplication,
      cpu: field === 8 ? event.target.value.trim() : addServerFields.cpu,
      GPU: field === 9 ? event.target.value.trim() : addServerFields.GPU,
      RAM: field === 10 ? event.target.value.trim() : addServerFields.RAM,
      storage:
        field === 11 ? event.target.value.trim() : addServerFields.storage,
    });
  };

  const inputValidators = () => {
    if (
      addServerFields.serverName == "" ||
      addServerFields.ipAddress == "" ||
      addServerFields.location == "" ||
      addServerFields.startDate == "" ||
      addServerFields.stopDate == "" ||
      addServerFields.listOfApplication == "" ||
      addServerFields.cpu == "" ||
      addServerFields.GPU == "" ||
      addServerFields.RAM == "" ||
      addServerFields.storage == ""
    ) {
      alert("All fields required");
      return false;
    } else {
      return true;
    }
  };

  const addNewServer = () => {
    if (inputValidators()) {
      alert("Add New Server");
      var reqBody = new FormData();
      reqBody.append("serverName", addServerFields.serverName);
      reqBody.append("adminUserName", sessionStorage.getItem("username"));
      reqBody.append("serverStaticIpAddress", addServerFields.ipAddress);
      reqBody.append("serverLocation", addServerFields.location);
      reqBody.append("serverStartDate", addServerFields.startDate);
      reqBody.append("serverStopDate", addServerFields.stopDate);
      reqBody.append("status", addServerFields.serverStatus);
      reqBody.append("listOfApplications", addServerFields.listOfApplication);
      reqBody.append("serverCPU", addServerFields.cpu);
      reqBody.append("serverGPU", addServerFields.GPU);
      reqBody.append("serverRAM", addServerFields.RAM);
      reqBody.append("serverStorage", addServerFields.storage);

      for (var pair of reqBody.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      authenticatedService.addServer(reqBody).then((res) => {
        if (res) {
          <div>{handleClose()}</div>;
        }
      });
    }
  };

  const addServerForm = () => {
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

        <div className="modal-heading">Server Details</div>
        <form className="p-3">
          <div className="row">
            <div className="form-group col-sm-4 m-auto p-3">
              <label for="usr" className="label-popup">
                Server Name
              </label>
              <br />
              <input
                type="text"
                className="input-field"
                id="ServerName"
                value={addServerFields.serverName}
                onChange={(e) => handleInputFields(e, 1)}
              />
            </div>
            <div className="form-group col-sm-4 m-auto p-3">
              <label for="usr" className="label-popup">
                IP Address
              </label>
              <br />
              <input
                type="text"
                className="input-field"
                id="ipAddress"
                value={addServerFields.ipAddress}
                onChange={(e) => handleInputFields(e, 2)}
              />
            </div>
            <div className="form-group col-sm-4 m-auto p-3">
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
                  value={addServerFields.location}
                  onChange={(e) => handleInputFields(e, 3)}
                >
                  <option value="Bangalore">Bangalore</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Mysore">Mysore</option>
                  <option value="Pune">Pune</option>
                </select>
              </div>
            </div>
            <div className="form-group col-sm-4 m-auto p-3">
              <label for="usr" className="label-popup">
                Start Date
              </label>
              <br />
              <input
                type="date"
                className="input-field"
                id="usr"
                value={addServerFields.startDate}
                onChange={(e) => handleInputFields(e, 4)}
                min={disablePastDate()}
              />
            </div>
            <div className="form-group col-sm-4 m-auto p-3">
              <label for="usr" className="label-popup">
                Stop Date
              </label>
              <br />
              <input
                type="date"
                className="input-field"
                id="usr"
                value={addServerFields.stopDate}
                onChange={(e) => handleInputFields(e, 5)}
                min={addServerFields.startDate}
                disabled={addServerFields.startDate ? "" : "disabled"}
              />
            </div>
            <div className="form-group col-sm-4 m-auto p-2">
              <div className="input-field">
                <label for="usr" className="label-popup">
                  Status
                </label>
                <br />
                <select
                  name="Status"
                  id="status"
                  className="select-pane"
                  value={addServerFields.serverStatus}
                  onChange={(e) => handleInputFields(e, 6)}
                >
                  <option value="Active">Active</option>
                  <option value="InActive">InActive</option>
                </select>
              </div>
            </div>
            <div className="form-group col-sm-4 m-auto p-3">
              <label for="usr" className="label-popup">
                List Of Applications
              </label>
              <br />
              {/* <input type="text" className="input-field" id="usr" /> */}
              <div className="input-field">
                <select
                  name="ListOfApplications"
                  id="loa"
                  className="select-pane"
                  value={addServerFields.listOfApplication}
                  onChange={(e) => handleInputFields(e, 7)}
                >
                  <option value="IC">IC</option>
                  <option value="IQM">IQM</option>
                  <option value="ROI">ROI</option>
                  <option value="STAMP">STAMP</option>
                  <option value="LOGO">LOGO</option>
                  <option value="SIGNATURE">SIGNATURE</option>
                  <option value="TEMPLATE">TEMPLATE</option>
                  <option value="NLP">NLP</option>
                </select>
              </div>
            </div>
            <div className="form-group col-sm-4 m-auto p-3">
              <label for="usr" className="label-popup">
                Server CPU
              </label>
              <br />
              <input
                type="text"
                className="input-field"
                id="CPU"
                value={addServerFields.cpu}
                onChange={(e) => handleInputFields(e, 8)}
              />
            </div>
            <div className="form-group col-sm-4 m-auto p-3">
              <label for="usr" className="label-popup">
                Server GPU
              </label>
              <br />
              <input
                type="text"
                className="input-field"
                id="gpu"
                value={addServerFields.GPU}
                onChange={(e) => handleInputFields(e, 9)}
              />
            </div>
            <div className="form-group col-sm-4 m-auto p-3">
              <label for="usr" className="label-popup">
                Server RAM
              </label>
              <br />
              <input
                type="text"
                className="input-field"
                id="RAM"
                value={addServerFields.RAM}
                onChange={(e) => handleInputFields(e, 10)}
              />
            </div>

            <div className="form-group col-sm-4 m-auto p-4">
              <label for="usr" className="label-popup">
                Server Storage
              </label>
              <br />
              <input
                type="text"
                className="input-field"
                id="storage"
                value={addServerFields.storage}
                onChange={(e) => handleInputFields(e, 11)}
              />
            </div>
          </div>
        </form>
        <center>
          <button className="modal-button" onClick={addNewServer}>
            SUBMIT
          </button>
        </center>
      </div>
    );
  };

  return (
    <div>
      <div>
        <div class="div-head">
          <div class="row row-flex">
            <div className="col server-head"> Server Management</div>
            <div className="col add-server">
              <button
                type="button"
                className="custom-button"
                onClick={handleShow}
              >
                Add New Server
              </button>
            </div>
          </div>
          <br />
          <div class="row row-flex">
            {serversList &&
              serversList.map((item) => (
                <div class="col-sm-6">
                  <div class="server-tab">
                    <div class="row">
                      <div className="server-title"> Server A</div>
                      <div>
                        <button type="button" className="export-button">
                          Export
                        </button>
                      </div>
                    </div>
                    <br />
                    <div>
                      {/* first row */}
                      <div class="row row-flex">
                        {/* CPU daily */}
                        <div class="col-sm-5 server-content">
                          <div className="row-sm-5 divleft">
                            <label className="col-sm-2 server-text">
                              CPU Daily
                            </label>
                            <p className="mtag">Usage</p>
                          </div>
                          <div className="col-sm-3 divright">
                            <CircularProgressbar value={66} text={"100%"} />
                          </div>
                        </div>
                        <div class="col-sm-5 server-content">
                          <div className="row-sm-5 divleft">
                            <label className="col-sm-3 server-text">
                              Storage
                            </label>
                            <p className="mtag">
                              Usage
                              <text className="storage"> D TB</text>
                            </p>
                          </div>
                          <div className="col-sm-3 divright">
                            <CircularProgressbar
                              value={66}
                              text={"66%"}
                              className
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Table */}
                    <div class="row row-flex ">
                      <div class="col server-table">
                        <div className="tblheight">
                          <ReactBootStrap.Table>
                            <thead className="tblhead">
                              <tr>
                                <th>DATE</th>

                                <th>IP ADDRESS</th>

                                <th>SERVER NAME</th>

                                <th>SERVER STATUS</th>
                              </tr>
                            </thead>

                            <tbody className="tblbody">
                              <tr>
                                <td>Data</td>

                                <td>Data</td>

                                <td>Data</td>

                                <td>Data</td>
                              </tr>
                            </tbody>
                          </ReactBootStrap.Table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            <div class="col-sm-6">
              <div class="server-tab">
                <div class="row">
                  <div className="server-title"> Server B</div>
                  <div>
                    <button type="button" className="export-button">
                      Export
                    </button>
                  </div>
                </div>
                <br />
                <div>
                  {/* first row */}
                  <div class="row row-flex">
                    {/* CPU daily */}
                    <div class="col-sm-5 server-content">
                      <div className="row-sm-5 divleft">
                        <label className="col-sm-2 server-text">
                          CPU Daily
                        </label>
                        <p className="mtag">Usage</p>
                      </div>
                      <div className="col-sm-3 divright">
                        <CircularProgressbar value={66} text={"100%"} />
                      </div>
                    </div>
                    <div class="col-sm-5 server-content">
                      <div className="row-sm-5 divleft">
                        <label className="col-sm-2 server-text">Storage</label>
                        <p className="mtag">
                          Usage
                          <text className="storage"> D TB</text>
                        </p>
                      </div>
                      <div className="col-sm-3 divright">
                        <CircularProgressbar
                          value={66}
                          text={"66%"}
                          className
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Table */}
                <div class="row row-flex ">
                  <div class="col server-table">
                    <div className="tblheight">
                      <ReactBootStrap.Table>
                        <thead className="tblhead">
                          <tr>
                            <th>DATE</th>

                            <th>IP ADDRESS</th>

                            <th>SERVER NAME</th>

                            <th>SERVER STATUS</th>
                          </tr>
                        </thead>

                        <tbody className="tblbody">
                          <tr>
                            <td>Data</td>

                            <td>Data</td>

                            <td>Data</td>

                            <td>Data</td>
                          </tr>
                        </tbody>
                      </ReactBootStrap.Table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        size={"md"}
        className="server-modal"
      >
        {showDeleteModal ? null : addServerForm()}
      </Modal>
    </div>
  );
};

export default ServerManagement;
