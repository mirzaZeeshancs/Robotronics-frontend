// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
import s1 from "../assets/logo/Sabis.svg";
import s2 from "../assets/logo/lgs.svg";
import s3 from "../assets/logo/LACAS.svg";
import s4 from "../assets/logo/BHS.svg";
import s5 from "../assets/logo/BHS (1).svg";
import s6 from "../assets/logo/Surface.svg";

// import Aos from "aos";

// const items = [s1, s2, s3, s4, s5, s1, s2]; // Array of logos

// const SchoolLogos = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [itemsToDisplay, setItemsToDisplay] = useState([...items, ...items]); // Repeat items to ensure smooth infinite loop

//   useEffect(() => {
//     Aos.init(); // Initialize AOS library

//     const interval = setInterval(() => {
//       // Increment scrollPosition to animate logos
//       setScrollPosition((prev) => (prev >= 100 ? 0 : prev + 5.28));
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-lightgray p-5 z-10 overflow-hidden"data-aos="fade-up" data-aos-duration="2000" >
//       <div className="flex items-center overflow-hidden">
//         <motion.div
//           className="flex gap-4 justify-center" // Center logos horizontally
//           style={{ transform: `translateX(-${scrollPosition}%)` }}
//           animate={{ x: `-${scrollPosition}%` }}
//           transition={{ duration: 2, loop: Infinity, ease: "linear" }}
//         >
//           {itemsToDisplay.map((item, index) => (
//             <motion.img
//               key={index}
//               className="max-w-xs md:max-w-sm lg:max-w-md" // Limit logo width for responsiveness
//               src={item}
//               alt={`img${index}`}
//             />
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default SchoolLogos;

const SchoolLogos = () => {
  return (
    <div className="flex overflow-hidden relative">
      {/* Primary scrolling container */}
      <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
        {[s1, s2, s3, s4, s5, s6].map((src, idx) => (
          <img
            key={idx}
            loading="lazy"
            alt={`School logo ${idx + 1}`}
            src={src}
            className="w-32 h-32 object-contain" // Adjust dimensions as needed
          />
        ))}
      </div>

      {/* Duplicate for seamless scrolling */}
      <div className="flex space-x-16 animate-loop-scroll aria-hidden='true'">
        {[s1, s2, s3, s4, s5, s6].map((src, idx) => (
          <img
            key={`duplicate-${idx}`}
            loading="lazy"
            alt=""
            src={src}
            className="w-32 h-32 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default SchoolLogos;