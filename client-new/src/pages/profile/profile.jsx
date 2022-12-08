import React from "react";
import {HiUser,HiBuildingOffice} from "react-icons/fa"


const Profile = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
          <div class="card">
  <img src="../../gohoarding/new-icon/user-profile.png" class="card-img-top" alt="..."/>
  <div class="card-body row">
   <p className="col"><span><HiUser/></span>Profile</p>
   <p className="col"><span><HiBuildingOffice/></span>Companey Detail</p>
  </div>
</div>
          </div>
          <div className="col-md-6"></div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
