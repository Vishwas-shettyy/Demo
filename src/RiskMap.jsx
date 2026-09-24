import {
  MapContainer,
  TileLayer,
  Circle,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

function RiskMap() {
  const center = [12.2958, 76.6394];

  return (
    <MapContainer
      center={center}
      zoom={11}
      style={{
        height: "100%",
        width: "100%",
      }}
    >

      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* HIGH RISK AREA */}
      <Circle
        center={[12.31, 76.62]}
        radius={2500}
        pathOptions={{
          color: "red",
          fillColor: "red",
          fillOpacity: 0.35,
        }}
      />

      {/* MEDIUM RISK AREA */}
      <Circle
        center={[12.28, 76.67]}
        radius={1800}
        pathOptions={{
          color: "orange",
          fillColor: "orange",
          fillOpacity: 0.35,
        }}
      />

      {/* SAFE AREA */}
      <Circle
        center={[12.27, 76.63]}
        radius={1200}
        pathOptions={{
          color: "green",
          fillColor: "green",
          fillOpacity: 0.35,
        }}
      />

      {/* VILLAGE */}
      <Marker position={[12.31, 76.62]}>
        <Popup>
          <strong>Village A</strong>
          <br />
          Risk Score: 78
          <br />
          Priority: Immediate
        </Popup>
      </Marker>

      {/* SAFE SITE */}
      <Marker position={[12.27, 76.63]}>
        <Popup>
          <strong>Safe Site A</strong>
          <br />
          Capacity: 800
          <br />
          Available: 650
        </Popup>
      </Marker>

    </MapContainer>
  );
}

export default RiskMap;
