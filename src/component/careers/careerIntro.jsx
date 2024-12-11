import { useEffect } from "react";
// import { Link } from "react-scroll";
import "aos/dist/aos.css"; // Import CSS for AOS
import Header from "../../component/header";
import Aos from "aos";
const CareerIntro = () => {
  useEffect(() => {
    Aos.init(); // Initialize AOS library
  }, []);
  return (
    <>
      <div className="Careerhero relative w-full h-screen" id="abouthero">
        <div className="p-5">
          <Header />
        </div>
        <div
          className="absolute bottom-24 flex flex-col justify-end p-5 overflow-hidden w-full"
          data-aos="fade-left"
        >
          {/* text */}
          <h1 className="lg:text-7xl text-5xl poppins-extrabold py-5 text-white">
            Career
          </h1>
          <h1 className="text-2xl lg:text-4xl font-sans poppins-bold text-white">
            We are always on the lookout
          </h1>
          <h1 className="text-2xl lg:text-4xl font-sans poppins-bold text-white">
            for new and proposing Talent
          </h1>
        </div>
      </div>

    </>
  );
};

export default CareerIntro;
