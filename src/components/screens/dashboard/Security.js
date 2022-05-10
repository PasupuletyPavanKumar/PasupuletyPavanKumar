import React from "react";

const Security = () => {
  return (
    <div className="securitybg">
      <div className="securityitems">
       <div class="form-group">
        <label for="usr">NEW PASSWORD</label>
        <input type="text" class="form-control commonforall text-primary" id="usr" name="firstname" />
      </div>
      <div class="form-group">
        <label for="pwd">CONFIRM PASSWORD</label>
        <input type="text" class="form-control commonforall" id="usr" name="lastname" />
      </div>
      <input class="btn btn-primary" type="submit" value="Submit"></input>
      </div>
    </div>
  );
};

export default Security;
