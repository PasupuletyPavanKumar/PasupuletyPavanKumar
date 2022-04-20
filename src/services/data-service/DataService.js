const userDetails = {
  accessToken: null,
  refreshToken: null,
  user: null,
};

export const DataService = {
  setToken(accessToken, refreshToken) {
    sessionStorage.setItem("accessToken", accessToken);
    sessionStorage.setItem("refreshToken", refreshToken);
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
