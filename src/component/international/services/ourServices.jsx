// import robot from "../../../assets/images/IServicesS4.svg"; // Import fallback image

import python from "../../../assets/imagesContent/coursesimages/python.svg"
import ai from "../../../assets/imagesContent/coursesimages/ai.svg"
import scratch from "../../../assets/imagesContent/coursesimages/scratch.svg"
import wordpress from "../../../assets/imagesContent/coursesimages/wordpress.svg"
import video from "../../../assets/imagesContent/coursesimages/video.svg"
import financialmanagement from "../../../assets/imagesContent/coursesimages/financialmanagement.svg"

const OurServices = () => {
  // Local JSON data for services
  const services = [
    {
      title: "Python",
      imgSrc: python, // Update this path or use robot as fallback
    },
    {
      title: "Scratch",
      imgSrc: scratch, // Update this path or use robot as fallback
    },
    {
      title: "Artifical Intellignce",
      imgSrc: ai, // Update this path or use robot as fallback
    },
    {
      title: "Wordpress Development",
      imgSrc: wordpress, // Update this path or use robot as fallback
    },
    {
      title: "Video Editing",
      imgSrc: video, // Update this path or use robot as fallback
    },
    {
      title: "Financial Management",
      imgSrc: financialmanagement, // Update this path or use robot as fallback
    },
    // Add more services as needed
  ];

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
