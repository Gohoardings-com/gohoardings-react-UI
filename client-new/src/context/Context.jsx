// import React, { createContext, useState,useRef, useEffect } from "react";
// import {authActions} from "../store"
// import { useDispatch } from "react-redux";
// import axios from 'axios';
// export const AccountContext = createContext(null);
// const UserContextApi = ({children}) => {
//     const [profile, setProfile] =useState();
//     const dispatch = useDispatch()
//     const [cartit, setItems] =useState(0);
    
//     const getUser = async() => {
//     const {data} = await axios.get("http://localhost:8080/api/v1/user",{
//     withCredentials:true
//   })
//   setProfile(...data)
// }

// const cartItems = async() => {
//   const {data} = await axios.get("http://localhost:8080/api/v1/cart/cartitems")
// setItems(data)
// }


// useEffect(() => {
//   cartItems()
// getUser().then(() => dispatch(authActions.login()));
// },[])
//   return (
//     <AccountContext.Provider value={{
//         profile,
//         cartit,
//     }}>
//       {children}
//     </AccountContext.Provider>
//   )
// }

// export default UserContextApi;
