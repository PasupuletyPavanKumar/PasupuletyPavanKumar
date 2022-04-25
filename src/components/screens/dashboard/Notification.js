import React, { useEffect, useState } from "react";
import { AuthenticatedService } from "../../../services/api-service/AuthenticatedService";

const Notification = () => {
  const authenticatedService = new AuthenticatedService();

  const [notifications, setNotifications] = useState([]);

  // useEffect = () => {
  //   getNotifications();
  // };

  useEffect(() => {
    getNotifications();
  }, []);

  const getNotifications = () => {
    authenticatedService.getNotifications().then((res) => {
      if (res) {
        setNotifications(res);
        console.log(res);
      }
    });
  };

  return (
    // <div>
    //   {products.map((product) => (
    //     <p key={product.id}>{product.title}</p>
    //   ))}
    // </div>

    <div>
      <h1>All Notifications</h1>
      <div className="Notificationscontainermain">
        {/* {notifications &&
          notifications.map((item) => (
            <p key={notifications.id}>{notifications.title}</p>
          ))} */}

        {notifications.map((item) => (
          <p>
            <p className="p1" key={item.id}>
              {item.title}
            </p>

            <p className="p2" key={item.id}>
              {item.completed}
            </p>
          </p>
        ))}
      </div>
      {/* <div className="Notificationscontainermain">
        <p className="p1">sucessfully created new admin</p>
        <p className="p2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <hr></hr>
        <p className="p3">We've updated profile. Check the patch notes!</p>
        <p className="p2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <hr></hr>
        <p className="p5">warning look like you've exceeded your limit</p>
        <p className="p2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <hr></hr>
        <p className="p7">
          Error,That password isn't right.Can we help you recover your password?
        </p>
        <p className="p2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div> */}
    </div>
  );
};

export default Notification;
