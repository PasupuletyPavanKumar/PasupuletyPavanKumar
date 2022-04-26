import axios from "axios";
import ApiUrl from "../../config/constants/api-url";
import { DataService } from "../data-service/DataService";

export class AuthenticatedService {
  notificationDomain = "http://localhost:8098/";
  recentDomain = "http://localhost:8097/";
  addAdminDomain = "http://localhost:8095/";
  getAdminsDomain = "http://localhost:8092/";

  getNotificationsCount = async (user = "Mithun") => {
    const url = this.notificationDomain + ApiUrl.notificationsCount + user;
    const response = await axios.get(url);

    if (response) {
      const resData = response.data;
      console.log(resData);
      return resData;
    }
  };

  getNotifications = async (user = "Mithun") => {
    // const url = this.notificationDomain + ApiUrl.notifications + user;
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );

    if (response) {
      const resData = response.data;
      console.log(resData);
      return resData;
    }
  };

  addAdmin = async (reqBody) => {
    const url = this.addAdminDomain + ApiUrl.addAdmin;
    const response = await axios.post(url, reqBody, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJTRzV1anRSejdvSkd1a1pGNnVXMEZ4aEhKLTdxcFpXTG1US1E1cGpPRzdvIn0.eyJleHAiOjE2NDk5Mjg3MDYsImlhdCI6MTY0OTkyNTEwNiwianRpIjoiNTQzZjk0NWQtZDZlMy00NTkyLThjNzQtZGFiZTI3MjZhYTQ5IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgyL3JlYWxtcy9BaUtubyIsImF1ZCI6InJlYWxtLW1hbmFnZW1lbnQiLCJzdWIiOiI1MzhlNzY1MS1kNjMxLTRkMTQtYWY5MS1mNWIwM2YzOGU2YzEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhaWtuby1zc2QiLCJzZXNzaW9uX3N0YXRlIjoiMTk1Y2NmZmMtN2EzZS00MmE0LThlN2EtMTgxMDlkZjhkNzU4IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJhaWtuby1zdXBlci11c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWlrbm8tc3NkIjp7InJvbGVzIjpbInN1cGVyLXVzZXIiXX0sInJlYWxtLW1hbmFnZW1lbnQiOnsicm9sZXMiOlsibWFuYWdlLXVzZXJzIiwidmlldy11c2VycyIsInF1ZXJ5LWdyb3VwcyIsInF1ZXJ5LXVzZXJzIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsInNpZCI6IjE5NWNjZmZjLTdhM2UtNDJhNC04ZTdhLTE4MTA5ZGY4ZDc1OCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6ImFzaHdpbiBhc2h3aW4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhc2h3aW5AbHR0cy5jb20iLCJnaXZlbl9uYW1lIjoiYXNod2luIiwiZmFtaWx5X25hbWUiOiJhc2h3aW4iLCJlbWFpbCI6ImFzaHdpbkBsdHRzLmNvbSJ9.hqRUyeUxMHrowvdfmU_VuHXaRQMFIh7r50vOzlX-XYm98GKtfXg4SHB5OP0mZixLi_KUKQ-Fmtc8Z3v5WZQUr1E6v4rBE5QOW2Qy9NOW5lk1iwQ7ZI3nsGntXxTHzb2LP0EXxmTYpIYDuiRUrtfPDnZKB5r9OWTFBw1wo8lrM7d1t0sox9Qit1EdP5cREF05IcF--Mn89-LgQn9Zvo3pZiMFtuk2jXvvbvOIO4wNU3jXYrOzZALC6XfeUnRvY9uGnliA39X_pniuC4nrFa17Y6UYsY6MUhNEnKvnZeyPiLI94ldl6IXEFKs0j2-dHGBym2SAHpgnKTI0DJUuyY365w",
      },
    });

    if (response) {
      const resData = response.data;
      console.log(resData);
      return true;
    }
  };

  recentActivity = async (user = "Mithun") => {
    //const url = this.recentDomain + ApiUrl.recentActivity + user;
    const url = "https://jsonplaceholder.typicode.com/todos";
    const response = await axios.get(url);

    if (response) {
      const resData = response.data;
      console.log(resData);
      return resData;
    }
  };

  getAdmin = async (user = "superUser") => {
    const url = this.getAdminsDomain + ApiUrl.getAllAdmins + user;
    const response = await axios.get(url);

    if (response) {
      const resData = response.data;
      console.log(resData);
      return resData;
    }
  };
}
