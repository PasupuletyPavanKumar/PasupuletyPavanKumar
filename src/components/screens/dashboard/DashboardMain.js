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

    <div class="container">

      <div className="welcome-tag"> Welcome to Dashboard</div> <br />

      <div class="row row-flex">

        <div class="col-md-4 col-sm-6 col-xs-12">

          <div class="content colour"  >

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

        <div className="welcome-tag"> Recent Activity</div> <br /> <br /><br />

      </div>

      <div>

        <ReactBootStrap.Table>

          <thead>

            <tr className="title1">

              <th>DATE</th>

              <th>USERName</th>

              <th>ACTION</th>

              <th>EMAILID</th>

              <th>OPERATION</th>

              <th>ON USER</th>

            </tr>

          </thead>

          <tbody>

            {posts.blogs &&

              posts.blogs.map((item) => (

                <tr key={item.id}>

                  <td>{item.dateOfActivity}</td>

                  <td>{item.byUser}</td>

                  <td>{item.action}</td>

                  <td>{item.email}</td>

                  <td>{item.operation}</td>

                  <td>{item.onUser}</td>

                </tr>

              ))}

          </tbody>

        </ReactBootStrap.Table>

      </div>


    </div>

  );

};



export default DashboardMain;

