import React, { useState } from 'react';
import "./Help.css"

const Help = () => {

 
  const [change, setChange] = useState(false);

  return (
    <div className="container-fluid">
      <div class="row">
        <div class="col-md-11 helpcontainer">
          <div>
            <div class="row">
              <div class="col-md-3 leftcon">
                <p>Lets take a step and help you better.</p>
                <div class="form-group has-search">
                  <span class="fa fa-search form-control-feedback"></span>
                  <input type="text" class="form-control" placeholder="Search" />
                </div>
                <h5>My Tickets</h5>
                <p>You can see the status your existing</p>
                <h5>Help Center</h5>
                <p>Issues-tree of up three levels</p>
                <h5>FAQs section
                </h5>
                <p>Issues-tree of up to three levels</p>
              </div>

              <div class="col-md-8 ">
                <div>
                  <div className='ticket'>
                    <h2 className='th'>Ticket history</h2>
                    <button type="button" class="btn btn-success">RAISE A TICKET</button>
                  </div>
                  <p className='pendingclass'>Pending</p>
                  <div className='rightcon'>
                    <p>Subject of the issues</p>
                    <p className={change ? "hide" : ""} onClick={()=>setChange(!change)}>comment</p>
                    <div className={change ? "":"hide"}>
                    <div class="form-group">
                      <textarea class="form-control textboxcontrol" placeholder='write your replay here...' id="exampleFormControlTextarea1" rows="2">
                      </textarea>
                      <input class="btn btn-primary submit-help" type="submit" value="Submit"></input>
                    </div>
                    </div>
                  </div>


                  <p className='pendingclass'>Resolve</p>
                  <div className='right1con'>
                    <p>Subject of the issues</p>
                  </div>

                  <div className='right2con'>
                    <p>Subject of the issues</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
