import { useEffect } from "react";
// import { Link } from "react-scroll";
import "aos/dist/aos.css"; // Import CSS for AOS
import Header from "../../component/header";
import Aos from "aos";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Iaboutntro = () => {
  useEffect(() => {
    Aos.init(); // Initialize AOS library
  }, []);

  return (
    <>
      <div className="abouthero relative w-full" id="abouthero">
        <div className="m-5">
          <Header />
        </div>
        <div className="overflow-hidden" >
        <div className="flex justify-between w-full p-10">
            {/* text */}
            <div className="space-y-5 pt-32 lg:w-1/2 ">
              {/* Text */}
              <div className="space-y-2"data-aos="fade-right" data-aos-duration="2000" data-aos-delay="4000">
                <div className="flex flex-row space-x-2">
                  <h1 className="lg:text-3xl md:text-2xl text-white poppins-thin">WELCOME TO THE </h1>
                  <h1 className="lg:text-3xl md:text-2xl text-white poppins-extralight">WORLD OF</h1>
                </div>
                <div className="flex text-wrap">
                  <p className="lg:text-8xl md:text-xl text-4xl font-bold text-white poppins-bold">About Us</p>
                </div>
                <p className="text-wrap text-sm poppins-light text-white">
                Robotronics Pakistan (Pvt) Ltd is a pioneer educational institute dedicated to advancing robotics and STEM education across Pakistan since 2019. We are in collaboration with leading organizations and schools to empower youth with hands-on learning, fostering innovation, critical thinking and problem-solving skills.
                </p>  
              </div>
              {/* button */}
              {/* <div className="space-x-3"data-aos="fade-right" data-aos-duration="2000" data-aos-delay="4000">
                <button
                  to="section2"
                  offset={-70}
                  className="items-center justify-center p-3 px-4 lg:text-lg text-sm text-black hover:text-white  bg-gold poppins-bold hover:bg-lin shadow-xl rounded-md"
                >
                  Get Enrolled
                </button>
                <button
                  to="section1"
                  offset={-70}
                  className="  items-center justify-center p-3 px-4 lg:text-lg text-sm text-white hover:text-brown bg-lin poppins-bold hover:bg-gold shadow-xl rounded-md"
                >
                  Get Started
                </button>
              </div> */}
              {/* socil icons */}
              <div className="flex flex-row space-x-2  lg:space-x-5">
                <a
                  href="https://www.facebook.com/robotronicspakistan/"data-aos="fade-up" data-aos-duration="2000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:p-3 p-1 border border-brown bg-white rounded-xl hover:bg-white hover:text-brown"
                >
                  <FaFacebook className="text-brown" />
                </a>
                <a
                  href="https://twitter.com/robotronicspk" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:p-3 p-1 border   border-brown bg-white rounded-xl hover:bg-white hover:text-brown"
                >
                  <FaTwitter className="text-brown" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCx_R7IwRAVvphBpI0DCvCXw"data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:p-3 p-1 border  border-brown bg-white rounded-xl hover:bg-white hover:text-brown"
                >
                  <FaYoutube className="text-brown" />
                </a>
                <a
                  href="https://www.instagram.com/robotronicspk/?hl=en"data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:p-3 p-1 border  border-brown bg-white rounded-xl hover:bg-white hover:text-brown"
                >
                  <FaInstagram className="text-brown" />
                </a>
                <a
                  href="https://www.linkedin.com/company/robotronicspakistan/posts/?feedView=all"data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:p-3 p-1 border border-brown bg-white rounded-xl hover:bg-white hover:text-brown"
                >
                  <FaLinkedin className="text-brown" />
                </a>
                <a
                  href="https://wa.me/message/TKZZPIE2A34UM1"data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1700"
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
    </>
  );
};

export default Iaboutntro;
