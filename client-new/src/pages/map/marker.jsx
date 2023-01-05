import React, { useState,useEffect,useContext } from "react";
import { AccountContext } from "../../apis/apiContext";
import { useSelector } from "react-redux";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { MdOutlineRemoveShoppingCart, MdOutlineShoppingCart } from 'react-icons/md'
import "./marker.scss"
import {useNavigate } from 'react-router-dom';
import instance from "../../apis/axios";

const center = {
    lat: 28.5821195,
    lng: 77.3266991
  };



const Markers = (markers) => {
  const { iconfilter, loading } = useSelector((state) => state.iconfilter);
  const navigate = useNavigate()
  const {addRemove} = useContext(AccountContext)
  markers.data.forEach(e => {
      e['position'] = {lat : e.latitude, lng : e.longitude}
    })

if(!loading){
  iconfilter.forEach(e => {
    e['position'] = {lat : e.lat, lng : e.lng}
  })
}
  const [activeMarker, setActiveMarker] = useState(null);

  const addonCart = async (code,category_name) => {
    const {data} =  await instance.post('cart/addOnCart', {
        mediaid: code,
        mediatype: category_name,
      })
      if(data.message == 'Login First'){
        window.localStorage.setItem("map",`/map`)
        window.sessionStorage.setItem("map",`/map`)
        navigate('/login')
      }else{
        addRemove({type:"INCR"})
        add(code)
     }
    }

    const add = (code) => {
      let temp = [markers.data];
      let data = temp[0];
      data.forEach((obj) => {
        if (obj.code == code) {
          obj.isDelete = 0;
          markers(data);
        }
      });
    };

    const removefroCart = async (obj) => {
      await instance.post("cart/deleteFromCart", {
        code: obj,
      });
      addRemove({ type: "DECR" });
      remove(obj);
    };
  
    const remove = (event) => {
      let temp = [markers.data];
      let data = temp[0];
      data.forEach((element) => {
        if (element.code == event) {
          element.isDelete = 1;
          markers(data);
        }
      });
    };


  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers.data.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  return (
    <GoogleMap
      zoom={10}
      onLoad={handleOnLoad}
      center={center}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ height: "100%" }}
    >
      {!markers ?
                <h1>Loading.... Please Wait</h1>: 
            markers.data.map(({ id, position, medianame,price, illumination, subcategory, height , width, ftf, code, category_name, thumb, userid, isDelete, mediaownercompanyname }) => (
        <Marker
          key={id}
        
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div className="infoWindow">
                <div className="media-image">
                <img src={thumb.startsWith("https") ? thumb : `https://${(mediaownercompanyname.trim().split(' ').slice(0, 2).join('_')).toLowerCase()}.odoads.com/media/${(mediaownercompanyname.trim().split(' ').slice(0, 2).join('_')).toLowerCase()}/media/images/new${thumb}`} alt='About media ' className='rounded-top' />
                </div>
                <div className="info-window bg-white">
                  <h5>{illumination + "-" +medianame}</h5>
                  <p><span>Media Type : </span>{subcategory}</p>
                  <p><span>Height X Width : </span>{height} X {width} feet</p>
                  <p><span>FTF : </span>{ftf}</p>
                  <p><span>Price : {price}</span></p>
                  {isDelete === 0 ? (
                        <img
                          src="../../gohoarding/new-icon/remove-cart.png"
                          onClick={() => removefroCart(code,category_name)}
                          className="addonCart text-danger sitemark  "
                        />
                      ) : (
                        <img
                          src="../../gohoarding/new-icon/add-cart.png"
                          onClick={() => addonCart(code,category_name)}
                          className="addonCart addonCart-plus sitemark "
                        />
                      )}
                 
                </div>
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
        ))
    }
      {loading ?
                <h1>Loading.... Please Wait</h1>: 
            iconfilter.map(({id, position , name, lat,lng}) => (
        <Marker
          key={id}
          icon={"../../markerIcon/restaurant.png"}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div className="infoWindow">
                  <p>{name}</p>
                  <p>{lat},{lng}</p>
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
        ))
    }
    </GoogleMap>
  );
}

export default Markers;