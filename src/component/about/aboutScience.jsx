import video2 from "../../assets/images/aboutvideo.svg";
import b5 from "../../assets/imagesContent/bannercode/b5.jpg";
import b2 from "../../assets/imagesContent/bannercode/b2.jpg";
import b6 from "../../assets/imagesContent/bannercode/b6.jpg";
const AboutScience = () => {
  return (
    <div className="lg:flex flex-col bg-black">
      {/* block 1 */}
      <div className="lg:flex flex-row justify-between lg:p-5 p-3 items-center  ">
        {/* div 1 */}
        <div className="lg:pl-20 pl-8 lg:py-16 py-8">
          <p
            className="text-white lg:text-7xl text-2xl poppins-bold"
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay="4000"
          >
            Turning science <br /> Fiction into <br />{" "}
            <p
              className=" text-yellow poppins-bold pb-2"
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-delay="4000"
            >
              Reality
            </p>
            <p
              className="flex border border-gold h-0 w-32 "
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="4000"
            ></p>
          </p>
        </div>
        {/* div 2 */}
        <div className="bg-black text-white p-6 relative max-w-md">
          <div
            className="bg-yellow w-32 h-32 rounded-full absolute top-0 left-0"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="4000"
          ></div>
          <p
            className="relative z-10 text-sm text-wrap poppins-light leading-relaxed pt-4 pl-4"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="4000"
          >
            Personal computers have transformed our lives in ways science
            fiction writers could not have imagined. Helper robots have the
            potential to do the same, if we work together.
          </p>
        </div>
      </div>
      {/* block 2 */}
      <div className="lg:flex justify-between lg:p-5 p-2 items-center ">
        <div className="flex lg:pl-20 flex-col bg-ye">
          <div className="flex flex-row justify-between">
            <div
              className="border-t border-yellow pt-4"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="4000"
            >
              <h2
                className="text-yellow pb-2 text-xl md:text-3xl "
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="4000"
              ></h2>
            </div>
            <div className="bg-black">
              <div className="max-w-4xl mx-auto">
                <div
                  className="border-t border-white pt-4"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-delay="4000"
                >
                  <h2
                    className="text-yellow text-xl md:text-3xl font-semibold"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="4000"
                  >
                    Solving Small TO Big
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80vh] w-100 px-10 overflow-hidden ">
        <img
          className="h-full w-full object-cover"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="4000"
          src={b6}
        />
      </div>
    </div>
  );
};

export default AboutScience;
