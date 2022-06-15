import React, { useEffect, useState } from "react";
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
import { ReactComponent as SideMenu } from "../../../assets/icons/Menu_white.svg";
import SettingsPage from "./SettingsPage";
import Reports from "./Reports";
import AssignFiles from "./AssignFiles";
import UploadAssign from "./UploadAssign";
import ServerManagement from "./ServerManagement";
import UserReports from "./UserReports";
import ProjectSettings from "./ProjectSettings";
import LanguageIcon from "@mui/icons-material/Language";

const Home = (props) => {
  const navigate = useNavigate();
  const authService = new AuthenticationService();
  const [sideDrawer, setSideDrawer] = useState(null);
  // const { height, width } = ();
  // sessionStorage.setItem("role", "super-user");
  //sessionStorage.setItem("role", "admin");
  //sessionStorage.setItem("role", "specialist");
  // sessionStorage.setItem("role", "user");

  console.log("width ---> ", window.innerWidth);
  const sideBarIcons = [
    { src: "assets/icons/home_white.svg", title: "Home", active: "dashboard" },
    {
      src: "assets/icons/notification_white.svg",
      title: "Notifications",
      active: "notification",
    },
    {
      src: "assets/icons/reports_white.svg",
      title: "Reports",
      active: "reports",
    },
    {
      src: "assets/icons/admin_white.svg",
      title: "Admin Management",
      active: "admin",
    },
    {
      src: "assets/icons/assign_to_user_white.svg",
      title:
        sessionStorage.getItem("role") === "specialist"
          ? "Assign to User"
          : "Assign to Specialist",
      active: "assignToUser",
    },
    {
      src: "assets/icons/assigned_to_me_white.svg",
      title: "Assign to Me",
      active: "assignToMe",
    },
    {
      src: "assets/icons/file_upload_white.svg",
      title: "Upload & Assign",
      active: "upload",
    },
    {
      src: "assets/icons/server_white.svg",
      title: "Server Management",
      active: "server",
    },
    {
      src: "assets/icons/Pro_settings_white.svg",
      title: "Project Settings",
      active: "project",
    },
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
    authService.logout(urlencoded).then((res) => {
      if (res) {
        navigate("/");
      }
    });
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
      case "Home":
        navigate("/dashboard");
        break;
      case "Notifications":
        navigate("/notification");
        break;
      case "Reports":
        navigate("/reports");
        break;
      case "Admin Management":
        navigate("/admin");
        break;
      case "Assign to User":
        navigate("/assignToUser");
        break;
      case "Assign to Specialist":
        navigate("/assignToUser");
        break;
      case "Assign to Me":
        navigate("/assignToMe");
        break;
      case "Upload & Assign":
        navigate("/uploadAssign");
        break;
      case "Server Management":
        navigate("/server");
        break;
      case "Project Settings":
        navigate("/project");
        break;
      case "Settings":
        navigate("/settings");
        break;
      default:
        navigate("/help");
        break;
    }
    setSidebarActive(data.active);
  };

  const loadSideBarIcons = (data, index) => {
    return (
      <div
        key={index.toString()}
        className={
          sidebarActive === data.active
            ? "home-sideBarActive"
            : "home-sideBarNonActive" + " " + "cursor-pointer" + " " + "m-3"
        }
        onClick={() => selectOption(data)}
      >
        <img
          src={require(`../../../${data.src}`)}
          key={index.toString()}
          className="dashboard-icons"
        />

        <div className="font12 text-white sidebar-title">{data.title}</div>
      </div>
    );
  };

  const sideMenuBar = () => {
    return (
      <div className="text-center dashboard-icons-margin">
        <div>
          {sideBarIcons.map((data, index) => (
            <div>
              {data.title != "Reports" &&
              data.title != "Assign to Me" &&
              data.title != "Assign to User" &&
              data.title != "Assign to Specialist" &&
              data.title != "Upload & Assign" &&
              data.title != "Server Management" &&
              data.title != "Project Settings" &&
              sessionStorage.getItem("role") === "super-user"
                ? loadSideBarIcons(data, index)
                : data.title != "Assign to User" &&
                  data.title != "Assign to Specialist" &&
                  data.title != "Assign to Me" &&
                  data.title != "Upload & Assign" &&
                  data.title != "Project Settings" &&
                  sessionStorage.getItem("role") === "admin"
                ? loadSideBarIcons(data, index)
                : data.title != "Admin Management" &&
                  data.title != "Server Management" &&
                  sessionStorage.getItem("role") === "specialist"
                ? loadSideBarIcons(data, index)
                : data.title != "Admin Management" &&
                  data.title != "Server Management" &&
                  data.title != "Upload & Assign" &&
                  data.title != "Project Settings" &&
                  sessionStorage.getItem("role") === "user"
                ? loadSideBarIcons(data, index)
                : null}
            </div>
          ))}
        </div>
        {/* */}
      </div>
      //</div>
    );
  };

  const adminImage = [
    "assets/icons/Reports_graditi_bg.svg",
    "assets/icons/Notification-bg.svg",
    "assets/icons/Admin_graditi_bg.svg",
    "assets/icons/Server_graditi_bg.svg",
  ];
  const superUserImage = [
    "assets/icons/Notification-bg.svg",
    "assets/icons/Admin_graditi_bg.svg",
  ];
  const specialistImage = [
    "assets/icons/Reports_graditi_bg.svg",
    "assets/icons/Notification-bg.svg",
    "assets/icons/Assigned_to_me.svg",
    "assets/icons/Assigned_to_others.svg",
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
                ? adminImage
                : sessionStorage.getItem("role") === "specialist" ||
                  sessionStorage.getItem("role") === "user"
                ? specialistImage
                : specialistImage
            }
          />
        );
      case "notification":
        return <Notification />;
      case "reports":
        if (sessionStorage.getItem("role") === "admin") {
          return <Reports />;
        } else {
          return <UserReports />;
        }

      case "admin":
        return <AdminManagement />;
      case "assignToUser":
        return <AssignFiles page={page} />;
      case "assignToMe":
        return <AssignFiles page={page} />;
      case "uploadAssign":
        return <UploadAssign />;
      case "server":
        return <ServerManagement />;
      case "project":
        return <ProjectSettings />;
      case "settings":
        return <SettingsPage />;
      default:
        return <Help />;
    }
  };

  useEffect(() => {
    let page = window.location.pathname;
    page = page.replace(/[/]/g, "");
    setSidebarActive(page);

    setSideDrawer(window.innerWidth > 767 ? true : false);
  }, []);

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  const openNav = () => {
    setSideDrawer(true);

    if (!sideDrawer) {
      document.getElementById("mySidenav").style.width =
        window.innerWidth >= 768 && window.innerWidth <= 991
          ? "92.5px"
          : window.innerWidth > 991
          ? "94.5px"
          : "59.5px";
      document.getElementById("main").style.marginLeft =
        window.innerWidth >= 768 && window.innerWidth <= 991
          ? "92.5px"
          : window.innerWidth > 991
          ? "94.5px"
          : "59.5px";
    } else {
      closeNav();
    }
  };

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  const closeNav = () => {
    setSideDrawer(false);
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };

  const inde = 0;

  return (
    <div>
      <div class="parent">
        <div class="background"></div>
        <div class="foreground">
          <div className="d-flex header-sticky tobHeader">
            <div
              className=" sidenav-btn cursor-pointer"
              onClick={() => openNav()}
            >
              <SideMenu />
            </div>
            <div className="home-header d-flex w-100">
              <div className="home-header-logo">
                <LttsLogo />
                {/* <AiKnoLogo className="ml-4" /> */}
              </div>

              <div className="d-flex aling-item-center home-header-dropdown">
                <div className="dropdown language-dropdown">
                  <div
                    type="button"
                    className="dropdown-toggle pl-2"
                    data-toggle="dropdown"
                  >
                    {/* <img
                      src={require(`../../../${sideBarIcons[inde].src}`)}
                      key={inde.toString()}
                      className="dashboard-icons header-icon"
                    /> */}
                    <LanguageIcon
                      style={{
                        height: "25px",
                        width: "25px",
                        color: "#003763",
                      }}
                    />
                    {window.innerWidth > 576 && <span>Language</span>}
                  </div>

                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Link 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Link 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Link 3
                    </a>
                  </div>
                </div>

                <div className="dropdown profileDropdown">
                  <div
                    type="button"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <img
                      src={require("../../../assets/logo/profile.png")}
                      className="button-right rounded header-icon"
                      // style={{ height: "35px", width: "35px" }}
                      onClick={profileIconData()}
                    />
                  </div>
                  <div className="dropdown-menu">
                    <a
                      className="dropdown-item cursor-pointer"
                      onClick={logOut}
                    >
                      Logout
                    </a>
                  </div>
                </div>
                {/* <b className="dropdown-toggle" data-toggle="dropdown">
                  Language
                </b>
                <div className="dropdown-menu">
                  <a className="dropdown-item">Link 1</a>
                  <a className="dropdown-item">Link 2</a>
                  <a className="dropdown-item">Link 3</a>
                </div> */}
                {/* </div> */}

                {/* <div className="dropdown-profile">
                  <button
                    type="button"
                    className="btn dropdown-toggle"
                    data-toggle="dropdown-profile"
                  >
                  
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item">Link 1</a>
                    <a className="dropdown-item">Link 2</a>
                    <a className="dropdown-item">Link 3</a>
                  </div>
                </div> */}

                {/* <div className="dropdown-toggle" data-toggle="dropdown">
                  <img
                    src={require("../../../assets/logo/profile.png")}
                    className="button-right m-3 rounded "
                    style={{ height: "35px", width: "35px" }}
                    onClick={profileIconData()}
                  />
                </div>

                <div className="dropdown-menu">
                  <a className="dropdown-item">sdfd 1</a>
                  <a className="dropdown-item">Link 2</a>
                  <a className="dropdown-item">Link 3</a>
                </div> */}
              </div>
              {/* <div className="dropdown"> */}
            </div>
          </div>

          <div id="main">{mainContent()}</div>
          {/* <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div>
          <div id="main">hello</div> */}
          <div className="home-sideMenu" id="mySidenav" class="sidenav">
            {sideMenuBar()}
          </div>
        </div>
      </div>
    </div>
    // <div className="posRelative">
    //   {/* <div className="bgImage3"></div> */}

    //   <div className="posRelative">
    //     <div className="w-100 ">
    //       <div className="d-flex">
    //         <div
    //           className="p-3 sidenav-btn cursor-pointer"
    //           onClick={() => openNav()}
    //         >
    //           {sideDrawer ? "Close" : "Open"}
    //         </div>
    //         <div className="home-header w-100">
    //           {/* <img src={require("../../../assets/logo/LTTS_blue.svg")}></img> */}
    //           <LttsLogo />
    //           <AiKnoLogo />
    //           {/* <Button
    //           type="button"
    //           onClick={logOut()}
    //           className="button-right m-3"
    //         >
    //           Logout
    //         </Button> */}
    //           <img
    //             src={require("../../../assets/logo/profile.png")}
    //             className="button-right m-3 rounded"
    //             style={{ height: "35px", width: "35px" }}
    //             onClick={profileIconData()}
    //           />
    //         </div>
    //       </div>

    //       <div id="main">{mainContent()}</div>
    //     </div>
    //   </div>

    // <div className="home-sideMenu" id="mySidenav" class="sidenav">
    //   {sideMenuBar()}
    // </div>

    //   {/* <Button
    //     variant="primary"
    //     type="button"
    //     className="submit-button"
    //     onClick={logOut}
    //   >
    //     Logout
    //   </Button> */}
    // </div>
  );
};

export default Home;
