import { FiArrowUpRight } from "react-icons/fi";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
const CareesFindRole = () => {
  return (
    <div className="flex flex-row justify-between lg:p-10 p-5  lg:px-20">
      {/* text */}
      <div className="flex flex-col py-10 justify-between">
        <p className="text-wrap poppins-light text-brown text-5xl ">
          Cant find a role <br />
          for you?
        </p>
        <div className="space-x-5">
          <button className="border lg:text-2xl poppins-light border-brown p-3 rounded-full">
            Send your Resume
          </button>
          <button className="border border-brown p-3 rounded-full ">
            <FiArrowUpRight />
          </button>
        </div>
      </div>
      {/* socil icons */}
      <div className="flex flex-col justify-between space-y-5">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-brown rounded-xl hover:bg-brown hover:text-white"
        >
          <FaFacebook className="text-gray-800" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-brown rounded-xl hover:bg-brown hover:text-white"
        >
          <FaTwitter className="text-gray-800" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-brown rounded-xl hover:bg-brown hover:text-white"
        >
          <FaYoutube className="text-gray-800" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-brown rounded-xl hover:bg-brown hover:text-white"
        >
          <FaInstagram className="text-gray-800" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-brown rounded-xl hover:bg-brown hover:text-white"
        >
          <FaLinkedin className="text-gray-800" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-brown rounded-xl hover:bg-brown hover:text-white"
        >
          <FaWhatsapp className="text-gray-800" />
        </a>
      </div>

    </div>
  );
};

export default CareesFindRole;
