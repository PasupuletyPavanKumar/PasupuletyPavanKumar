import axios from "axios";
import ApiUrl from "../../config/constants/api-url";
import { DataService } from "../data-service/DataService";

export class AuthenticatedService {
  notificationDomain = "http://localhost:8078/";
  recentDomain = "http://localhost:8097/";
  addAdminDomain = "http://localhost:8095/";
  AdminDomain = "http://localhost:8092/";
  exportFileDomain = "http://localhost:8053/";
  docsListDomain = "http://localhost:8066/";
  projectListDomain = "http://localhost:9097/";
  allUsersDomain = "http://localhost:8095/";
  filesListDomain = "http://localhost:8099/";
  serverDomain = "http://localhost:8091/";

  getNotificationsCount = async (
    username = sessionStorage.getItem("username"),
    role = sessionStorage.getItem("role")
  ) => {
    const url =
      this.notificationDomain +
      ApiUrl.notificationsCount +
      role +
      "/" +
      username;

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

  getAssignedToUserCount = async (
    userId = sessionStorage.getItem("userId"),
    role = sessionStorage.getItem("role")
  ) => {
    const url =
      this.docsListDomain + ApiUrl.getAssignedToUserCount + role + "/" + userId;

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

  getAssignedToSpecialistCount = async (
    userId = sessionStorage.getItem("userId"),
    role = sessionStorage.getItem("role")
  ) => {
    const url =
      this.docsListDomain +
      ApiUrl.getAssignedToSpecialistCount +
      role +
      "/" +
      userId;

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

  getAdminsCount = async (role) => {
    const url = this.AdminDomain + ApiUrl.getAdminsCount + role;
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

  // getServerCount = async (username = sessionStorage.getItem("username")) => {
  //   const url = this.serverDomain + ApiUrl.getServerCount + username;
  //   let apiRes = null;
  //   try {
  //     apiRes = await axios.get(url);
  //     return apiRes.data;
  //   } catch (err) {
  //     console.error("Error response:");
  //     console.error(err.response.data);
  //     console.error(err.response.status);
  //     console.error(err.response.headers);
  //     return err.response.data;
  //   }
  // };

  getServerCount = async (username = sessionStorage.getItem("username")) => {
    const url = this.serverDomain + ApiUrl.getServerCount + username;
    const response = await axios.get(url);

    if (response) {
      const resData = response.data;
      console.log(resData);
      return resData;
    }
  };

  getReportCount = async (
    role = sessionStorage.getItem("role"),
    username = sessionStorage.getItem("username")
  ) => {
    const url =
      this.exportFileDomain + ApiUrl.getReportCount + role + "/" + username;
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

  getSpecialistAndAdminCount = async () => {
    const url = this.AdminDomain + ApiUrl.getSpecialistAndAdminCount + "admin";
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

  getNotifications = async (
    username = sessionStorage.getItem("username"),
    role = sessionStorage.getItem("role")
  ) => {
    const url =
      this.notificationDomain + ApiUrl.notifications + role + "/" + username;
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

  getDetailedReport = async (
    username = sessionStorage.getItem("username"),
    role = sessionStorage.getItem("role")
  ) => {
    const url =
      this.exportFileDomain + ApiUrl.getDetailedReport + role + "/" + username;

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
  };

  processDocument = async (reqBody) => {
    const url = this.filesListDomain + ApiUrl.processDocument;
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

  addAdmin = async (reqBody) => {
    const url = this.addAdminDomain + ApiUrl.addAdmin;
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

  addSetting = async (reqBody) => {
    const url = this.projectListDomain + ApiUrl.addSetting;
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

  addProject = async (reqBody) => {
    const url = this.projectListDomain + ApiUrl.addProject;
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

  uploadDocs = async (reqBody) => {
    const url = this.filesListDomain + ApiUrl.uploadDocs;
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

  assignFiles = async (reqObj) => {
    const url = this.docsListDomain + ApiUrl.assignFiles;
    const response = await axios.post(url, reqObj, {
      headers: {
        // "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });

    if (response) {
      const resData = response.data;
      console.log(resData);
      return true;
    }
  };

  addServer = async (reqBody) => {
    const url = this.serverDomain + ApiUrl.addServer;
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

  getServerList = async (username = sessionStorage.getItem("username")) => {
    const url = this.serverDomain + ApiUrl.getServerList + username;
    const response = await axios.get(url);

    if (response) {
      const resData = response.data;
      console.log(resData);
      return resData;
    }
  };

  updateAdmin = async (reqBody, username) => {
    const url = this.AdminDomain + ApiUrl.updateAdmin + username;
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
  deleteAdmin = async (reqBody, username) => {
    console.log(sessionStorage.getItem("accessToken"));
    const url = this.AdminDomain + ApiUrl.deleteAdmin + username;
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

  recentActivity = async (
    username = sessionStorage.getItem("username"),
    role = sessionStorage.getItem("role")
  ) => {
    const url =
      this.recentDomain + ApiUrl.recentActivity + role + "/" + username;
    // const url = "https://jsonplaceholder.typicode.com/todos";
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
    id = sessionStorage.getItem("userId")
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
    id = sessionStorage.getItem("userId")
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
    id = sessionStorage.getItem("userId")
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
    id = sessionStorage.getItem("userId")
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
    id = sessionStorage.getItem("userId")
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
    id = sessionStorage.getItem("userId")
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
    id = sessionStorage.getItem("userId")
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
    id = sessionStorage.getItem("userId")
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
    id = sessionStorage.getItem("userId")
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
    id = sessionStorage.getItem("userId")
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
    id = sessionStorage.getItem("userId")
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
    id = sessionStorage.getItem("userId")
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
    id = sessionStorage.getItem("userId")
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
    id = sessionStorage.getItem("userId")
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
    id = sessionStorage.getItem("userId")
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
    id = sessionStorage.getItem("userId")
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

  getAdmin = async (role = sessionStorage.getItem("role")) => {
    // const url = this.AdminDomain + ApiUrl.getAllAdmins + role;
    const url = "https://jsonplaceholder.typicode.com/todos/";
    const response = await axios.get(url);

    if (response) {
      const resData = response.data;
      console.log(resData);
      return resData;
    }
  };

  getProjects = async () => {
    const url = this.projectListDomain + ApiUrl.getProjectList;
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

  getFiles = async (id) => {
    const url = this.filesListDomain + ApiUrl.getFilesList + id;
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

  getUsers = async () => {
    const url = this.allUsersDomain + ApiUrl.allUsersList;
    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });

    if (response) {
      const resData = response.data;
      console.log(resData);
      return resData;
    }
  };

  getUserByUserRole = async (role = "user") => {
    const url = this.allUsersDomain + ApiUrl.getUserByUserRole + role;
    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });

    if (response) {
      const resData = response.data;
      console.log(resData);
      return resData;
    }
  };

  getReports = async (userId = sessionStorage.getItem("userId")) => {
    const url = this.exportFileDomain + ApiUrl.getReports + userId;
    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });

    if (response) {
      const resData = response.data;
      console.log(resData);
      return resData;
    }
    // let apiRes = null;
    // try {
    //   apiRes = await axios.get(url);
    //   return apiRes.data;
    // } catch (err) {
    //   console.error("Error response:");
    //   console.error(err.response.data);
    //   console.error(err.response.status);
    //   console.error(err.response.headers);
    //   return err.response.data;
    // }
  };

  getSettings = async () => {
    const url = this.projectListDomain + ApiUrl.getSettingsList;
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

  getIndividualSettings = async (settingId) => {
    const url =
      this.projectListDomain + ApiUrl.getIndividualSettings + settingId;
    const response = await axios.get(url);

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

  exportFile = async (
    userRole = sessionStorage.getItem("role"),
    userName = sessionStorage.getItem("username")
  ) => {
    const url =
      this.exportFileDomain + ApiUrl.exportFile + userRole + "/" + userName;
    const response = await axios.get(url, { responseType: "arraybuffer" });

    if (response) {
      const resData = response.data;
      console.log(resData);
      return response;
    }
  };

  previewDocument = async (id) => {
    const url = this.filesListDomain + ApiUrl.previewDocument + id;
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

  previewData = async (id) => {
    const url = this.docsListDomain + ApiUrl.viewData + id;
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

  //delete Notification
  deleteNotification = async (id, role) => {
    const url =
      this.notificationDomain + ApiUrl.deleteNotification + role + "/" + id;
    const response = await axios.delete(url);

    if (response) {
      const resData = response.data;
      console.log(resData);
      return resData;
    }
  };
}
