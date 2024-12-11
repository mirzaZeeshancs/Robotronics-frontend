
import img from "../assets/logo/arrowN-E.svg";
import robot from "../assets/images/bosten.svg";
import circle from "../assets/logo/twocircle.svg";
import up from "../assets/logo/uparrow.svg";
import mobile from "../assets/images/mobile.svg";
import apple from "../assets/logo/apple.svg";
import pstore from "../assets/logo/Playstor.svg";
import Aos from "aos";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer flex flex-col max-w-full ">
      {/* robotronics */}
      <div className="flex lg:text-center p-10 ">
        {/* up button */}
        <div className="lg:w-1/4 md:w-1/3 w-1/2">
          <button
            className="flex lg:w-12 lg:h-12 md:h-8 md:w-8 h-6 w-6 top-btn border border-white rounded-full"
            data-aos="fade-up"
            onClick={goToTop}
          >
            <a>
              <img
                className="flex lg:h-6 lg:w-14 md:h-4 md:w-10 h-3 w-7 lg:mt-2 mt-1 items-center justify-center "
                src={up}
              />
            </a>
          </button>
        </div>
        {/* robotronics */}
        <div className="text-left">
          <p
            className="text-black text-wrap font-black lg:text-8xl md:text-6xl text-4xl custom-outline"
            data-aos="fade-up"
          >
            ROBOTRONICS
          </p>
        </div>
      </div>
      {/* links */}
      <footer className="text-white body-font">
        <div className="container p-4 mx-auto">
          <div className="flex flex-wrap justify-between lg:text-center md:text-center text-left">
            <div className="lg:w-1/2 flex p-10" >
              {/* Quick Links */}
              <div className="w-1/2 text-wrap text-left">
                <h2 className="title-font font-medium poppins-semibold text-gold lg:text-xl tracking-widest">
                  Quick Links
                </h2>
                <nav className="list-none space-y-2">
                  <li>
                    <a className="text-white poppins-medium cursor-pointer lg:text-xl hover:text-gold"
                    href="/aboutUs">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="text-white poppins-medium cursor-pointer lg:text-xl hover:text-gold"
                    href="/CareerJob">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a className="text-white poppins-medium cursor-pointer lg:text-xl hover:text-gold"
                    href="/shop">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a className="text-white poppins-medium cursor-pointer lg:text-xl hover:text-gold"
                    href="/Blog">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="text-white poppins-medium cursor-pointer lg:text-xl hover:text-gold"
                    href="/Course">
                      Courses
                    </a>
                  </li>
                  <li>
                    <a className="text-white poppins-medium cursor-pointer lg:text-xl hover:text-gold"
                    href="/International/videoGallery">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a className="text-white poppins-medium cursor-pointer lg:text-xl hover:text-gold"
                    href="/International/home">
                      Robotronics International
                    </a>
                  </li>
                </nav>
                <img className="h-7 w-7 mt-4" data-aos="fade-up" src={circle} />
              </div>

              {/* Contact Us */}
              <div className="w-1/2 text-wrap text-left">
                <h2 className="title-font font-medium poppins-semibold text-gold lg:text-xl tracking-widest">
                  Contact Us
                </h2>
                <nav className="list-none space-y-4">
                  <li>
                    <span className="text-white font-bold poppins-medium lg:text-xl">Email</span>
                    <p className="text-white text-sm text-wrap poppins-regular font-thin">Robotronic@gmail.com</p>
                  </li>
                  <li>
                    <span className="text-white font-bold poppins-medium lg:text-xl">Phone</span>
                    <p className="text-white text-wrap poppins-regular font-thin">+92 333555-66-77</p>
                  </li>
                  <li>
                    <span className="text-white font-bold poppins-medium lg:text-xl">Location</span>
                    <p className="text-white text-wrap poppins-regular font-thin">2972 Westheimer Rd. Lahore, Pakistan</p>
                  </li>
                  <li>
                    <span className="text-white font-bold poppins-medium lg:text-xl">Mo - Fr</span>
                    <p className="text-white text-wrap poppins-regular font-thin">9am - 6pm</p>
                  </li>
                </nav>
                <img className="w-24 mt-4" data-aos="fade-up" src={robot} alt="robot" />
              </div>
            </div>

            {/* Search & App Buttons */}
            <div className="flex flex-col justify-center w-full lg:w-1/2 px-4">
              {/* Subscribe Section */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start mb-4 space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    id="footer-field"
                    placeholder="SUBSCRIBE NOW"
                    className="w-full placeholder-opacity-25 bg-transparent border border-white rounded py-2 px-4 text-white focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 outline-none transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="w-full lg:w-auto flex items-center justify-center text-white bg-gold px-6 py-3 rounded hover:bg-gold-dark focus:outline-none transition-colors duration-200">
                  <img src={img} alt="Subscribe Button Icon" />
                </button>
              </div>

              {/* Launch Countdown */}
              <div className="flex " >
                {/* img */}
                <div className="md:w-1/2 flex " >
                  <img src={mobile} className="h-64 hidden md:block" alt="" />
                  <img src={mobile}  className="h-64 hidden md:block"alt="" />
                </div>
                <div className="lg:w-1/2 md:2/3 flex flex-col flex-wrap items-center text-wrap lg:items-start text-center lg:text-left">
                  <p className="text-2xl mb-2 text-white poppins-bold ">READY TO LAUNCH IN...</p>
                  <div className="flex  justify-center lg:justify-start space-x-4 text-white" data-aos="fade-up">
                    <div className="text-center">
                      <p className="text-gold poppins-regular text-sm">WEEKS</p>
                      <p className="lg:text-4xl font-black text-2xl poppins-semibold ">22 :</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gold text-sm poppins-regular ">DAYS</p>
                      <p className="lg:text-4xl font-black text-2xl poppins-semibold ">12 :</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gold text-sm poppins-regular ">HOURS</p>
                      <p className="lg:text-4xl font-black text-2xl poppins-semibold ">23 :</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gold text-sm poppins-regular ">MINUTES</p>
                      <p className="lg:text-4xl font-black text-2xl poppins-semibold ">45</p>
                    </div>
                  </div>

                  {/* App Store Buttons */}
                  <div className="flex flex-col gap-y-3">
                    <button className="border border-white p-4 rounded-xl flex items-center space-x-2 hover:bg-gray-800 transition-colors duration-200" data-aos="fade-up">
                      <img className="h-11 w-10" src={apple} alt="apple" />
                      <div className="text-white">
                        <p className="text-sm text-wrap">Download on the</p>
                        <p className="text-2xl text-wrap font-bold">APP STORE</p>
                      </div>
                    </button>
                    <button className="border border-white p-4 rounded-xl flex items-center space-x-2 hover:bg-gray-800 transition-colors duration-200" data-aos="fade-up">
                      <img className="h-11 w-10" src={pstore} alt="play-store" />
                      <div className="text-white">
                        <p className="text-sm text-wrap ">Download on the</p>
                        <p className="text-2xl text-wrap font-bold">PLAY STORE</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-black border-t px-10  border-white py-4">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
            <p className="text-sm poppins-medium text-wrap  text-white">
              Copyright © 2024. All Rights Reserved. Powered by Robotronics
            </p>
            <div className="flex mt-4 lg:mt-0 space-x-3">
              <a className="text-white">
                <svg className="w-9 h-9 border border-white p-1 rounded-full" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="text-white">
                <svg className="w-9 h-9 border border-white p-2 rounded-full" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="text-white">
                <svg className="w-9 h-9 border border-white p-2 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="text-white">
                <svg className="w-9 h-9 border border-white p-2 rounded-full" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 00-11.92 1.6A5 5 0 006 14H0V2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

