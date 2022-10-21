import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Profile from './UserProfile';

const UserMediaStatus = () => {

  const [state, setstate] = useState([]);

  const getDATA = async () => {
    const { data } = await axios.post(
      "http://localhost:8080/api/v1/user",
      {
        userid: 191,
      }
    );
    setstate(data);
  };
useEffect(() => {
  getDATA()
},[])
  return (
    <>
   <Profile/>
   <table className="table table-bordered text-light">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Campaign_Name</th>
              <th>Start_Date</th>
              <th>End_Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {state.map((element, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{element.campaign_name}</td>
                <td>{(element.start_date).split("T")[0]}</td>
                <td>{element.end_date.split("T")[0]}</td>
                <td>{element.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </>
  )
}

export default UserMediaStatus;
