import React from "react";
import { Button } from "react-bootstrap";
import { DataService } from "../../../services/data-service/DataService";
import { AuthenticationService } from "../../../services/authentication-service/AuthenticationService";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const authService = new AuthenticationService();

  const logOut = () => {
    console.log(DataService.getUserDetails().refreshToken);
    var urlencoded = new URLSearchParams();
    urlencoded.append("client_id", "aikno-ssd");
    urlencoded.append("client_secret", "L38cGElKRUJSkX6ZkImNViw7c9KiGyg4");
    urlencoded.append("refresh_token", DataService.getUserDetails(1));

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

  return (
    <div>
      <div>Dashboard is under development</div>

      <Button
        variant="primary"
        type="button"
        className="submit-button"
        onClick={logOut}
      >
        Login
      </Button>
    </div>
  );
};

export default Dashboard;
