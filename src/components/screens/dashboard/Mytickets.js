import React, { useState } from 'react';
import TextEditor from './TextEditor';



function Mytickets() {

    const [ticket, setTicket] = useState(true);
    const [change, setChange] = useState(false);

    return (
        <div>
            {ticket ? (

                <div>
                    <div className='ticket'>
                        <h2 className='th'>Ticket history</h2>
                        <button onClick={() => setTicket(!ticket)} type="button" class="btn btn-success">RAISE A TICKET</button>
                    </div>
                    <p className='pendingclass'>Pending</p>
                    <div className='rightcon'>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p>TICKET ID 9045667</p>
                            <p className={change ? "hide" : ""} onClick={() => setChange(!change)}>Replay</p>
                        </div>
                        <p>Subject of the issues</p>
                        <div className={change ? "" : "hide"}>
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

            ) : (

                <div style={{ marginLeft: "20px", marginTop: "9px" }}>
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <input type="email" class="form-control" id="inputEmail4" placeholder="To" />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <input type="email" class="form-control" id="inputEmail4" placeholder="CC" />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-12 ">
                                <input type="text" class="form-control" id="inputEmail4" placeholder="Subject" />
                            </div>
                        </div>
                        {/* <div>
                          <input class="form-control col-md-12" type="text" />
                        </div>

                        <div >
                          <input class="form-control col-md-12 helpheighttextarea" type="text" />
                        </div> */}
                        <div className='editor'>

                            <TextEditor />
                        </div>

                    </form>
                    <div className='submitbuttonraiseticket'>
                        <button type="button" class="btn btn-primary">Submitt</button>
                    </div>
                </div>



            )}
        </div>
    );
}

export default Mytickets;