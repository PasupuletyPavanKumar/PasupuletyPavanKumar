import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

const UserReports = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'];

    const data = {
        responsive: true,
        labels,
        datasets: [
            {
              label: 'Pending ',
              data: [300,400,500,600,700,900,110],
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            
            },
            {
              label: 'Processing ',
              data: [100,100,100,100,100,100,110],
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        
            {
              label: 'Ok ',
              data: [200,200,200,200,200,200,130],
              backgroundColor: 'rgba(255, 99, 132, 250)',
            },
            {
              label: 'Completed ',
              data: [250,100,630,300,650,300,150],
              backgroundColor: 'rgba(255, 250, 132, 250)',
            },
            {
              label: 'Not Ok Files',
              data: [250,100,630,300,650,300,110],
              backgroundColor: 'rgba(255,165,0)',
            },
            
          ],
    };

    return (
        <div>

            <div className="user-head"> <label>Total Assign Me</label></div>
            <div class="row row-flex">

                <div className="userfiles-specialist-rpt ">
                    <p className="user-files-head"> Files Activity</p>
                    <div className="user-file-activity">
                        <label>270</label>
                        <p> Total no. of files assigned</p>
                    </div>
                    <div className="user-file-activity">
                        <label>150/20</label>
                        <p> Total OK / NOT-OK Files</p>
                    </div>
                    <div className="user-file-activity">
                        <label>100</label>
                        <p> Completed files</p>
                    </div>

                </div>

                <div className="userweekly-specialist-rpt">
                    <div className="div-userchart-head">
                        <label>Weekly Activity </label>
                        <select className="user-weekly" >
                            <option value="lastweek"> weekly </option>
                        </select> &nbsp;
                        <select  >
                            <option value="lastweek"> Export </option>
                        </select>
                    </div>
                    <div className="user-chartdiv" >
                        <Bar
                            height={100}
                            //barSize={5}
                            data={data}
                        />
                    </div>

                </div>
            </div>
            <br />
            <div className="specilist-head"> <label> Total Assigned Specialist </label></div>
            <div class="row row-flex">

                <div className="userfiles-specialist-rpt">
                    <p className="user-files-head"> Files Activity</p>
                    <div className="user-file-activity">
                        <label>50</label>
                        <p> Total no. of files assigned</p>
                    </div>
                    <div className="user-file-activity">
                        <label>35</label>
                        <p> Pending Files</p>
                    </div>
                    <div className="user-file-activity">
                        <label>10</label>
                        <p> Completed files</p>
                    </div>
                </div>

                <div className="userweekly-specialist-rpt">

                    <div className="div-userchart-head">
                        <label>Weekly Activity </label>
                        <select className="user-weekly" >
                            <option value="lastweek"> weekly </option>
                        </select> &nbsp;
                        <select  >
                            <option value="lastweek"> Export </option>
                        </select>
                    </div>
                    <div className="user-chartdiv" >
                        <Bar
                            height={100}
                            //barSize={5}
                            data={data}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};
export default UserReports;
