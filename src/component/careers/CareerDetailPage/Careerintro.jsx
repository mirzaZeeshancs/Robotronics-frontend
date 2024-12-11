import logo from "../../../assets/logo/Robotrinic.svg";
import { IoMdArrowBack } from "react-icons/io";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import bar from "../../../assets/images/careerBar.svg";
import { BiMenuAltRight } from "react-icons/bi";

const Careerintro = () => {
  const data = [
    {
      Date: "10 june 2024",
      Location: "Lahore",
      Category: "Mid Level Developer",
      position: "Software Engineer",
    },
  ];
  return (
    <div className="bg-background">
      {/* upper */}
      <div className=" lg:p-10 p-5 lg:py-14">
        {/* uper */}
        <div className="flex flex-row justify-between items-center ">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="logo" className="w-20 h-20" />
            <h1 className=" poppins-bold text-xs">
              ROBOTRONICS
              <br />
              <p className="text-xs poppins-bold text-yellow  ">P A K I S T A N</p>
            </h1>
          </a>
          {/* button */}
            <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full border border-gray-300">
            <BiMenuAltRight className="text-gray-700" size={24} />
          </button>
          
        </div>
        {/* lower */}
        <div className="lg:flex flex-row justify-between lg:p-10 p-5 lg:space-y-0 space-y-10 items-center ">
          {/* button */}
          <div className="flex flex-row">
            <a href="/CareerJob">
              <button className="flex items-center justify-center lg:w-12 w-8 lg:h-12 h-8 bg-gray-100 rounded-full border border-gray-300">
              <IoMdArrowBack className="text-gray-700" size={24} />
            </button>
            </a>
            
            <p className="lg:p-3 poppins-regular p-1">Back</p>
          </div>
          {/* socil icons */}
          <div className="flex flex-row justify-between lg:space-x-5 space-x-2">
            <p className="text-center poppins-regular pt-2">Share</p>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:p-3 p-1 border border-brown rounded-xl hover:bg-brown hover:text-white"
            >
              <FaFacebook className="text-gray-800" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:p-3 p-1 border border-brown rounded-xl hover:bg-brown hover:text-white"
            >
              <FaTwitter className="text-gray-800" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:p-3 p-1 border border-brown rounded-xl hover:bg-brown hover:text-white"
            >
              <FaYoutube className="text-gray-800" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:p-3 p-1 border border-brown rounded-xl hover:bg-brown hover:text-white"
            >
              <FaInstagram className="text-gray-800" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:p-3 p-1 border border-brown rounded-xl hover:bg-brown hover:text-white"
            >
              <FaLinkedin className="text-gray-800" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:p-3 p-1 border border-brown rounded-xl hover:bg-brown hover:text-white"
            >
              <FaWhatsapp className="text-gray-800" />
            </a>
          </div>
        </div>
      </div>
      {/* lower */}
      <div className="flex flex-col">
        {/* position */}
        <div>
          <p className="" >  {data.job}</p>
        </div>
        {/* img */}
        <div className="flex flex-col items-center bg-gray-800 p-5 rounded-xl mx-5">
          {/* Position */}
          <h2 className="lg:text-5xl poppins-bold text-3xl text-brown mb-5">
            {data[0].position}
          </h2>
          {/* Bar Image with Data */}
          <div className="relative py-5 lg:py-24 ">
            <img src={bar} alt="bar" className="w-full rounded-xl" />
            <div className="absolute inset-0 flex flex-row justify-around items-center text-white">
              <div className="text-center">
                <p className="poppins-bold text-xs">Date</p>
                <p className="text-xs poppins-extralight ">{data[0].Date}</p>
              </div>
              <div className="text-center">
                <p className="poppins-bold text-xs">Category</p>
                <p className="text-xs poppins-extralight ">{data[0].Category}</p>
              </div>
              <div className="text-center">
                <p className="poppins-bold text-xs">Location</p>
                <p className="text-xs poppins-extralight ">{data[0].Location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careerintro;