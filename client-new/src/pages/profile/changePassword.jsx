import React,{useState} from 'react'
import { updatePassword } from '../../apis/apis';

const ChangePassword = () => {
  const [state,setState] = useState({
    oldPassword: " ", newPassword: " ",confirmPassword:" "
  });
  const handleChange =async(e) =>{
    const {name, value} = e.target
  setState({...state,[name]:value})
    }

    const sumbithandle = async(e) =>{
      e.preventDefault()
      const data = await updatePassword(state)
      console.log(data);
    }
    
  return (
    <>
    <div className="card p-3 password-data">
                      <div className="panel-body">
                        <form
                       accept-charset="utf-8"
                          onSubmit={sumbithandle}
                        >
                          <div className="form-group mt-2">
                            <label for="oldPassword">Old Password</label>
                            <input
                              type="text"
                              name="oldPassword"
                              id="oldPassword"
                              value={state.oldPassword}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group mt-2">
                            <label for="newPassword">New Password</label>
                            <input
                              type="text"
                      
                              name="newPassword"
                              id="newPassword"
                              value={state.newPassword}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group mt-2">
                            <label for="newpasswordr">Repeat Password</label>
                            <input
                              type="text"
                             
                              name="confirmPassword"
                              id="confirmPassword"
                              value={state.confirmPassword}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="submit"
                              className="btn btn-info btn-block text-light"
                              value="Submit Password"
                            />
                             
                          </div>
                        </form>
                      </div>
                    </div>
  </>
  )
}

export default ChangePassword