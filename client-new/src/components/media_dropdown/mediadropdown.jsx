import React from 'react'
import {Dropdown, DropdownButton} from "react-bootstrap";

const Mediadropdown = ({userType, setUserType}) => {

  return (
      <DropdownButton
          title={userType}
          placeholder="Search your City"
          id="select-media-box"
          onSelect={(e) => setUserType(e)}
          className=""
  >
    <Dropdown.Item eventKey="traditional-ooh-media" className="p-2 mt-0 ">
    <span><img src="../../gohoarding/new-icon/t1.png" className="select-media-icon"/></span>Traditional OOH Media
  </Dropdown.Item>
  <Dropdown.Item eventKey="mall-media" className="p-2">
  <span><img src="../../gohoarding/new-icon/t2.png" className="select-media-icon"/></span>  Mall Media
    </Dropdown.Item>
  <Dropdown.Item eventKey="airport-media" className="p-2">
  <span><img src="../../gohoarding/new-icon/t3.png" className="select-media-icon"/></span> Airport Media
  </Dropdown.Item>
  <Dropdown.Item eventKey="office-media" className="p-2">
  <span><img src="../../gohoarding/new-icon/t4.png" className="select-media-icon"/></span>  Office Branding
  </Dropdown.Item>
  <Dropdown.Item eventKey="inflight-media" className="p-2">
  <span><img src="../../gohoarding/new-icon/t5.png" className="select-media-icon"/></span>  Inflight Media
  </Dropdown.Item>
  <Dropdown.Item eventKey="digital-media" className="p-2">
  <span><img src="../../gohoarding/new-icon/t6.png" className="select-media-icon"/></span>  Digital Screen
  </Dropdown.Item>
  <Dropdown.Item eventKey="transit-media" className="p-2">
  <span><img src="../../gohoarding/new-icon/t7.png" className="select-media-icon"/></span>  Transit Media
  </Dropdown.Item>
  </DropdownButton>
  )
}

export default Mediadropdown