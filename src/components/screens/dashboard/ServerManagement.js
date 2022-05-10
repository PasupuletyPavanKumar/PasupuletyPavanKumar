<<<<<<< HEAD
import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import { CircularProgressbar } from 'react-circular-progressbar';


const ServerManagement = () => {
  
  return (
    <div className='bgImage3'>
      <div>
          <div class="div-head">
           
          <div class="row row-flex">
            <div className="col server-head"> Server Management
            </div> 
            <div className="col add-server">
        <button type="button" className="custom-button">
          Add New Server
        </button>
      </div>
         
        
        </div> 
        <br/>
        <br/>
        <center>
                   <div class="row row-flex">
                        <div class="col-sm-5" >
                          <div class="server-tab">
                          <div class="row">
                  <div className="server-title"> Server A</div>
                  <div className="export">
                    <button type="button" className="export-button">
                      Export
                    </button>
                  </div>  
                </div> 
                 <br /> 
                 <div>
                 {/* first row */}
                 <div class="row row-flex">
                   {/* CPU daily */}
                   <div class="col-sm-5 server-content">
                        <div className="row-sm-3 divleft">
                            <label className="col-sm-2 server-text">CPU Daily</label> 
                            <p className="mtag">Usage</p>
                        </div>
                        <div className="col-sm-3 divright">
                            <CircularProgressbar value={66} text={'100%'}/>         
                    
                        </div>
                    </div>
                     <div class="col-sm-5 server-content">
                        <div className="row-sm-5 divleft">
                            <label className="col-sm-2 server-text">Storage</label> 
                            <p className="mtag">Usage
                            <text className="storage"> D TB</text>
                            </p>
                        </div>
                        <div className="col-sm-3 divright">
                            <CircularProgressbar value={66} text={'66%'} className/>
                        </div>
                        </div>    
                      </div>
                      </div>
                      {/* Table */}
                      <div class="row row-flex ">
                      <div class="col server-table">
                        <div className="tblheight">
                            <ReactBootStrap.Table>
                                <thead className="tblhead">
                                    <tr>
                                    <th>DATE</th>

                                    <th>IP ADDRESS</th>

                                    <th>SERVER NAME</th>

                                    <th>SERVER STATUS</th>
                                    </tr>
                                </thead>

                                <tbody className='tblbody'>

                                        <tr>
                                        <td>Data</td>

                                        <td>Data</td>

                                        <td>Data</td>

                                        <td>Data</td>
                                        </tr>
                                        
                            </tbody>
                            </ReactBootStrap.Table>
                        </div>
                        </div>
                        </div>
                        </div>
                      </div>
                      
                        <div class="col-sm-5" >
                        <div class="server-tab">
                          <div class="row">
                  <div className="server-title"> Server B</div>
                  <div className="export">
                    <button type="button" className="export-button">
                      Export
                    </button>
                  </div>  
                </div> 
                 <br /> 
                 <div>
                 {/* first row */}
                 <div class="row row-flex">
                   {/* CPU daily */}
                   <div class="col-sm-5 server-content">
                        <div className="row-sm-5 divleft">
                            <label className="col-sm-2 server-text">CPU Daily</label> 
                            <p className="mtag">Usage</p>
                        </div>
                        <div className="col-sm-3 divright">
                            <CircularProgressbar value={66} text={'100%'}/>         
                    
                        </div>
                    </div>
                     <div class="col-sm-5 server-content">
                        <div className="row-sm-5 divleft">
                            <label className="col-sm-2 server-text">Storage</label> 
                            <p className="mtag">Usage
                            <text className="storage"> D TB</text>
                            </p>
                        </div>
                        <div className="col-sm-3 divright">
                            <CircularProgressbar value={66} text={'66%'} className/>
                        </div>
                        </div>    
                      </div>
                      </div>
                      {/* Table */}
                      <div class="row row-flex ">
                      <div class="col server-table">
                        <div className="tblheight">
                            <ReactBootStrap.Table>
                                <thead className="tblhead">
                                    <tr>
                                    <th>DATE</th>

                                    <th>IP ADDRESS</th>

                                    <th>SERVER NAME</th>

                                    <th>SERVER STATUS</th>
                                    </tr>
                                </thead>

                                <tbody className='tblbody'>

                                        <tr>
                                        <td>Data</td>

                                        <td>Data</td>

                                        <td>Data</td>

                                        <td>Data</td>
                                        </tr>
                                        
                            </tbody>
                            </ReactBootStrap.Table>
                        </div>
                        </div>
                        </div>
                        </div>
                      </div>
                      </div>
                      </center>
                      </div>
                   
                      
</div>

</div>
                
              
                         
  );
}
=======
import React from "react";

const ServerManagement = () => {
  return <div>"ServerManagement</div>;
};
>>>>>>> 79ea407ec3d8642cf43d780c6614eeb4d0ae92c5

export default ServerManagement;
