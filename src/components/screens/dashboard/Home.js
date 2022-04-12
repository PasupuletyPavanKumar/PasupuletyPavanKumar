import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { DataService } from "../../../services/data-service/DataService";
import { AuthenticationService } from "../../../services/api-service/AuthenticationService";
import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import DashboardMain from "./DashboardMain";
import Notification from "./Notification";
import AdminManagement from "./AdminManagement";
import Licenses from "./Licenses";
import Settings from "./Settings";
import Help from "./Help";

const Home = (props) => {
  const navigate = useNavigate();
  const authService = new AuthenticationService();

  const sideBarIcons = [
    { src: "assets/icons/home.svg", title: "Home", active: "dashboard" },
    {
      src: "assets/icons/home.svg",
      title: "Notifications",
      active: "notification",
    },
    {
      src: "assets/icons/home.svg",
      title: "Admin Management",
      active: "admin",
    },
    {
      src: "assets/icons/home.svg",
      title: "Total Licenses",
      active: "licenses",
    },
    { src: "assets/icons/home.svg", title: "Settings", active: "settings" },
    { src: "assets/icons/home.svg", title: "Help", active: "help" },
  ];
  const [sidebarActive, setSidebarActive] = useState("");

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

  const selectOption = (data) => {
    switch (data.title) {
      case sideBarIcons[0].title:
        navigate("/dashboard");
        break;
      case sideBarIcons[1].title:
        navigate("/notification");
        break;
      case sideBarIcons[2].title:
        navigate("/admin");
        break;
      case sideBarIcons[3].title:
        navigate("/licenses");
        break;
      case sideBarIcons[4].title:
        navigate("/settings");
        break;
      case sideBarIcons[5].title:
        navigate("/help");
        break;

      default:
        break;
    }
    // if (data.title === sideBarIcons[0].title) navigate("/dashboard");
    // else if (data.title === sideBarIcons[1].title) navigate("/notification");
    setSidebarActive(data.active);
    // mainContent();
  };

  const sideMenuBar = () => {
    return (
      <div className="text-center">
        <div>
          {sideBarIcons.map((data, index) => (
            <div
              key={index.toString()}
              className={
                sidebarActive === data.active ? "home-sideBarActive" : ""
              }
              onClick={() => selectOption(data)}
            >
              <img
                src={require(`../../../${data.src}`)}
                key={index.toString()}
              />
              <div>{data.title}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const mainContent = () => {
    let page = window.location.pathname;
    page = page.replace(/[/]/g, "");
    console.log("page", page);
    switch (page) {
      case "dashboard":
        return <div>{DashboardMain()}</div>;
        break;
      case "notification":
        return <div>{Notification()}</div>;
        break;
      case "admin":
        return <div>{AdminManagement()}</div>;
        break;
      case "licenses":
        return <div>{Licenses()}</div>;
        break;
      case "settings":
        return <div>{Settings()}</div>;
        break;
      case "help":
        return <div>{Help()}</div>;
        break;

      default:
        break;
    }
    // return <div>{DashboardMain()}</div>;
    //return <div>{loadMainContent()}</div>;
  };

  useEffect(() => {
    let page = window.location.pathname;
    page = page.replace(/[/]/g, "");
    setSidebarActive(page);
  }, []);

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
