import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import "aos/dist/aos.css"; // Import CSS for AOS
import Header from "../component/header";
import Robort from "../assets/images/Robort.svg";
import Aos from "aos";
// import { FaChevronDown } from "react-icons/fa";

const Intro = () => {
  // const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Aos.init(); // Initialize AOS library
  }, []);

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  // const services = [
  //   "Robotic Workshops",
  //   "Robotic Kits",
  //   "After-School Robotics Clubs",
  //   "Grade 1-8 Robotronics Curriculum.",
  //   "Robotic Competitions (Management, Preparation and Consultation)",
  // ];

  return (
    <>
      <div className="hero" id="hero">
        <div className="p-5">
          <Header />
        </div>

        <div className="space-y-5">
          {/* As a School & Parent */}
          {/* <div className="w-full flex justify-center">
            <div
              className="relative inline-block text-left"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <button
                type="button"
                className="inline-flex justify-between w-full rounded-md hover:bg-brown hover:border-brown border border-lin shadow-sm px-4 py-2 bg-dropbox poppins-regular text-gray hover:text-gold"
                onMouseEnter={toggleDropdown} // Opens the dropdown on hover
                aria-expanded={isOpen ? "true" : "false"}
                aria-haspopup="true"
              >
                Our Services
                <FaChevronDown className="ml-2" />
              </button>

              {isOpen && (
                <div
                  className="origin-top-right absolute border border-lin mt-2 w-72 rounded-md shadow-lg bg-dropbox ring-1 hover:text-brown ring-black ring-opacity-5" // Increased width to w-72
                  onMouseLeave={toggleDropdown} // Closes the dropdown when hovering out
                >
                  <div className="py-1 max-h-56 overflow-y-auto">
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-sm text-wrap text-gray hover:bg-yellow poppins-regular hover:text-brown"
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div> */}

          <div className="flex justify-between w-full p-10">
            {/* text */}
            <div className="space-y-5 pt-32 lg:w-1/2" data-aos="fade-right" data-aos-duration="2000">
              {/* Text */}
              <div className="space-y-2" data-aos="fade-right" data-aos-duration="2000">
                <div className="flex flex-row space-x-2">
                  <h1 className="lg:text-3xl md:text-2xl text-white poppins-thin">
                    WELCOME TO THE{" "}
                  </h1>
                  <h1 className="lg:text-3xl md:text-2xl text-white poppins-extralight">
                    WORLD OF
                  </h1>
                </div>
                <div className="flex text-wrap">
                  
                  <p className="lg:text-8xl md:text-xl text-4xl font-bold text-white poppins-bold">
                    RO
                  </p>
                  <p className="lg:text-8xl md:text-6xl text-4xl font-bold text-yellow poppins-bold">
                  BOTRONICS
                  </p>
                </div>
                <p className="text-wrap text-sm poppins-light text-white">
                Your gateway to the future of Robotics, Coding and STEM Education. We offer hands-on learning experiences, empowering students of all ages to explore, create and innovate in the exciting world of Robotics.
                </p>
              </div>

              {/* Buttons */}
              <div className="space-x-3" data-aos="fade-right" data-aos-duration="2000">
                <button
                  to="section2"
                  offset={-70}
                  className="items-center justify-center p-3 px-4 lg:text-lg text-sm text-black hover:text-white bg-gold poppins-bold hover:bg-lin shadow-xl rounded-md"
                >
                  Get Enrolled
                </button>
                <button
                  to="section1"
                  offset={-70}
                  className="items-center justify-center p-3 px-4 lg:text-lg text-sm text-white hover:text-brown bg-lin poppins-bold hover:bg-gold shadow-xl rounded-md"
                >
                  Get Started
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex flex-row space-x-2 lg:space-x-5">
                {[
                  { href: "https://www.facebook.com/robotronicspakistan/", icon: <FaFacebook /> },
                  { href: "https://twitter.com/robotronicspk", icon: <FaTwitter /> },
                  { href: "https://www.youtube.com/channel/UCx_R7IwRAVvphBpI0DCvCXw", icon: <FaYoutube /> },
                  { href: "https://www.instagram.com/robotronicspk/?hl=en", icon: <FaInstagram /> },
                  { href: "https://www.linkedin.com/company/robotronicspakistan/posts/?feedView=all", icon: <FaLinkedin /> },
                  { href: "https://api.whatsapp.com/send?phone=1234567890", icon: <FaWhatsapp /> },
                ].map(({ href, icon }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay={index * 300}
                    className="lg:p-3 p-1 border border-brown bg-white rounded-xl hover:bg-white hover:text-brown"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="hidden md:block" data-aos="fade-left" data-aos-duration="2000">
              <img alt="card img" src={Robort} className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
