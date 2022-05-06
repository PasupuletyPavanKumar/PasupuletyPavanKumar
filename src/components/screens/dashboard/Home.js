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
import { ReactComponent as LttsLogo } from "../../../assets/logo/LTTS_blue.svg";
import { ReactComponent as AiKnoLogo } from "../../../assets/icons/AiKno_Logo.svg";
import SettingsPage from "./SettingsPage";

const Home = (props) => {
  const navigate = useNavigate();
  const authService = new AuthenticationService();

  const sideBarIcons = [
    { src: "assets/icons/home_white.svg", title: "Home", active: "dashboard" },
    {
      src: "assets/icons/notification_white.svg",
      title: "Notifications",
      active: "notification",
    },
    {
      src: "assets/icons/admin_white.svg",
      title: "Admin Management",
      active: "admin",
    },
    // {
    //   src: "assets/icons/license_white.svg",
    //   title: "Total Licenses",
    //   active: "licenses",
    // },
    {
      src: "assets/icons/setting_white.svg",
      title: "Settings",
      active: "settings",
    },
    { src: "assets/icons/help_white.svg", title: "Help", active: "help" },
  ];
  const [sidebarActive, setSidebarActive] = useState("");

  const logOut = () => {
    console.log(DataService.getUserDetails().refreshToken);
    var urlencoded = new URLSearchParams();
    urlencoded.append("client_id", "aiknossd");
    urlencoded.append("client_secret", "L38cGElKRUJSkX6ZkImNViw7c9KiGyg4");
    urlencoded.append(
      // "refresh_token",
      // DataService.getUserDetails().refreshToken
      "refresh_token",
      sessionStorage.getItem("refreshToken")
    );

    const reqBody = {
      client_id: "aikno-ssd",
      client_secret: "L38cGElKRUJSkX6ZkImNViw7c9KiGyg4",
      // refresh_token: DataService.getUserDetails().refreshToken,
      refresh_token: sessionStorage.getItem("refreshToken"),
    };
    // authService.logout(urlencoded).then((res) => {
    //   if (res) {
    //     navigate("/");
    //   }
    // });
  };

  const profileIconData = () => {
    console.log("Profile Icon Data");
    <div>
      <div>Status|Online</div>
      <div>Status|Online</div>
      <div>Status|Online</div>
    </div>;
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
      // case sideBarIcons[3].title:
      //   navigate("/licenses");
      //   break;
      case sideBarIcons[3].title:
        navigate("/settings");
        break;
      case sideBarIcons[4].title:
        navigate("/help");
        break;

      default:
        break;
    }
    setSidebarActive(data.active);
  };

  const sideMenuBar = () => {
    return (
      <div className="text-center dashboard-icons-margin">
        <div>
          {sideBarIcons.map((data, index) => (
            <div>
              {/* {index != 3 && sessionStorage.getItem("role") === "super-user" ? ( */}
              <div
                key={index.toString()}
                className={
                  sidebarActive === data.active
                    ? "home-sideBarActive"
                    : "home-sideBarNonActive" +
                      " " +
                      "cursor-pointer" +
                      " " +
                      "m-3"
                }
                onClick={() => selectOption(data)}
              >
                <img
                  src={require(`../../../${data.src}`)}
                  key={index.toString()}
                  className="dashboard-icons"
                />
                <div className="font12 text-white">{data.title}</div>
              </div>
              {/* ) : null} */}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const image = [
    "assets/icons/Notification-bg.svg",
    "assets/icons/Admin_graditi_bg.svg",
    "assets/icons/Notification-bg.svg",
    "assets/icons/Notification-bg.svg",
  ];
  const superUserImage = [
    "assets/icons/Notification-bg.svg",
    "assets/icons/Admin_graditi_bg.svg",
  ];

  const mainContent = () => {
    let page = window.location.pathname;
    page = page.replace(/[/]/g, "");
    console.log("page", page);
    switch (page) {
      case "dashboard":
        return (
          <DashboardMain
            role={sessionStorage.getItem("role")}
            images={
              sessionStorage.getItem("role") === "super-user"
                ? superUserImage
                : sessionStorage.getItem("role") === "admin"
                ? image
                : sessionStorage.getItem("role") === "specialist"
                ? image
                : sessionStorage.getItem("role") === "user"
                ? image
                : image
            }
          />
        );
        break;
      case "notification":
        return <Notification />;
        break;
      case "admin":
        return <AdminManagement />;
        break;
      // case "licenses":
      //   return <Licenses />;
      //   break;
      case "settings":
        return <SettingsPage />;
        break;
      case "help":
        return <Help />;
        break;

      default:
        break;
    }
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
          <div className="home-header">
            {/* <img src={require("../../../assets/logo/LTTS_blue.svg")}></img> */}
            <LttsLogo />
            <AiKnoLogo />
            {/* <Button
              type="button"
              onClick={logOut()}
              className="button-right m-3"
            >
              Logout
            </Button> */}
            <img
              src={require("../../../assets/logo/profile.png")}
              className="button-right m-3 rounded"
              style={{ height: "35px", width: "35px" }}
              onClick={profileIconData()}
            />
          </div>
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
