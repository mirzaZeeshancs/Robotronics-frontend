import { FiArrowUpRight } from "react-icons/fi";

import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Assuming React Router is used

const CareesFindRole = () => {
  const navigate = useNavigate();

  const handleSendResume = () => {
    navigate("/send-resume"); // Change this to your form route
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:p-10 p-5 lg:px-20 space-y-10 lg:space-y-0">
      {/* Left Section: Text and Buttons */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left py-10">
        <p
          className="text-wrap font-light text-brown text-3xl lg:text-5xl mb-5"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Can't find a role <br />
          for you?
        </p>
        <div
          className="flex space-x-5"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <button
            onClick={handleSendResume}
            className="bg-brown text-white lg:text-2xl font-light px-6 py-3 rounded-full shadow-md hover:bg-opacity-90 transition"
          >
            Send Your Resume
          </button>
          <button className="bg-white text-brown border border-brown px-4 py-3 rounded-full shadow-md hover:bg-brown hover:text-white transition">
            <FiArrowUpRight size={24} />
          </button>
        </div>
      </div>

      {/* Right Section: Social Icons */}
      <div className="flex flex-row lg:flex-col justify-center lg:justify-between items-center space-x-5 lg:space-x-0 lg:space-y-5">
        {[
          { href: "https://www.facebook.com", icon: <FaFacebook /> },
          { href: "https://www.twitter.com", icon: <FaTwitter /> },
          { href: "https://www.youtube.com", icon: <FaYoutube /> },
          { href: "https://www.instagram.com", icon: <FaInstagram /> },
          { href: "https://www.linkedin.com", icon: <FaLinkedin /> },
          {
            href: "https://api.whatsapp.com/send?phone=1234567890",
            icon: <FaWhatsapp />,
          },
        ].map(({ href, icon }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-brown rounded-full hover:bg-brown hover:text-white transition transform hover:scale-105"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay={`${index * 300}`}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CareesFindRole;
