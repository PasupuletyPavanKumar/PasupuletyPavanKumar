import React, { useState } from "react";
import TextEditor from "./TextEditor";

function Mytickets() {
  const [ticket, setTicket] = useState(true);
  const [change, setChange] = useState(false);

  return (
    <div class="container">
      {ticket ? (
        <div class="row helpsupport">
          <div className="col-md-12 col-lg-12 ">
            <div className="ticket">
              <h2 className="ticketheading">Ticket history</h2>
              <button
                onClick={() => setTicket(!ticket)}
                type="button"
                class="btn btn-success"
              >
                RAISE A TICKET
              </button>
            </div>

            <div class="row">
              <div class=" col-md-12 col-lg-12">
                <p className="pendingclass">Pending</p>
              </div>
            </div>
          </div>
          <div className="rightcon">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>TICKET ID 9045667</p>
              <p
                style={{ cursor: "pointer" }}
                className={change ? "hide" : ""}
                onClick={() => setChange(!change)}
              >
                Replay
              </p>
            </div>
            <p>Subject of the issues</p>
            <div className={change ? "" : "hide"}>
              <div class="form-group">
                <textarea
                  class="form-control textboxcontrol col-12 col-md-11 col-lg-11"
                  placeholder="write your replay here..."
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
                {/* <input
                  class="btn btn-primary submit-help"
                  type="submit"
                  value="Submit"
                ></input> */}
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <p className="pendingclass">Resolve</p>
              </div>
            </div>
          </div>
          <div className="right1con">
            <p>Subject of the issues</p>
          </div>
          <div className="right2con">
            <p>Subject of the issues</p>
          </div>
        </div>
      ) : (
        <div class="container">
          <div class="row">
            <div class=" onclickhelpticket col-12 col-md-10  col-lg-12">
              <form>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="To"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-12">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="CC"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-12 ">
                    <input
                      type="text"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div className="editor">
                  <TextEditor />
                </div>
              </form>
              <div className="submitbuttonraiseticket">
                <button type="button" class="btn btn-primary">
                  Submitt
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mytickets;
