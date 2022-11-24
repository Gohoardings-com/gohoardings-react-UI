import React,{useState, useEffect} from 'react'
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';
import instance from '../../apis/Axios';
import UserDetail from './UserDetail';
import Drop_Down_Image from '../DropDrown/Drop_Down_Image';
import { MdLocationOn, MdOutlineSearch, MdOutlineMail } from "react-icons/md";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Flotinggnavbar = () => {
  const [show,setShow] =  useState(false);
  const [city, setCity] = useState([]);
  const [posts, setPosts] = useState()

  const getCity = async () => {
    const { data } = await instance.get(
      "media/searchMedia"
    );
    setCity(data);
  };

  useEffect(() => {
    getCity();
    setPosts(posts)
  }, [posts]);

const [value, setValue] = useState("delhi");
const [userType, setUserType] = useState("traditional-ooh-media");

const onChange = (event) => {

setValue(event.target.value);
};

const onSearch = (searchTerm) => {
setValue(searchTerm);
// our api to fetch the search result
};

const handleSelect = (e) => {

setUserType(e);
};
 
  return (
   <>
     <Navbar expand="lg  colapse-search-bar navbar-main-floating pt-2 pb-2 m-0  ">
        <Dropdown onMouseOver={() => setShow(true)}>
          <Dropdown.Toggle variant="transparent border-0 ">
            <Navbar.Brand href="/" id="home">
              <img src="../../images/logo.png" className="brand pt-2 pb-0 " />
            </Navbar.Brand>
          </Dropdown.Toggle>
        </Dropdown>
        <Navbar.Toggle aria-controls=" border-0" />
        <Drop_Down_Image show={show} setShow={setShow} Dropdown={Dropdown} />
        <Navbar.Collapse id="basic-navbar-na">
        
            <div className="border-0   ms-lg-3 ">
              <Form className="d-flex colapse-search-bar Select-location ms-2   ">
                <input 
                    placeholder="Search your Location "
                    aria-describedby="basic-addon1"
                    onChange={onChange}
                    value={value}
                    id="search-location-box"
                    className="me-2 p-2 mt-3"
                    
                  />
 
                <div className=" dropdown-menu border-0 show ps-3  dropdown-menu-location">
                {city
                    .filter((item) => {
                      const searchTerm = value.toLowerCase();
                      const fullName = item.name.toLowerCase();

                      return (
                        searchTerm &&
                        fullName.startsWith(searchTerm) &&
                        fullName !== searchTerm
                      );
                    })
                    .slice(0, 10)
                    .map((item) => (
                      <div
                      className="border-1"
                      onClick={() => onSearch(item.name)}
                      key={item.name}
                    >
                      <h6 className=" text-secondary mt-1">
                        {item.name}
                      </h6>
                    </div>
                  ))}
                </div>
                <DropdownButton
                  align="center"
                  title={userType}
                  id="select-media-box"
                  onSelect={handleSelect}
                  className="mt-3"
                >
                    <Dropdown.Item eventKey="traditional-ooh-media">
                  Traditional OOH Media
                </Dropdown.Item>
                <Dropdown.Item eventKey="mall_media">Mall Media</Dropdown.Item>
                <Dropdown.Item eventKey="airport_media">
                  Airport Media
                </Dropdown.Item>
                <Dropdown.Item eventKey="office_branding">
                  Office Branding
                </Dropdown.Item>
                <Dropdown.Item eventKey="inflight_media">
                  Inflight Media
                </Dropdown.Item>
                <Dropdown.Item eventKey="digital_screen">
                  Digital Screen
                </Dropdown.Item>
                <Dropdown.Item eventKey="transit_media">
                  Transit Media
                </Dropdown.Item>
                </DropdownButton>
                <Link
                 to={`/media/${userType}/${value}`}
                  
                >
                <Button
                  className="border-0  btn-danger ms-2 mt-3 "
                   id="search-button-flotnav"
                >
                  <MdOutlineSearch className="search-logo " />
                </Button>
                </Link>
              </Form>
            </div>
            <div className="d-flex ms-5 mt-2 pt-1">
              <Nav.Link
                className="mapLink float-map-btn pt-2 text-center   rounded-pill "
                href="/map"
              >
                <MdLocationOn className=" float-map-logo text-bold text-danger   " />
                Map View
              </Nav.Link>
              <Nav className="ms-3">
              <UserDetail posts={posts} setPosts={setPosts}/>
              </Nav>
            </div>
        
        </Navbar.Collapse>
      </Navbar>
   </>
   
  )
}

export default Flotinggnavbar
