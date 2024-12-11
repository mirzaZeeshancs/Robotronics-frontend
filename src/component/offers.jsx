import img from "../assets/logo/online-test 1.svg";
import img2 from "../assets/logo/exam 1.svg";
import img3 from "../assets/logo/certification 1.svg";
import { useEffect } from "react";
import Aos from "aos";

const Offers = () => {
  useEffect(() => {
    Aos.init(); // Initialize AOS library
  }, []);

  return (
    <div className="lg:flex justify-between space-y-5 lg:space-y-0 bg-yellow lg:p-10 p-5 ">
      {/* First image */}
      <div className="flex-1 text-wrap flex lg:space-x-3" data-aos="fade-up">
        <div className="p-5">
          <div className="bg-lightyellow items-center rounded-3xl lg:p-5">
            <img src={img} alt="image" className="" />
          </div>
        </div>
        <div>
          <p className=" text-white poppins-bold text-wrap text-xl lg:text-2xl md:text-2xl">
            Learn The Latest Skills
          </p>
          <p className=" text-white text-wrap poppins-medium text-sm lg:text-l md:text-l">
            Contrary to popular belief, Lorem Ipsum is not simply random text{" "}
            <br /> . It has roots in a BC, making it over 2000 years old.
          </p>
        </div>
      </div>
      {/* Second image */}
      <div className="flex-1 text-wrap flex lg:space-x-3" data-aos="fade-up">
        <div className="p-5">
          <div className="bg-lightyellow items-center rounded-3xl lg:p-5">
            <img src={img2} alt="image" className="" />
          </div>
        </div>
        <div>
          <p className=" text-white poppins-bold text-wrap text-xl lg:text-2xl md:text-2xl">
            Learn The Latest Skills
          </p>
          <p className=" text-white text-wrap poppins-medium text-sm lg:text-l md:text-l">
            Contrary to popular belief, Lorem Ipsum is not simply random text{" "}
            <br /> . It has roots in a BC, making it over 2000 years old.
          </p>
        </div>
      </div>
      {/* Third image */}
      <div className="flex-1 text-wrap flex lg:space-x-3" data-aos="fade-up">
        <div className="p-5">
          <div className="bg-lightyellow items-center rounded-3xl lg:p-5">
            <img src={img3} alt="image" className="" />
          </div>
        </div>
        <div>
          <p className=" text-white poppins-bold text-wrap text-xl lg:text-2xl md:text-2xl">
            Learn The Latest Skills
          </p>
          <p className=" text-white poppins-medium text-wrap text-sm lg:text-l md:text-l">
            Contrary to popular belief, Lorem Ipsum is not simply random text{" "}
            <br /> . It has roots in a BC, making it over 2000 years old.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
