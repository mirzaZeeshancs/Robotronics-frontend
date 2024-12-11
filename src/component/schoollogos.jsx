import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import s1 from "../assets/logo/Sabis.svg";
import s2 from "../assets/logo/lgs.svg";
import s3 from "../assets/logo/LACAS.svg";
import s4 from "../assets/logo/BHS.svg";
import s5 from "../assets/logo/BHS (1).svg";
import Aos from "aos";

const items = [s1, s2, s3, s4, s5, s1, s2]; // Array of logos

const SchoolLogos = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [itemsToDisplay, setItemsToDisplay] = useState([...items, ...items]); // Repeat items to ensure smooth infinite loop

  useEffect(() => {
    Aos.init(); // Initialize AOS library

    const interval = setInterval(() => {
      // Increment scrollPosition to animate logos
      setScrollPosition((prev) => (prev >= 100 ? 0 : prev + 10.28));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-lightgray p-5 z-10 overflow-hidden" data-aos="fade-left" data-aos-duration="2000">
      <div className="flex items-center overflow-hidden">
        <motion.div
          className="flex gap-4 justify-center" // Center logos horizontally
          style={{ transform: `translateX(-${scrollPosition}%)` }}
          animate={{ x: `-${scrollPosition}%` }}
          transition={{ duration: 2, loop: Infinity, ease: "linear" }}
        >
          {itemsToDisplay.map((item, index) => (
            <motion.img
              key={index}
              className="max-w-xs md:max-w-sm lg:max-w-md" // Limit logo width for responsiveness
              src={item}
              alt={`img${index}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SchoolLogos;
