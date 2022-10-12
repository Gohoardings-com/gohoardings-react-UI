import React, {useState, useEffect, useContext} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { AccountContext } from '../../context/Context'
import { authActions } from '../../store';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
axios.defaults.withCredentials = true;

const  NewNAvbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {cartit} = useContext(AccountContext)
  const {profile} = useContext(AccountContext)
  const {isLoggedIn} = useSelector((state) => state.LoginStatus);
  const [posts,setPosts] = useState(profile)
  const items = useSelector((state) => state.cart)

// console.log(hh.length);

// console.log(profile);
// Fetch user detai;ls from database 

// User LogOut Function
// User LogOut Function
const handelLogout = async() => {
  const data = await axios.post("http://localhost:8080/api/v1/logout", null ,{
    withCredentials:true
  })
  if(data == 200){
    isLoggedIn = true;
    return data
  }
  return new Error("Unable to logOut Please Try Again")
}

const logOut = async() => {
  handelLogout().then(() => dispatch(authActions.logout()))
}
const onCart = async() =>{
  navigate('/cart')
}

useEffect(() => {
  setPosts(profile)
},[])
  return (
   <>
     <Navbar expand="lg px-md-4">
          <div className="container-fluid py-md-4 px-md-4">
            <Navbar.Brand href="#home">
              <img src="./images/logo.png" alt="" srcSet="" className="brand" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link
                  className="text-light normal"
                  href="https://odoads.com/"
                  target="_blank"
                >
                  Odoads
                </Nav.Link>
                <Nav.Link
                  className="text-light normal"
                  href="https://www.gohoardings.com/blog/"
                  target="_blank"
                >
                  Blog
                </Nav.Link>
                <Nav.Link
                  className="text-light normal"
                  href="https://gohoardings.com/contact-us"
                >
                  Contact
                </Nav.Link>
                <Nav.Link
                  className="text-light normal px-lg-3 round-circle"
                  href="https://gohoardings.com/map-view"
                >
                  Map View
                </Nav.Link>          

              {posts ? <>
                <AiOutlineShoppingCart style={{width:"22px", height:"22px", color:'white'}} onClick={onCart} /> : <h6  style={{width:"22px", height:"22px", color:'white'}} onClick={onCart}>{items.length + cartit.length}</h6> 
                <Nav.Link
                  className="text-light normal"
                  href="/profile"  
                >
                 {posts.firstname.toUpperCase()}
                </Nav.Link>
                <Nav.Link
                  className="text-light normal"
                  href="/"
                  onClick={logOut}
                >
                 LogOut
                </Nav.Link>
                </> : <>
                
                <Nav.Link
                  className="text-light normal"
                  href="/Signup"
                
                >
                  Register
                </Nav.Link>
                <Nav.Link
                  className="text-light normal"
                  href="/Signin"
                >
                  Sign In
                </Nav.Link></>}
                
                
              
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
   </>
  )
}

export default NewNAvbar;