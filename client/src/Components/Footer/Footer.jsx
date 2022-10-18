import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function useWindowSize() {
    const [size, setSize] = useState([window.innerWidth]);
  
  
    useEffect(() => {
  
      const handleResize = () => {
        setSize([window.innerWidth]);
      };
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return size;
  }


const Footer = () => {
  const category_name = "traditional-ooh-media"
  const [city, setCity] = useState([]);
  const [city_name, setgetCity] = useState("Delhi");

  const getCity = async () => {
    const { data } = await axios.get(
      "http://localhost:8080/api/v1/media/searchMedia"
    );
    setCity(data);
  };

  useEffect(() => {
    getCity();
  }, []);


const navigate = useNavigate()
    const [width] = useWindowSize();
    const [widthcss, setWidthcss] = useState(false);
    useEffect(() => {
      const handleCss = () => {
        if (width > 767) {
          setWidthcss(false);
        } else {
          setWidthcss(true);
        }
      };
      handleCss();
    }, [width]);

const contactPage = async() => {
 navigate('/contact')
}

return (
    <>
<div
        className="footer pt-3 mt-4"
        style={widthcss ? { display: "none" } : { display: "block" }}
      >
        <div className="row-1 footer-bottom-line">
          <div className="container-fluid px-5 py-4">
            <div className="row">
              <div className="col-6">
                <img src="./images/logo.png" alt="" className="brand pb-3" />

                <p className="ps-lg-2">
                  <span className="text-light">
                    India's Leading Chain Of OOH Advertising Services Agency
                  </span>
                </p>
              </div>
              <div className="col-6">
                <p className="text-light text-end">
                  Join our network and grow your buisness!
                </p>
                <input
                  type="button"
                  value=" Contact Us"
                  onClick={contactPage}
                  className="float-end"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row-2">
          <div className="container-fluid px-5 py-4">
            <div className="row">
              <div className="col">
                <p className="text-light px-5">
                India's Largest Outdoor Advertising Company
                </p>
                <p className="text-light px-5">
                It's advertising network spread across 130 cities with more than 1.2 lakh OOH and DOOH sites offering hassle-free branding experiences at an unmatched price.
                </p>
              </div>
              <div className="col mobile footer-side-line">
                <div className="quick-links text-light">
                  <p className="subhead text-center">Quick Links</p>
                  <ul className="position-relative px-5">
                    <Nav.Link href="/register">Register As media Owner</Nav.Link>
                    <Nav.Link href="/login">Login As Media Owner</Nav.Link>
                    <Nav.Link href="/register">Register As Advertiser</Nav.Link>
                    <Nav.Link href="/login">Login As Advertiser</Nav.Link>
                    <span className="pos-absolute end-0 top-0 me-5">
                      <Nav.Link href="https://odoads.com/"  target="_blank">Odoads</Nav.Link>
                      <Nav.Link  href="https://www.gohoardings.com/blog/" target="_blank">Blog</Nav.Link>
                    </span>
                  </ul>
                </div>
              </div>
              <div className="col mobile footer-side-line">
                <div className="popular-services text-light">
                  <p className="subhead text-center">Popular Services</p>
                  <ul className="position-relative px-5">
                    <li><Link
                  to={`/services/${"traditional-ooh-media"}/${"delhi"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Traditional OOH</Link></li>
                    <li><Link
                  to={`/services/${"digital-media"}/${"delhi"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Digital Media</Link></li>
                    <li><Link
                  to={`/services/${"transit-media"}/${"delhi"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Transit-Media</Link></li>
                    <li><Link
                  to={`/services/${"mall-media"}/${"delhi"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Mall Media</Link></li>
                    <span className="pos-absolute end-0 top-0 me-5">
                      <li><Link
                  to={`/services/${"airport-media"}/${"delhi"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Airport Media</Link></li>
                      <li><Link
                  to={`/services/${"inflight_media"}/${"delhi"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Inflight Media</Link></li>
                    </span>
                  </ul>
                </div>
              </div>
              <div className="footer-bottom-short-line pt-4"></div>
            </div>
          </div>
        </div>
        <div className="row-3">
          <div className="trending-cities">
            <div className="container-fluid px-5 text-light">
              <p className="subhead ps-4 ms-2">Trending Cities</p>
              <div className="row">
                  {
                    city.map(obj => (
                      <div className="col-3">
                        <Link to={`/services/${category_name}/${obj.name}`} className="link-light text-decoration-none">Hoardings in {obj.name}</Link>
                      </div>
                    ))
                  }
              </div>
              <div className="footer-bottom-short-line pt-4"></div>
            </div>
          </div>
        </div>
        <div className="row-5">
          <div className="social-links">
            <div className="container-fluid px-5">
              <div className="row">
                <div className="col-md-4 link-center">
                  <ul className="d-flex text-light list-inline pt-3 ps-md-3">
                  <Nav.Link href="https://www.facebook.com/gohoardings/" target="_blank"><img src="./images/Facebook.png" alt="facebook"/></Nav.Link>
                    <Nav.Link className="ps-3" href="https://www.instagram.com/gohoardings/" target="_blank"><img src="./images/Instagram.png"  alt="instagram"/></Nav.Link>
                    <Nav.Link className="ps-3" href="https://www.linkedin.com/company/gohoardings/" target="_blank"><img src="./images/Linkedin.png"  alt="linkedin"/></Nav.Link>
                    <Nav.Link className="ps-3" href="https://twitter.com/gohoardings" target="_blank"><img src="./images/Twitter.png"  alt="twitter"/></Nav.Link>
                  </ul>
                </div>
                <div className="col-md-8">
                  <p className="text-light text-md-end pt-md-3 link-center">
                    copyrights &#169; 2022 Gohaordings.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="footer mt-4"
        style={widthcss ? { display: "block" } : { display: "none" }}
      >
        <div className="row-1">
          <div className="container-fluid">
            <div className="row pt-3 tagline">
              <div className="col-sm-4">
                <img src="./images/logo.png" alt="" className="brand pb-3" />
              </div>
              <div className="col-sm-8">
                <p className="text-sm-end text-light">
                  India's Leading Chain Of OOH Advertising Services Agency
                </p>
              </div>
              <div>
                <p className="text-light text-center px-5">
                It's advertising network spread across 130 cities with more than 1.2 lakh OOH and DOOH sites offering hassle-free branding experiences at an unmatched price.

                </p>
              </div>
              <div className="col-12">
                <p className="text-light text-center text-end">
                  Join our network and grow your buisness!
                </p>
                <div className="w-100 d-flex justify-content-center">
                  <input type="button" value=" text text text " />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-short-line pt-4"></div>
        </div>
        <div className="row-2">
          <div className="container-fluid px-5 pt-4">
            <div className="quick-links text-light">
              <p className="subhead text-center">Quick Links</p>
              <div className="row">
                <ul className="col">
                <li><Link
                  to={`/services/${"traditional-ooh-media"}/${"delhi"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Traditional OOH</Link></li>
                 <li><Link
                  to={`/services/${"digital-media"}/${"delhi"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Digital Media</Link></li>
                </ul>
                <ul className="col">
                <li><Link
                  to={`/services/${"transit-media"}/${"delhi"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Transit-Media</Link></li>
                  <li><Link
                  to={`/services/${"mall-media"}/${"delhi"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Mall Media</Link></li>
                </ul>
                <ul className="col">
                <li><Link
                  to={`/services/${"airport-media"}/${"delhi"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Airport Media</Link></li>
                      <li><Link
                  to={`/services/${"inflight_media"}/${"delhi"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Inflight Media</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom-short-line pt-4 mb-4"></div>
            <div className="popular-services text-light">
              <p className="subhead text-center">Popular Services</p>
              <div className="row">
                <ul className="col">
                <li><Link
                  to={`/services/${"transit-media"}/${"delhi"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Transit-Media</Link></li>
                  <li><Link
                  to={`/services/${"mall-media"}/${"delhi"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Mall Media</Link></li>
                </ul>
                <ul className="col">
                <li><Link
                  to={`/services/${"airport-media"}/${"delhi"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Airport Media</Link></li>
                      <li><Link
                  to={`/services/${"inflight_media"}/${"delhi"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Inflight Media</Link></li>
                </ul>
                <ul className="col">
                <li><Link
                  to={`/services/${"transit-media"}/${"delhi"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Transit-Media</Link></li>
                  <li><Link
                  to={`/services/${"mall-media"}/${"delhi"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Mall Media</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom-short-line pt-4"></div>
          </div>
        </div>
        <div className="row-5">
          <div className="social-links">
            <div className="container-fluid px-5">
              <div className="row">
                <div className="col-md-4">
                  <ul className="d-flex text-light list-inline pt-3 ps-md-3 link-center">
                  <Nav.Link className="ps-3" href="https://www.facebook.com/gohoardings/" target="_blank"><img src="./images/Facebook.png" alt="facebook"/></Nav.Link>
                    <Nav.Link className="ps-3" href="https://www.instagram.com/gohoardings/" target="_blank"><img src="./images/Instagram.png"  alt="instagram"/></Nav.Link>
                    <Nav.Link className="ps-3" href="https://www.linkedin.com/company/gohoardings/" target="_blank"><img src="./images/Linkedin.png"  alt="linkedin"/></Nav.Link>
                    <Nav.Link className="ps-3" href="https://twitter.com/gohoardings" target="_blank"><img src="./images/Twitter.png"  alt="twitter"/></Nav.Link>
                  </ul>
                </div>
                <div className="col-md-8">
                  <p className="text-light text-md-end pt-md-3 link-center">
                    copyrights &#169; 2022 Gohaordings.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
)
}
export default Footer;