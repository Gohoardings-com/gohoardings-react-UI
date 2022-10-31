import React from 'react'
import GoogleMapReact from 'google-map-react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./map.scss"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const map = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 p-0 border-end position-relative">
          <div className="row filter-icons m-0">
            <div className="col-4 list d-inline-block text-center py-2 bg-warning shadow-sm border-top-0 border">
              <img src="./assests/map-icons/list.png" alt="N/A" />
            </div>
            <div className="col-4 poi d-inline-block text-center py-2 shadow-sm border-top-0 border">
              <img src="./assests/map-icons/poi.png" alt="N/A" />
            </div>
            <div className="col-4 filter d-inline-block text-center py-2 shadow-sm border-top-0 border">
              <img src="./assests/map-icons/filter.png" alt="N/A" />
            </div>
          </div>
          <div className="media-items p-2">
            <div className="items border mb-2">
              <div className="row m-0">
                <p className="my-2">
                {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(0,20)+"..."}
                </p>
                <div className="col-4">
                  <img
                    src="./images/media.jpg"
                    alt="N/A"
                    className="w-100 mt-2 pt-2"
                  />
                </div>
                <div className="col-8">
                  <ul className="list-unstyled">
                    <li>Code : GOH00M61</li>
                    <li>FTF : Unipole</li>
                    <li>Size : 30 x 20 feet</li>
                    <li>
                      Price :{" "}
                      <a href="JavaScript:void(0)">Login to see</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="items border mb-2">
              <div className="row m-0">
                <p className="my-2">
                  {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(0,20)+"..."}
                </p>
                <div className="col-4">
                  <img
                    src="./images/media.jpg"
                    alt="N/A"
                    className="w-100 mt-2 pt-2"
                  />
                </div>
                <div className="col-8">
                  <ul className="list-unstyled">
                    <li>Code : GOH00M61</li>
                    <li>FTF : Unipole</li>
                    <li>Size : 30 x 20 feet</li>
                    <li>
                      Price :{" "}
                      <a href="JavaScript:void(0)">Login to see</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="items border mb-2">
              <div className="row m-0">
                <p className="my-2">
                {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(0,20)+"..."}
                </p>
                <div className="col-4">
                  <img
                    src="./images/media.jpg"
                    alt="N/A"
                    className="w-100 mt-2 pt-2"
                  />
                </div>
                <div className="col-8">
                  <ul className="list-unstyled">
                    <li>Code : GOH00M61</li>
                    <li>FTF : Unipole</li>
                    <li>Size : 30 x 20 feet</li>
                    <li>
                      Price :{" "}
                      <a href="JavaScript:void(0)">Login to see</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="items border mb-2">
              <div className="row m-0">
                <p className="my-2">
                  {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(0,20)+"..."}
                </p>
                <div className="col-4">
                  <img
                    src="./images/media.jpg"
                    alt="N/A"
                    className="w-100 mt-2 pt-2"
                  />
                </div>
                <div className="col-8">
                  <ul className="list-unstyled">
                    <li>Code : GOH00M61</li>
                    <li>FTF : Unipole</li>
                    <li>Size : 30 x 20 feet</li>
                    <li>
                      Price :{" "}
                      <a href="JavaScript:void(0)">Login to see</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="items border mb-2">
              <div className="row m-0">
                <p className="my-2">
                {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(0,20)+"..."}
                </p>
                <div className="col-4">
                  <img
                    src="./images/media.jpg"
                    alt="N/A"
                    className="w-100 mt-2 pt-2"
                  />
                </div>
                <div className="col-8">
                  <ul className="list-unstyled">
                    <li>Code : GOH00M61</li>
                    <li>FTF : Unipole</li>
                    <li>Size : 30 x 20 feet</li>
                    <li>
                      Price :{" "}
                      <a href="JavaScript:void(0)">Login to see</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="items border mb-2">
              <div className="row m-0">
                <p className="my-2">
                  {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(0,20)+"..."}
                </p>
                <div className="col-4">
                  <img
                    src="./images/media.jpg"
                    alt="N/A"
                    className="w-100 mt-2 pt-2"
                  />
                </div>
                <div className="col-8">
                  <ul className="list-unstyled">
                    <li>Code : GOH00M61</li>
                    <li>FTF : Unipole</li>
                    <li>Size : 30 x 20 feet</li>
                    <li>
                      Price :{" "}
                      <a href="JavaScript:void(0)">Login to see</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row cart-icons m-0 position-absolute w-100 bottom-0">
            <div className="col-4 bag d-inline-block text-center py-2 bg-warning shadow-sm border-bottom-0 border">
              <img src="./assests/map-icons/bag.png" alt="N/A" />
            </div>
            <div className="col-4 rupee d-inline-block text-center py-2 shadow-sm border-bottom-0 border">
              <img src="./assests/map-icons/rupee-symbol.png" alt="N/A" />
            </div>
            <div className="col-4 filter d-inline-block text-center py-2 shadow-sm border-bottom-0 border">
              <img src="./assests/map-icons/toggle.png" alt="N/A" />
            </div>
          </div>
        </div>
        <div className="col-9 p-0">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyArg8sL3QvPC4Gq0T-u3A6zz4ZBCZ2WO1Y",
            }}
            resetBoundsOnResize={true}
            defaultCenter={{ lat: 28.5355, lng: 77.391 }}
            style={{ height: `100vh` }}
            defaultZoom={10}
          >
            <AnyReactComponent lat={28.5355} lng={77.391} text="My Marker" />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
}

export default map
