import React, { useEffect, useState } from "react";
import LogoAdmin from "..\\src\\assets\\icons\\Admin_graditi_bg.svg";
//import LogoAdmin from "/home/user/AiKno/AiKnoWebApp/AiKno_Mithun_Repo/AiKno/src/assets/icons/Admin_graditi_bg.svg";
import * as ReactBootStrap from "react-bootstrap";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";

const Reports = () => {
  const authenticatedService = new AuthenticatedService();
  //pagination and get data
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(3);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    getActivityList();
  }, [offset]);

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
    setOffset(selectedPage);
  };
  return (
    <div>
      <div class="d-flex flex-column div-head-admin">
        <div className="sub-head">Reports</div> <br />
        <div class="row row-flex">
          <div class="col-sm-5">
            <div class="content">
              <div>
                <img src={LogoAdmin} class="img-adminreport" />
              </div>
              <div className="div-specilist-admin">
                <p className="ptag-adminreports"> Specialist Users</p>
                <label className="lbl-adminreports">370</label>
                <p> 320 Active Users</p>
              </div>
            </div>
          </div>
          <div class="col-sm-5">
            <div class="content">
              <div>
                <img src={LogoAdmin} class="img-adminreport" />
              </div>
              <div className="div-specilist-admin">
                <p className="ptag-adminreports">Users</p>
                <label className="lbl-adminreports">500</label>
                <p>450 Active Users</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="sub-head"> Recent Activity
                  <select className="filter-adminreports">
                   <option value="lastweek"> Last 7 days </option>
                  </select>
         </div> <br/>
      </div>
      <div className="divbody-admin-reports">
        <br />
        <div className="tblheight">
          <ReactBootStrap.Table>
            <thead className="tblhead">
              <tr>
                <th>DATE</th>

                <th>USERNAME</th>

                <th>FIRSTNAME</th>

                <th>EMAILID</th>

                <th>MOBILENUMBER</th>

                <th>ROLE</th>
              </tr>
            </thead>
            {data}
          </ReactBootStrap.Table>
        </div>
      </div>
    </div>
  );
};
export default Reports;
