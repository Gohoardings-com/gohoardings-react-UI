import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import "./footer.scss";
import { Link, useNavigate } from "react-router-dom";
import { CgCheck } from "react-icons/cg";
import instance from "../../apis/axios";

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

const Footer = () => {
  const [getEmail, setEmail] = useState([]);
  const navigate = useNavigate();
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

  return (
    <>
      <div className="footer pb-3 w-100 p-0 bg-dark px-5 py-5">
        <div className="container-fluid ms-4">
          <div className="row w-100">
            <div className="col py-3">
              <img
                src="../../images/logo.png"
                alt=""
                className="brand-logo-footer "
              />
              <h5 className=" text-muted pt-5">
                India's Largest Outdoor Advertising Company
              </h5>
              <h6 className="text-muted pt-5">
                It's advertising network spread across 130 cities with more than
                1.2 lakh OOH and DOOH sites offering hassle-free branding
                experiences at an unmatched price.
              </h6>
            </div>
            <div className="col  py-3 ms-2">
              <div className="quick-links text-light">
                <h4 className="fw-bold  text-nowrap text-muted ms-5">
                  Quick Links
                </h4>
                <ul className="position-relative text-muted pt-3 ms-3">
                  <li className="text-nowrap">
                    {" "}
                    <a
                      className="text-muted text-decoration-none"
                      href="https://odoads.com/register"
                      target="_blank"
                    >
                      <CgCheck /> Singup As media Owner
                    </a>
                  </li>
                  <li className="text-nowrap">
                    <a
                      className="text-muted text-decoration-none"
                      href="https://odoads.com/login"
                      target="_blank"
                    >
                      {" "}
                      <CgCheck /> Singin As Media Owner{" "}
                    </a>
                  </li>
                  <li className="text-nowrap">
                    {" "}
                    <a
                      className="text-muted text-decoration-none"
                      href="/login"
                      target="_blank"
                    >
                      <CgCheck /> Register As Advertiser
                    </a>
                  </li>
                  <li className="text-nowrap">
                    {" "}
                    <a
                      className="text-muted text-decoration-none"
                      href="/login"
                      target="_blank"
                    >
                      <CgCheck /> Login As Advertiser
                    </a>
                  </li>
                  <span className="pos-absolute">
                    <li className="text-nowrap">
                      <a
                        href="https://www.odoads.com/"
                        target="_blank"
                        className="text-muted text-decoration-none"
                      >
                        <CgCheck /> Odoads
                      </a>
                    </li>
                    <li className="text-nowrap">
                      <a
                        href="https://www.gohoardings.com/blog/"
                        target="_blank"
                        className="text-muted text-decoration-none"
                      >
                        <CgCheck /> Blog
                      </a>
                    </li>
                    <li className="text-nowrap">
                      <a
                        href="/about"
                        className="text-muted text-decoration-none"
                      >
                        <CgCheck /> About Us
                      </a>{" "}
                    </li>
                    <li className="text-nowrap">
                      <a
                        href="/team"
                        className="text-muted text-decoration-none"
                      >
                        <CgCheck /> Team
                      </a>
                    </li>
                    <li className="text-nowrap">
                      <a
                        href="/contact"
                        className="text-muted text-decoration-none"
                      >
                        <CgCheck /> Contact
                      </a>
                    </li>
                    <li className="text-nowrap">
                      {" "}
                      <CgCheck /> Privacy Policy
                    </li>
                  </span>
                </ul>
              </div>
            </div>
            <div className="col  py-3">
              <div className="popular-media text-light">
                <h4 className="fw-bold text-nowrap text-muted ps-5">
                  Popular media
                </h4>
                <ul className="   pt-3 text-muted ms-3">
                  <li>
                    <Link
                      to={`/traditional-ooh-media/delhi`}
                      className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                      onClick={topFunction}
                    >
                      {" "}
                      <CgCheck /> Traditional OOH
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/digital-media/delhi`}
                      className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                      onClick={topFunction}
                    >
                      {" "}
                      <CgCheck /> Digital Media
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/transit-media/delhi`}
                      className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                    >
                      {" "}
                      <CgCheck /> Transit-Media
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/mall-media/delhi`}
                      onClick={topFunction}
                      className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                    >
                      {" "}
                      <CgCheck /> Mall Media
                    </Link>
                  </li>
                  <span className="pos-absolute end-0 top-0 me-5">
                    <li>
                      <Link
                        onClick={topFunction}
                        to={`/airport-media/delhi`}
                        className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                      >
                        {" "}
                        <CgCheck /> Airport Media
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={topFunction}
                        to={`/inflight_media/delhi`}
                        className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                      >
                        {" "}
                        <CgCheck /> Inflight Media
                      </Link>
                    </li>
                  </span>
                </ul>
              </div>
            </div>
            <div className="col  py-3">
              <h4 className="fw-bold text-nowrap text-muted ps-5">
                Trending Cities
              </h4>
              <ul className="position-relative pt-3 text-muted ms-3">
                <li>
                  <Link
                    onClick={topFunction}
                    to={`/traditional-ooh-media/delhi`}
                    className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                  >
                    {" "}
                    <CgCheck />
                    Delhi
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/traditional-ooh-media/goa`}
                    onClick={topFunction}
                    className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                  >
                    {" "}
                    <CgCheck />
                    Goa
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/traditional-ooh-media/bengaluru`}
                    onClick={topFunction}
                    className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                  >
                    {" "}
                    <CgCheck />
                    Bengaluru
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/traditional-ooh-media/chennai`}
                    onClick={topFunction}
                    className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                  >
                    {" "}
                    <CgCheck />
                    Chennai
                  </Link>
                </li>
                <span className="pos-absolute end-0 top-0 me-5">
                  <li>
                    <Link
                      to={`/traditional-ooh-media/hyderabad`}
                      onClick={topFunction}
                      className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                    >
                      {" "}
                      <CgCheck />
                      Hyderabad
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/traditional-ooh-media/Mumbai`}
                      onClick={topFunction}
                      className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                    >
                      {" "}
                      <CgCheck />
                      Mumbai
                    </Link>
                  </li>
                </span>
              </ul>
            </div>
          </div>
          <div className="row  w-100 ">
            <div className="col-12 col-sm-3 text-light py-3">
              <h4 className="fw-bold  text-nowrap  text-muted">
                Payment Option
              </h4>
              <img
                className="w-100 h-auto bg-light  mt-3"
                src="https://cdn.shopify.com/s/files/1/0075/1009/7979/files/credit-card-icons-footer-2_6c2944f9-234e-49f3-b545-deca18efbfb9.png"
                alt="payment"
              />
            </div>
            <div className="col-12 col-sm-4 py-3 ms-5 ps-2 ">
              <h4 className=" fw-bold  text-nowrap text-muted  ">Address</h4>
              <h6 className="text-muted  pt-3">
                E-82, 3rd Floor, Sector 6, Noida - 201301 Landmark : Near Paytm
                Office
              </h6>
              <span className="strong   text-light">Phone: </span>
              <span className="highlighted text-light">+91 77778 71717</span>
            </div>
            <div className="col-12 col-sm-4 py-3 ms-5 ">
              <h4 className="fw-bold text-muted  text-wrap">
                Best deals in your inbox
              </h4>
              <h6 className=" p-2 ps-0 text-muted">
                Join our newsletter for the most recent information.
              </h6>
              <form
                onSubmit={handelSubmit}
                className="d-flex flex-sm-row flex-column flex-lg-row flex-md-column p-2 ps-1"
              >
                <input
                  className="text-dark border-0  rounded-3 cnt-input-box"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter you email address"
                  formcontrolname="email"
                />
                <input
                  className="text-light btn bg-black ms-lg-2 border-0 rounded-3"
                  type="submit"
                  value="Contact"
                />
              </form>
            </div>
          </div>

          <div className="row  w-100">
            <div className="col-sm-7  py-3">
              <h4 className="fw-bold text-nowrap text-muted">
                Contact with Us
              </h4>
              <ul className="d-flex list-inline ">
                <Nav.Link
                  href="https://www.facebook.com/gohoardings/"
                  className=" footer-img-logo me-2"
                  target="_blank"
                >
                  <img src="../../images/Facebook.png" alt="facebook" />
                </Nav.Link>
                <Nav.Link
                  className=" footer-img-logo me-2"
                  href="https://www.instagram.com/gohoardings/"
                  target="_blank"
                >
                  <img src="../../images/Instagram.png" alt="instagram" />
                </Nav.Link>
                <Nav.Link
                  className=" footer-img-logo me-2"
                  href="https://www.linkedin.com/company/gohoardings/"
                  target="_blank"
                >
                  <img src="../../images/Linkedin.png" alt="linkedin" />
                </Nav.Link>
                <Nav.Link
                  className=" footer-img-logo"
                  href="https://twitter.com/gohoardings"
                  target="_blank"
                >
                  <img src="../../images/Twitter.png" alt="twitter" />
                </Nav.Link>
              </ul>
            </div>
            <div className="col-sm-4  py-3 text-sm-end text-start text-bottom">
              <h6 className="text-white fw-bolder mt-5 me-2">
                copyrights &#169; 2022 Gohaordings.com
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
