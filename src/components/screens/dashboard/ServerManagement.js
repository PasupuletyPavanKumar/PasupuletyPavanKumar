import * as ReactBootStrap from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { Modal } from "react-bootstrap";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";
import * as XLSX from "xlsx/xlsx.mjs";

const ServerManagement = () => {
  const authenticatedService = new AuthenticatedService();
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setshowDeleteModal(false);
    setIsEdit(false);
    setAddAdminFields({
      staticIp: "",
      ipAddress: "",
    });
    setShow(true);
  };

  const [showDeleteModal, setshowDeleteModal] = useState(false);
  const handleDeleteModalClose = () => setshowDeleteModal(false);
  const handleDeleteModalShow = () => setshowDeleteModal(true);

  const inputValidators = () => {};

  const [adminList, setadminList] = useState([]);
  const [addAdminFields, setAddAdminFields] = useState({
    staticIp: "",
    ipAddress: "",
  });

  const getAdminsList = () => {
    authenticatedService.getAdmin().then((res) => {
      if (res) {
        setadminList(res);
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

  useEffect(() => {
    getAdminsList();
  }, []);

  const handleInputFields = (event, field) => {
    setAddAdminFields({
      firstname:
        field === 1 ? event.target.value.trim() : addAdminFields.staticIp,
      lastname:
        field === 2 ? event.target.value.trim() : addAdminFields.ipAddress,
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

        <div className="modal-heading">Server Details</div>
        <form className="p-3">
          <div className="row">
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label-popup">
                Static IP
              </label>
              <br />
              <input
                type="text"
                className="input-field"
                id="staticIp"
                value={addAdminFields.staticIp}
                onChange={(e) => handleInputFields(e, 1)}
              />
            </div>
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label-popup">
                IP Address
              </label>
              <br />
              <input
                type="text"
                className="input-field"
                id="ipAddress"
                value={addAdminFields.ipAddress}
                onChange={(e) => handleInputFields(e, 2)}
              />
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
                        <label className="col-sm-3 server-text">Storage</label>
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
        className="bootstrap-modal"
      >
        {showDeleteModal ? null : adminForm()}
      </Modal>
    </div>
  );
};

export default ServerManagement;
