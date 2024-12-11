import robort from "../assets/images/right-face-robot.svg";
// import img1 from "../assets/logo/Layer_4.svg";
// import img2 from "../assets/logo/Layer_2.svg";
// import img3 from "../assets/logo/Layer_3.svg";
import img4 from "../assets/logo/pexels-maxime-lecomte-13471116 1.svg";
import img5 from "../assets/logo/arrow-up-left.svg";
import img6 from "../assets/logo/arrow-up-right.svg";
import { FaRobot, FaWrench, FaTrophy } from "react-icons/fa";
import { useEffect } from "react";
import Aos from "aos";

const Services = () => {
  useEffect(() => {
    Aos.init(); // Initialize AOS library
  }, []);
  const items = [
    {
      title: "Robotic Items Shop",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsum libero non veniam, nulla fuga itaque. Officia, autem! Fuga soluta architecto laboriosam iure porro officia dicta nulla esse, ducimus perspiciatis!",
      imgSrc: <FaRobot />,
      // imgSrc: img1,
      linkText: "Enrolled Now",
      linkUrl: "#",
    },
    {
      title: "Robotics Workshop",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsum libero non veniam, nulla fuga itaque. Officia, autem! Fuga soluta architecto laboriosam iure porro officia dicta nulla esse, ducimus perspiciatis!",
      imgSrc: <FaWrench />,
      // imgSrc: img2,
      linkText: "Enrolled Now",
      linkUrl: "#",
    },
    {
      title: "Robotics Competitions",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsum libero non veniam, nulla fuga itaque. Officia, autem! Fuga soluta architecto laboriosam iure porro officia dicta nulla esse, ducimus perspiciatis!",
      imgSrc: <FaTrophy />,
      // imgSrc: img3,
      linkText: "Enrolled Now",
      linkUrl: "#",
    },
  ];

  return (
    <div className="services" id="services">
      <div className=" flex justify-between items-start">
        {/* Left div for text */}
        <div className="flex justify-start lg:p-10 p-2" data-aos="fade-up">
          <div className="p-5 pt-10">
            <div className="flex flex-row space-x-3">
              <p className="text-white lg:text-6xl font-bold poppins-black text-2xl ">
                Our Top
              </p>
              <p className="text-gold lg:text-6xl font-bold poppins-black text-2xl ">
                Services- <br />
              </p>
            </div>
            <p className="text-white lg:text-6xl font-bold poppins-black text-2xl ">
              {"Let's"} Browse Through
            </p>
          </div>
          {/* Right div for image */}
          <div className="flex ">
            <img src={robort} alt="image" />
          </div>
        </div>
      </div>
      {/* Second layer: Shop items */}
      <div className="px-4 py-8">
        {/* Flex container with wrapping */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-1 min-w-[280px] max-w-[350px] mx-auto sm:mx-0"
            >
              <div className="p-4 space-y-4 border-white border-2 rounded-2xl bg-gradient-to-b from-gray-800 to-black shadow-lg">
                {/* Responsive Icon */}
                <div className="text-white flex ">
                  <div className="text-6xl sm:text-6xl  md:text-5xl lg:text-6xl">
                    {item.imgSrc}
                  </div>
                </div>
                <div>
                  <p className="text-left text-wrap text-white poppins-bold text-lg sm:text-xl md:text2xl lg:text-4xl font-black">
                    {item.title}
                  </p>
                </div>
                <p className="text-left text-wrap text-xs poppins-light sm:text-sm text-white">
                  {item.description}
                </p>
                {/* Dotted line */}
                <div className="w-full border-t border-white"></div>
                <a href={item.linkUrl} className="block mt-4">
                  <div className="p-3 text-white text-sm md:text-lg underline poppins-light rounded text-left bg-transparent  transition-colors duration-300 ease-in-out">
                    {item.linkText}
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Third layer: Image and circular buttons  */}
      <div className="flex justify-between px-4">
        {/* Image on the left  */}
        <img className="" src={img4} alt="image" />
        {/* Two circular buttons on the right  */}
        <div className="flex self-center space-x-2">
          <button className="flex lg:w-20 lg:h-20 justify-center items-center rounded-full border border-white ">
            <img className="lg:w-12 lg:h-12 " src={img5} alt="image" />
          </button>
          <button className="flex lg:w-20 lg:h-20  justify-center items-center rounded-full border border-white ">
            <img className="lg:w-12 lg:h-12" src={img6} alt="image" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Services;
