import axios from "axios";
import { DataService } from "../data-service/DataService";

export class AuthenticatedService {
  //addAdmin API Call
  addAdmin = async (reqBody) => {
    const response = await axios.post(
      "http://localhost:8095/userManagement/create",
      reqBody,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + DataService.getUserDetails.accessToken,
        },
      }
    );

    if (response) {
      const resData = response.data;
      console.log(resData);
      return true;
    }
  };
}
