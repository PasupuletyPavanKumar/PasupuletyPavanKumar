import * as ReactBootStrap from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import {Modal} from "react-bootstrap";

const ServerManagement = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const handleShow = () => {
    setshowaddServerModal(false);
    setaddServerFields({
      staticIP: "",
      ipAddress: "",
    });
    setShow(true);
  };

  const [showaddServerModal, setshowaddServerModal] = useState(false);
  const handleaddServerModalClose = () => setshowaddServerModal(false);
  const handleaddServerModalShow = () => setshowaddServerModal(true);

  const [addServerFields, setaddServerFields] = useState({
    staticIP: "",
    ipAddress: "",
  });
 
  const handleInputFields = (event, field) => {
    setaddServerFields({
      staticIP:
        field === 1 ? event.target.value.trim() : addServerFields.staticIP,
      ipAddress:
        field === 2 ? event.target.value.trim() : addServerFields.ipAddress,
    });
  };

  const serverForm = () => {
    return (
    <div className="popup">

      <button type="button" className="close" aria-label="Close" onClick={handleClose} >
        <span aria-hidden="true">&times;</span>
      </button>
    
      <div className="modal-heading">
        Server Details
      </div>
      <form className="p-3">
        <div className="row">
          <div className="form-group col-sm-6 m-auto p-3">
            <label for="usr" className="label-popup">
              static IP
            </label>
            <br />
            <input
              type="text"
              className="input-field"
              id="staticIp"
              value={addServerFields.staticIP}
              onChange={(e) => handleInputFields(e, 1)}
            />
          </div>
          <div className="form-group col-sm-6 m-auto p-3">
            <label for="usr" className="label-popup">
              IP Address
            </label>
            <br />
            <input
              type="text"
              className="input-field"
              id="ipAddress"
              value={addServerFields.ipAddress}
              onChange={(e) => handleInputFields(e, 2)}
            />
          </div>
        </div>
      </form>
      <center>
      <button className="modal-button">
        SUBMIT
      </button>
      </center>
    </div>
  );
}
  return (
    <div>
      <div>
          <div class="div-head">
          <div class="row row-flex">
            <div className="col server-head"> Server Management
            </div> 
            <div className="col add-server">
        <button type="button" className="custom-button" onClick={handleShow}>
          Add New Server
        </button>
      </div>
    </div> 
    <br/>
                   <div class="row row-flex">
                        <div class="col-sm-6" >
                          <div class="server-tab">
                          <div class="row">
                  <div className="server-title"> Server A</div>
                  <div>
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
                            <label className="col-sm-3 server-text">Storage</label> 
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
                      
                        <div class="col-sm-6" >
                        <div class="server-tab">
                          <div class="row">
                  <div className="server-title"> Server B</div>
                  <div>
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
                      
                      </div>
                   
                      
</div>

<Modal
        show={show}
        onHide={handleClose}
        size={"md"}
        className="bootstrap-modal"
      >
        
</Modal>
</div>                
              
                         
  );
}

export default ServerManagement;
