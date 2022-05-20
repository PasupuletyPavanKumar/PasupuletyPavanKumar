import React, { useEffect } from "react";
import { useState } from "react";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";
import Icon_eye from "..\\src\\assets\\icons\\Icon_eye.svg";
import Icon_trash from "..\\src\\assets\\icons\\Icon_trash.svg";

// import Icon_eye from "/home/user/AiKno/AiKnoWebApp/AiKno_Mithun_Repo/AiKno/src/assets/icons/Icon_eye.svg";
// import Icon_trash from "/home/user/AiKno/AiKnoWebApp/AiKno_Mithun_Repo/AiKno/src/assets/icons/Icon_trash.svg";

const AssignFiles = () => {
  const [usercontrolchange, setUsercontrolchange] = useState("ALL FILES");
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

  useEffect(() => {
    let page = window.location.pathname;
    page = page.replace(/[/]/g, "");
    setPage(page);
    console.log(page);
    if (page === "assignToUser") {
      // specialist get the docs assigned to user
      getSpecialistAssignedAllDocsList();
    } else {
      getUserAssignedAllDocsList();
      console.log("call assign to me api");
    }
  }, []);

  return (
    <div>
      <div className="user">
        <div>Assign to User</div>
      </div>
      <div className="AssignUsermain">
        <div className="usersearchanddropdown">
          <div class="main assifnsearch">
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input type="text" class="form-control" placeholder="Search" />
            </div>
            <div className="assigndropdown">
              <select className="assigndrop">filter</select>
              <select className="assigndrop">filter</select>
              <select className="assigndrop">filter</select>
            </div>
          </div>
        </div>

        <div class="container">
          <div className="assignuserheadings">
            <h6
              className={
                usercontrolchange === "ALL FILES" ? "controlchange" : ""
              }
              onClick={() => setDocState("ALL FILES")}
            >
              {" "}
              ALL FILES
            </h6>
            <h6
              className={usercontrolchange === "PENDING" ? "controlchange" : ""}
              onClick={() => setDocState("PENDING")}
            >
              {" "}
              PENDING
            </h6>
            <h6
              className={
                usercontrolchange === "PROCESSING" ? "controlchange" : ""
              }
              onClick={() => setDocState("PROCESSING")}
            >
              {" "}
              PROCESSING
            </h6>
            <h6
              className={
                usercontrolchange === "COMPLETED" ? "controlchange" : ""
              }
              onClick={() => setDocState("COMPLETED")}
            >
              {" "}
              PROCESSED
            </h6>
            {/* if(
            {(page === "assignToUser" &&
              sessionStorage.getItem("role") === "specialist") ||
              (page === "assignToMe" &&
                sessionStorage.getItem("role") === "user")}
            )
            {
              <div> */}
            <h6
              className={usercontrolchange === "OK" ? "controlchange" : ""}
              onClick={() => setDocState("OK")}
            >
              {" "}
              OK
            </h6>
            <h6
              className={usercontrolchange === "NOT OK" ? "controlchange" : ""}
              onClick={() => setDocState("NOT OK")}
            >
              {" "}
              NOT OK
            </h6>
            {/* </div>
            } */}
          </div>
          <table class="table">
            <thead>
              <tr>
                <th>DATE</th>
                <th>FILE NAME</th>
                <th>PROJECT NAME</th>
                <th>FILE TYPE</th>
                <th>USER NAME</th>
                <th>MAIL ID</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {allDocsList &&
                allDocsList.map((item) => (
                  <tr key={item.id}>
                    <td>{item.dateOfAssignment}</td>

                    <td>{item.fileName}</td>

                    <td>{item.projectId}</td>

                    <td>{item.fileType}</td>

                    <td>{item.assignedToUserName}</td>

                    <td>{item.assignedToUserEmail}</td>

                    <td>{item.status}</td>

                    {/* <td>{item.contactNumber}</td> */}
                    <td>
                      <img src={Icon_eye}></img>
                      <img src={Icon_trash}></img>
                    </td>

                    {/* <td>{item.onUser}</td> */}
                  </tr>
                ))}

              {/* <tr>
                <td>John</td>
                <td>Doe</td>
                <td>July</td>
                <td>Dooley</td>
                <td>Dooley</td>
                <td>john@example.com</td>
                <td>Completed</td>
                <td>
                  <img src={Icon_eye}></img>
                  <img src={Icon_trash}></img>
                </td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>July</td>
                <td>Dooley</td>
                <td>Dooley</td>
                <td>mary@example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>July</td>
                <td>Dooley</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssignFiles;
