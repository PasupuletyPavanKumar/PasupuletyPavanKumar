import axios from "axios";
import ApiUrl from "../../config/constants/api-url";
// import { customAxios } from "../interceptor/interceptor";
import { DataService } from "../data-service/DataService";

export class AuthenticationService {
  // constructor() {}
  loginDomain = "http://localhost:8096/";
  logoutDomain = "http://localhost:8095/";

  login = async (reqBody) => {
    const url = this.loginDomain + ApiUrl.login;
    const response = await axios.post(url, reqBody, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    if (response) {
      const resData = response.data;
      console.log(resData);
      DataService.setToken(resData.access_token, resData.refresh_token);
      return true;
    }
  };

  //Login API Call
  // login = async (reqBody) => {
  //   const response = await axios.post("http://localhost:8096/login", reqBody, {
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //   });
  //   if (response) {
  //     const resData = response.data;
  //     console.log(resData);
  //     DataService.setToken(resData.access_token, resData.refresh_token);

  //     return true;
  //   }
  // };

  logout = async (reqBody) => {
    const url = this.logoutDomain + ApiUrl.logout;
    const response = await axios.post(url, reqBody, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + DataService.getUserDetails().accessToken,
      },
    });
    if (response) {
      console.log(response);
      console.log(response.status);
      return true;
    } else {
      console.log("No response");
    }
  };

  //Logout API Call
  // logout = async (reqBody) => {
  //   const response = await axios.post("http://localhost:8095/logout", reqBody, {
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       Authorization: "Bearer " + DataService.getUserDetails().accessToken,
  //     },
  //     //headers: { "Authorization": "" },
  //   });
  //   if (response) {
  //     //const resData = response.data;
  //     console.log(response);
  //     console.log(response.status);

  //     return true;
  //   } else {
  //     console.log("No response");
  //   }
  // };
}
