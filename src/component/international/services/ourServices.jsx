
import { useEffect, useState } from "react"; // Import useEffect and useState
import robot from "../../../assets/images/IServicesS4.svg"; // Consider removing unused imports

const OurServices = () => {
  const [services, setServices] = useState([]); // State to hold services
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for any error that occurs

  // Function to fetch services
  const fetchServices = async () => {
    setLoading(true); // Set loading to true when fetching starts
    try {
      const response = await fetch("http://localhost:8080/services");
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      
      if (data.success) {
        setServices(data.services); // Update state with fetched services
      } else {
        throw new Error("Failed to fetch services");
      }
    } catch (err) {
      console.error(err); // Log the error to the console for debugging
      setError(err.message); // Update error state
    } finally {
      setLoading(false); // Set loading to false when fetch is complete
    }
  };
  
  // Use useEffect to fetch services when component mounts
  useEffect(() => {
    fetchServices();
  }, []);

  // Show loading state
  if (loading) return <div>Loading...</div>;
  // Show error message if there's an error
  if (error) return <div>{error}</div>;

  return (
    <div className="OurServices p-20">
      <div className="container mx-auto">
        <h2 className="lg:text-6xl md:text-5xl text-4xl text-brown poppins-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-5">
                <h3 className="text-2xl text-brown poppins-regular mb-2">{service.title}</h3>
              </div>
              <div className="flex justify-center">
                <img
                  src={service.imgSrc || robot} // Fallback image in case imgSrc is missing
                  alt={`Image representing ${service.title}`}
                  className="w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
