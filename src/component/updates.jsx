import "aos/dist/aos.css"; // Import CSS for AOS
import img1 from "../assets/images/5.svg";
import img2 from "../assets/images/4.svg";
import img3 from "../assets/images/1.svg";
import img4 from "../assets/images/2.svg";
import img6 from "../assets/images/Rectangle 27.svg";
import img7 from "../assets/images/Rectangle 31.svg";
import p1 from "../assets/imagesContent/latestupdate/p1.jpg"
import p2 from "../assets/imagesContent/latestupdate/p2.jpg"
import p3 from "../assets/imagesContent/latestupdate/p3.jpg"
import p4 from "../assets/imagesContent/latestupdate/p4.jpg"
import p5 from "../assets/imagesContent/latestupdate/p5.jpg"
import p6 from "../assets/imagesContent/latestupdate/p6.jpg"
import { useEffect } from "react";
import Aos from "aos";

const Updates = () => {
  useEffect(() => {
    Aos.init(); // Initialize AOS library
  }, []);

  return (
    // image
    <div className="flex flex-col image " id="image">
      {/* layer 1 */}
      <div className="lg:flex lg:p-1 p-5 w-full">
        {/* div 1 */}
        <div className="flex-1 text-white space-y-4">
          <p
            className="text-white px-4 lg:px-24 py-14 poppins-extrabold text-2xl lg:text-5xl "
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Latest Updates What&apos;s <br />
            <span className="block text-gold text-2xl lg:text-5xl poppins-extrabold">
              Cooking
            </span>
          </p>

          <h1
            className="text-white text-wrap px-4 poppins-regular lg:px-24 text-sm lg:text-lg"
            data-aos="fade-right"
            data-aos-duration="2000"
          >Be informed about the latest updates in the world of Robotics.	

          </h1>

          <img
            className="w-full px-4 lg:px-24 py-4 object-cover"
            data-aos="fade-up"
            data-aos-duration="2000"
            src={p6}
            alt="Cooking Image"
          />
        </div>
        {/* div 2 */}
        <div className="flex-1 text-white">
          {/* images */}
          <div
            className="flex space-between justify-center"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <img className="lg:h-40 lg:w-28 h-22 w-14" src={img6} />
            <img className="lg:h-40 lg:w-28 h-22 w-14 " src={img7} />
          </div>
          {/* text */}
          <div
            className="space-y-2"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <div className="text-wrap">
              <p className="text-white lg:text-2xl lg:p-3 text-xl font-bold text-wrap">
                01
              </p>
              <p className="text-white lg:text-xl lg:p-3 poppins-thin  text-wrap">
              Upcoming Headstart Robotics Competition in Islamabad on 14th-1th February 2025
              </p>
            </div>
            <div className="text-wrap">
              <p className="text-white lg:text-2xl lg:p-3 font-bold text-xl text-wrap">
                02
              </p>
              <p className="text-white lg:text-xl lg:p-3 poppins-thin text-wrap">
              Robotics Exhibition being held in Cornerstone School and College Global Campus on 9th April 2025
              </p>
            </div>
            <div className="text-wrap">
              <p className="text-white lg:text-2xl lg:p-3 font-bold text-xl text-wrap">
                03
              </p>
              <p className="text-white lg:text-xl lg:p-3 poppins-thin text-wrap">
              Major schools in Punjab incline towards the Robotronics Curriculum to be integrated in their Curriculum
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* layer 2 */}
      <div className="flex flex-wrap justify-center md:justify-between px-4 sm:px-6 md:px-10 pb-5">
        <img
          className="w-1/2 sm:w-1/3 md:w-1/4 p-2 sm:p-4 md:p-5 object-contain"
          data-aos="fade-down"
          data-aos-duration="2000"
          src={img4}
          alt="Image 1"
        />
        <img
          className="w-1/2 sm:w-1/3 md:w-1/4 p-2 sm:p-4 md:p-5 object-contain"
          data-aos="fade-up"
          data-aos-duration="2000"
          src={p2}
          alt="Image 2"
        />
        <img
          className="w-1/2 sm:w-1/3 md:w-1/4 p-2 sm:p-4 md:p-5 object-contain"
          data-aos="fade-down"
          data-aos-duration="2000"
          src={p4}
          alt="Image 3"
        />
        <img
          className="w-1/2 sm:w-1/3 md:w-1/4 p-2 sm:p-4 md:p-5 object-contain"
          data-aos="fade-up"
          data-aos-duration="2000"
          src={p3}
          alt="Image 2"
        />
      </div>
    </div>
  );
};

export default Updates;
