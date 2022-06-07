import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
//import Icon_eye from "..\\src\\assets\\icons\\Icon_eye.svg";
//import Icon_trash from "..\\src\\assets\\icons\\Icon_trash.svg";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";
import ReactPaginate from "react-paginate";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

const AssignFiles = (props) => {
  const [usercontrolchange, setUsercontrolchange] = useState("ALL FILES");

  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const [allDocsList, setAllDocsList] = useState([]);
  const [page, setPage] = useState([]);

  const authenticatedService = new AuthenticatedService();

  const setDocState = (docState) => {
    setUsercontrolchange(docState);
    getDocsList(docState);
  };

  const getDocsList = (docState) => {
    if (docState === "ALL FILES") {
      if (page === "assignToUser") {
        getSpecialistAssignedAllDocsList();
        console.log("getSpecialistAssignedAllDocsList");
      } else {
        getUserAssignedAllDocsList();
        console.log("getUserAssignedAllDocsList");
      }
    } else if (docState === "PENDING") {
      if (page === "assignToUser") {
        if (sessionStorage.getItem("role") === "specialist") {
          getSpecialistAssignedPendingDocs();
          console.log("getSpecialistAssignedPendingDocs");
        } else {
          getSpecialistAssignedPendingDocsToUser();
          console.log("getSpecialistAssignedPendingDocsToUser");
        }
      } else {
        if (sessionStorage.getItem("role") === "specialist") {
          getUserAssignedPendingDocs();
          console.log("getUserAssignedPendingDocs");
        } else {
          specialistAssignedPendingDocsToUser();
          console.log("specialistAssignedPendingDocsToUser");
        }
      }
    } else if (docState === "PROCESSING") {
      if (page === "assignToUser") {
        if (sessionStorage.getItem("role") === "specialist") {
          getSpecialistAssignedProcessingDocs();
          console.log("getSpecialistAssignedProcessingDocs");
        }
      } else {
        if (sessionStorage.getItem("role") === "user") {
          specialistAssignedProcessingDocsToUser();
          console.log("specialistAssignedProcessingDocsToUser");
        }
      }
    } else if (docState === "COMPLETED") {
      if (page === "assignToUser") {
        if (sessionStorage.getItem("role") === "specialist") {
          getSpecialistAssignedProcessedDocs();
          console.log("getSpecialistAssignedProcessedDocs");
        }
      } else {
        if (sessionStorage.getItem("role") === "user") {
          specialistAssignedProcessedDocsToUser();
          console.log("specialistAssignedProcessedDocsToUser");
        }
      }
    } else if (docState === "OK") {
      if (page === "assignToUser") {
        if (sessionStorage.getItem("role") === "specialist") {
          //yet to get API
          console.log("yet to get API");
        } else {
          assignedToSpecialistOkDocs();
          console.log("assignedToSpecialistOkDocs");
        }
      } else {
        if (sessionStorage.getItem("role") === "specialist") {
          getUserAssignedOkDocs();
          console.log("getUserAssignedOkDocs");
        } else {
          specialistAssignedOkDocsToUser();
          console.log("specialistAssignedOkDocsToUser");
        }
      }
    } else if (docState === "NOT OK") {
      if (page === "assignToUser") {
        if (sessionStorage.getItem("role") === "specialist") {
          //yet to get API
          console.log("yet to get API");
        } else {
          assignedToSpecialistNotOkDocs();
          console.log("assignedToSpecialistNotOkDocs");
        }
      } else {
        if (sessionStorage.getItem("role") === "specialist") {
          getUserAssignedNotOkDocs();
          console.log("getUserAssignedNotOkDocs");
        } else {
          specialistAssignedNotOkDocsToUser();
          console.log("specialistAssignedNotOkDocsToUser");
        }
      }
    }
  };

  // get all docs assigned by specialist for specialist/user screen
  const getSpecialistAssignedAllDocsList = () => {
    authenticatedService.allDocsAssignedBySpecialist().then((res) => {
      if (res) {
        res != "404" ? setAllDocsList(res) : setAllDocsList("No Docs Assigned");
        console.log(res);
      }
      console.log(res);
    });
  };

  // get pending docs assigned by specialist for specialist screen
  const getSpecialistAssignedPendingDocs = () => {
    authenticatedService.pendingDocsAssignedBySpecialist().then((res) => {
      if (res) {
        res != "404" ? setAllDocsList(res) : setAllDocsList("No Docs Assigned");
        console.log(res);
      }
      console.log(res);
    });
  };

  // get processing docs assigned by specialist for specialist screen
  const getSpecialistAssignedProcessingDocs = () => {
    authenticatedService.processingDocsAssignedBySpecialist().then((res) => {
      if (res) {
        res != "404" ? setAllDocsList(res) : setAllDocsList("No Docs Assigned");
        console.log(res);
      }
      console.log(res);
    });
  };

  // get completed docs assigned by specialist for specialist screen
  const getSpecialistAssignedProcessedDocs = () => {
    authenticatedService.completedDocsAssignedBySpecialist().then((res) => {
      if (res) {
        res != "404" ? setAllDocsList(res) : setAllDocsList("No Docs Assigned");
        console.log(res);
      }
      console.log(res);
    });
  };

  // get all docs assigned by user for specialist screen
  const getUserAssignedAllDocsList = () => {
    authenticatedService.allDocsAssignedByUser().then((res) => {
      if (res) {
        res != "404" ? setAllDocsList(res) : setAllDocsList("No Docs Assigned");
        console.log(res);
      }
      console.log(res);
    });
  };

  // get pending docs assigned by user for specialist screen
  const getUserAssignedPendingDocs = () => {
    authenticatedService.pendingDocsAssignedByUser().then((res) => {
      if (res) {
        res != "404" ? setAllDocsList(res) : setAllDocsList("No Docs Assigned");
        console.log(res);
      }
      console.log(res);
    });
  };

  // get OK docs assigned by user for specialist screen
  const getUserAssignedOkDocs = () => {
    authenticatedService.oKDocsAssignedByUser().then((res) => {
      if (res) {
        res != "404" ? setAllDocsList(res) : setAllDocsList("No Docs Assigned");
        console.log(res);
      }
      console.log(res);
    });
  };

  // get Not OK docs assigned by user for specialist screen
  const getUserAssignedNotOkDocs = () => {
    authenticatedService.notOKDocsAssignedByUser().then((res) => {
      if (res) {
        res != "404" ? setAllDocsList(res) : setAllDocsList("No Docs Assigned");
        console.log(res);
      }
      console.log(res);
    });
  };

  // get pending docs assigned by user to specialist for user screen
  const getSpecialistAssignedPendingDocsToUser = () => {
    authenticatedService.pendingDocsAssignedByUserToSpecialist().then((res) => {
      if (res) {
        res != "404" ? setAllDocsList(res) : setAllDocsList("No Docs Assigned");
        console.log(res);
      }
      console.log(res);
    });
  };

  //get user assigned specialist oked docs list
  const assignedToSpecialistOkDocs = () => {
    authenticatedService.oKDocsAssignedByUserToSpecialist().then((res) => {
      if (res) {
        res != "404" ? setAllDocsList(res) : setAllDocsList("No Docs Assigned");
        console.log(res);
      }
      console.log(res);
    });
  };

  //get user assigned specialist noyoked docs list
  const assignedToSpecialistNotOkDocs = () => {
    authenticatedService.notOKDocsAssignedByUserToSpecialist().then((res) => {
      if (res) {
        res != "404" ? setAllDocsList(res) : setAllDocsList("No Docs Assigned");
        console.log(res);
      }
      console.log(res);
    });
  };

  //get specialist assigned pending docs for user in user screen
  const specialistAssignedPendingDocsToUser = () => {
    authenticatedService.specialistAssignedPendingDocsToUser().then((res) => {
      if (res) {
        res != "404" ? setAllDocsList(res) : setAllDocsList("No Docs Assigned");
        console.log(res);
      }
      console.log(res);
    });
  };

  //get specialist assigned processing docs for user in user screen
  const specialistAssignedProcessingDocsToUser = () => {
    authenticatedService
      .specialistAssignedProcessingDocsToUser()
      .then((res) => {
        if (res) {
          res != "404"
            ? setAllDocsList(res)
            : setAllDocsList("No Docs Assigned");
          console.log(res);
        }
        console.log(res);
      });
  };

  //get specialist assigned processed docs for user in user screen
  const specialistAssignedProcessedDocsToUser = () => {
    authenticatedService.specialistAssignedProcessedDocsToUser().then((res) => {
      if (res) {
        res != "404" ? setAllDocsList(res) : setAllDocsList("No Docs Assigned");
        console.log(res);
      }
      console.log(res);
    });
  };

  //get specialist assigned ok docs for user in user screen
  const specialistAssignedOkDocsToUser = () => {
    authenticatedService.specialistAssignedOkDocsToUser().then((res) => {
      if (res) {
        res != "404" ? setAllDocsList(res) : setAllDocsList("No Docs Assigned");
        console.log(res);
      }
      console.log(res);
    });
  };

  //get specialist assigned not ok docs for user in user screen
  const specialistAssignedNotOkDocsToUser = () => {
    authenticatedService.specialistAssignedNotOkDocsToUser().then((res) => {
      if (res) {
        res != "404" ? setAllDocsList(res) : setAllDocsList("No Docs Assigned");
        console.log(res);
      }
      console.log(res);
    });
  };

  const getActivityList = () => {
    authenticatedService.recentActivity().then((res) => {
      if (res) {
        //setActivityData(res);
        paginationCode(res);
      }
      console.log(res);
    });
  };

  const paginationCode = (res) => {
    const data = res;
    const slice = data.slice(offset, offset + perPage);
    let postData;
    <div>
      <div class="d-flex align-items-start">
        <table class="table">
          {
            (postData = slice.map((item) => (
              <tbody>
                <tr key={item.id}>
                  <td>{item.userId}</td>
                  <td>{item.id}</td>
                  <td>{item.id}</td>
                  <td>{item.id}</td>
                  <td>{item.id}</td>
                  <td>{item.id}</td>
                  <td>
                    <button className="assignbutton">start</button>
                  </td>
                  <td>
                    <VisibilityIcon className="cursor-pointer assignicons" />
                    &nbsp;
                    <DeleteIcon className="cursor-pointer assignicons" />
                  </td>
                </tr>
              </tbody>
            )))
          }
        </table>
      </div>
    </div>;

    setData(postData);
    setPageCount(Math.ceil(data.length / perPage));
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  // useEffect(() => {
  //   getActivityList();
  // }, [offset]);

  useEffect(() => {
    // let page = window.location.pathname;
    // page = page.replace(/[/]/g, "");
    const page = props.page;
    setPage(page);
    console.log("files --->", page);
    if (page === "assignToUser") {
      // specialist get the docs assigned to user
      //getSpecialistAssignedAllDocsList();
      getActivityList();
      console.log("files --->", "getSpecialistAssignedAllDocsList");
    } else {
      getUserAssignedAllDocsList();
      console.log("getUserAssignedAllDocsList");
    }
  }, [props, offset]);

  return (
    <div class="container-fluid">
      <div class="container-fluid">
        <div className=" mt-4 mb-4">
          <h4 className="reportsheading">Assign To Me</h4>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div className="tableouline p-3 col-12">
            <div
              class="row"
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div class=" col-7 col-md-4 col-lg-4 col-xl-3 mb-4">
                <div>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
              </div>

              <div
                class="col-12 col-md-8 col-lg-6 col-xl-4 mb-4"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <select className="selectprojectfilter p-2">
                  <option value="Filter">Select Project</option>
                </select>

                <select className="assigndrop">
                  <option value="Filter">Filter</option>
                </select>

                <select className="assigndrop">
                  <option value="Export">Export</option>
                </select>
              </div>
            </div>

            <table class="table">
              <thead>
                <tr className="headingstyle">
                  <th
                    className={
                      usercontrolchange === "ALL FILES" ? "controlchange" : ""
                    }
                    onClick={() => setUsercontrolchange("ALL FILES")}
                  >
                    {" "}
                    <span className="span">ALLFILES</span>
                  </th>
                  <th
                    className={
                      usercontrolchange === "PENDING" ? "controlchange" : ""
                    }
                    onClick={() => setUsercontrolchange("PENDING")}
                  >
                    {" "}
                    PENDING
                  </th>
                  {((page === "assignToUser" &&
                    sessionStorage.getItem("role") === "specialist") ||
                    (page === "assignToMe" &&
                      sessionStorage.getItem("role") === "user")) && (
                    <div>
                      <th
                        className={
                          usercontrolchange === "PROCESSING"
                            ? "controlchange"
                            : ""
                        }
                        onClick={() => setUsercontrolchange("PROCESSING")}
                      >
                        {" "}
                        PROCESSING{" "}
                      </th>
                      <th
                        className={
                          usercontrolchange === "PROCESSED"
                            ? "controlchange"
                            : ""
                        }
                        onClick={() => setUsercontrolchange("PROCESSED")}
                      >
                        {" "}
                        PROCESSED{" "}
                      </th>
                    </div>
                  )}

                  <th
                    className={
                      usercontrolchange === "OK" ? "controlchange" : ""
                    }
                    onClick={() => setUsercontrolchange("OK")}
                  >
                    {" "}
                    OK{" "}
                  </th>
                  <th
                    className={
                      usercontrolchange === "NOT OK" ? "controlchange" : ""
                    }
                    onClick={() => setUsercontrolchange("NOT OK")}
                  >
                    {" "}
                    NOT OK{" "}
                  </th>
                </tr>
              </thead>

              <thead>
                <tr className="headingstyle1">
                  <th scope="col">DATE</th>
                  <th scope="col">FILE NAME</th>
                  <th scope="col">PROJECT NAME</th>
                  <th scope="col">FILE TYPE</th>
                  <th scope="col">USER NAME</th>
                  <th scope="col">EMAIL ID</th>
                  <th scope="col">STATUS</th>
                  <th scope="col">ACTION</th>
                  <th></th>
                </tr>
              </thead>
              {data}
            </table>
            <ReactPaginate
              className="pagination justify-content-end"
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
      </div>
    </div>
  );
};

export default AssignFiles;
