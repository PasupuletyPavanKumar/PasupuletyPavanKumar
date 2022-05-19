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
              onClick={() => setDocType("ALL FILES")}
            >
              {" "}
              ALL FILES
            </h6>
            <h6
              className={usercontrolchange === "PENDING" ? "controlchange" : ""}
              onClick={() => setDocType("PENDING")}
            >
              {" "}
              PENDING
            </h6>
            <h6
              className={
                usercontrolchange === "PROCESSING" ? "controlchange" : ""
              }
              onClick={() => setDocType("PROCESSING")}
            >
              {" "}
              PROCESSING
            </h6>
            <h6
              className={
                usercontrolchange === "COMPLETED" ? "controlchange" : ""
              }
              onClick={() => setDocType("COMPLETED")}
            >
              {" "}
              COMPLETED
            </h6>
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
