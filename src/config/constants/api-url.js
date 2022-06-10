const ApiUrl = {
  login: "login",
  logout: "logout",
  notificationsCount: "notification/count/",
  getAssignedToUserCount: "fetchAssignedToMeDocumentsCount/",
  getAssignedToSpecialistCount: "fetchAssignedByMeDocumentsCount/",
  getReportCount: "reportsCount/",
  getSpecialistAndAdminCount: "userManagement/fetchUsersCount/",
  getServerCount: "serverManagement/serverCount/activeAndInactive/",
  getAdminsCount: "userManagement/fetchUsersCountOfRole/",
  notifications: "notificationDetails/",
  getDetailedReport: "userReport/",
  recentActivity: "recentActivityDetails/",
  getAllAdmins: "userManagement/fetchUsers/",
  processDocument: "processDocuments",
  addAdmin: "userManagement/create",
  updateAdmin: "userManagement/update/",
  deleteAdmin: "userManagement/delete/",
  getProfileDetails: "userManagement/fetchByUserName/",
  exportFile: "generateCsvReport/",
  updateProfilePassword: "userManagement/updatePassword",
  getServersList: "serverManagement/fetchAllServer/",
  addServer: "serverManagement/add",
  getProjectList: "fetchAllProjects",
  getSettingsList: "fetchAllSettings",
  allUsersList: "userManagement/fetchAll",
  getFilesList: "fetchDocumentDetailsByProjectId/",
  addSetting: "createSetting",
  addProject: "createProject",
  addServer: "serverManagement/add",
  getServerList: "serverManagement/fetchAllServer/",
  getIndividualSettings: "fetchSettingBySettingId/",
  uploadDocs: "uploadDocuments",
  assignFiles: "assignDocumentsToUser",
  getUserByUserRole: "userManagement/fetchByUserRole/",
  //get all docs list assigned by specialist for specialist/user screen
  allDocsListAssignedBySpecialist: "fetchAssignedByMeDocumentDetails/",
  //get pending docs list assigned by specialist for specialist screen
  pendingDocsListAssignedBySpecialist:
    "fetchAssignedByMePendingDocumentDetailsForSpecialist/",
  //get processing docs list assigned by specialist for specialist screen
  processingDocsListAssignedBySpecialist:
    "fetchAssignedByMeProcessingDocumentDetailsForSpecialist/",
  //get completed docs list assigned by specialist for specialist screen
  completedDocsListAssignedBySpecialist:
    "fetchAssignedByMeProcessedDocumentDetailsForSpecialist/",
  //get all docs list assigned by user for specialist screen
  allDocsListAssignedByUser: "fetchAssignedToMeDocumentDetails/",
  //get pending docs list assigned by user for specialist screen
  pendingDocsListAssignedByUser:
    "fetchAssignedToMePendingDocumentDetailsForSpecialist/",
  //get ok docs list assigned by user for specialist screen
  oKDocsListAssignedByUser: "fetchAssignedToMeOkDocumentDetails/",
  //get not ok docs list assigned by user for specialist screen
  notOKDocsListAssignedByUser: "fetchAssignedToMeNotOkDocumentDetails/",
  //get pending docs list assigned by specialist To User for user screen
  pendingDocsListAssignedByUserToSpecialist:
    "fetchAssignedByMePendingDocumentDetailsForUser/",
  // get user assigned specialist oked docs list for user screen
  oKDocsListAssignedByUserToSpecialist:
    "fetchAssignedByMeOkDocumentDetailsForUser/",
  // get user assigned specialist not oked docs list for user screen
  NotOKDocsListAssignedByUserToSpecialist:
    "fetchAssignedByMeNotOkDocumentDetailsForUser/",
  // get specialist assigned pending docs to user for user screen
  specialistAssignedPendingDocsToUser:
    "fetchAssignedToMePendingDocumentDetailsForUser/",
  // get specialist assigned processing docs to user for user screen
  specialistAssignedProcessingDocsToUser:
    "fetchAssignedToMeProcessingDocumentDetailsForUser/",
  // get specialist assigned processed docs to user for user screen
  specialistAssignedProcessedDocsToUser:
    "fetchAssignedToMeProcessedDocumentDetailsForUser/",
  // get specialist assigned ok docs to user for user screen
  specialistAssignedOkDocsToUser: "fetchAssignedToMeOkDocumentDetails/",
  // get specialist assigned not ok docs to user for user screen
  specialistAssignedNotOkDocsToUser: "fetchAssignedToMeNotOkDocumentDetails/",
};

export default ApiUrl;
