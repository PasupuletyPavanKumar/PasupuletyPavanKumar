import React, { useEffect, useState } from "react";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";
import * as ReactBootstrap from "react-bootstrap";
import { ReactComponent as NotificationLogo } from "../../../assets/icons/setting_blue.svg";
// import { ReactComponent as AiKnoLogo } from "../../../assets/icons/AiKno_Logo.svg";
const Notification = () => {
  const authenticatedService = new AuthenticatedService();

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getNotifications();
  }, []);

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

  return (
    <div className="main-screen screen-main">
      <div className="head1">All Notifications</div>
      <div className="Notificationscontainermain p-3">
        {notifications &&
          notifications.map((item) => (
            <div className="d-flex">
              <div className="notifaction-title w-100">
                <div className="notiLogo">
                  <NotificationLogo />
                </div>
                <div className="notification-heading">
                  <div className="font-16 fontweight-700 color003763">
                    {" "}
                    {item.operation}
                  </div>
                  <div className="font-14 color959595"> {item.description}</div>
                  {/* <div> <img src="delete-img"><Delete</img></div> */}
                </div>
              </div>
              {/* <div>30 min ago</div> */}
            </div>
          ))}
      </div>
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
