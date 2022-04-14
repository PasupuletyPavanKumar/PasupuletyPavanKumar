import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";

const AdminManagement = () => {
  const authService = new AuthenticatedService();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const inputValidators = () => {};

  const [posts, setPosts] = useState({ blogs: [] });

  const createAdmin = () => {
    console.log("Create Admin");
    // if (inputValidators()) {
      var reqBody = new FormData();
      reqBody.append("userName", "qdfwe");
      reqBody.append("firstName", "qdfwe");
      reqBody.append("lastName", "wdefr");
      reqBody.append("email", "qfd!e.in");
      reqBody.append("location", "Bangalore");
      reqBody.append("isSuperUser", false);
      reqBody.append("isAdmin", true);
      reqBody.append("isSpecialist", false);
      reqBody.append("isUser", false);

      for (var pair of reqBody.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
    }

    //   // const reqBody = {
    //   //   userName: "",
    //   //   firstName: "",
    //   //   lastName: "",
    //   //   email: "",
    //   //   location: "",
    //   //   isSuperUser: false,
    //   //   isAdmin: true,
    //   //   isSpecialist: false,
    //   //   isUser: false,
    //   // };
      authService.addAdmin(reqBody).then((res) => {
        if (res) {
          <div>{handleClose()}</div>;
        }
      });
    // }
  };

  useEffect(() => {

    const fetchPostList = async () => {

      const { data } = await axios(

        "http://localhost:8092/userManagement/fetchUsers/superUser"

      );

      setPosts({ blogs: data });

      console.log(data);

    };

    fetchPostList();

  }, [setPosts]);

  return (
    <div>
      
      <div className="text-right m-3">
        <Button type="button" onClick={handleShow} className="custom-button">
          Add Admin
        </Button>
      </div>
      <div class="container">

{/* <div className="welcome-tag"> Welcome to Dashboard</div> <br /> */}



<div class="row row-flex">



  <div className="welcome-tag"> Admin Management</div> <br /> <br /><br />

</div>





<div>

  <ReactBootStrap.Table className="tbl1" >

    <thead>

      <tr className="title1">

        <th>DATE</th>

        <th>USERNAME</th>

        <th>FIRSTNAME</th>

        <th>EMAILID</th>

        <th>MOBILE NUMBER</th>

        <th>ROLE</th>

      </tr>

    </thead>

    <tbody>

      {posts.blogs &&

        posts.blogs.map((item) => (

          <tr key={item.id}>

            <td>{item.dateOfActivity}</td>

            <td>{item.userName}</td>

            <td>{item.firstName}</td>

            <td>{item.email}</td>

            <td>{item.contactNumber}</td>

            {/* <td>{item.onUser}</td> */}

            <td>{item.isAdmin ? "Admin" : item.isSpecialist ? "Specialist" : item.isUser ? "User" : "Role"}</td>

          </tr>

        ))}

    </tbody>

  </ReactBootStrap.Table>



</div>



</div>
      <Modal
        show={show}
        onHide={handleClose}
        size={"lg"}
        className="bootstrap-modal"
      >
        <div className="modal-heading">Create New Admin</div>
        <form className="p-5">
          <div className="row">
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label">
                FirstName
              </label>
              <br />
              <input type="text" className="input-field" id="usr" />
            </div>
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label">
                LastName
              </label>
              <br />
              <input type="text" className="input-field" id="usr" />
            </div>
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label">
                Username
              </label>
              <br />
              <input type="text" className="input-field" id="usr" />
            </div>
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label">
                EmailID
              </label>
              <br />
              <input type="text" className="input-field" id="usr" />
            </div>
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label">
                Location
              </label>
              <br />
              {/* <input type="text" className="input-field" id="usr" /> */}
              <div className="input-field">
                {/* <label for="cars">Choose a car:</label> */}
                <select name="cars" id="cars">
                  <option value="volvo">Bangalore</option>
                  <option value="saab">Chennai</option>
                  <option value="opel">Mysore</option>
                  <option value="audi">Pune</option>
                </select>
              </div>
            </div>
            <div className="form-group col-sm-6 m-auto p-3">
              <label for="usr" className="label">
                Role
              </label>
              <br />
              <input type="text" className="input-field" id="usr" />
            </div>
          </div>
        </form>
        <Button className="modal-button" onClick={createAdmin}>
          Submit
        </Button>
      </Modal>
    </div>
  );
};

export default AdminManagement;
