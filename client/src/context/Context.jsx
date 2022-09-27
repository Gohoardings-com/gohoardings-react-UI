import React, { createContext, useState,useRef, useEffect } from "react";
import axios from 'axios';
export const AccountContext = createContext(null);
const UserContextApi = ({children}) => {
    const [profile, setProfile] =useState();
    
useEffect(() => {
    console.log("run");
    const getUser = async() => {
    const {data} = await axios.get("http://localhost:8080/api/v1/user",{
    withCredentials:true
  })
  setProfile(...data)
}
getUser();
},[])
  return (
    <AccountContext.Provider value={{
        profile,
    }}>
        {children}
    </AccountContext.Provider>
  )
}

export default UserContextApi;
