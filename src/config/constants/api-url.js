const ApiUrl = {
  login: "login",
  logout: "logout",
  notificationsCount: "notification/count/superUser/",
  adminsCount: "userManagement/fetchUsersCount/",
  notifications: "notification/superUser/",
  recentActivity: "recentActivity/superUser/fetch/",
  getAllAdmins: "userManagement/fetchUsers/",
  addAdmin: "userManagement/create",
  updateAdmin: "userManagement/update/",
  deleteAdmin: "userManagement/delete/",
  getProfileDetails: "userManagement/fetchByUserName/",
  exportFile: "generateCsvReport/",
  updateProfilePassword: "userManagement/updatePassword",
  getServersList: "serverManagement/fetchAllServer/",
};

export default ApiUrl;
