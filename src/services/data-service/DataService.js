const userDetails = {
  accessToken: null,
  refreshToken: null,
  user: null,
};

export const DataService = {
  setToken(accessToken, refreshToken, username, role) {
    sessionStorage.setItem("accessToken", accessToken);
    sessionStorage.setItem("refreshToken", refreshToken);
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("role", role);
    console.log(sessionStorage);
    // userDetails.accessToken = accessToken;
    // userDetails.refreshToken = refreshToken;
    // console.log(userDetails);
    // console.log(userDetails.accessToken);
  },

  setUser(user) {
    userDetails.user = user;
  },

  getUserDetails() {
    return userDetails;
  },
};
