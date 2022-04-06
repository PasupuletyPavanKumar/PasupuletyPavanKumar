import React from "react";
import { Button } from "react-bootstrap";
import { DataService } from "../../../services/data-service/DataService";
import { AuthenticationService } from "../../../services/authentication-service/AuthenticationService";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const authService = new AuthenticationService();

  const logOut = () => {
    console.log(DataService.getUserDetails().refreshToken);
    var urlencoded = new URLSearchParams();
    urlencoded.append("client_id", "aikno-ssd");
    urlencoded.append("client_secret", "L38cGElKRUJSkX6ZkImNViw7c9KiGyg4");
    urlencoded.append(
      "refresh_token",
      DataService.getUserDetails().refreshToken
    );

    const reqBody = {
      client_id: "aikno-ssd",
      client_secret: "L38cGElKRUJSkX6ZkImNViw7c9KiGyg4",
      refresh_token: DataService.getUserDetails().refreshToken,
    };
    authService.logout(urlencoded).then((res) => {
      if (res) {
        navigate("/");
      }
    });
  };

  const sideMenuBar = () => {
    return (
      <div className="text-center">
        <div class="home-sideBarActive">Menu</div>
        <div>Menu</div>
        <div>Menu</div>
        <div>Menu</div>
        <div>Notifiation</div>
      </div>
    );
  };

  const mainContent = () => {
    return (
      <div>
        <div>lsdkfkl</div>

        <div>lsdkfkl</div>
        <div>lsdkfkl</div>
      </div>
    );
  };

  return (
    <div>
      <div className="d-flex justify-content-flex-start">
        <div className="home-sideMenu">{sideMenuBar()}</div>

        <div className="w-100 bgImage3">
          <div className="home-header"></div>
          {mainContent()}
        </div>
      </div>

      {/* <Button
        variant="primary"
        type="button"
        className="submit-button"
        onClick={logOut}
      >
        Logout
      </Button> */}
    </div>
  );
};

export default Home;
