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
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";

const UserReports = () => {
  const authenticatedService = new AuthenticatedService();
  const [reportsData, setReportsData] = useState([]);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  // const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const labels = [""];

  const Userdata = {
    responsive: true,
    labels,
    datasets: [
      {
        label: "Pending",
        data: [
          sessionStorage.getItem("role") === "user"
            ? reportsData.pendingFiles
            : "",
          400,
          500,
          600,
          700,
          900,
          110,
        ],
        backgroundColor: "#00ADEE",
      },
      {
        label: "Processing ",
        data: [
          sessionStorage.getItem("role") === "user"
            ? reportsData.processingFiles
            : "",
          100,
          100,
          100,
          100,
          100,
          110,
        ],
        backgroundColor: "#0077BD",
      },

      {
        label: "Ok ",
        data: [
          sessionStorage.getItem("role") === "user" ? reportsData.totalOk : "",
          200,
          200,
          200,
          200,
          200,
          130,
        ],
        backgroundColor: "#911FFF",
      },
      {
        label: "Completed ",
        data: [
          sessionStorage.getItem("role") === "user"
            ? reportsData.completedFiles
            : "",
          100,
          630,
          300,
          650,
          300,
          150,
        ],
        backgroundColor: "#73BE44",
      },
      {
        label: "Not Ok Files",
        data: [
          sessionStorage.getItem("role") === "user"
            ? reportsData.notOkFiles
            : "",
          100,
          630,
          300,
          650,
          300,
          110,
        ],
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
        data: [
          sessionStorage.getItem("role") === "specialist"
            ? reportsData.totalNoOfFilesAssigned
            : "",
          400,
          500,
          600,
          700,
          900,
          110,
        ],
        backgroundColor: "#00ADEE",
      },
      {
        label: "Pending Files",
        data: [
          sessionStorage.getItem("role") === "specialist"
            ? reportsData.totalNoOfFilesAssigned
            : "",
          100,
          100,
          100,
          100,
          100,
          110,
        ],
        backgroundColor: "#911FFF",
      },

      {
        label: "Completed ",
        data: [
          sessionStorage.getItem("role") === "specialist"
            ? reportsData.completedFiles
            : "",
          100,
          630,
          300,
          650,
          300,
          150,
        ],
        backgroundColor: "#73BE44",
      },
      {
        label: "Rejected Files",
        data: [
          sessionStorage.getItem("role") === "specialist"
            ? reportsData.notOkFiles
            : "",
          100,
          630,
          300,
          650,
          300,
          110,
        ],
        backgroundColor: "#FF8300",
      },
    ],
  };

  useEffect(() => {
    getReports();
  }, []);

  const getReports = () => {
    authenticatedService.getReports().then((res) => {
      if (res) {
        // if (res !== "500") {
        console.log(res);
        setReportsData(res);
        // } else {
        //   alert("No value present");
        // }
      }
    });
  };

  return (
    <div className="container main-screen screen-main">
      <div className="container">
        <div className="mt-2">
          <label className="user-rpt-head">Total Assign to Users</label>
        </div>
      </div>

      <div className="row ">
        <div class="col-12 col-lg-4 col-md-12 ">
          <div className="userfiles-specialist-rpt ">
            <div className="user-files-head p-2">Files Activity</div>

            <div className="user-file-activity">
              <label className="rpt-files-count">
                {sessionStorage.getItem("role") === "user"
                  ? reportsData.totalNoOfFilesAssigned
                  : ""}
              </label>
              <p className="rpt-files-txt"> Total no. of files assigned</p>
            </div>
            <div className="user-file-activity">
              <label className="rpt-files-count">
                {sessionStorage.getItem("role") === "user"
                  ? reportsData.totalOk
                  : ""}
                /
                {sessionStorage.getItem("role") === "user"
                  ? reportsData.notOkFiles
                  : ""}
              </label>
              <p className="rpt-files-txt"> Total OK / NOT-OK Files</p>
            </div>
            <div className="user-file-activity">
              <label className="rpt-files-count">
                {sessionStorage.getItem("role") === "user"
                  ? reportsData.completedFiles
                  : ""}
              </label>
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
          <label className="user-rpt-head">Total Assigned to Specialist</label>
        </div>
      </div>

      <div className="row ">
        <div className="col-12 col-lg-4 col-md-12 ">
          <div className="userfiles-specialist-rpt ">
            <div className="user-files-head p-2">Files Activity</div>

            <div className="user-file-activity">
              <label className="rpt-files-count">
                {sessionStorage.getItem("role") === "specialist"
                  ? reportsData.totalNoOfFilesAssigned
                  : ""}
              </label>
              <p className="rpt-files-txt"> Total no. of files assigned</p>
            </div>
            <div className="user-file-activity">
              <label className="rpt-files-count">
                {sessionStorage.getItem("role") === "specialist"
                  ? reportsData.pendingFiles
                  : ""}
              </label>
              <p className="rpt-files-txt"> Pending Files</p>
            </div>
            <div className="user-file-activity">
              <label className="rpt-files-count">
                {sessionStorage.getItem("role") === "specialist"
                  ? reportsData.completedFiles
                  : ""}
              </label>
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
