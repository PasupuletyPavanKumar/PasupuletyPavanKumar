import React, { Fragment, useEffect, useMemo, useState } from "react";

// import LogoNotification from "..\\src\\assets\\icons\\Notification-bg.svg";
// import LogoAdmin from "..\\src\\assets\\icons\\Admin_graditi_bg.svg";

// import LogoNotification from "/home/user/AiKno/AiKnoWebApp/AiKno_Mithun_Repo/AiKno/src/assets/icons/Notification-bg.svg";
// import LogoAdmin from "/home/user/AiKno/AiKnoWebApp/AiKno_Mithun_Repo/AiKno/src/assets/icons/Admin_graditi_bg.svg";

import * as ReactBootStrap from "react-bootstrap";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";
import Pagination from "./Pagination";
import ReactPaginate from "react-paginate";

const DashboardMain = (props) => {
  let PageSize = 5;
  const images = [];
  const config = {
    role: props.role,
    column: props.role === "super-user" ? 2 : 4,
    colClass:
      props.role === "super-user"
        ? "col-md-6 dashboard-main-superuser"
        : "col-xs-12 col-sm-6 col-md-3 dashboard-main",
    image: props.images,
  };

  console.log(props);

  const authenticatedService = new AuthenticatedService();

  const [countData, setCountData] = [];

  const [notificationCount, setNotificationCount] = useState([]);

  const [adminsCount, setAdminsCount] = useState([]);

  const [reportCount, setReportCount] = useState([]);

  const [serverCount, setServerCount] = useState([]);

  const [specialistAndAdminCount, setSpecialistAndAdminCount] = useState([]);

  const [assignedToUserCount, setAssignedToUserCount] = useState([]);

  const [assignedToSpecialistCount, setAssignedToSpecialistCount] = useState(
    []
  );

  const [activityData, setActivityData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  //pagination and get data
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    getNotificationCount();

    if (sessionStorage.getItem("role") === "super-user") {
      getAdminCount();
    } else if (sessionStorage.getItem("role") === "admin") {
      getServerCount();
      getSpecialistAndAdminCount();
    }
    // else if (sessionStorage.getItem("role") !== "super-user") {
    //   getReportCount();
    // }

    if (sessionStorage.getItem("role") !== "super-user") getReportCount();

    // sessionStorage.getItem("role") === "super-user"
    //   ? getAdminCount()
    //   : getSpecialistAndAdminCount();
    if (
      sessionStorage.getItem("role") === "specialist" ||
      sessionStorage.getItem("role") === "user"
    ) {
      getAssignedToUserCount();
      getAssignedToSpecialistCount();
    }

    getActivityList();
  }, [offset]);

  const reuseCountCode = (res, name) => {
    const obj = {
      count: res,
      name: name,
    };
    if (countData.length > 0) {
      if (name === "Notification") setCountData([obj, ...countData]);
      else if (name === "Admin") setCountData([...countData, obj]);

      console.log("data ======>", [...countData, obj]);
    } else {
      setCountData([obj]);
    }
  };

  const getAssignedToUserCount = () => {
    authenticatedService.getAssignedToUserCount().then((res) => {
      console.log(res);
      setAssignedToUserCount(res);
      // reuseCountCode(res, "Notification");
    });
  };

  const getAssignedToSpecialistCount = () => {
    authenticatedService.getAssignedToSpecialistCount().then((res) => {
      console.log(res);
      setAssignedToSpecialistCount(res);
      // reuseCountCode(res, "Notification");
    });
  };

  const getNotificationCount = () => {
    authenticatedService.getNotificationsCount().then((res) => {
      console.log(res);
      setNotificationCount(res);
      // reuseCountCode(res, "Notification");
    });
  };

  const getAdminCount = () => {
    authenticatedService.getAdminsCount("admin").then((res) => {
      console.log(res);
      // reuseCountCode(res, "Admin");
      setAdminsCount(res);
    });
  };

  const getSpecialistAndAdminCount = () => {
    console.log("getSpecialistAndAdminCount-------------->");
    authenticatedService.getSpecialistAndAdminCount().then((res) => {
      console.log(res);
      setSpecialistAndAdminCount(res);
    });
  };

  const getServerCount = () => {
    console.log("server Count-------------->");
    authenticatedService.getServerCount().then((res) => {
      console.log(res);
      setServerCount(res);
    });
  };

  const getReportCount = () => {
    authenticatedService.getReportCount().then((res) => {
      console.log(res);
      setReportCount(res);
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
        <ReactBootStrap.Table>
          {
            (postData = slice.map((item) => (
              <tbody>
                <tr key={item.id}>
                  <td>{item.dateOfActivity.toString()}</td>
                  <td>{item.byUser}</td>
                  <td>{item.email}</td>
                  <td>{item.action}</td>
                  <td>{item.operation}</td>
                  <td>{item.onUser}</td>
                </tr>
              </tbody>
            )))
          }
        </ReactBootStrap.Table>
      </div>
    </div>;

    setData(postData);
    setPageCount(Math.ceil(data.length / perPage));
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage);
  };

  const notification = () => {
    return (
      <div className="divleft">
        <label className="lblLeft">{notificationCount}</label> <br/>
        {/* <div>{notificationCount}</div> */}
        <label className="ptag">Notification</label>
      </div>
    );
  };

  const admin = () => {
    return (
      <div className="divleft">
        <label className="lblLeft">
          {sessionStorage.getItem("role") === "super-user"
            ? adminsCount
            : specialistAndAdminCount}
        </label><br/>
        {/* <label className="lblLeft">{adminsCount}</label> */}
        <label className="ptag">Admin</label>
      </div>
    );
  };

  const reports = () => {
    return (
      <div className="divleft">
        {/* <div className="font-25 fontweight-700">{reportCount}</div> */}
        <label className="lblLeft">{reportCount}</label><br/>
        <label className="ptag">Reports</label>
      </div>
    );
  };

  const serverManagementCount = () => {
    return (
      <div className="divleft">
        <div>{adminsCount}</div>
        <label className="lblLeft">{serverCount.totalServerCount}</label><br/>
        <label className="ptag">Server Management</label>
      </div>
    );
  };

  const assignToUserCount = () => {
    return (
      <div className="divleft">
        <div>{adminsCount}</div>
        <label className="lblLeft">{assignedToUserCount}</label><br/>
        <label className="ptag">Assign To User</label>
      </div>
    );
  };

  const assignToSpecialistCount = () => {
    return (
      <div className="divleft">
        <div>{adminsCount}</div>
        <label className="lblLeft">{assignedToSpecialistCount}</label><br/>
        <label className="ptag">Assign to Specialist</label>
      </div>
    );
  };

  const loopData = () => {
    const options = [];
    for (let index = 0; index < config.column; index++) {
      options.push(
        <div class={config.colClass}>
          <div class="content d-flex align-items-center">
            {props.role === "super-user"
              ? index === 0
                ? notification()
                : admin()
              : props.role === "admin"
              ? index === 0
                ? reports()
                : index === 1
                ? notification()
                : index === 2
                ? admin()
                : serverManagementCount()
              : props.role === "specialist" || props.role === "user"
              ? index === 0
                ? reports()
                : index === 1
                ? notification()
                : index === 2
                ? assignToUserCount()
                : assignToSpecialistCount()
              : null}
            {/* <div className="divleft">
              <label className="lblLeft">
                {countData.length > 0 && countData[index].count}
              </label>
              <p className="ptag">
                {" "}
                {countData.length > 0 && countData[index].name}
              </p>
            </div> */}
            <div className="divright">
              <img
                src={require(`../../../${config.image[index]}`)}
                class="img"
                // width="40"
                // height="40"
                key={index.toString()}
              />
            </div>
          </div>
        </div>
      );
    }
    return options;
  };

  return (
    <div className="ptb-2 main-screen screen-main">
      <div class="div-head">
        <div className="sub-head"> Welcome to Dashboard</div>
        {/* <br /> */}
        <div class="row row-flex">
          {loopData()}

          {/* <div class={red}>
            <div class="content">
              <div className="divleft">
                <label className="lblLeft">{adminsCount}105</label>
                <p className="ptag"> Admin Management</p>
              </div>
              <div className="divright">
                <img src={LogoAdmin} class="img" />
              </div>
            </div>
          </div> */}
        </div>
        {/* <br /> */}
        <div className="sub-head"> Recent Activity</div>
        {/* <br /> */}
      </div>

      <div className="divbody p-4">
        <div className="tblheight table-responsive">
          <ReactBootStrap.Table>
            <thead className="tblhead">
              <tr>
                <th>DATE</th>
                <th>USERNAME</th>
                <th>EMAILID</th>
                <th>ACTION</th>
                <th>OPERATION</th>
                <th>ON USER</th>
              </tr>
            </thead>
            {data.sort().reverse()}
          </ReactBootStrap.Table>
        </div>
        {/* <ReactPaginate
          className="pagination justify-content-end pagination-tab"
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          // breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          // containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          // activeClassName={"active"}
        /> */}
        <ReactPaginate
          className="pagination justify-content-end pagination-tab"
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          // marginPagesDisplayed={2}
          // pageRangeDisplayed={3}
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
  );

  // return (

  //   <div class="container">
  //     <div>
  //       <div>
  //         <ReactBootStrap.Table className="tbl1">
  //           <thead>
  //             <tr className="title1">
  //               <th>DATE</th>

  //               <th>USERNAME</th>

  //               <th>ACTION</th>

  //               <th>EMAILID</th>

  //               <th>OPERATION</th>

  //               <th>ON USER</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {activityData.map((item) => (
  //               <tr key={item.userId}>
  //                 <td>{item.dateOfActivity}</td>

  //                 <td>{item.byUser}</td>

  //                 <td>{item.action}</td>

  //                 <td>{item.email}</td>

  //                 <td>{item.operation}</td>

  //                 <td>{item.onUser}</td>
  //               </tr>
  //             ))}
  //           </tbody>

  //         </ReactBootStrap.Table>
  //         <Pagination
  //           className="pagination-bar"
  //           currentPage={currentPage}
  //           totalCount={activityData.length}
  //           pageSize={PageSize}
  //           onPageChange={(page) => setCurrentPage(page)}
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default DashboardMain;
