import React, { useEffect, useState } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ReactPaginate from "react-paginate";
import LogoAdmin from "..\\src\\assets\\icons\\Admin_graditi_bg.svg";

// import LogoAdmin from "/home/user/AiKno/AiKnoWebApp/AiKno_Mithun_Repo/AiKno/src/assets/icons/Admin_graditi_bg.svg";

import * as ReactBootStrap from "react-bootstrap";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";

const Reports = () => {
  const authenticatedService = new AuthenticatedService();
  //pagination and get data
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    getActivityList();
  }, [offset]);

  const getActivityList = () => {
    authenticatedService.recentActivity().then((res) => {
      if (res) {
        // setActivityData(res);
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
    setOffset(selectedPage);
  };
  return (
    <div class="container-fuild ">
      <div class="container">
        <div className=" mt-4 mb-4">
          <h4 className="reportsheading">Reports</h4>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 col-md-6  mb-15">
            <div className="specilistanduserreports shadow ">
              <div
                className="circle shadow"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {<GroupOutlinedIcon />}
              </div>
              <div>
                <p className="reportscontentheading">Specialist Users</p>
                <h4 className="reportstext">370</h4>
                <p>320 Active Users</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-md-6  mb-15">
            <div className="specilistanduserreports shadow ">
              <div
                className="circle shadow"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {<GroupOutlinedIcon />}
              </div>
              <div>
                <p className="reportscontentheading"> Users</p>
                <h4 className="reportstext">500</h4>
                <p>450 Active Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div
          class="row"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="col-6 col-lg-6 col-md-6 mt-4 mb-4">
            <h4 className="reportsheading">Recent Activity</h4>
          </div>

          <div className=" col-6 col-lg-6  col-md-6 mt-4 mb-4">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                color: "#003763",
              }}
            >
              <select className="reportsdrop p-2">
                <option value="Filter">Last 7 Days</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="divbody p-4">
        <div className="tblheight table-responsive">
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
};
export default Reports;
