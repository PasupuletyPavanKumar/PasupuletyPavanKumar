import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const UserReports = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const Userdata = {
    responsive: true,
    labels,
    datasets: [
      {
        label: "Pending",
        data: [300, 400, 500, 600, 700, 900, 110],
        backgroundColor: "#00ADEE",
      },
      {
        label: "Processing ",
        data: [100, 100, 100, 100, 100, 100, 110],
        backgroundColor: "#0077BD",
      },

      {
        label: "Ok ",
        data: [200, 200, 200, 200, 200, 200, 130],
        backgroundColor: "#911FFF",
      },
      {
        label: "Completed ",
        data: [250, 100, 630, 300, 650, 300, 150],
        backgroundColor: "#73BE44",
      },
      {
        label: "Not Ok Files",
        data: [250, 100, 630, 300, 650, 300, 110],
        backgroundColor: "#FF8300",
      },
    ],
  };

  const Specialistdata = {
    responsive: true,
    labels,
    datasets: [
      {
        label: "Total Files",
        data: [300, 400, 500, 600, 700, 900, 110],
        backgroundColor: "#00ADEE",
      },
      {
        label: "Pending Files",
        data: [100, 100, 100, 100, 100, 100, 110],
        backgroundColor: "#911FFF",
      },

      {
        label: "Completed ",
        data: [250, 100, 630, 300, 650, 300, 150],
        backgroundColor: "#73BE44",
      },
      {
        label: "Rejected Files",
        data: [250, 100, 630, 300, 650, 300, 110],
        backgroundColor: "#FF8300",
      },
    ],
  };

  return (
    <div className="container main-screen screen-main">
      <div className="container">
        <div className="mt-2">
          <label className="user-rpt-head">Total Assign Me</label>
        </div>
      </div>

      <div className="row ">
        <div class="col-12 col-lg-4 col-md-12 ">
          <div className="userfiles-specialist-rpt ">
            <div className="user-files-head p-2">Files Activity</div>

            <div className="user-file-activity">
              <label className="rpt-files-count">270</label>
              <p className="rpt-files-txt"> Total no. of files assigned</p>
            </div>
            <div className="user-file-activity">
              <label className="rpt-files-count">150/20</label>
              <p className="rpt-files-txt"> Total OK / NOT-OK Files</p>
            </div>
            <div className="user-file-activity">
              <label className="rpt-files-count">100</label>
              <p className="rpt-files-txt"> Completed files</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-8 col-md-12">
          <div className="table-responsive">
            <div className="userweekly-specialist-rpt ">
              <div className="div-userchart-head">
                <div
                  className="row"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <label className="user-files-weekly-head">
                    Weekly Activity
                  </label>

                  <div
                    className="user-filter-left-div"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                    }}
                  >
                    <Dropdown className="rpt-filter-export">
                      <Dropdown.Toggle variant="" id="dropdown-basic">
                        Filter
                      </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown className="rpt-filter-export">
                      <Dropdown.Toggle variant="" id="dropdown-basic">
                        Export
                      </Dropdown.Toggle>
                    </Dropdown>
                  </div>
                </div>
              </div>

              <div>
                <ReactBootStrap.Table>
                  {
                    <div className="user-chartdiv">
                      <Bar
                        height={100}
                        //barSize={5}
                        data={Userdata}
                      />
                    </div>
                  }
                </ReactBootStrap.Table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div>
          <label className="user-rpt-head">Total Assigned Specialist</label>
        </div>
      </div>

      <div className="row ">
        <div className="col-12 col-lg-4 col-md-12 ">
          <div className="userfiles-specialist-rpt ">
            <div className="user-files-head p-2">Files Activity</div>

            <div className="user-file-activity">
              <label className="rpt-files-count">50</label>
              <p className="rpt-files-txt"> Total no. of files assigned</p>
            </div>
            <div className="user-file-activity">
              <label className="rpt-files-count">35</label>
              <p className="rpt-files-txt"> Pending Files</p>
            </div>
            <div className="user-file-activity">
              <label className="rpt-files-count">10</label>
              <p className="rpt-files-txt"> Completed files</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-8 col-md-12">
          <div className="table-responsive">
            <div className="userweekly-specialist-rpt ">
              <div className="div-userchart-head">
                <div
                  className="row"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <label className="user-files-weekly-head">
                    Weekly Activity{" "}
                  </label>

                  <div
                    className="user-filter-left-div"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                    }}
                  >
                    <Dropdown className="rpt-filter-export">
                      <Dropdown.Toggle variant="" id="dropdown-basic">
                        Filter
                      </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown className="rpt-filter-export">
                      <Dropdown.Toggle variant="" id="dropdown-basic">
                        Export
                      </Dropdown.Toggle>
                    </Dropdown>
                  </div>
                </div>
              </div>

              <div>
                <ReactBootStrap.Table>
                  {
                    <div className="user-chartdiv">
                      <Bar
                        height={100}
                        //barSize={5}
                        data={Specialistdata}
                      />
                    </div>
                  }
                </ReactBootStrap.Table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};
export default UserReports;
