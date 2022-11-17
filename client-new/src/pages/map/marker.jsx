import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import "./marker.scss"

const markers = [
  {
    id: 1,
    name: "Noida",
    position: { lat: 28.5821195, lng: 77.3266991 }
  }
];

const center = {
    lat: 28.5821195,
    lng: 77.3266991
  };

function Markers() {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
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
      {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div className="infoWindow">
                <div className="media-image">
                <img src="./gohoarding/new1568268924_79858.jpg" alt="" />
                </div>
                <div className="info-window bg-white">
                  <h5>Facade - DLF Promenade, Delhi</h5>
                  <p><span>Media Type : </span>Unipole/Hoarding</p>
                  <p><span>Height X Width : </span>30 X 20 feet</p>
                  <p><span>Illumination : </span>Frontlit</p>
                  <p><span>Price : Login to see price</span></p>
                  <img src="./assests/map-icons/bag.png" alt="N/A" />
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