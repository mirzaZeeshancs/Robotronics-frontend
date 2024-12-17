import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../../../assets/images/picture4.svg";
import img2 from "../../../assets/images/picture5.svg";
import img3 from "../../../assets/images/picture6.svg";
import img4 from "../../../assets/images/picture7.svg";

// Array of event objects containing their respective data
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
    title: "Advanced Design Techniques",
    imageUrl: img4,
  },
];

const Event = () => {
  // State to track the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to navigate to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1));
  };

  // Function to navigate to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col bg-background p-5 items-center">
      {/* Header Section */}
      <h2
        className="text-center text-brown poppins-bold mb-6 lg:text-6xl text-2xl"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Upcoming Events
      </h2>

      <div className="relative w-full overflow-hidden"data-aos="fade-up" data-aos-duration="2000" data-aos-delay="4000">
        {/* Horizontal Slider Section */}
        <div
          className="flex transition-transform duration-500"
          // Translate horizontally based on the current slide index
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="flex-shrink-0 w-full max-w-sm px-4 flex flex-col items-center"
            >
              {/* Event Image */}
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              {/* Event Title */}
              <p className="text-center mt-4 text-lg text-brown font-semibold">
                {event.title}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={prevSlide}
            className="p-3 bg-brown text-white rounded-full hover:bg-opacity-80"
            aria-label="Previous Slide"
          >
            <FaArrowLeft size={20} />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={nextSlide}
            className="p-3 bg-brown text-white rounded-full hover:bg-opacity-80"
            aria-label="Next Slide"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex space-x-2 mt-4">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            // Highlight the active indicator with a larger size and different color
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-brown scale-125"
                : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Event;
