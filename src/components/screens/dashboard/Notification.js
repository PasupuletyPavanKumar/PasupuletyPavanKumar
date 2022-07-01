import React, { useEffect, useState } from "react";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";
import * as ReactBootstrap from "react-bootstrap";
import { ReactComponent as NotificationLogo } from "../../../assets/icons/setting_blue.svg";
// import { ReactComponent as AiKnoLogo } from "../../../assets/icons/AiKno_Logo.svg";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "react-responsive-modal";
//import { format } from 'date-fns';
// import Timestamp from "react-timestamp";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import SettingsIcon from "@mui/icons-material/Settings";

const Notification = () => {
  const authenticatedService = new AuthenticatedService();
  const [open, setOpen] = useState(false);
  const [toBeUpdatedUsername, setToBeUpdatedUsername] = useState();
  const [showDeleteModal, setshowDeleteModal] = useState(false);
  const [show, setShow] = useState(false);
  const [notificationId, setNotificationId] = useState([]);

  const handleClose = () => setShow(false);
  const [notifications, setNotifications] = useState([]);

  // const deleteNotification = () => {
  //   var reqBody = new FormData();
  //   reqBody.append("byUser", sessionStorage.getItem("username"));
  //   reqBody.append("byUserRole", sessionStorage.getItem("role"));

  //   authenticatedService
  //     .deleteNotification(reqBody, toBeUpdatedUsername)
  //     .then((res) => {
  //       if (res) {
  //         handleClose();

  //       }
  //       console.log(res);
  //     });
  // };

  const refreshPage = () => {
    window.location.reload();
  };

  const getNotifications = () => {
    authenticatedService.getNotifications().then((res) => {
      if (res) {
        res != "404"
          ? setNotifications(res.sort().reverse())
          : setNotifications("");
        console.log(res);
      }
    });
  };
  const deleteNoftModal = (item) => {
    //setShow(true);
    // setToBeUpdatedUsername(item.userName);
    setNotificationId(item.id);
    setShow(true);
    setshowDeleteModal(true);
  };
  const deleteNotification = () => {
    console.log(notificationId);
    const role = sessionStorage.getItem("role");
    authenticatedService
      .deleteNotification(notificationId, role)
      .then((res) => {
        if (res) {
          if (res == "Success") {
            alert("Notification deleted successfully");
            handleClose();
            refreshPage();
          } else {
            alert("Notification does not exist");
            handleClose();
          }
        } else {
          alert("Notification does not exist");
          handleClose();
        }
        console.log(res);
      });
  };

  const deletModal = () => {
    return (
      <div className="del-popup">
        <div className="delete-modal">Are you sure?</div>
        <br />

        <div className="delete-text">
          Do you want to delete this notification
          <br />
          The process cannot be undone.
        </div>
        <br />
        <center>
          <button type="button" className="cancel-button" onClick={handleClose}>
            Cancel
          </button>
          &ensp;
          <button
            type="button"
            className="delete-button"
            onClick={deleteNotification}
          >
            Delete
          </button>
        </center>
      </div>
    );
  };
  // const deleteNoftModal = (item) => {
  //   //setShow(true);
  //   setToBeUpdatedUsername(item.userName);
  //   setShow(true);
  //   setshowDeleteModal(true);
  // };
  // const deletModal = () => {
  //   return (
  //     <div className="del-popup">
  //       <div className="delete-modal">Are you sure?</div>
  //       <br />

  //       <div className="delete-text">
  //         Do you want to delete this notification
  //         <br />
  //         The process cannot be undone.
  //       </div>
  //       <br />
  //       <center>
  //         <button type="button" className="cancel-button" onClick={handleClose}>
  //           Cancel
  //         </button>
  //         &ensp;
  //         <button
  //           type="button"
  //           className="delete-button"
  //           onClick={deleteNotification}
  //         >
  //           Delete
  //         </button>
  //       </center>
  //     </div>
  //   );
  // };
  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <div className="main-screen screen-main">
      <div className="head1">All Notifications</div>
      <div className="Notificationscontainermain p-3">
        {notifications &&
          notifications.map((item) => (
            <div className="d-flex">
              <div className="notifaction-title w-100 ">
                <div className="notiLogo ml-5 mr-3">
                  {item.action === "Create" ? (
                    <CheckCircleOutlineIcon className="success" />
                  ) : // ) : item.action === "Update" ? (
                  //   <WarningAmberIcon className="warn" />
                  item.action === "Delete" ? (
                    <ErrorOutlineIcon className="error" />
                  ) : item.action === "Update" ? (
                    <HighlightOffIcon className="info" />
                  ) : null}
                  {/* <SettingsIcon /> */}
                </div>
                <div className="notification-heading">
                  <div className="font-16 fontweight-700 color003763">
                    {" "}
                    {item.operation}
                    {/* {item.id} */}
                  </div>

                  <div className="font-14 color959595">
                    {item.description}
                    {/* {item.id} */}
                  </div>

                  {/* <div> <img src="delete-img"><Delete</img></div> */}
                </div>
                {/* <div className="time">
                  <Timestamp
                    relative
                    date={item.notificationDateAndTime}
                    autoUpdate
                  />
                </div> */}
                <DeleteIcon
                  className="view-bicons mt-2 mb-2 "
                  onClick={() => deleteNoftModal(item)}
                />
              </div>
              {/* <div>30 min ago</div> */}
            </div>
          ))}
      </div>
      <Modal open={show} onClose={handleClose} center>
        {showDeleteModal ? deletModal() : null}
      </Modal>
    </div>
  );
};

export default Notification;

// <ReactBootstrap.Table class="notification-table">
//           <tbody className="table-wrapper m-3">
//             {notifications &&
//               notifications.map((item) => (
//                 <tr key={item.id}>
//                   <td>
//                     <div className="">
//                       <CheckCircleOutlineIcon className="notification-icon">
//                         {" "}
//                       </CheckCircleOutlineIcon>
//                     </div>
//                   </td>

//                   <td>
//                     <div className="p-2">
//                       <text className="p1" key={item.id}>
//                         {item.title}
//                       </text>
//                       <br />
//                       <text className="p2" key={item.id}>
//                         {item.title}
//                       </text>{" "}
//                     </div>
//                   </td>

//                   {/* <td> <div className="DATE">date Of Activity</div></td> */}
//                   <td>
//                     <div className="DATE p2">{item.title}</div>
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </ReactBootstrap.Table>
