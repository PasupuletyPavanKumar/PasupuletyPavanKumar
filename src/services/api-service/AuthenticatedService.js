import axios from "axios";
import ApiUrl from "../../config/constants/api-url";
import { DataService } from "../data-service/DataService";

export class AuthenticatedService {
  notificationDomain = "http://localhost:8078/";
  recentDomain = "http://localhost:8097/";
  //addAdminDomain = "http://localhost:8095/";
  AdminDomain = "http://localhost:8092/";

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

  recentActivity = async (user = "Mithun") => {
    const url = this.recentDomain + ApiUrl.recentActivity + user;
    //const url = "https://jsonplaceholder.typicode.com/todos";
    const response = await axios.get(url);

    if (response) {
      const resData = response.data;
      console.log(resData);
      return resData;
    }
  };

  getAdmin = async (user = "superUser") => {
    const url = this.AdminDomain + ApiUrl.getAllAdmins + user;
    const response = await axios.get(url);

    if (response) {
      const resData = response.data;
      console.log(resData);
      return resData;
    }
  };
}
