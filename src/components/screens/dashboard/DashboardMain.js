import React, { Fragment, useEffect, useState } from "react";

<<<<<<< Updated upstream
// import LogoNotification from "/home/user/AiKno/AiKnoWebApp/AiKnoFrontEnd_v2/AiKnoFrontend/src/assets/icons/Icon-checkmark-circle.svg"
// import LogoAdmin from "/home/user/AiKno/AiKnoWebApp/AiKnoFrontEnd_v2/AiKnoFrontend/src/assets/icons/Icon-checkmark-circle.svg";
// import LogoLicense from "/home/user/AiKno/AiKnoWebApp/AiKnoFrontEnd_v2/AiKnoFrontend/src/assets/icons/Icon-checkmark-circle.svg";

import LogoNotification from "..\\src\\assets\\icons\\Notification-bg.svg";
import LogoAdmin from "..\\src\\assets\\icons\\Admin_graditi_bg.svg";
import LogoLicense from "..\\src\\assets\\icons\\License_graditi_bg.svg";


import axios from "axios";

import * as ReactBootStrap from "react-bootstrap";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";


=======
//import LogoNotification from "/home/user/AiKno/AiKnoWebApp/AiKnoFrontEnd_v2/AiKnoFrontend/src/assets/icons/Icon-checkmark-circle.svg";
//..\\src\\assets\\logo\\AiKnologo.svg
import LogoNotification from "..\\src\\assets\\icons\\notification_bg.svg";
//import LogoAdmin from "/home/user/AiKno/AiKnoWebApp/AiKnoFrontEnd_v2/AiKnoFrontend/src/assets/icons/Icon-checkmark-circle.svg";
import LogoAdmin from "..\\src\\assets\\icons\\admin_dashboard_bg.svg";
import LogoLicense from "..\\src\\assets\\icons\\license_dashboard_bg.svg";
import * as ReactBootStrap from "react-bootstrap";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";

>>>>>>> Stashed changes
const DashboardMain = () => {
  const authenticatedService = new AuthenticatedService();

  const [activityData, setActivityData] = useState([]);

<<<<<<< Updated upstream
  const authService = new AuthenticatedService();

  const [posts, setPosts] = useState({ blogs: [] });


  useEffect(() => {

    const fetchPostList = async () => {

      const { data } = await axios(

        "http://localhost:8097/recentActivity/superUser/fetch/Bhanu"
        //"https://jsonplaceholder.typicode.com/users/"

      );

      setPosts({ blogs: data });

      console.log(data);

    };

    fetchPostList();

  }, [setPosts]);

  return (

=======
  const getActivityList = () => {
    authenticatedService.recentActivity().then((res) => {
      if (res) {
        setActivityData(res);
      }
      console.log(res);
    });
  };

  useEffect(() => {
    getActivityList();
  }, []);

  return (
>>>>>>> Stashed changes
    <div class="container">
      <div className="welcome-tag"> Welcome to Dashboard</div> <br />
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

      <div>

        <ReactBootStrap.Table>

=======
      <div>
        <ReactBootStrap.Table className="tbl1">
>>>>>>> Stashed changes
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
        </ReactBootStrap.Table>
<<<<<<< Updated upstream

      </div>


=======
      </div>
>>>>>>> Stashed changes
    </div>
  );
};

export default DashboardMain;
