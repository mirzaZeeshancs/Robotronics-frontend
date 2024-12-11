import "aos/dist/aos.css"; // Import CSS for AOS
import img1 from "../assets/images/5.svg";
import img2 from "../assets/images/4.svg";
import img3 from "../assets/images/1.svg";
import img4 from "../assets/images/2.svg";
import img6 from "../assets/images/Rectangle 27.svg";
import img7 from "../assets/images/Rectangle 31.svg";
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
            data-aos="fade-up"
          >
            Latest Updates What&apos;s <br />
            <span className="block text-gold text-2xl lg:text-5xl poppins-extrabold">
              Cooking
            </span>
          </p>

          <h1 className="text-white text-wrap px-4 poppins-regular lg:px-24 text-sm lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            accusamus sint similique laboriosam temporibus quas illo sit
            architecto. Alias nobis debitis ut obcaecati repudiandae totam.
            Quasi quaerat a tempore vel?
          </h1>

          <img
            className="w-full px-4 lg:px-24 py-4 object-cover"
            src={img1}
            alt="Cooking Image"
          />
        </div>
        {/* div 2 */}
        <div className="flex-1 text-white">
          {/* images */}
          <div className="flex space-between justify-center" data-aos="fade-up">
            <img className="lg:h-40 lg:w-28 h-22 w-14" src={img6} />
            <img className="lg:h-40 lg:w-28 h-22 w-14 " src={img7} />
          </div>
          {/* text */}
          <div className="space-y-2">
            <div className="text-wrap">
              <p className="text-white lg:text-2xl lg:p-3 text-xl font-bold text-wrap">
                01
              </p>
              <p className="text-white lg:text-xl lg:p-3 poppins-thin  text-wrap">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.Animi
                est numquam aperiam, obcaecati voluptate, doloremque distinctio
                ducimus{" "}
              </p>
            </div>
            <div className="text-wrap">
              <p className="text-white lg:text-2xl lg:p-3 font-bold text-xl text-wrap">
                02
              </p>
              <p className="text-white lg:text-xl lg:p-3 poppins-thin text-wrap">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.Animi
                est numquam aperiam, obcaecati voluptate, doloremque distinctio
                ducimus{" "}
              </p>
            </div>
            <div className="text-wrap">
              <p className="text-white lg:text-2xl lg:p-3 font-bold text-xl text-wrap">
                03
              </p>
              <p className="text-white lg:text-xl lg:p-3 poppins-thin text-wrap">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.Animi
                est numquam aperiam, obcaecati voluptate, doloremque distinctio
                ducimus{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* layer 2 */}
      <div className="flex flex-wrap justify-center md:justify-between px-4 sm:px-6 md:px-10 pb-5">
        <img
          className="w-1/2 sm:w-1/3 md:w-1/4 p-2 sm:p-4 md:p-5 object-contain"
          data-aos="fade-up"
          src={img2}
          alt="Image 1"
        />
        <img
          className="w-1/2 sm:w-1/3 md:w-1/4 p-2 sm:p-4 md:p-5 object-contain"
          data-aos="fade-up"
          src={img3}
          alt="Image 2"
        />
        <img
          className="w-1/2 sm:w-1/3 md:w-1/4 p-2 sm:p-4 md:p-5 object-contain"
          data-aos="fade-up"
          src={img4}
          alt="Image 3"
        />
        <img
          className="w-1/2 sm:w-1/3 md:w-1/4 p-2 sm:p-4 md:p-5 object-contain"
          data-aos="fade-up"
          src={img3}
          alt="Image 2"
        />
      </div>
    </div>
  );
};

export default Updates;
