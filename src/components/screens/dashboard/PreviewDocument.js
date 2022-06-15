import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Autocomplete, Checkbox } from "@mui/material";
import { TextField } from "@mui/material";
import ZoomIn from "../../../assets/icons/Icon_zoom-in.svg";
import ZoomNeutral from "../../.././assets/icons/menu-blue.svg";
import ZoomOut from "../../.././assets/icons/Icon_zoom-out.svg";
import AssignFiles from "./AssignFiles";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";

const PreviewDocument = (props) => {
  //  const [commentData, setCommentData] = useState([]);
  const [change, setChange] = useState(false);
  const authenticatedService = new AuthenticatedService();

  // const [commentDataFields, setCommentDataFields] = useState({
  //   comments:"",
  // });

  // const handleInputFields = (event, field) => {
  //   setCommentDataFields({
  //     comments:
  //       field === 1 ? event.target.value.trim() : commentDataFields.comments,

  //   });
  // };

  // const updateDetails = () => {
  //   var reqBody = new FormData();
  //   reqBody.append("comments", commentDataFields.comments);

  //   console.log(commentDataFields);

  // };

  // useEffect(() => {
  //   getCommentDetails();
  // }, []);
  //   const commentFlex =() =>{
  //     setDisabled(false);
  // return(
  //   <div className="content-flex">
  // </div>
  // );
  //   }

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [disable, setDisable] = useState(false);
  const [disableN, setDisableN] = useState(false);
  const [date, setDate] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [orderNo, setOrderNo] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [poAmendmentNo, setPoAmendmentNo] = useState([]);
  const [description, setDescription] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [unitPrice, setUnitPrice] = useState([]);
  const [partNumber, setPartNumber] = useState([]);
  const [releaseDate, setReleaseDate] = useState([]);
  // const [date, setDate] = useState([]);

  // const previewDoc = (props) => {
  //   // const pageView = props;
  //   // const postdata = null;
  //   console.log(props);
  //   setTotalPages(props.totalPages);
  // };
  let zm = "../../.././assets/document/";
  const handlePrev = () => {
    if (pageNumber != 1) {
      setPageNumber(pageNumber - 1);
      DocumentView();
      setDisableN(false);
    } else {
      setDisable(true);
    }
  };
  // const getAdminCount = () => {
  //   authenticatedService.getAdminsCount("admin").then((res) => {
  //     console.log(res);
  //     // reuseCountCode(res, "Admin");
  //     setAdminsCount(res);
  //   });
  // };
  const viewDocument = () => {
    authenticatedService.previewDocument().then((res) => {
      if (res) {
        if (res != "404") {
          {
            // setTotalPages(res.totalPages);
            // var len = res.documentData.length;
            // var bytes = new Uint8Array(len);
            // for (var i = 0; i < len; i++) {
            //   bytes[i] = res.documentData.charCodeAt(i);
            // }
            // const renderPdf = bytes.buffer;
            //setPageData(res.documentData);
            zm = require(zm + res.fileName);
            console.log(zm);
          }
        } else {
          setDocumentView("No Document to display");
        }
      }
      console.log(totalPages);
      console.log(pageData);
      console.log(res);
    });
  };

  const viewValues = () => {
    authenticatedService.previewData().then((res) => {
      if (res) {
        if (res != "404") {
          {
            setOrderNo(res[0].orderNo);
            console.log(orderNo);
            setDate(res[0].date);
            console.log(date);
            setCurrency(res[0].currency);
            setDescription(res[0].description);
            setQuantity(res[0].quantity);
            setUnitPrice(res[0].unitPrice);
            setPartNumber(res[0].partNumber);
            setReleaseDate.apply(res[0].releaseDate);
            setPoAmendmentNo(res[0].poAmendmentNo);
            setTotalPrice(res[0].totalPrice);
          }
        } else {
          setDocumentView("No Document to display");
        }
      }
      console.log(totalPages);
      console.log(pageData);
      console.log(res);
    });
  };
  // const GetTableData = (res) => {
  //   const TableData = res;
  //   let postData;
  //   postData = TableData.totalPages;
  //   this.setTotalPages({ totalPages: postData });
  //   console.log(totalPages);
  // };

  const [documentView, setDocumentView] = useState([]);

  const handleNext = () => {
    if (pageNumber != totalPages) {
      setPageNumber(pageNumber + 1);
      DocumentView();
      setDisable(false);
    } else {
      setDisableN(true);
    }
  };
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const DocumentView = () => {
    <Document file={zm} onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageNumber={pageNumber} />
    </Document>;
  };

  useEffect(() => {
    viewDocument();
    viewValues();
  });

  return (
    <div className="bgImage4">
      <div className="container">
        <div className="docheight">
          <div className="row">
            <div className="col-sm back-arrow">
              <ArrowBackIosIcon />
              Document View
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col document-flex p-3">
              <div className="docheight">
                <Document file={zm} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} />
                </Document>
              </div>
              {/* </div> */}
              <button
                disabled={disable}
                onClick={handlePrev}
                className="prev-button"
              >
                prev
              </button>

              <button
                disabled={disableN}
                onClick={handleNext}
                className="next-button"
              >
                next
              </button>
            </div>
            {/* <div className=""> */}
            <div className="col content-flex p-2">
              <div className="doc-content">
                <div className="data-title mb-3">Purchase Order Entry</div>
                <form>
                  <div className="row">
                    <div className="form-group document-text col-6">
                      <TextField
                        id="outlined-basic"
                        label="Order Number"
                        variant="outlined"
                        size="small"
                        value={orderNo}
                      />
                    </div>
                    <div className="form-group document-text col-6">
                      <TextField
                        id="outlined-basic"
                        label="Total Price"
                        variant="outlined"
                        size="small"
                        value={totalPrice}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group document-text col-6">
                      <TextField
                        id="outlined-basic"
                        label="Currency"
                        variant="outlined"
                        size="small"
                        value={currency}
                      />
                    </div>
                    <div className="form-group document-text col-6">
                      <TextField
                        id="outlined-basic"
                        label="po amendment no"
                        variant="outlined"
                        size="small"
                        value={poAmendmentNo}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group  col-6">
                      <TextField
                        id="outlined-basic"
                        label="description                        "
                        variant="outlined"
                        size="small"
                        value={description}
                      />
                    </div>
                    <div className="form-group  col-6">
                      <TextField
                        id="outlined-basic"
                        label="quantity"
                        variant="outlined"
                        size="small"
                        value={quantity}
                      />
                    </div>
                    <div className="form-group  col-6">
                      <TextField
                        id="outlined-basic"
                        label="unit price"
                        variant="outlined"
                        size="small"
                        value={unitPrice}
                      />
                    </div>
                    <div className="form-group  col-6">
                      <TextField
                        id="outlined-basic"
                        label="part number
                        "
                        variant="outlined"
                        size="small"
                        value={partNumber}
                      />
                    </div>
                    <div className="form-group  col-6">
                      <TextField
                        id="outlined-basic"
                        label="release date"
                        variant="outlined"
                        size="small"
                        value={releaseDate}
                      />
                    </div>
                    <div className="form-group  col-6">
                      <TextField
                        id="outlined-basic"
                        label="Date"
                        variant="outlined"
                        size="small"
                        value={date}
                      />
                    </div>
                  </div>
                </form>
                {/* <div className="row m-2">PO:</div> */}
                <center>
                  <button
                    className="reject-button"
                    onClick={() => setChange(!change)}
                  >
                    Reject
                  </button>
                  &emsp;
                  <button className="accept-button">Accept</button>
                </center>
              </div>
            </div>
          </div>
          {change ? (
            <div className="ccontent-flex2">
              <div className="">
                <div class="form-group">
                  <textarea
                    class="form-control  text-area"
                    id="Textarea"
                    rows="3"
                    placeholder="Write your comments here"
                  ></textarea>
                </div>

                <center>
                  <button
                    className="reject-button"
                    onClick={() => setChange(!change)}
                  >
                    Cancel
                  </button>
                  &emsp;
                  <button className="accept-button">Submit</button>
                </center>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
};

export default PreviewDocument;
