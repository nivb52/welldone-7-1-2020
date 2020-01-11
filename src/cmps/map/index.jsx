import "mapbox-gl/dist/mapbox-gl.css";
import "./mapbox.css";

import React, { useState } from "react";
import MapGL, { GeolocateControl, Marker } from "react-map-gl";

const token = require("../../secrets/api.json");

const TOKEN = token.mapbox;

const geolocateStyle = {
  //   display: isEditable ? "block" : "none",
  float: "left",
  margin: "50px",
  padding: "10px"
};

const Map = ({ coords, editCoords = null, isEditable = false }) => {
  const longitude = coords && coords[0] ? coords[0] : 0;
  const latitude = coords && coords[1] ? coords[1] : 0;

  const [viewport, setViewPort] = useState({
    width: "70vw",
    height: "60vh",
    longitude,
    latitude,
    zoom: 4
  });

  const _onViewportChange = viewport => {
    if (!isEditable) return;
    setViewPort({ ...viewport, transitionDuration: 3000 });
    if (editCoords) editCoords(viewport);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/outdoors-v9"
        onViewportChange={_onViewportChange}
      >
        <Marker
          latitude={latitude}
          longitude={longitude}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <div>👇</div>
        </Marker>

        {isEditable && (
          <GeolocateControl
            style={geolocateStyle}
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
          
        )}
      </MapGL>
      {!isEditable && (
        <div className="mapbox sidebar-ovelay">
          <figcaption>
            Longitude: {viewport.longitude} | Latitude: {viewport.latitude}
          </figcaption>
        </div>
      )}
    </div>
  );
};

export default Map;
