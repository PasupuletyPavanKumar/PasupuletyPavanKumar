import axios from "axios";
import ApiUrl from "../../config/constants/api-url";
import { DataService } from "../data-service/DataService";

export class AuthenticatedService {
  notificationDomain = "http://localhost:8078/";
  recentDomain = "http://localhost:8097/";
  //addAdminDomain = "http://localhost:8095/";
  AdminDomain = "http://localhost:8092/";
  exportFileDomain = "http://localhost:8053/";
  docsListDomain = "http://localhost:8066/";
  projectListDomain = "http://localhost:9097/";
  allUsersDomain = "http://localhost:8095/";
  filesListDomain = "http://localhost:8099/";

  getNotificationsCount = async (user = sessionStorage.getItem("username")) => {
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

  // get all docs list assigned by specialist for specialist/user screen
  allDocsAssignedBySpecialist = async (
    role = sessionStorage.getItem("role"),
    id = "6274d9972381980ad0f0c764"
  ) => {
    const url =
      this.docsListDomain +
      ApiUrl.allDocsListAssignedBySpecialist +
      role +
      "/" +
      id;
    // const response = await axios.get(url);
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

  // get pending docs list assigned by specialist for specialist screen
  pendingDocsAssignedBySpecialist = async (
    role = sessionStorage.getItem("role"),
    id = "6274d9472381980ad0f0c763"
  ) => {
    const url =
      this.docsListDomain +
      ApiUrl.pendingDocsListAssignedBySpecialist +
      role +
      "/" +
      id;
    // const response = await axios.get(url);
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

  // get processing docs list assigned by specialist for specialist screen
  processingDocsAssignedBySpecialist = async (
    role = sessionStorage.getItem("role"),
    id = "6274d9472381980ad0f0c763"
  ) => {
    const url =
      this.docsListDomain +
      ApiUrl.processingDocsListAssignedBySpecialist +
      role +
      "/" +
      id;
    // const response = await axios.get(url);
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

  // get completed docs list assigned by specialist for specialist screen
  completedDocsAssignedBySpecialist = async (
    role = sessionStorage.getItem("role"),
    id = "6274d9472381980ad0f0c763"
  ) => {
    const url =
      this.docsListDomain +
      ApiUrl.completedDocsListAssignedBySpecialist +
      role +
      "/" +
      id;
    // const response = await axios.get(url);
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

  // get all docs assigned by user/specialist for specialist/user screen
  allDocsAssignedByUser = async (
    role = sessionStorage.getItem("role"),
    id = "6274d9972381980ad0f0c764"
  ) => {
    const url =
      this.docsListDomain + ApiUrl.allDocsListAssignedByUser + role + "/" + id;
    // const response = await axios.get(url);
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

  // get pending docs list assigned by user for specialist screen
  pendingDocsAssignedByUser = async (
    role = sessionStorage.getItem("role"),
    id = "6274d9472381980ad0f0c763"
  ) => {
    const url =
      this.docsListDomain +
      ApiUrl.pendingDocsListAssignedByUser +
      role +
      "/" +
      id;
    // const response = await axios.get(url);
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

  // get Ok docs list assigned by user for specialist screen
  oKDocsAssignedByUser = async (
    role = sessionStorage.getItem("role"),
    id = "6274d9472381980ad0f0c763"
  ) => {
    const url =
      this.docsListDomain + ApiUrl.oKDocsListAssignedByUser + role + "/" + id;
    // const response = await axios.get(url);
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

  // get Not Ok docs list assigned by user for specialist screen
  notOKDocsAssignedByUser = async (
    role = sessionStorage.getItem("role"),
    id = "6274d9472381980ad0f0c763"
  ) => {
    const url =
      this.docsListDomain +
      ApiUrl.notOKDocsListAssignedByUser +
      role +
      "/" +
      id;
    // const response = await axios.get(url);
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

  // get pending docs list assigned by user to specialist for user screen
  pendingDocsAssignedByUserToSpecialist = async (
    role = sessionStorage.getItem("role"),
    id = "6274d9972381980ad0f0c764"
  ) => {
    const url =
      this.docsListDomain +
      ApiUrl.pendingDocsListAssignedByUserToSpecialist +
      role +
      "/" +
      id;
    // const response = await axios.get(url);
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

  // get Ok docs list assigned by user for user screen
  oKDocsAssignedByUserToSpecialist = async (
    role = sessionStorage.getItem("role"),
    id = "6274d9972381980ad0f0c764"
  ) => {
    const url =
      this.docsListDomain +
      ApiUrl.oKDocsListAssignedByUserToSpecialist +
      role +
      "/" +
      id;
    // const response = await axios.get(url);
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

  // get Not Ok docs list assigned by user for user screen
  notOKDocsAssignedByUserToSpecialist = async (
    role = sessionStorage.getItem("role"),
    id = "6274d9972381980ad0f0c764"
  ) => {
    const url =
      this.docsListDomain +
      ApiUrl.NotOKDocsListAssignedByUserToSpecialist +
      role +
      "/" +
      id;
    // const response = await axios.get(url);
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

  // get pending docs list assigned by specialist to user for user screen
  specialistAssignedPendingDocsToUser = async (
    role = sessionStorage.getItem("role"),
    id = "6274d9972381980ad0f0c764"
  ) => {
    const url =
      this.docsListDomain +
      ApiUrl.specialistAssignedPendingDocsToUser +
      role +
      "/" +
      id;
    // const response = await axios.get(url);
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

  // get processing docs list assigned by specialist to user for user screen
  specialistAssignedProcessingDocsToUser = async (
    role = sessionStorage.getItem("role"),
    id = "6274d9972381980ad0f0c764"
  ) => {
    const url =
      this.docsListDomain +
      ApiUrl.specialistAssignedProcessingDocsToUser +
      role +
      "/" +
      id;
    // const response = await axios.get(url);
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

  // get processed docs list assigned by specialist to user for user screen
  specialistAssignedProcessedDocsToUser = async (
    role = sessionStorage.getItem("role"),
    id = "6274d9972381980ad0f0c764"
  ) => {
    const url =
      this.docsListDomain +
      ApiUrl.specialistAssignedProcessedDocsToUser +
      role +
      "/" +
      id;
    // const response = await axios.get(url);
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

  // get ok docs list assigned by specialist to user for user screen
  specialistAssignedOkDocsToUser = async (
    role = sessionStorage.getItem("role"),
    id = "6274d9972381980ad0f0c764"
  ) => {
    const url =
      this.docsListDomain +
      ApiUrl.specialistAssignedOkDocsToUser +
      role +
      "/" +
      id;
    // const response = await axios.get(url);
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

  // get not ok docs list assigned by specialist to user for user screen
  specialistAssignedNotOkDocsToUser = async (
    role = sessionStorage.getItem("role"),
    id = "6274d9972381980ad0f0c764"
  ) => {
    const url =
      this.docsListDomain +
      ApiUrl.specialistAssignedNotOkDocsToUser +
      role +
      "/" +
      id;
    // const response = await axios.get(url);
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

  getProjects = async () => {
    const url = this.projectListDomain + ApiUrl.getProjectList;
    const response = await axios.get(url);

    if (response) {
      const resData = response.data;
      console.log(resData);
      return resData;
    }
  };

  getFiles = async (id) => {
    const url = this.filesListDomain + ApiUrl.getFilesList + "/" + id;
    const response = await axios.get(url);

    if (response) {
      const resData = response.data;
      console.log(resData);
      return resData;
    }
  };

  getUsers = async () => {
    const url = this.allUsersDomain + ApiUrl.allUsersList;
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });

    if (response) {
      const resData = response.data;
      console.log(resData);
      return resData;
    }
  };

  getProfileDetails = async (user = sessionStorage.getItem("username")) => {
    const url = this.AdminDomain + ApiUrl.getProfileDetails + user;
    const response = await axios.get(url);

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
