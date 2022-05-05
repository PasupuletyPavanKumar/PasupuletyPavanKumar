import React, { Fragment, useEffect, useMemo, useState } from "react";

// import LogoNotification from "..\\src\\assets\\icons\\Notification-bg.svg";
// import LogoAdmin from "..\\src\\assets\\icons\\Admin_graditi_bg.svg";

import LogoNotification from "/home/user/AiKno/AiKnoWebApp/AiKno_Mithun_Repo/AiKno/src/assets/icons/Notification-bg.svg";
import LogoAdmin from "/home/user/AiKno/AiKnoWebApp/AiKno_Mithun_Repo/AiKno/src/assets/icons/Admin_graditi_bg.svg";
// import LogoLicense from "/home/user/AiKno/AiKnoWebApp/AiKnoFrontEnd_v2/AiKnoFrontend/src/assets/icons/License_graditi_bg.svg";

import * as ReactBootStrap from "react-bootstrap";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";
import Pagination from "./Pagination";
import ReactPaginate from "react-paginate";

const DashboardMain = (props) => {
  let PageSize = 5;
  let red = "col-md-6";
  const config = {
    role: props.role,
    column: props.role === "super-user" ? 2 : 4,
  };

  console.log(props);

  const authenticatedService = new AuthenticatedService();

  const [notificationCount, setNotificationCount] = useState([]);

  const [adminsCount, setAdminsCount] = useState([]);

  const [activityData, setActivityData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  //pagination and get data
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(3);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    getNotificationCount();
    getAdminCount();
    getActivityList();
  }, [offset]);

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
                  <td>{item.userId}</td>
                  <td>{item.id}</td>
                  <td>{item.id}</td>
                  <td>{item.id}</td>
                  <td>{item.id}</td>
                  <td>{item.id}</td>
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
    setOffset(selectedPage + 1);
  };

  return (
    <div>
      <div class="div-head">
        <div className="sub-head"> Welcome to Dashboard</div> <br />
        <div class="row row-flex">
          <div class={red}>
            <div class="content">
              <div className="divleft">
                <label className="lblLeft">{notificationCount}25</label>
                <p className="ptag"> Notification</p>
              </div>
              <div className="divright">
                <img src={LogoNotification} class="img" />
              </div>
            </div>
          </div>

          <div class={red}>
            <div class="content">
              <div className="divleft">
                <label className="lblLeft">{adminsCount}105</label>
                <p className="ptag"> Admin Management</p>
              </div>
              <div className="divright">
                <img src={LogoAdmin} class="img" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="sub-head"> Recent Activity</div> <br />
      </div>

      <div className="divbody">
        <br />

        <div className="tblheight">
          <ReactBootStrap.Table>
            <thead className="tblhead">
              <tr>
                <th>DATE</th>

                <th>USERNAME</th>

                <th>ACTION</th>

                <th>EMAILID</th>

                <th>OPERATION</th>

                <th>ON USER</th>
              </tr>
            </thead>
            {data}
          </ReactBootStrap.Table>
          <ReactPaginate
            className="pagination justify-content-end"
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
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
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
