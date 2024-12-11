import { useEffect } from "react";
import "aos/dist/aos.css"; // Import CSS for AOS
import Header from "../../component/header";
import Aos from "aos";

const Shopintro = () => {
  useEffect(() => {
    Aos.init(); // Initialize AOS library
  }, []);

  return (
    <>
      <div className="shophero relative w-full" id="shophero">
        <div className="p-8" >
          <Header />
        </div>
        <div className="pt-24" >
          <h1 className="text-white text-5xl text-center shopbgcolor poppins-semibold "data-aos="fade-up" data-aos-duration="2000" data-aos-delay="4000" >SHOP</h1>
        </div>
      </div>
    </>
  );
};
export default Shopintro;