import React from 'react'; 

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { makeStyles } from '@material-ui/core/styles';

import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


import './Mapeo.css'


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Mapeo() {
  
  const position = [-13.52264, -71.96734]
  return ( 
    <MapContainer className="MapContainer" center={position} zoom={13} maxZoom={18} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.  
      </Popup>
    </Marker>
  </MapContainer>
  );
}
