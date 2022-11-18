import React from 'react'
import { MdOutlineMail } from 'react-icons/md'
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from "react-bootstrap/Nav";
import UserDetail from './UserDetail';

const Flotinggnavbar = () => {
  return (
   <>
    <Navbar expand="lg px-md-4 colapse-search-bar rounded-4 w-100">
        <Dropdown  >
          {/* onMouseOver={() => setShow(true)} */}
          <Dropdown.Toggle variant="transparent"   >
            <Navbar.Brand href="/" id="home">
              {/* <div className="brand-logo"> */}
              <img src="../../images/logo.png"  className="brand" />
              {/* <div className="text-light"></div> */}
              {/* </div> */}
            </Navbar.Brand>
          </Dropdown.Toggle>
        </Dropdown>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Drop_Down_Image show={show} setShow={setShow} Dropdown={Dropdown}/> */}
        <Navbar.Collapse id="basic-navbar-nav" className="new-search-fields">
         
         <Nav>
         <div className="border border-dark h-auto input-group ms-lg-3 overflow-hidden rounded-pill w-100">
          
          <Form.Select aria-label="Default select example"   className="form-control border-0  py-2">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
          </div>
         </Nav>
         <Nav>
         <div className="border border-dark h-auto input-group ms-lg-3 overflow-hidden rounded-pill w-100">
          
          <Form.Select aria-label="Default select example"   className="form-control border-0  py-2">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
          </div>
         </Nav>
         <Nav>

       <button className='ms-5 me-5'>Serach</button>
         </Nav>
         <Nav>

         <UserDetail/>
         </Nav>
      

        </Navbar.Collapse>
    </Navbar>
   </>
   
  )
}

export default Flotinggnavbar
