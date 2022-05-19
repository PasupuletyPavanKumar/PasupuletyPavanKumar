import React, { useEffect, useState } from "react";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";

const Notification = () => {
  const authenticatedService = new AuthenticatedService();

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getNotifications();
  }, []);

  const getNotifications = () => {
    authenticatedService.getNotifications().then((res) => {
      if (res) {
        res != "404"
          ? setNotifications(res)
          : setNotifications("No Notifications");
        console.log(res);
      }
    });
  };

  return (
    <div>
      <h1>All Notifications</h1>
      <div className="Notificationscontainermain">
        {/* {notifications &&
          notifications.map((item) => (
            <p key={notifications.id}>{notifications.title}</p>
          ))} */}

        {notifications != "No Notifications" &&
          notifications.map((item) => (
            <p>
              <p className="p1" key={item.id}>
                {item.operation}
              </p>

              <p className="p2" key={item.id}>
                {item.description}
              </p>
            </p>
          ))}
      </div>
    </div>
  );
};

export default Notification;
