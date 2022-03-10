const userDetails = {
  accessToken: null,
  refreshToken: null,
  user: null,
};

export const DataService = {
  setToken(accessToken, refreshToken) {
    userDetails.accessToken = accessToken;
    userDetails.refreshToken = refreshToken;
    console.log(userDetails);
  },

  setUser(user) {
    userDetails.user = user;
  },

  getUserDetails() {
    return userDetails;
  },
};
