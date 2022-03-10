import axios from "axios";
// import { customAxios } from "../interceptor/interceptor";
import { DataService } from "../data-service/DataService";

export class AuthenticationService {
  // constructor() {}

  login = async (reqBody) => {
    const response = await axios.post("http://localhost:8096/login", reqBody, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    if (response) {
      const resData = response.data;
      console.log(resData);
      DataService.setToken(resData.access_token, resData.refresh_token);

      return true;
    }
  };

  logout = async (reqBody) => {
    const response = await axios.post("http://localhost:8095/logout", reqBody, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer "+DataService.getUserDetails().accessToken,
      },
      //headers: { "Authorization": "" },
    });
    if (response) {
      //const resData = response.data;
      console.log(response);
      console.log(response.status);

      return true;
    }else{
        console.log("No response");    
    }
  };
}
