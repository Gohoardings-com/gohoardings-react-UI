import React, { useState,useEffect,useContext } from "react";
import { AccountContext } from "../../apis/ApiContext";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { MdOutlineRemoveShoppingCart, MdOutlineShoppingCart } from 'react-icons/md'
import "./marker.scss"
import {useNavigate } from 'react-router-dom';
import instance from "../../apis/Axios";

const center = {
    lat: 28.5821195,
    lng: 77.3266991
  };



const Markers = (markers) => {
  const navigate = useNavigate()
  const {addRemove} = useContext(AccountContext)
  markers.data.forEach(e => {
      e['position'] = {lat : e.latitude, lng : e.longitude}
    })


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

    const removefroCart = async (obj) => {
      await instance.post('cart/deleteFromCart', {
        code: obj.code,
      })
      addRemove({type:"DECR"})
      remove(obj)
    }
    

    const add = (code) => {
      let data = [markers.data];
      data.map((element) => {
        element.map((obj) =>{
          if (obj.code == code) {
            obj.isDelete = 0;
            markers(data);
          }
        })
      });
    };
    
    const remove = (event) => {
      let data = [markers.data];
      data.map((element) => {
        element.map((obj) =>{
          if (obj.code == event) {
            obj.isDelete = 1;
            markers(data);
          }
        })
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
      {markers.data.map(({ id, position, medianame, illumination, subcategory, height , width, ftf, code, category_name, thumb, userid, isDelete, mediaownercompanyname }) => (
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
                  <p><span>Price : Login to see price</span></p>
                  { userid == null || isDelete == null && userid != null|| isDelete == 1 ?
                    <MdOutlineShoppingCart onClick={() => addonCart(code,category_name)} className="sitemark"/> : <MdOutlineRemoveShoppingCart  className="sitemark" onClick={() => removefroCart(code)} />}
                </div>
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  );
}

export default Markers;