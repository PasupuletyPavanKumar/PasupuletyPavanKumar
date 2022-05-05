import axios from "axios";
import ApiUrl from "../../config/constants/api-url";
import { DataService } from "../data-service/DataService";

export class AuthenticatedService {
  notificationDomain = "http://localhost:8078/";
  recentDomain = "http://localhost:8097/";
  //addAdminDomain = "http://localhost:8095/";
  AdminDomain = "http://localhost:8092/";
  exportFileDomain = "http://localhost:8053/";

  getNotificationsCount = async (user = "yogesh") => {
    const url = this.notificationDomain + ApiUrl.notificationsCount + user;

    let apiRes = null;
    try {
      apiRes = await axios.get(url);
      return apiRes.data;
    } catch (err) {
      console.error("Error response:");
      console.error(err.response.data);
      console.error(err.response.status);
      console.error(err.response.headers);
      return err.response.data;
    }
  };

  getAdminsCount = async (user = "superUser") => {
    const url = this.AdminDomain + ApiUrl.adminsCount + user;

    let apiRes = null;
    try {
      apiRes = await axios.get(url);
      return apiRes.data;
    } catch (err) {
      console.error("Error response:");
      console.error(err.response.data);
      console.error(err.response.status);
      console.error(err.response.headers);
      return err.response.data;
    }
  };

  getNotifications = async (user = "yogesh") => {
    const url = this.notificationDomain + ApiUrl.notifications + user;
    //const response = await axios.get(url);

    let apiRes = null;
    try {
      apiRes = await axios.get(url);
      return apiRes.data;
    } catch (err) {
      console.error("Error response:");
      console.error(err.response.data);
      console.error(err.response.status);
      console.error(err.response.headers);
      return err.response.status;
    }

    // if (response) {
    //   const resData = response.data;
    //   console.log(resData);
    //   return resData;
    // }
  };

  addAdmin = async (reqBody) => {
    const url = this.AdminDomain + ApiUrl.addAdmin;
    const response = await axios.post(url, reqBody, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });

    if (response) {
      const resData = response.data;
      console.log(resData);
      return true;
    }
  };

  updateAdmin = async (reqBody, user = "Mithun") => {
    const url = this.AdminDomain + ApiUrl.updateAdmin + user;
    const response = await axios.put(url, reqBody, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });

    if (response) {
      const resData = response.data;
      console.log(resData);
      return true;
    }
  };

  // for delete api call pass headers and then reqBody or else it wont work
  deleteAdmin = async (reqBody, user = "nfrgasrfgfddra") => {
    console.log(sessionStorage.getItem("accessToken"));
    const url = this.AdminDomain + ApiUrl.deleteAdmin + user;
    const response = await axios.delete(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
      data: reqBody,
    });

    if (response) {
      const resData = response.data;
      console.log(resData);
      return resData;
    }
  };

  recentActivity = async (user = "Mithun") => {
    //const url = this.recentDomain + ApiUrl.recentActivity + user;
    const url = "https://jsonplaceholder.typicode.com/todos";
    const response = await axios.get(url);

    if (response) {
      const resData = response.data;
      console.log(resData);
      return resData;
    }
  };

  getAdmin = async (user = "superUser") => {
    const url = this.AdminDomain + ApiUrl.getAllAdmins + user;
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    if (response) {
      const resData = response.data;
      console.log(resData);
      return resData;
    }
  };

  getProfileDetails = async (user = "superUser") => {
    const url = this.AdminDomain + ApiUrl.getProfileDetails + user;
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    if (response) {
      const resData = response.data;
      console.log(resData);
      return resData;
    }
  };

  exportFile = async (userRole = "superUser", userName = "shashi") => {
    const url =
      this.exportFileDomain + ApiUrl.exportFile + userRole + "/" + userName;
    const response = await axios.get(url);

    if (response) {
      const resData = response.data;
      console.log(resData);
      return response;
    }
  };
}
