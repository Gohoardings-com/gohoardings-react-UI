import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UserProfile = ({ posts }) => {
  const [state,setState] = useState({
  firstname:" "
  })



const handleChange =async(e) =>{
    console.log(e);
  }
  useEffect(() => {
    setState(posts)
  },[])
console.log(state);
  return (
    <>
      <div className="card profile-detail p-3">
        <div className="panel-body">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <div className="form-group">
                  <label
                    for="profile_image"
                    className="profile-image"
                  >
                    Profile image
                  </label>
                  <input
                    type="file"
                    name="profile_image"
                    className="form-control"
                    id="profile_image"
                  />
                </div>
                <label for="firstname">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  placeholder="jhf"
                  id="firstname"
                  value={state.firstname || " "}
                  onChange={handleChange}
                  
                />
              </div>

              <div className="form-group">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  value={posts.email}
                />
              </div>
              <div className="form-group">
                <label for="phonenumber">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phonenumber"
                  id="phonenumber"
                  value={posts.phonenumber}
                />
              </div>


            </div>
            <div className="row p15">
              <div className="col-md-12 text-right mtop20">
                <div className="form-group mb-0">
                  <button
                    type="submit"
                    className="btn btn-info text-light"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile