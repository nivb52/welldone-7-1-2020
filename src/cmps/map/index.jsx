import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./mapbox.css";

import React, { useState, Suspense } from "react";
import MapGL, { Marker } from "react-map-gl";

// Lazy Load (with React Suspense)
const GeolocateControl = React.lazy(() => import("react-map-gl"));
const Geocoder = React.lazy(() => import("react-map-gl-geocoder"));

// TOKEN
const token = require("../../secrets/api.json");
const TOKEN = token.mapbox;

// UTIL FOR RE-USE
const isExitsAsFunc = (f) => {
    return f && typeof f === "function"
}

// Style
const geolocateStyle = {
  float: "left",
  margin: "50px",
  padding: "10px"
};

// =======================
// =======================
// Map Component => 
const Map = ({
  coords,
  editCoords = null,
  editAddressByGeocoder = null,
  isEditable = false
}) => {
  const longitude = coords && coords[0] ? coords[0] : 0;
  const latitude = coords && coords[1] ? coords[1] : 0;

  const [viewport, setViewPort] = useState({
    width: "70vw",
    height: "60vh",
    longitude,
    latitude,
    zoom: 5
  });
  const mapRef = React.useRef();

  const handleOnResult = ({ result }) => {
    const { coordinates } = result.geometry;
    const [longitude, latitude] = coordinates;
    setViewPort({ ...viewport, longitude, latitude, transitionDuration: 3000 });

    // emits
    if (isExitsAsFunc(editCoords)) {
        editCoords(viewport);
    }
    if (isExitsAsFunc(editAddressByGeocoder)) {
        editAddressByGeocoder(result);
    }
};

const _onViewportChange = viewport => {
    if (!isEditable) return ;
    setViewPort({ ...viewport, transitionDuration: 3000 });
    // emit
    if (isExitsAsFunc(editCoords)) editCoords(viewport);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MapGL
        {...viewport}
        ref={mapRef}
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
          <>
            <Suspense fallback={<div>Loading...</div>}>
              <GeolocateControl
                style={geolocateStyle}
                positionOptions={{ enableHighAccuracy: true }}
                trackUserLocation={true}
                mapboxApiAccessToken={TOKEN}
              />
              <Geocoder
                mapboxApiAccessToken={TOKEN}
                mapRef={mapRef}
                onResult={handleOnResult}
                position="top-right"
              />
            </Suspense>
          </>
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
