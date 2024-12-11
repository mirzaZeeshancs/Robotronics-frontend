import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Header from "../../header";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const Intro = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const services = [
    "Robotic Workshops",
    "Robotic Kits",
    "After-School Robotics Clubs",
    "Grade 1-8 Robotronics Curriculum.",
    "Robotic Competitions (Management, Preparation and Consultation)",
  ];
  
  return (
    <div className="internationalServices">
      <div className="p-5 ">
        <Header />
      </div>
      <div className="space-y-5">
          {/* As a School & Parent */}
          <div className="w-full flex justify-center">
          <div className=" relative inline-block text-left">
            <button
              type="button"
              className="inline-flex justify-between w-full rounded-md border border-lin shadow-sm px-4 py-2 bg-dropbox poppins-extrabold text-gray hover:text-gold"
              onClick={toggleDropdown}
            >
              Our Services
              <FaChevronDown className="ml-2" />
            </button>

            {isOpen && (
              <div className="origin-top-right absolute border border-lin mt-2 w-56 rounded-md shadow-lg bg-dropbox ring-1 hover:text-brown ring-black ring-opacity-5">
                <div className="py-1">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`block px-4 py-2 text-sm text-wrap poppins-light text-gray hover:bg-yellow  hover:text-brown`}
                    >
                      {service}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* intro */}
        <div className="w-full pt-28">
          <div className="space-y-5 lg:p-10 p-4 lg:px-24 lg:w-1/2 ">
            {/* Text */}
            <div className="space-y-2">
              <div className="flex flex-row space-x-2">
                <h1 className="lg:text-3xl poppins-extralight text-white">WELCOME TO THE </h1>
                <h1 className="lg:text-3xl poppins-bold text-white font-bold">WORLD OF</h1>
              </div>
              <div className="flex">
                <p className="lg:text-8xl text-4xl poppins-bold text-yellow">RO</p>
                <p className="lg:text-8xl text-4xl poppins-bold text-white">BOTRONICS</p>
              </div>
              <p className="text-wrap text-sm poppins-extralight text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus consequuntur aliquid fugit in recusandae velit
                quas soluta libero, sint modi obcaecati ad minus quibusdam iusto
                possimus molestiae pariatur amet officiis.
              </p>
            </div>
            {/* button
            <div className="space-x-3">
              <button
                to="section2"
                offset={-70}
                className="items-center justify-center p-3 px-4 lg:text-lg text-sm text-black poppins-bold bg-gold hover:bg-lin shadow-xl rounded-md"
              >
                Get Enrolled
              </button>
              <button
                to="section1"
                offset={-70}
                className="  items-center justify-center p-3 px-4 lg:text-lg text-sm text-black poppins-bold bg-lin hover:bg-gold shadow-xl rounded-md"
              >
                Get Started
              </button>
            </div> */}
            {/* socil icons */}
            <div className="flex flex-row space-x-5">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:p-3 p-1 border border-brown bg-white rounded-xl hover:bg-white hover:text-brown"
              >
                <FaFacebook className="text-brown" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:p-3 p-1 border   border-brown bg-white rounded-xl hover:bg-white hover:text-brown"
              >
                <FaTwitter className="text-brown" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:p-3 p-1 border  border-brown bg-white rounded-xl hover:bg-white hover:text-brown"
              >
                <FaYoutube className="text-brown" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:p-3 p-1 border  border-brown bg-white rounded-xl hover:bg-white hover:text-brown"
              >
                <FaInstagram className="text-brown" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:p-3 p-1 border border-brown bg-white rounded-xl hover:bg-white hover:text-brown"
              >
                <FaLinkedin className="text-brown" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:p-3 p-1 border  border-brown bg-white rounded-xl hover:bg-white hover:text-brown"
              >
                <FaWhatsapp className="text-brown" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
