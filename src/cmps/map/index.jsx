import React from "react";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import "./mapbox.css";
const api = require("../../secrets/api.json");

export default function Mapbox({ coords }) {
  const Map = ReactMapboxGl({
    accessToken: api.mapbox
  });

  const circlePaint = () => ({
    "circle-radius": 10,
    "circle-color": "#ee4e52",
    "circle-opacity": 0.8
  });

  return (
    <>
      <div className="mapbox sidebar-ovelay">
        <div>
          Longitude: {coords[0]} | Latitude: {coords[1]}
        </div>
      </div>
      <Map
        style="mapbox://styles/mapbox/outdoors-v9"
        className="mapbox map"
      >
        <Marker coordinates={coords} anchor="top" onClick={()=>{console.log('map click')}}>
          <img alt="😑" src="http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-Free-Download-PNG.png" />
        </Marker>
      </Map>
    </>
  );
}

{
  /* <Layer type="circle" id="marker" paint={circlePaint()}>
        <Feature coordinates={coords} onDrag={(_,e) => {console.log(e)}} />
      </Layer> */
}
