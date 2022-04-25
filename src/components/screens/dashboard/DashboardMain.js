import React, { Fragment, useEffect, useState } from "react";

// import LogoNotification from "/home/user/AiKno/AiKnoWebApp/AiKnoFrontEnd_v2/AiKnoFrontend/src/assets/icons/Icon-checkmark-circle.svg"
// import LogoAdmin from "/home/user/AiKno/AiKnoWebApp/AiKnoFrontEnd_v2/AiKnoFrontend/src/assets/icons/Icon-checkmark-circle.svg";
// import LogoLicense from "/home/user/AiKno/AiKnoWebApp/AiKnoFrontEnd_v2/AiKnoFrontend/src/assets/icons/Icon-checkmark-circle.svg";

import LogoNotification from "..\\src\\assets\\icons\\Notification-bg.svg";
import LogoAdmin from "..\\src\\assets\\icons\\Admin_graditi_bg.svg";
import LogoLicense from "..\\src\\assets\\icons\\License_graditi_bg.svg";

import axios from "axios";

import * as ReactBootStrap from "react-bootstrap";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";

const DashboardMain = () => {
  const authenticatedService = new AuthenticatedService();

  const [notificationCount, setNotificationCount] = useState([]);

  const [activityData, setActivityData] = useState([]);

  const authService = new AuthenticatedService();

  useEffect(() => {
    getNotificationCount();
    getActivityList();
  }, []);

  const getNotificationCount = () => {
    authenticatedService.getNotificationsCount().then((res) => {
      if (res) {
        setNotificationCount(res);
        console.log(res);
      }
    });
  };

  const getActivityList = () => {
    authenticatedService.recentActivity().then((res) => {
      if (res) {
        setActivityData(res);
      }
      console.log(res);
    });
  };

  return (
    <div class="container">
      <div className="welcome-tag"> Welcome to Dashboard</div> <br />
      <div class="row row-flex">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="content colour">
            <label> 25</label>

            <img src={LogoNotification} class="img" />

            <br />

            <label class="lblLeft"> Notification</label>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="content colour">
            <label> 105</label>

            <img src={LogoAdmin} class="img" />

            <br />

            <label class="lblLeft"> Admin Management</label>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="content colour">
            <label> 15</label>

            <img src={LogoLicense} class="img" />

            <br />

            <label class="lblLeft"> Total Licenses</label>
          </div>
        </div>
        <div className="welcome-tag"> Recent Activity</div> <br /> <br />
        <br />
      </div>
      <div>
        <div>
          <ReactBootStrap.Table className="tbl1">
            <thead>
              <tr className="title1">
                <th>DATE</th>

                <th>USERNAME</th>

                <th>ACTION</th>

                <th>EMAILID</th>

                <th>OPERATION</th>

                <th>ON USER</th>
              </tr>
            </thead>

            <tbody>
              {activityData &&
                activityData.map((item) => (
                  <tr key={item.userId}>
                    <td>{item.title}</td>

                    <td>{item.completed}</td>

                    <td>{item.action}</td>

                    <td>{item.email}</td>

                    <td>{item.operation}</td>

                    <td>{item.onUser}</td>
                  </tr>
                ))}
            </tbody>

            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </ReactBootStrap.Table>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
