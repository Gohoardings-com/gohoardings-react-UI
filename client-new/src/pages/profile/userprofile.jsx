import React, {useEffect, useState} from 'react'
import {Form} from 'react-bootstrap';
import {updateProfile} from '../../apis/apis'
import {toast, ToastContainer} from "react-toastify";

const initalState = {
  firstname: "",
  email: "",
  phonenumber: "",
}
const Userprofile = ({posts}) => {
  const [state, setState] = useState(initalState);
  const [imge, setImage] = useState([])

  const {firstname, email, phonenumber}= state;

  const sendImagefile = async(e) =>{
    setImage(e.target.files[0]);
     }


const handelSubmit = async(e) =>{
e.preventDefault()
const formData = new FormData()
formData.append("photo",imge)
formData.append("firstname",state.firstname)
formData.append("email",state.email)
formData.append("phonenumber",state.phonenumber)
        const data = await updateProfile(formData)
       toast(data.message)
      
}

const handleChange =async(e) =>{
  const {name, value} = e.target
setState({...state,[name]:value})
  }
  useEffect(() => {
    setState({...posts[0]})
  },[])

  return (
    <>
      <div className="card profile-detail p-3">
        <div className="panel-body">
          <div className="row">
            <form onSubmit={handelSubmit}>
            <div className="col-md-12">
              <div className="form-group">
                <div className="form-group">
                  <label
                    for="profile_image"
                    className="profile-image"
                  >
                    Profile image
                  </label>
                  <Form.Control  className="form-control" type='file' name='photo' onChange={(e) =>sendImagefile(e)} required/>
                  {/* <Form.Control
                   className="form-control"
                  type='file' name='photo' onChange={sendImagefile}
                  /> */}
                </div>
                <label for="firstname">First Name</label>
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="firstname"
                  id="firstname"
                  name="firstname"
                  value={firstname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label for="email">Email Address</label>
                <Form.Control
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label for="phonenumber">Phone</label>
                <Form.Control
                  type="number"
                  className="form-control"
                  name="phonenumber"
                  id="phonenumber"
                  value={phonenumber}
                  onChange={handleChange}
                  required
                />
              </div>


            </div>
            <div className="row p15">
              <div className="col-md-12 text-right mtop20">
                <div className="form-group mb-0">
                  <Form.Control
                    type="submit"
                    value="UPDATE"
                    className="btn btn-info text-light"
                  />
                  <ToastContainer/>
                </div>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Userprofile