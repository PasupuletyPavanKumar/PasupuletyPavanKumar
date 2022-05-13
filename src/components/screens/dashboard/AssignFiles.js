import React from "react";
import  { useState } from "react";
import Icon_eye from "..\\src\\assets\\icons\\Icon_eye.svg";
import Icon_trash from "..\\src\\assets\\icons\\Icon_trash.svg";


const AssignFiles = () => {
  const [usercontrolchange,setUsercontrolchange] = useState("ALL FILES");
  return <div>
      <div className="user">
        <div>
      Assign to User
      </div>
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
        <h6 className={usercontrolchange === "ALL FILES" ? "controlchange" : ""}
              onClick={() =>setUsercontrolchange ("ALL FILES")}>
              {" "}
              ALL FILES</h6>
        <h6  className={usercontrolchange === "PENDING" ? "controlchange" : ""}
              onClick={() =>setUsercontrolchange ("PENDING")}>
              {" "}
        PENDING</h6>
        <h6 className={usercontrolchange === "PROCESSING" ? "controlchange" : ""}
              onClick={() =>setUsercontrolchange ("PROCESSING")}>
              {" "}
        PROCESSING</h6>
        <h6  className={usercontrolchange === "COMPLETED" ? "controlchange" : ""}
              onClick={() =>setUsercontrolchange ("COMPLETED")}>
              {" "}
        
        COMPLETED</h6>
        
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
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>July</td>
              <td>Dooley</td>
              <td>Dooley</td>
              <td>john@example.com</td>
              <td><img src={Icon_eye}></img>
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
            </tr>
            
          </tbody>
        </table>
      </div>

    </div>

  </div>;
};

export default AssignFiles;
