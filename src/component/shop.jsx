import { useEffect, useState } from "react";
import Aos from "aos";
import robo from "../assets/logo/Robotrinic.svg";
import python from "../assets/images/python.svg";
import time from "../assets/logo/time-svgrepo-com 1.svg";
import download from "../assets/logo/download.svg";
import sale from "../assets/logo/sales.svg";
import leftArrow from "../assets/logo/arrow-up-left.svg";
import rightArrow from "../assets/logo/arrow-up-right.svg";

const ServiceCard = ({ service }) => {
  return (
    <div className="p-5" data-aos="fade-up">
      <div className="bg-white p-5 rounded-xl">
        <img
          className="rounded-xl w-full object-cover object-center"
          src={service.image.url}
          alt={'image'}
        />
        <div className="flex flex-row justify-between">
          <h3 className="lg:text-lg text-sm font-bold poppins-extrabold py-5">
            {service.title || "Unnamed Service"}
          </h3>
          <div className="flex flex-col space-y-3">
            <img className="p-2" src={service.imgIcon} alt="Service Icon" />
            <p className="text-yellow poppins-bold">{service.price || "Free"}</p>
          </div>
        </div>
        <div className="pb-4">
          <div className="w-full h-0.5 border border-dotted border-black"></div>
        </div>
        <div className="flex justify-center lg:space-x-5 md:space-x-2 items-center">
          <div className="flex poppins-medium">
            <img className="p-1" src={time} alt="Duration Icon" />
            {service.duration || "N/A"}
          </div>
          <div className="flex poppins-medium">
            <img className="p-1" src={download} alt="Courses Icon" />
            {service.courses || "N/A"}
          </div>
          <div className="flex poppins-medium">
            <img className="p-1" src={sale} alt="Sales Icon" />
            {service.sales || "N/A"}
          </div>
        </div>
      </div>
      <div className="p-5" data-aos="fade-up">
        <div className="bg-yellow p-5 rounded flex justify-center items-center">
          <button className="text-xl font-bold" data-aos="fade-up">
            Join Course
          </button>
        </div>
      </div>
    </div>
  );
};

const Shop = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const servicesPerPage = 3;

  useEffect(() => {
    Aos.init();

    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:8080/all/Courses");
        if (!response.ok) {
          throw new Error("Failed to fetch services data");
        }
        const data = await response.json();
        setServices(data || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleNext = () => {
    if (currentIndex + servicesPerPage < services.length) {
      setCurrentIndex(currentIndex + servicesPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - servicesPerPage >= 0) {
      setCurrentIndex(currentIndex - servicesPerPage);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const visibleServices = services.slice(
    currentIndex,
    currentIndex + servicesPerPage
  );

  console.log(services)

  return (
    <section className="bg-gray">
      <div className="p-5">
        <div className="flex flex-wrap w-full">
          <div className="flex justify-between lg:px-8" data-aos="fade-up">
            <div className="flex lg:w-1/3 space-x-8">
              <img src={robo} alt="Robotics Course" />
              <div className="content-center text-wrap text-brown text-2xl md:text-4xl poppins-extrabold">
                Upcoming
                <span className="text-gold text-2xl md:text-5xl poppins-extrabold">
                  Courses-
                </span>
                Gear up for some Fun
              </div>
            </div>
            <div className="flex self-center gap-x-2">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="flex lg:w-20 w-10 h-10 lg:h-20 justify-center items-center rounded-full border border-black"
              >
                <img
                  className="lg:w-12 lg:h-12 w-6 h-6"
                  src={leftArrow}
                  alt="Previous"
                />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex + servicesPerPage >= services.length}
                className="flex lg:w-20 lg:h-20 w-10 h-10 justify-center items-center rounded-full border border-black"
              >
                <img
                  className="lg:w-12 lg:h-12 w-6 h-6"
                  src={rightArrow}
                  alt="Next"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {visibleServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
