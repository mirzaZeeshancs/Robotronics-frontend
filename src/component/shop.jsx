import { useEffect, useState } from "react";
import Aos from "aos";
import robo from "../assets/logo/Robotrinic.svg";
// import python from "../assets/images/python.svg";
// import robot from "../assets/images/robot.svg";
// import design from "../assets/images/design.svg";
// import img7 from "../assets/logo/shopStars.svg";
import time from "../assets/logo/time-svgrepo-com 1.svg";
import download from "../assets/logo/download.svg";
import sale from "../assets/logo/sales.svg";
import img5 from "../assets/logo/arrow-up-left.svg";
import img6 from "../assets/logo/arrow-up-right.svg";

const Shop = () => {
  const [services, setServices] = useState([]); // Ensure services is an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Aos.init(); // Initialize AOS library

    // Fetch services data from API
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:8080/getProducts"); // Replace with your API
        if (!response.ok) {
          throw new Error("Failed to fetch services data");
        }
        const data = await response.json();
        console.log(data); 
        setServices(data.services || []); 
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="bg-gray">
      <div className="p-5">
        {/* Intro Section */}
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
            {/* Two circular buttons on the right */}
            <div className="flex self-center gap-x-2">
              <button className="flex lg:w-20 w-10 h-10 lg:h-20 justify-center items-center rounded-full border border-black">
                <img className="lg:w-12 lg:h-12 w-6 h-6" src={img5} alt="Previous" />
              </button>
              <button className="flex lg:w-20 lg:h-20 w-10 h-10 justify-center items-center rounded-full border border-black">
                <img className="lg:w-12 lg:h-12 w-6 h-6" src={img6} alt="Next" />
              </button>
            </div>
          </div>
        </div>

        {/* Shop Section */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-5" data-aos="fade-up">
                <div className="bg-white p-5 rounded-xl">
                  <img
                    className="rounded-xl w-full object-cover object-center"
                    src={service.imgSrc}
                    alt={service.title}
                  />
                  {/* Name, Price, and AI */}
                  <div className="flex flex-row justify-between">
                    <h3 className="lg:text-lg text-sm font-bold poppins-extrabold py-5">
                      {service.title}
                    </h3>
                    <div className="flex flex-col space-y-3">
                      <img className="p-2" src={service.imgIcon} alt="Service Icon" />
                      <p className="text-yellow poppins-bold">{service.price}</p>
                    </div>
                  </div>
                  {/* Dotted Line */}
                  <div className="pb-4">
                    <div className="w-full h-0.5 border border-dotted border-black"></div>
                  </div>
                  <div className="flex justify-center lg:space-x-5 md:space-x-2 items-center">
                    <div className="flex poppins-medium">
                      <img className="p-1" src={time} alt="Duration Icon" />
                      {service.duration}
                    </div>
                    <div className="flex poppins-medium">
                      <img className="p-1" src={download} alt="Courses Icon" />
                      {service.courses}
                    </div>
                    <div className="flex poppins-medium">
                      <img className="p-1" src={sale} alt="Sales Icon" />
                      {service.sales}
                    </div>
                  </div>
                </div>
                {/* Join Course Button */}
                <div className="p-5" data-aos="fade-up">
                  <div className="bg-yellow p-5 rounded flex justify-center items-center">
                    <button className="text-xl font-bold" data-aos="fade-up">
                      Join Course
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
