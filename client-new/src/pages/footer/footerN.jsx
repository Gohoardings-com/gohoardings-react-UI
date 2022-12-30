import React, { useState, useEffect } from "react";
import "./footer.scss";

import { Link } from "react-router-dom";
import instance from "../../apis/axios";
import { FiPhoneCall } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

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
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const FooterN = () => {
  const [getEmail, setEmail] = useState([]);

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

  const handelSubmit = async (e) => {
    e.preventDefault();
    await instance.post("enquiry/message", {
      email: getEmail,
    });
  };
  const logo = [
    {
      id: 1,

      img: "../.../../clientslogo/facebook.png",
      alt: "logo1",
      link: "https://www.facebook.com/gohoardings/",
    },
    {
      id: 2,
      img: "../../clientslogo/insta.png",
      alt: "logo2",
      link: "https://www.instagram.com/gohoardings/",
    },
    {
      id: 3,
      img: "../../clientslogo/twiter.png",
      alt: "logo3",
      link: "https://twitter.com/gohoardings",
    },
    {
      id: 4,
      img: "../../clientslogo/linkdin.png",
      alt: "logo4",
      link: "https://www.linkedin.com/company/gohoardings/",
    },
    {
      id: 5,
      img: "../../clientslogo/meail.png",
      alt: "logo5",
      link: "/",
    },
  ];
  return (
    <>
      <div className=" footerN-content  pb-3  p-0 px-5 py-5  ">
        <div className="row footer-branding pb-4">
          <div className="col-md-3 pt-1">
            <img
              src="../../images/logo.png"
              alt=""
              className="brand-logo-footer "
            />
          </div>
          <div className="col-md-9 ">
            <h4 className="f-heading">
              India s Largest Outdoor Advertising Company
            </h4>
            <h6 className="f-second-heading pt-1">
              It s advertising network spread across 130 cities with more than
              1.2 lakh OOH and DOOH sites offering hassle free branding
              experiences
              <br /> at an unmatched price.
            </h6>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col  py-3 ms-2">
            <div className="quick-links ">
              <h4 className="   f-heading">Quick Links</h4>
              <ul className="position-relative  pt-3  ps-0">
                <li className="py-1">
                  {" "}
                  <a
                    className=" text-decoration-none f-heading-clr"
                    href="https://odoads.com/register"
                    target="_blank"
                  >
                    Singup As media Owner
                  </a>
                </li>
                <li className="py-1">
                  <a
                    className=" text-decoration-none f-heading-clr"
                    href="https://odoads.com/login"
                    target="_blank"
                  >
                    {" "}
                    Singin As Media Owner{" "}
                  </a>
                </li>
                <li className="py-1">
                  {" "}
                  <a
                    className=" text-decoration-none f-heading-clr"
                    href="/login"
                    target="_blank"
                  >
                    Register As Advertiser
                  </a>
                </li>
                <li className="py-1">
                  {" "}
                  <a
                    className=" text-decoration-none f-heading-clr"
                    href="/login"
                    target="_blank"
                  >
                    Login As Advertiser
                  </a>
                </li>
                <span className="pos-absolute">
                  <li className="py-1">
                    <a
                      href="https://www.odoads.com/"
                      target="_blank"
                      className=" text-decoration-none f-heading-clr"
                    >
                      Odoads
                    </a>
                  </li>
                  <li className="py-1">
                    <a
                      href="https://www.gohoardings.com/blog/"
                      target="_blank"
                      className=" text-decoration-none f-heading-clr"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="py-1">
                    <a
                      href="/about"
                      className=" text-decoration-none f-heading-clr"
                    >
                      About Us
                    </a>{" "}
                  </li>
                  <li className="py-1">
                    <a
                      href="/team"
                      className=" text-decoration-none f-heading-clr"
                    >
                      Team
                    </a>
                  </li>
                  <li className="py-1">
                    <a
                      href="/contact"
                      className=" text-decoration-none f-heading-clr"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="py-1 text-decoration-none f-heading-clr">
                    {" "}
                    Privacy Policy
                  </li>
                </span>
              </ul>
            </div>
          </div>
          <div className="col  py-3">
            <div className="popular-media ">
              <h4 className=" f-heading  ">Popular Services</h4>
              <ul className=" pt-3  ps-0">
                <li className="py-1">
                  <Link
                    to={`/traditional-ooh-media/delhi`}
                    className="   text-decoration-none f-heading-clr "
                    onClick={topFunction}
                  >
                    {" "}
                    Traditional OOH
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    to={`/digital-media/delhi`}
                    className="   text-decoration-none f-heading-clr"
                    onClick={topFunction}
                  >
                    {" "}
                    Digital Media
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    to={`/transit-media/delhi`}
                    className="   text-decoration-none f-heading-clr"
                  >
                    {" "}
                    Transit-Media
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    to={`/mall-media/delhi`}
                    onClick={topFunction}
                    className="   text-decoration-none f-heading-clr"
                  >
                    {" "}
                    Mall Media
                  </Link>
                </li>
                <span className="pos-absolute end-0 top-0 me-5">
                  <li className="py-1">
                    <Link
                      onClick={topFunction}
                      to={`/airport-media/delhi`}
                      className="   text-decoration-none f-heading-clr"
                    >
                      {" "}
                      Airport Media
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      onClick={topFunction}
                      to={`/inflight_media/delhi`}
                      className="   text-decoration-none f-heading-clr"
                    >
                      {" "}
                      Inflight Media
                    </Link>
                  </li>
                </span>
              </ul>
            </div>
          </div>
          <div className="col  py-3">
            <h4 className="   f-heading">Trending Cities</h4>
            <ul className=" pt-3  ps-0 ">
              <li className="py-1">
                <Link
                  onClick={topFunction}
                  to={`/traditional-ooh-media/delhi`}
                  className="   text-decoration-none f-heading-clr "
                >
                  {" "}
                  Delhi
                </Link>
              </li>
              <li className="py-1">
                <Link
                  to={`/traditional-ooh-media/goa`}
                  onClick={topFunction}
                  className="   text-decoration-none f-heading-clr"
                >
                  {" "}
                  Goa
                </Link>
              </li>
              <li className="py-1">
                <Link
                  to={`/traditional-ooh-media/bengaluru`}
                  onClick={topFunction}
                  className="   text-decoration-none f-heading-clr"
                >
                  {" "}
                  Bengaluru
                </Link>
              </li>
              <li className="py-1">
                <Link
                  to={`/traditional-ooh-media/chennai`}
                  onClick={topFunction}
                  className="   text-decoration-none f-heading-clr"
                >
                  {" "}
                  Chennai
                </Link>
              </li>
              <span className="pos-absolute end-0 top-0 me-5">
                <li className="py-1">
                  <Link
                    to={`/traditional-ooh-media/hyderabad`}
                    onClick={topFunction}
                    className="   text-decoration-none f-heading-clr"
                  >
                    {" "}
                    Hyderabad
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    to={`/traditional-ooh-media/Mumbai`}
                    onClick={topFunction}
                    className="   text-decoration-none f-heading-clr"
                  >
                    {" "}
                    Mumbai
                  </Link>
                </li>
              </span>
            </ul>
          </div>

          <div className="col  py-3">
            <h4 className="  f-heading">Reach us</h4>
            <ul className=" pt-3  ps-0">
              <li className="py-1 reach-clr py-2">
                <FiPhoneCall className="me-3 reach-clr-icon" /> +91 7777871717
              </li>
              <li className="py-1 reach-clr py-2">
                <BiMailSend className="me-3 reach-clr-icon" />{" "}
                gohoardings@gmail.com
              </li>
              <li className="d-flex reach-clr py-3">
                <MdLocationOn className="me-3 reach-clr-icon mt-1" />{" "}
                <p className="reach-clr">
                  E-82, 3rd Floor, Sector 6,
                  <br />
                  Noida 201301,
                  <br />
                  Near Paytm Office
                </p>
              </li>
              <div className="grid-container1 ">
                {logo.map((clients, index) => {
                  return (
                    <div className="grid-item" key={index}>
                      <a href={clients.link} target="_blank">
                        <img
                          src={clients.img}
                          alt={clients.alt}
                          className="img-fluid logo-img"
                        />
                      </a>
                    </div>
                  );
                })}
              </div>
            </ul>
          </div>
        </div>
        <div className="row  payment-footer-section">
          <div className="col text-light "></div>
          <div className="col text-light ">
            <h4 className=" f-heading  text-nowrap  ">Payment Option</h4>
            <img
              className="w-100   mt-3"
              src="../.../../clientslogo/payment.png"
              alt="payment"
            />
            <h6 className=" py-4 text-muted">
              copyrights &#169; 2022 Gohaordings.com
            </h6>
          </div>
          <div className="col text-light  offset-2">
            <h4 className="f-heading  text-nowrap  ">
              Best deals in your inbox
            </h4>
            <form
              onSubmit={handelSubmit}
              className="d-flex flex-sm-row flex-column flex-lg-row flex-md-column p-2 ps-1"
            >
              <input
                className="text-dark border-0  p-2 cnt-input-box rounded-start mt-2 "
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter you email address"
                formcontrolname="email"
              />
              <button
                className="text-light btn bg-warning p-2 w-25  border-0 rounded-0 rounded-end mt-2"
                type="submit"
              >
                Contact{" "}
              </button>
            </form>
            <h6 className=" py-4 text-muted">
              * Join our newsletter for the most recent information.
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterN;
