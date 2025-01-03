import robort from "../assets/images/right-face-robot.svg";
import { useNavigate } from "react-router-dom";
// import img1 from "../assets/logo/Layer_4.svg";
// import img2 from "../assets/logo/Layer_2.svg";
// import img3 from "../assets/logo/Layer_3.svg";
import img4 from "../assets/logo/pexels-maxime-lecomte-13471116 1.svg";
import img5 from "../assets/logo/arrow-up-left.svg";
import img6 from "../assets/logo/arrow-up-right.svg";
import { FaRobot, FaWrench, FaTrophy } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { useEffect } from "react";
import Aos from "aos";

const Services = () => {
  const navigate = useNavigate(); // Initialize the navigation function

  useEffect(() => {
    Aos.init(); // Initialize AOS library
  }, []);

  const items = [
    {
      title: "RoboGenius Program",
      description:
        "Region's Largest Robotics & Skill Development Online platform where Individuals and Schools can learn all the modern skills under one roof. ",
      imgSrc: <FaRobot />,
      linkText: "Enroll Now",
      linkUrl: "#",
    },
    {
      title: "Robotics Workshop",
      description:
        "We offer a wide range of Robotics & STEM based workshops catering all the different age groups (Age 4-16) considering their areas of interest and mental abilities.",
      imgSrc: <FaWrench />,
      linkText: "Enroll Now",
      linkUrl: "#",
    },
    {
      title: "Robotics Competitions",
      description:
        "We provide Training, Mentorship, Robots, Registrations, Judgement and Criteria Development Services to Students and Schools across Pakistan.",
      imgSrc: <FaTrophy />,
      linkText: "Enroll Now",
      linkUrl: "#",
    },
    {
      title: "Robotoronics as a Subject:",
      description:
        "We have Developed and Implemented our 'Robotronics' Curriculum with most of the renowned educational systems. We provide Curriculum, Trainers and Robotic Labs.",
      imgSrc: <FaTrophy />,
      linkText: "Enroll Now",
      linkUrl: "#",
    },
    {
      title: "After School Clubs:",
      description:
        "Robotics and Skill Development Clubs/Camps are conducted in large number of schools throughout the year with zero investment from the school.",
      imgSrc: <FaTrophy />,
      linkText: "Enroll Now",
      linkUrl: "#",
    },
    {
      title: "Exhibition Consultation:",
      description:
        "We provide schools with Exhibition and Competition Consultation services where we assist them in Judging, Training and Criteria Development Services.",
      imgSrc: <FaTrophy />,
      linkText: "Enroll Now",
      linkUrl: "#",
    },
  ];

  const handleNavigate = () => {
    navigate("/International/Iservices"); // Navigate to the desired route
  };

  return (
    <div
      className="services"
      id="services"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-delay="4000"
    >
      <div
        className="flex justify-between items-start"
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-delay="4000"
      >
        {/* Left div for text */}
        <div className="flex justify-start lg:p-10 p-2">
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
          <div className="flex">
            <img
              src={robort}
              alt="image"
              data-aos="fade-right"
              data-aos-duration="2000"
            />
          </div>
        </div>
      </div>
      {/* Second layer: Shop items */}
      <div
        className="px-4 py-8"
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-delay="4000"
      >
        {/* Flex container with wrapping */}
        <div
          className="flex flex-wrap justify-center gap-6 lg:gap-12"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {items.map((item, index) => (
            <div key={index} className="">
              <div className="h-[66vh] w-[60vh] p-4 flex flex-col  justify-between border-white border-2 rounded-2xl">
                <div className="text-6xl sm:text-6xl md:text-5xl lg:text-6xl text-white">
                  {item.imgSrc}
                </div>
                <div className="my-2 min-h-[36vh]">
                  <p className="text-wrap text-left text-white poppins-bold text-lg sm:text-xl md:text-2xl lg:text-4xl font-black whitespace-normal break-words">
                    {item.title}
                  </p>
                  <p className=" mt-4 text-left text-wrap text-xs poppins-light sm:text-sm text-white">
                    {item.description}
                  </p>
                </div>

                <div className=" min-h-4">
                  <div className="border-t border-white "></div>
                </div>

                <div className="flex items-center gap-2">
                <div className=" text-white text-sm md:text-lg underline poppins-light rounded text-left bg-transparent  transition-colors duration-300 ease-in-out">
                    {item.linkText}
                  </div>
                  <MdArrowOutward  className="text-xl text-yellow"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Third layer: Image and circular buttons */}
      <div
        className="flex justify-between px-4"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="4000"
      >
        {/* Image on the left */}
        <img className="" src={img4} alt="image" />
        {/* Two circular buttons on the right */}
        <div className="flex self-center  px-10">
          <button onClick={handleNavigate}  className="pb-1  text-center lg:w-32 lg:h-14  rounded-2xl border border-white  text-yellow text-2xl">
            {/* <img className="lg:w-12 lg:h-12" src={img6} alt="image" /> */}
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
