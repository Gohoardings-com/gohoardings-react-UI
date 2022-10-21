import React from 'react'
import './dropdown.scss'
const Drop_Down_Image = ({show, setShow, Dropdown}) => {
  return (
   <>
     <Dropdown.Menu  show={show}  onMouseLeave={() => setShow(false)} className="drop-menu w-100 " >
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

export default Drop_Down_Image
