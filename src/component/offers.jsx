import img from "../assets/logo/online-test 1.svg";
import img2 from "../assets/logo/exam 1.svg";
import img3 from "../assets/logo/certification 1.svg";

import logoo1 from "../assets/imagesContent/logos/logoo1.png"
import logoo2 from "../assets/imagesContent/logos/logoo2.png"
import logoo3 from "../assets/imagesContent/logos/logoo3.png"


import { useEffect } from "react";
import Aos from "aos";

const Offers = () => {
  useEffect(() => {
    Aos.init(); // Initialize AOS library
  }, []);

  return (
    <div className="lg:flex justify-between space-y-5 lg:space-y-0 bg-yellow lg:p-10 p-5 "data-aos="fade-left" data-aos-duration="2000">
      {/* First image */}
      <div className="flex-1 text-wrap flex lg:space-x-3" data-aos="fade-up">
        <div className="p-5 flex items-center">
          <div className="h-32 w-32 bg-lightyellow items-center rounded-3xl lg:p-5">
            <img src={logoo1} alt="image" className="ooverflow-hidden" />
          </div>
        </div>
        <div className="mt-4">
          <p className=" text-white poppins-bold text-wrap text-xl lg:text-2xl md:text-2xl">
          Innovations
          </p>
          <p className=" text-white text-wrap poppins-medium text-lg mt-4  lg:text-l md:text-l">
          Innovation in robotics refers to the ability to develop new ideas, techniques or technologies that improve or redefine robotic systems.
          </p>
        </div>
      </div>
      {/* Second image */}
      <div className="flex-1 text-wrap flex lg:space-x-3" data-aos="fade-up">
        <div className="p-5 flex items-center">
          <div className="h-32 w-32 bg-lightyellow items-center rounded-3xl lg:p-5">
            <img src={logoo2} alt="image" className="" />
          </div>
        </div>
        <div className="mt-4">
          <p className=" text-white poppins-bold text-wrap text-xl lg:text-2xl md:text-2xl">
          Critical Thinking

          </p>
          <p className=" text-white text-wrap poppins-medium text-lg mt-4  lg:text-l md:text-l">
          Critical thinking skills in robotics involve analyzing and evaluating problems logically to make informed decisions.
          </p>
        </div>
      </div>
      {/* Third image */}
      <div className="flex-1 text-wrap flex lg:space-x-3" data-aos="fade-up">
        <div className="p-5 flex items-center">
          <div className="h-32 w-32 bg-lightyellow items-center rounded-3xl lg:p-5">
            <img src={logoo3} alt="image" className="" />
          </div>
        </div>
        <div className="mt-4">
          <p className=" text-white poppins-bold text-wrap text-xl lg:text-2xl md:text-2xl">
          Problem Solving 
          </p>
          <p className=" text-white poppins-medium text-wrap text-lg mt-4 lg:text-l md:text-l ">
          Problem-solving ability in robotics focuses on identifying challenges and developing practical solutions through systematic approaches
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
