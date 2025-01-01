import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import ReactDOM from 'react-dom';
import { Avatar, Tooltip } from '@mui/material';

// Custom MUI Marker Component
const MaterialMarker = ({ position, name, address }) => {
  const map = useMap();

  useEffect(() => {
    const markerDiv = L.divIcon({
      className: '',
      html: `<div id="mui-marker-${position[0]}-${position[1]}" style="position: relative;"></div>`,
      iconSize: [50, 50],
      iconAnchor: [25, 50],
    });

    const marker = L.marker(position, { icon: markerDiv }).addTo(map);

    return () => {
      map.removeLayer(marker);
    };
  }, [map, position]);

  useEffect(() => {
    const markerElement = document.getElementById(`mui-marker-${position[0]}-${position[1]}`);
    if (markerElement) {
      ReactDOM.render(
        <Tooltip title={<div><strong>{name}</strong><br />{address}</div>} arrow>
          <Avatar
            sx={{
              width: 50,
              height: 50,
              backgroundColor: '#fff',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
              border: '2px solid #000',
            }}
            alt={name}
            src="/path/to/your/custom-marker-icon.png"
          />
        </Tooltip>,
        markerElement
      );
    }
  }, [position, name, address]);

  return null;
};

const officeLocation = {
  coords: [31.461641805135102, 74.38984993375294],
  name: 'Robotronics Pakistan',
  address: 'Sector FF DHA Phase 4, Lahore, Punjab 54000, Pakistan',
};

const ContactMap = () => {
  useEffect(() => {
    // Fix default icon issue
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);

  return (
    <div
      className="flex bg-background"
      data-aos="fade-right"
      data-aos-duration="2000"
      data-aos-delay="400"
    >
      <div className="lg:p-32 py-32 relative h-screen w-screen">
        <MapContainer
          center={officeLocation.coords}
          zoom={15}
          className="bg-map h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />
          <MaterialMarker
            position={officeLocation.coords}
            name={officeLocation.name}
            address={officeLocation.address}
          />
        </MapContainer>
        <div className="absolute bottom-8 right-8 bg-black bg-opacity-50 text-white p-4 rounded-lg shadow-lg">
          <h1 className="text-xl font-bold mb-2">Our Footprint</h1>
          <h2 className="text-3xl font-bold text-gold">In Lahore</h2>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
