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

const SpecialistReports = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    const data = {
        responsive: true,
        labels,
        datasets: [
            {
                label: 'Pending',
                data: [300, 400, 500, 600, 690],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',

            },
            {
                label: 'Processing',
                data: [100, 100, 100, 100, 100],
                backgroundColor: 'rgba(128,0,0)',
            },

            {
                label: 'Ok',
                data: [200, 200, 200, 200, 200],
                backgroundColor: 'rgba(255, 99, 132, 250)',
            },
            {
                label: 'Comlpleted',
                data: [250, 100, 630, 300, 650],
                backgroundColor: 'rgba(0,128,128)',
            },
            {
                label: 'NOT Ok Files',
                data: [200, 150, 510, 260, 540],
                backgroundColor: 'rgba(128,128,0)',
            },
        ],
    };

    return (
        <div>

            <div className="user-head"> <label>Total Asigned User</label></div>
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
            <div className="specilist-head"> <label>Total Asigned Me </label></div>
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
export default SpecialistReports;
