// marquee.jsx
import React from "react";
import { motion } from "framer-motion";

function Marquee({ imagesurls, direction }) {
  return (
    <div className="flex gap-6 w-full overflow-hidden ">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        className="flex py-6 gap-10 whitespace-nowrap overflow-hidden flex-shrink-0"
      >
        {imagesurls.map((url, index) => (
          <img
            key={index}
            src={url}
            className="filter invert select-none w-[7vw]"
            alt={`Marquee image ${index + 1}`}
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction=== 'left' ? '0' : '-100%'}}
        animate={{ x: direction=== 'left' ? '-100%' : '0'}}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        className="flex py-6 gap-10 whitespace-nowrap overflow-hidden flex-shrink-0"
      >
        {imagesurls.map((url, index) => (
          <img
            key={index}
            src={url}
            className="filter invert select-none w-[7vw]"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
