import React,{useEffect, useState, useReducer} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../../store';
import {BiUserPlus} from 'react-icons/bi';
import { GoogleLogout } from 'react-google-login'
import Nav from "react-bootstrap/Nav";
import { refreshToken, clientId, getCurrentuser, logoutUser } from '../../apis/apis';
import { AccountContext } from '../../apis/apiContext';
import { MdOutlineAddShoppingCart} from 'react-icons/md'
import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
let firstRender = true
const UserDetail = ({posts, setPosts}) => {
  const dispatch = useDispatch();
    const {initalState} = useContext(AccountContext)
    const { isLoggedIn } = useSelector((state) => state.LoginStatus);

    const handelLogout = async () => {
      const data = await logoutUser();
      if (data.status == 200) {
        window.localStorage.clear();
        window.sessionStorage.clear()
        isLoggedIn = true;
        return data
      }
      return new Error("Unable to logOut Please Try Again");
    };

    const logOut = async () => {
      handelLogout().then(() => dispatch(authActions.logout()))
    }
    
    const getUser = async () => {
     const data = await getCurrentuser();
      return data
    }
    
    useEffect(() => {
      if(firstRender){
        firstRender = false
        getUser().then((data) => setPosts(...data) && dispatch(authActions.login()))
       }
       let interval = setInterval(() =>{
        refreshToken().then((data) => setPosts(...data))
       },6 * 14 * 3600000)
       return ()=>clearInterval(interval)
    }, [])
    useEffect(() =>{
      setPosts(posts)
    },[])
  return (
    <>
    { posts ? <div className='p-0 m-0  d-flex userDetail my-2 my-lg-0 '>
         <Dropdown>
      <Dropdown.Toggle variant="transparent" className=" btn-light rounded-pill ms-3 ">
      <h5 className='p-0 m-0 text-secondary'>{posts.firstname.toUpperCase().substring(0,1)}</h5>
      </Dropdown.Toggle>
    
      <Dropdown.Menu >
        <Dropdown.Item href="/">Profile</Dropdown.Item>
        <Dropdown.Item href="/"   onClick={logOut}>

        <GoogleLogout
                  className='border-0 bg-transparent'
                  href="/"
  clientId={clientId}
  buttonText={"Logout"}
  onLogoutSuccess={logOut}
  icon={false}
 /> 
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    {/* /cfh */}

<a  href='/cart' className='anchor m-0 p-0'>
<div className="cart ms-3  pb-2">
          <span>
           <MdOutlineAddShoppingCart/>
           
          </span>
          <span>{initalState}</span>
        </div>
   
</a>
      
              </div> : <>
                <Nav.Link
                  className="text-dark ms-3  pt-1 p-0 "
                  href="/login"
                >
                <BiUserPlus className='login-icon  pt-0 mb-1 '/>
       
                </Nav.Link>

              </>}
             
   </>
  )
}

export default UserDetail;
