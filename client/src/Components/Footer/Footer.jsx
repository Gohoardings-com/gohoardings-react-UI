import React, { useState, useEffect } from "react";

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
                  value=" text text text "
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus impedit, labore assumenda optio ipsum, odio sunt
                  numquam deserunt laborum autem quis nam facilis ab ducimus
                  illo laboriosam consequatur reiciendis accusantium cupiditate
                  saepe? Id, accusamus fugiat.
                </p>
              </div>
              <div className="col mobile footer-side-line">
                <div className="quick-links text-light">
                  <p className="subhead text-center">Quick Links</p>
                  <ul className="position-relative px-5">
                    <li>Register As Medai Owner</li>
                    <li>Login As Media Owner</li>
                    <li>Register As Advertiser</li>
                    <li>Login As Advertiser</li>
                    <span className="pos-absolute end-0 top-0 me-5">
                      <li>Odoads</li>
                      <li>Blog</li>
                    </span>
                  </ul>
                </div>
              </div>
              <div className="col mobile footer-side-line">
                <div className="popular-services text-light">
                  <p className="subhead text-center">Popular Services</p>
                  <ul className="position-relative px-5">
                    <li>Traditional OOH</li>
                    <li>Mall Media</li>
                    <li>Digital OOH Media</li>
                    <li>Airport Medai</li>
                    <span className="pos-absolute end-0 top-0 me-5">
                      <li>Office Space Advertising</li>
                      <li>Transit Media</li>
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
                <div className="col">
                  <ul>
                    <li>Hoardings near me</li>
                    <li>Hoardings in Manali</li>
                    <li>Hoardings in Nanital</li>
                    <li>Hoardings in Mount Abu</li>
                    <li>Hoardings in Agra</li>
                    <li>Hoardings in Haridwar</li>
                    <li>Hoardings in Coimbatore</li>
                    <li>Hoardings in Gurgaon</li>
                  </ul>
                </div>
                <div className="col">
                  <ul>
                    <li>Hoardings near me</li>
                    <li>Hoardings in Manali</li>
                    <li>Hoardings in Nanital</li>
                    <li>Hoardings in Mount Abu</li>
                    <li>Hoardings in Agra</li>
                    <li>Hoardings in Haridwar</li>
                    <li>Hoardings in Coimbatore</li>
                    <li>Hoardings in Gurgaon</li>
                  </ul>
                </div>
                <div className="col">
                  <ul>
                    <li>Hoardings near me</li>
                    <li>Hoardings in Manali</li>
                    <li>Hoardings in Nanital</li>
                    <li>Hoardings in Mount Abu</li>
                    <li>Hoardings in Agra</li>
                    <li>Hoardings in Haridwar</li>
                    <li>Hoardings in Coimbatore</li>
                    <li>Hoardings in Gurgaon</li>
                  </ul>
                </div>
                <div className="col">
                  <ul>
                    <li>Hoardings near me</li>
                    <li>Hoardings in Manali</li>
                    <li>Hoardings in Nanital</li>
                    <li>Hoardings in Mount Abu</li>
                    <li>Hoardings in Agra</li>
                    <li>Hoardings in Haridwar</li>
                    <li>Hoardings in Coimbatore</li>
                    <li>Hoardings in Gurgaon</li>
                  </ul>
                </div>
                <div className="col">
                  <ul>
                    <li>Hoardings near me</li>
                    <li>Hoardings in Manali</li>
                    <li>Hoardings in Nanital</li>
                    <li>Hoardings in Mount Abu</li>
                    <li>Hoardings in Agra</li>
                    <li>Hoardings in Haridwar</li>
                    <li>Hoardings in Coimbatore</li>
                    <li>Hoardings in Gurgaon</li>
                  </ul>
                </div>
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
                    <li>fb</li>
                    <li className="ps-3">insta</li>
                    <li className="ps-3">in</li>
                    <li className="ps-3">twit</li>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  cumque amet iure saepe nihil quod sint magnam. Quis fugiat cum
                  quasi quaerat. Assumenda sapiente exercitationem eum tenetur
                  rerum animi rem.
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
                  <li>Traditional OOH</li>
                  <li>Mall Media</li>
                </ul>
                <ul className="col">
                  <li>Digital OOH Media</li>
                  <li>Airport Medai</li>
                </ul>
                <ul className="col">
                  <li>Office Space Advertising</li>
                  <li>Transit Media</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom-short-line pt-4 mb-4"></div>
            <div className="popular-services text-light">
              <p className="subhead text-center">Popular Services</p>
              <div className="row">
                <ul className="col">
                  <li>Traditional OOH</li>
                  <li>Mall Media</li>
                </ul>
                <ul className="col">
                  <li>Digital OOH Media</li>
                  <li>Airport Medai</li>
                </ul>
                <ul className="col">
                  <li>Office Space Advertising</li>
                  <li>Transit Media</li>
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
                    <li>fb</li>
                    <li className="ps-3">insta</li>
                    <li className="ps-3">in</li>
                    <li className="ps-3">twit</li>
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