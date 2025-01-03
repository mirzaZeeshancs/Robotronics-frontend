import { useState } from "react";
import Aos from "aos";
import robo from "../assets/logo/Robotrinic.svg";
import ai from "../assets/imagesContent/coursesimages/ai.svg";
import cyber from "../assets/imagesContent/coursesimages/cyber.svg";
import python from "../assets/imagesContent/coursesimages/python.svg";
import time from "../assets/logo/time-svgrepo-com 1.svg";
import download from "../assets/logo/download.svg";
import sale from "../assets/logo/sales.svg";
import leftArrow from "../assets/logo/arrow-up-left.svg";
import rightArrow from "../assets/logo/arrow-up-right.svg";
import { MdOutlineNotificationsActive } from "react-icons/md";


const ServiceCard = ({ service }) => {
  return (
    <div className="p-5" data-aos="fade-up">
      <div className="bg-white p-5 rounded-xl">
        <img
          className="rounded-xl w-full object-cover object-center"
          src={service.image.url}
          alt={"Service Image"}
        />
        <div className="flex flex-row justify-between items-center ">
          <h3 className="lg:text-lg text-sm font-bold poppins-extrabold py-5 items-center text-center">
            {service.title || "Unnamed Service"}
          </h3>
          <div className="flex flex-col space-y-3">
            <p className="text-yellow poppins-bold">
              {service.price || "Free"}
            </p>
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
        <div className="bg-yellow p-5 rounded flex justify-center items-center gap-4">
          <button className="text-xl font-bold" data-aos="fade-up">
            Notify Me
          </button>
          <MdOutlineNotificationsActive className="text-2xl"/>
        </div>
      </div>
    </div>
  );
};

const Shop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const servicesPerPage = 3;

  const services = [
    {
      title: "Artifical Intelligence for Beginners",
      price: "$49.99",
      duration: "4 weeks",
      courses: "5",
      sales: "120",
      imgIcon: ai,
      image: { url: ai }, // Use imported asset here
    },
    {
      title: "Advanced Robotics",
      price: "$99.99",
      duration: "8 weeks",
      courses: "10",
      sales: "85",
      imgIcon: cyber,
      image: { url: cyber }, // Use imported asset here
    },
    {
      title: "Python for Beginners",
      price: "$49.99",
      duration: "4 weeks",
      courses: "5",
      sales: "120",
      imgIcon: python,
      image: { url: python }, // Use imported asset here
    },
    {
      title: "Artifical Intelligence for Beginners",
      price: "$49.99",
      duration: "4 weeks",
      courses: "5",
      sales: "120",
      imgIcon: ai,
      image: { url: ai }, // Use imported asset here
    },
    {
      title: "Advanced Robotics",
      price: "$99.99",
      duration: "8 weeks",
      courses: "10",
      sales: "85",
      imgIcon: cyber,
      image: { url: cyber }, // Use imported asset here
    },
    {
      title: "Python for Beginners",
      price: "$49.99",
      duration: "4 weeks",
      courses: "5",
      sales: "120",
      imgIcon: python,
      image: { url: python }, // Use imported asset here
    },
    // Add more services as needed
  ];

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

  const visibleServices = services.slice(
    currentIndex,
    currentIndex + servicesPerPage
  );

  return (
    <section className="bg-gray">
      <div className="p-5">
        <div className="flex flex-wrap w-full" >
          <div className=" lg:px-8 w-fit " data-aos="fade-up">
            <div className="flex lg:w-1/3 space-x-8  ">
              <img src={robo} alt="Robotics Course" />
              <div className="content-center text-wrap w-[40vw]  text-brown text-2xl md:text-4xl poppins-extrabold">
                <p className="" >
                  Upcoming
                  <span className="ml-4 text-gold text-2xl md:text-5xl poppins-extrabold">
                    Courses-
                  </span>
                  <span className="inline "> Gear up</span>
                  <span className=""> for some Fun</span>
                </p>
              </div>
            </div>
            <div className="flex self-center gap-x-2">
              {/* <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="flex lg:w-20 w-10 h-10 lg:h-20 justify-center items-center rounded-full border border-black"
              >
                <img
                  className="lg:w-12 lg:h-12 w-6 h-6"
                  src={leftArrow}
                  alt="Previous"
                />
              </button> */}
              {/* <button
                onClick={handleNext}
                disabled={currentIndex + servicesPerPage >= services.length}
                className="flex lg:w-20 lg:h-20 w-10 h-10 justify-center items-center rounded-full border border-black"
              >
                <img
                  className="lg:w-12 lg:h-12 w-6 h-6"
                  src={rightArrow}
                  alt="Next"
                />
              </button> */}
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
