import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

const GoogleMaps = ({ latitude, longitude }) => {
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
    iconSize: [38, 38], // size of icon
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: ` <div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };

  return (
    <>
      <MapContainer
        center={[latitude, longitude]}
        zoom={1}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>" contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
        >
          <Marker position={[latitude, longitude]} icon={customIcon}>
            <Popup>{/* <h2>{marker}</h2> */}</Popup>
          </Marker>
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
};

export default GoogleMaps;
