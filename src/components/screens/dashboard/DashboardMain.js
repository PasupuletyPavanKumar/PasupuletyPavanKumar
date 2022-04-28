import React, { Fragment, useEffect, useMemo, useState } from "react";

import LogoNotification from "..\\src\\assets\\icons\\Notification-bg.svg";
import LogoAdmin from "..\\src\\assets\\icons\\Admin_graditi_bg.svg";
import LogoLicense from "..\\src\\assets\\icons\\License_graditi_bg.svg";

// import LogoNotification from "/home/user/AiKno/AiKnoWebApp/AiKnoFrontEnd_v2/AiKnoFrontend/src/assets/icons/Notification-bg.svg";
// import LogoAdmin from "/home/user/AiKno/AiKnoWebApp/AiKnoFrontEnd_v2/AiKnoFrontend/src/assets/icons/Admin_graditi_bg.svg";
// import LogoLicense from "/home/user/AiKno/AiKnoWebApp/AiKnoFrontEnd_v2/AiKnoFrontend/src/assets/icons/License_graditi_bg.svg";

import axios from "axios";

import * as ReactBootStrap from "react-bootstrap";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";
import Pagination from "./Pagination";

const DashboardMain = () => {
  let PageSize = 5;
  const authenticatedService = new AuthenticatedService();

  const [notificationCount, setNotificationCount] = useState([]);

  const [adminsCount, setAdminsCount] = useState([]);

  const [activityData, setActivityData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getNotificationCount();
    getAdminCount();
    getActivityList();
  }, []);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return activityData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const getNotificationCount = () => {
    authenticatedService.getNotificationsCount().then((res) => {
      console.log(res);
      setNotificationCount(res);
    });
  };

  const getAdminCount = () => {
    authenticatedService.getAdminsCount().then((res) => {
      console.log(res);
      setAdminsCount(res);
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
            <label> {notificationCount}</label>

            <img src={LogoNotification} class="img" />

            <br />

            <label class="lblLeft"> Notification</label>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="content colour">
            <label> {adminsCount}</label>

            <img src={LogoAdmin} class="img" />

            <br />

            <label class="lblLeft"> Admin Management</label>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="content colour">
            <label> {23}</label>

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
              {activityData.map((item) => (
                <tr key={item.userId}>
                  <td>{item.dateOfActivity}</td>

                  <td>{item.byUser}</td>

                  <td>{item.action}</td>

                  <td>{item.email}</td>

                  <td>{item.operation}</td>

                  <td>{item.onUser}</td>
                </tr>
              ))}
            </tbody>

            {/* <nav aria-label="Page navigation example">
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
            </nav> */}
          </ReactBootStrap.Table>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={activityData.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
