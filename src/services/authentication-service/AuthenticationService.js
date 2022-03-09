import axios from "axios";
// import { customAxios } from "../interceptor/interceptor";

export class AuthenticationService {
  // constructor() {}

  login = async (reqBody) => {
    const response = await axios.post("https://localhost:8080/login", reqBody);
    if (response) console.log(response);
  };
}
