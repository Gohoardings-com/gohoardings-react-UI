import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AccountContext } from "../../context/Context";
import { authActions } from "../../store";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import instance from '../../Apis/apis'
import { userDetails } from "../../reducer/adminAction";
import UserDetails from "../../pages/UserDetails";

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
  const data = await instance.post("logout", null ,{
    withCredentials:true
  })
  if(data == 200){
    localStorage.clear();
      sessionStorage.clear()
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
     {/* <Navbar expand="lg px-md-4">
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
        </Navbar> */}
       <Navbar expand="lg px-md-4">
        <div className="container-fluid py-md-4 px-md-4">
        <Dropdown onMouseLeave={() => setShow(false)}
      onMouseOver={() => setShow(true)}>
      <Dropdown.Toggle variant="transparent"  id="dropdown-basic" >   
          <Navbar.Brand >
            <img src="./images/logo.png" alt="" srcSet="" className="brand" onClick={home} />
          </Navbar.Brand>
          </Dropdown.Toggle>  
         
          </Dropdown> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
           <UserDetail posts={posts} logOut={logOut}/>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Dropdown.Menu show={show} className="w-100 ">
      <div className="container-fluid bg-body">
                  <div className="row">
                    <div className="col-6">
                      <h6>BROWSE MEDIA</h6>
                    </div>
                    <div className="col-3">
                      <h6>GOHOARDINGS</h6>
                    </div>
                    <div className="col-3">SUPPORT & FAQ</div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <ul className="list-none">
                        <li>Traditional OOH</li>
                        <li>Mall Media</li>
                        <li>Airport Media</li>
                        <li>Multiplex Advertising</li>
                        <li>Office Branding</li>
                        <li>Bus & Auto Branding</li>
                      </ul>
                    </div>
                    <div className="col-3">
                      <ul className="list-none">
                        <li>Digital Screen</li>
                        <li>InFlight Branding</li>
                        <li>Transit Media</li>
                      </ul>
                    </div>
                    <div className="col-3">
                      <ul className="list-none">
                        <li>About Us</li>
                        <li>Team</li>
                        <li>News & Media</li>
                        <li>Testimonials</li>
                        <li>Case Studies</li>
                      </ul>
                    </div>
                    <div className="col-3">
                      <ul className="list-none">
                        <li>Contact Us</li>
                        <li>Blogs</li>
                        <li>FAQs</li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h6>Get Instant Quote</h6>
                      <h1>Call us on: +91 7777871717</h1>
                    </div>
                    <div className="col-6">
                      <button className="btn btn-primary float-end">
                        Write To Us
                      </button>
                    </div>
                  </div>
      </div>
      </Dropdown.Menu>
   </>
  )
}

export default NewNAvbar;