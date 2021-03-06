import React, { useEffect, useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import CloseIcon from "../../../assets/icons/close.svg";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";
import { _EMAIL_VALIDATOR, _PWD_VALIDATOR } from "../../../utils/Validators";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import * as XLSX from "xlsx/xlsx.mjs";
// import XLSX from "xlsx/xlsx.mjs";
import ReactPaginate from "react-paginate";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const AdminManagement = () => {
  const [open, setOpen] = useState(false);
  const [openFirst, setOpenFirst] = React.useState(false);
  const [toBeUpdatedUsername, setToBeUpdatedUsername] = useState();
  const [adminList, setadminList] = useState([]);
  const [addAdminFields, setAddAdminFields] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    location: "Bangalore",
    role:
      sessionStorage.getItem("role") === "super-user" ? "Admin" : "Specialist",
  });

  const [beforeEditFields, setBeforeEditFields] = useState(null);

  const onOpenModal = () => {
    console.log("onOpenModal");
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);
  const onCloseModalDelete = () => setOpenFirst(false);

  const authenticatedService = new AuthenticatedService();

  //pagination and get data-
  const [offset, setOffset] = useState(0);
  const [TableData, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [adminDetails, setAdminDetails] = useState([]);
  const [copyAdminDetails, setCopyAdminDetails] = useState([]);

  useEffect(() => {
    getAdminsList();
  }, [offset]);

  const getAdminsList = () => {
    authenticatedService.getAdmin().then((res) => {
      if (res) {
        GetTableData(res);
        setAdminDetails(res);
        setCopyAdminDetails(res);
      }
      console.log(res);
    });
  };

  const GetTableData = (res) => {
    const TableData = res.sort().reverse();
    const slice = TableData.slice(offset, offset + perPage);
    let postData;
    <div>
      <div class="d-flex align-items-start">
        <ReactBootStrap.Table>
          {
            (postData = slice.map((item) => (
              <tbody>
                <tr key={item.id}>
                  <td>{item.userId}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.email}</td>
                  <td>{item.contactNumber}</td>
                  <td>
                    {item.isAdmin
                      ? "Admin"
                      : item.isSpecialist
                      ? "Specialist"
                      : "User"}
                  </td>
                  <td>
                    {/* <button className="cursor-pointer" onClick={onOpenModal}>
                      EDIT
                    </button> */}
                    <EditIcon
                      className="cursor-pointer admg-Edit-delete-color"
                      onClick={() => updateAdmin(item)}
                    />
                    &nbsp;
                    <DeleteIcon
                      className="cursor-pointer admg-Edit-delete-color"
                      onClick={() => deleteAdminModal(item)}
                    />
                  </td>
                </tr>
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
  const [isEdit, setIsEdit] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setshowDeleteModal(false);
    setIsEdit(false);
    setAddAdminFields({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      location: "Bangalore",
      role:
        sessionStorage.getItem("role") === "super-user"
          ? "Admin"
          : "Specialist",
    });
    // setShow(true);
    setOpen(true);
  };

  const [showDeleteModal, setshowDeleteModal] = useState(false);
  const handleDeleteModalClose = () => setshowDeleteModal(false);
  const handleDeleteModalShow = () => setshowDeleteModal(true);

  const inputValidators = () => {
    if (
      addAdminFields.firstName == "" ||
      addAdminFields.lastName == "" ||
      addAdminFields.userName == "" ||
      addAdminFields.email == "" ||
      addAdminFields.location == "" ||
      addAdminFields.role == ""
    ) {
      alert("All fields required");
      return false;
    } else if (_EMAIL_VALIDATOR(addAdminFields.email)) {
      alert("Enter valid email");
      return false;
    } else {
      return true;
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const createAdmin = () => {
    console.log("Create Admin");
    var reqBody = new FormData();

    if (inputValidators()) {
      console.log("inside createAdmin");
      reqBody.append("firstName", addAdminFields.firstName);
      reqBody.append("lastName", addAdminFields.lastName);
      reqBody.append("userName", addAdminFields.userName);
      reqBody.append("email", addAdminFields.email);
      reqBody.append("location", addAdminFields.location);
      //reqBody.append("role", addAdminFields.role);

      // reqBody.append(addAdminFields.role === "Admin" ? "true" : "false");
      reqBody.append("isSuperUser", "false");
      reqBody.append(
        "isAdmin",
        // sessionStorage.getItem("role") === "admin" ? "true" : "false"
        addAdminFields.role === "Admin" ? "true" : "false"
      );
      reqBody.append(
        "isSpecialist",
        // sessionStorage.getItem("role") === "specialist" ? "true" : "false"
        addAdminFields.role === "Specialist" ? "true" : "false"
      );
      reqBody.append(
        "isUser",
        // sessionStorage.getItem("role") === "user" ? "true" : "false"
        addAdminFields.role === "User" ? "true" : "false"
      );
      reqBody.append("byUser", sessionStorage.getItem("username"));
      reqBody.append("byUserRole", sessionStorage.getItem("role"));

      console.log(addAdminFields);
      console.log(sessionStorage.getItem("accessToken"));
      //console.log(sessionStorage.getItem("refreshToken"));

      for (var pair of reqBody.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      if (!isEdit) {
        authenticatedService.addAdmin(reqBody).then((res) => {
          if (res) {
            <div>{handleClose}</div>;
            refreshPage();
          }
        });
      } else {
        console.log("Call Edit Api", reqBody);
        authenticatedService
          .updateAdmin(reqBody, toBeUpdatedUsername)
          .then((res) => {
            if (res) {
              <div>{handleClose()}</div>;
              refreshPage();
            } else {
              alert("Error in creating Admin");
            }
          });
        console.log("Call Edit Api", beforeEditFields);
        console.log("Call Edit Api", addAdminFields);
        let isValueEdited = false;
        for (const key in addAdminFields) {
          if (addAdminFields[key] != beforeEditFields[key]) {
            isValueEdited = true;
            reqBody.append(key, addAdminFields[key]);
          }
        }

        if (isValueEdited) {
          for (var pair of reqBody.entries()) {
            console.log(pair[0] + ", " + pair[1]);
          }
          authenticatedService
            .updateAdmin(reqBody, toBeUpdatedUsername)
            .then((res) => {
              if (res) {
                // <div>{handleClose()}</div>;
                refreshPage();
              }
            });
        } else alert("values are same");
      }
    }
  };

  const createSpecialistUser = () => {
    console.log("createSpecialistUser");
  };

  const deleteAdmin = () => {
    var reqBody = new FormData();
    reqBody.append("byUser", sessionStorage.getItem("username"));
    reqBody.append("byUserRole", sessionStorage.getItem("role"));

    authenticatedService
      .deleteAdmin(reqBody, toBeUpdatedUsername)
      .then((res) => {
        if (res) {
          // handleClose();
          refreshPage();
        }
        console.log(res);
      });
  };

  const exportFile = () => {
    authenticatedService.exportFile().then((res) => {
      if (res) {
        downloadToExcel(res.data);
      }
      console.log(res.headers);
    });
  };

  const downloadToExcel = (data) => {
    // let ws = XLSX.utils.json_to_sheet(data);
    // let wb = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(wb, ws, "sheet");
    // let buf = XLSX.write(wb, { bookType: "xlsx", type: "buffer" }); // generate a nodejs buffer
    // let str = XLSX.write(wb, { bookType: "xlsx", type: "binary" }); // generate a binary string in web browser
    // XLSX.writeFile(wb, `myfilename.xlsx`);

    // const url = window.URL.createObjectURL(new Blob([data]));
    // const link = document.createElement("a");

    // link.href = url;
    // link.setAttribute("download", `${Date.now()}.xlsx`);

    // document.body.appendChild(link);
    // link.click();

    // link.remove();

    const outputFilename = `${Date.now()}.xlsx`;

    // If you want to download file automatically using link attribute.
    const url = URL.createObjectURL(new Blob([data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", outputFilename);
    document.body.appendChild(link);
    link.click();
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
    const obj = {
      // firstname: item.firstName,
      // lastname: item.lastName,
      // username: item.userName,
      // emailid: item.email,
      // location: item.location,
      firstName: item.title,
      lastName: item.lastName,
      userName: item.id,
      email: item.email,
      location: item.location,
      role: isAdmin(item),
      role:
        sessionStorage.getItem("role") === "super-user"
          ? "Admin"
          : "Specialist",
    };
    setIsEdit(true);
    setshowDeleteModal(false);
    setToBeUpdatedUsername(item.userName);
    setAddAdminFields(obj);
    setBeforeEditFields(obj);
    // setAddAdminFields({
    //   // firstname: item.firstName,
    //   // lastname: item.lastName,
    //   // username: item.userName,
    //   // emailid: item.email,
    //   // location: item.location,
    //   firstname: item.title,
    //   lastname: item.lastName,
    //   username: item.id,
    //   emailid: item.email,
    //   location: item.location,
    //   role: isAdmin(item),
    // });
    // setShow(true);
    console.log("updateAdmin");
    setOpen(true);
    console.log(item);
  };

  const deleteAdminModal = (item) => {
    //setShow(true);
    setToBeUpdatedUsername(item.userName);
    setOpen(true);
    setshowDeleteModal(true);
  };

  const handleInputFields = (event, field) => {
    setAddAdminFields({
      firstName:
        field === 1 ? event.target.value.trim() : addAdminFields.firstName,
      lastName:
        field === 2 ? event.target.value.trim() : addAdminFields.lastName,
      userName:
        field === 3 ? event.target.value.trim() : addAdminFields.userName,
      email: field === 4 ? event.target.value.trim() : addAdminFields.email,
      location:
        field === 5 ? event.target.value.trim() : addAdminFields.location,
      role: field === 6 ? event.target.value.trim() : addAdminFields.role,
    });
  };

  const adminForm = () => {
    return (
      <div className="popup">
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
                value={addAdminFields.firstName}
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
                value={addAdminFields.lastName}
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
                value={addAdminFields.userName}
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
                value={addAdminFields.email}
                onChange={(e) => handleInputFields(e, 4)}
              />
            </div>
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label-popup">
                Location
              </label>
              <br />
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
      </div>
    );
  };

  const deletModal = () => {
    return (
      <div className="del-popup">
        <div className="delete-modal">Are you sure?</div>
        <br />

        <div className="delete-text">
          Do you want to delete this{" "}
          {sessionStorage.getItem("role") === "super-user"
            ? "admin"
            : "specialist/user"}
          <br />
          The process cannot be undone.
        </div>
        <br />
        <center>
          <button
            type="button"
            className="cancel-button"
            onClick={onCloseModal}
          >
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

  const searchData = (ev) => {
    const filterData = [];
    if (ev.target.value.length > 0) {
      adminDetails.filter((item) => {
        if (
          item.title.toLowerCase().match(ev.target.value.toLowerCase()) ||
          item.id.toString().toLowerCase().match(ev.target.value.toLowerCase())
        )
          filterData.push(item);
      });
      GetTableData(filterData);
    } else GetTableData(copyAdminDetails);
  };

  return (
    <div>
      <div class="screen-main main-screen">
        <div class="container admg-head">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h6>
                {sessionStorage.getItem("role") === "super-user"
                  ? "Admin Management"
                  : "Specialist/ User Management"}
              </h6>
            </div>

            <div>
              {/* <button type="button" className="admg-add-admin">
                Add Admin
              </button> */}
              <button
                type="button"
                onClick={handleShow}
                className="admg-add-admin"
              >
                {sessionStorage.getItem("role") === "super-user"
                  ? "Add Admin"
                  : "Add Specialist/User"}
              </button>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-12">
              <div className="admg-tbl-outline">
                <div
                  class="row"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div class="col-sm-3 mb-4">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                      onKeyUp={searchData}
                    />
                  </div>

                  <div
                    class="col-sm-3  mb-4"
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <Dropdown className="admg-filter-export">
                      <Dropdown.Toggle variant="" id="dropdown-basic">
                        Filter
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="admg-filter-export">
                      <Dropdown.Toggle
                        variant=""
                        id="dropdown-basic"
                        onClick={exportFile}
                      >
                        Export
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>

                <div className="p-4">
                  <div className="tblheight table-responsive">
                    <ReactBootStrap.Table>
                      <thead className="tblhead">
                        <tr className="admg-tblhead">
                          <th className="test-admg">DATE </th>
                          <th>USERNAME</th>
                          <th>FIRSTNAME</th>
                          <th>EMAILID</th>
                          <th>NUMBER</th>
                          <th>ROLE</th>
                          <th>ACTION</th>
                        </tr>
                      </thead>
                      {TableData}
                    </ReactBootStrap.Table>
                    <br />
                  </div>
                </div>
                <ReactPaginate
                  className="pagination justify-content-end admg-pagination-tab"
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
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
          </div>
        </div>
        <div>
          {/* <button onClick={onOpenModal}>Open modal</button> */}
          <Modal open={open} onClose={onCloseModal} center>
            {showDeleteModal ? deletModal(TableData) : adminForm()}
          </Modal>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AdminManagement;
