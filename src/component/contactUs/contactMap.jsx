import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: '/path/to/your/custom-marker-icon.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const locations = [
  [30.3753, 69.3451],
  [31.5497, 74.3436],
  [33.6844, 73.0479],
  [25.3960, 68.3578],
  [34.0150, 71.5805],
];

const useLeafletIconFix = () => {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);
};

const ContactMap = () => {
  useLeafletIconFix();

  return (
    <div
      className="flex bg-background"
      data-aos="fade-right"
      data-aos-duration="2000"
      data-aos-delay="400"
    >
      <div className="lg:p-32 py-32 relative h-screen w-screen">
        <MapContainer center={[30.3753, 69.3451]} zoom={6} className="bg-map h-full w-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" // Light theme
          />
          {locations.map((location, idx) => (
            <Marker key={idx} position={location} icon={customIcon} />
          ))}
        </MapContainer>
        <div className="absolute bottom-8 right-8 bg-black bg-opacity-50 text-white p-4 rounded-lg shadow-lg">
          <h1 className="text-xl font-bold mb-2">Our Footprint</h1>
          <h2 className="text-3xl font-bold text-gold">In Pakistan</h2>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
