import React from "react";

const Notification = () => {
  return (
    <div>
      <h1>All Notifications</h1>
      <div className="Notificationscontainermain">
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
      </div>
    </div>
  );
};

export default Notification;
