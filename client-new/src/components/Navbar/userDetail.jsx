import React,{useEffect, useState, useReducer} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../../store';
import {BiUserPlus} from 'react-icons/bi';
import { GoogleLogout } from 'react-google-login'
import Nav from "react-bootstrap/Nav";
import instance from "../../apis/Axios";
import { AccountContext } from '../../apis/ApiContext';
import { MdOutlineAddShoppingCart} from 'react-icons/md'
import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


const clientId = '993204517237-7ugkv9g11enginni1jruiidpg0ck618h.apps.googleusercontent.com';

const UserDetail = ({posts, setPosts}) => {
  const dispatch = useDispatch();
    const {initalState} = useContext(AccountContext)
    const { isLoggedIn } = useSelector((state) => state.LoginStatus);

    const handelLogout = async () => {
      const data = await instance.post("registration/logout", null, {
        withCredentials: true,
      });
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
      const { data } = await instance.get("registration/user", {
        withCredentials: true
      })
      setPosts(...data)
    }
    
    useEffect(() => {
      getUser().then(() => dispatch(authActions.login()))
     
      setPosts(posts)
    }, [posts])
    
  return (
    <>
   
    {posts ? <div className='p-0 m-0 d-flex userDetail  '>
                
                <Dropdown>
      <Dropdown.Toggle variant="transparent" className=" btn-light rounded-pill ms-2 mt-1">
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

<a  href='/cart' className='anchor'>
<div className="cart ms-2 mb-1">
          <span>
           <MdOutlineAddShoppingCart/>
           
          </span>
          <span>{initalState}</span>
        </div>
   
</a>
      
              </div> : <>
                <Nav.Link
                  className="text-dark ms-5 pt-1 p-0 "
                  href="/login"
                >
                <BiUserPlus className='login-icon  pt-0 mb-1 ms-1'/>
       
                </Nav.Link>

              </>}
             
   </>
  )
}

export default UserDetail;