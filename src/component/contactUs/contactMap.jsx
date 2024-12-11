import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom icon
const customIcon = new L.Icon({
  iconUrl: '/path/to/your/custom-marker-icon.png', // replace with the path to your custom marker icon
  iconSize: [40, 40], // size of the icon
  iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
});

const locations = [
  [30.3753, 69.3451], // Example coordinates, replace with actual coordinates
  [31.5497, 74.3436],
  [33.6844, 73.0479],
  [25.3960, 68.3578],
  [34.0150, 71.5805],
];

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
    <div className='flex bg-background' >
      <div className="lg:p-32 py-32 relative h-screen w-screen">
      <MapContainer center={[30.3753, 69.3451]} zoom={6} className="bg-map h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {locations.map((location, idx) => (
          <Marker key={idx} position={location} icon={customIcon}></Marker>
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
