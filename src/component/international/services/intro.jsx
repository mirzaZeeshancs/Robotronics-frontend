import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Header from "../../header";
import { useState } from "react";

const Intro = () => {
  
  return (
    <div className="internationalServices">
      <div className="p-5 ">
        <Header />
      </div>
      <div className="space-y-5"data-aos="fade-up" data-aos-duration="2000" data-aos-delay="4000">
          {/* As a School & Parent */}
        {/* intro */}
        <div className="w-full pt-28">
          <div className="space-y-5 lg:p-10 p-4 lg:px-24 lg:w-1/2 ">
            {/* Text */}
            <div className="space-y-2">
              <div className="flex flex-row space-x-2"data-aos="fade-right" data-aos-duration="2000" data-aos-delay="4000">
                <h1 className="lg:text-3xl poppins-extralight text-white">WELCOME TO THE </h1>
                <h1 className="lg:text-3xl poppins-bold text-white font-bold">WORLD OF</h1>
              </div>
              <div className="flex"data-aos="fade-left" data-aos-duration="2000" data-aos-delay="4000">
                <p className="lg:text-8xl text-4xl poppins-bold text-yellow">RO</p>
                <p className="lg:text-8xl text-4xl poppins-bold text-white">BOTRONICS</p>
              </div>
              <p className="text-wrap text-sm poppins-extralight text-white"data-aos="fade-right" data-aos-duration="2000" data-aos-delay="4000">
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
                href="https://www.facebook.com/robotronicspakistan/"data-aos="fade-up" data-aos-duration="2000"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:p-3 p-1 border border-brown bg-white rounded-xl hover:bg-white hover:text-brown"
              >
                <FaFacebook className="text-brown" />
              </a>
              <a
                href="https://twitter.com/robotronicspk"data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300"
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
  );
};

export default Intro;
