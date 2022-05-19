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
  addServer: "serverManagement/add",
  //get all docs list assigned by specialist
  allDocsListAssignedBySpecialist: "fetchAssignedByMeDocumentDetails/",
  //get pending docs list assigned by specialist
  pendingDocsListAssignedBySpecialist:
    "fetchAssignedByMePendingDocumentDetailsForSpecialist/",
  //get processing docs list assigned by specialist
  processingDocsListAssignedBySpecialist:
    "fetchAssignedByMeProcessingDocumentDetailsForSpecialist/",
  //get completed docs list assigned by specialist
  completedDocsListAssignedBySpecialist:
    "fetchAssignedByMeProcessedDocumentDetailsForSpecialist/",
};

export default ApiUrl;
