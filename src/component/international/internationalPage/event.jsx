import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../../../assets/images/picture4.svg";
import img2 from "../../../assets/images/picture5.svg";
import img3 from "../../../assets/images/picture6.svg";
import img4 from "../../../assets/images/picture7.svg";
const events = [
  {
    id: 1,
    title: "Grow Our Business",
    imageUrl: img1,
  },
  {
    id: 2,
    title: "Make Uber Clone App",
    imageUrl: img2,
  },
  {
    id: 3,
    title: "Design for Beginners",
    imageUrl: img3,
  },
  {
    id: 4,
    title: "Design for Beginners",
    imageUrl: img4,
  },
];

const Event = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? events.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === events.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex flex-row bg-background p-5">
      <h2 className="w-1/5 text-left lg:px-10 items-center lg:text-6xl text-2xl text-wrap text-brown poppins-bold">
        Upcoming Events
      </h2>
      <div className="flex flex-row  space-x-4">
        {/* button */}
        <div className="flex flex-row space-x-4 items-end ">
          <div className="bg-background border border-brown h-8 w-8 rounded-full ">
            <button
              onClick={prevSlide}
              className="p-2 bg-gray-200 rounded-full text-gray-700"
            >
              <FaArrowLeft />
            </button>
          </div>
          <div className="bg-background border border-brown rounded-full h-8 w-8">
            <button
              onClick={nextSlide}
              className="p-2 bg-gray-200 rounded-full text-gray-700"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        {/* images */}
        <div className="flex lg:space-x-5 ">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`flex-shrink-0 w-60 flex-wrap transition-transform duration-500 ${
                index === currentIndex ? "transform scale-105" : ""
              }`}
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
