import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
const api = require('../secrets/api.json');

export default function Mapbox({coords}) {
  const Map = ReactMapboxGl({
    accessToken:
        api.mapbox
  });
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "50vh",
        width: "50%",
        transform:"translate3d(50%,0,0)"
      }}
    >
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={coords} />
      </Layer>
    </Map>
  );
}
