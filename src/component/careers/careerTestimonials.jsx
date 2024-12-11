import { useState } from "react";
import robot from "../../assets/images/file (2) (1).png";

const CareerTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const data = [
    {
      name: "Muhammad Hammad Ghazanfar",
      job: "Software Engineer",
      image: robot,
      quote: `Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application.`,
    },
    {
      name: "Muhammad",
      job: "Software Engineer",
      image: robot,
      quote: `Famous soccer athlete, Pele who appeared to be born with plenty
              of natural talent, continues this quote by adding “It is hard work, 
              perseverance, learning, studying, sacrifice and most of all, love 
              of what you are doing.`,
    },
    {
      name: "Ali",
      job: "Software Engineer",
      image: robot,
      quote: `This quote by George Bernard Shaw is a critical one for every 
              entrepreneur who will succeed through both good and bad  times
              and bull runs and recessions. Sometimes business and revenues 
              will come easy. Other times you need to create it.`,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % data.length);
  };

  const previousTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + data.length) % data.length);
  };

  const { name, job, image, quote } = data[currentTestimonial];

  return (
    <div className="lg:flex flex-row justify-between bg-black p-5">
      {/* left */}
      <div>
        <img src={image} alt="robot" />
      </div>
      {/* right */}
      <div className="lg:w-1/2 py-5">
        {/* text */}
        <div className="flex flex-row content-center">
          {/* text */}
          <div className="flex flex-col justify-between lg:py-10 py-5">
            <div></div>
            <div>
              <p className="text-xl poppins-ligt text-white">Our Employee's</p>
              <p className="lg:text-6xl poppins-bold text-3xl text-gold font-bold">
                TESTIMONIALS
              </p>
            </div>
          </div>
          {/* img */}
          <div>
            <img src={robot} className="h-34 w-64" alt="robot" />
          </div>
        </div>
        {/* message */}
        <div className="w-full bg-white rounded-xl">
          <blockquote className="text-xl italic font-semibold text-gray-900 p-10 dark:text-white">
            <svg
              className="w-8 h-8 text-brown mb-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <p className="text-wrap poppins-extralight text-brown">{quote}</p>
            <svg
              className="w-8 h-8 text-brown mb-4 float-right"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
          </blockquote>
        </div>
        {/* name */}
        <div className="py-5">
          <p className="text-gold poppins-extralight text-2xl">{name}</p>
          <p className="text-white poppins-extralight">{job}</p>
        </div>
        {/* Buttons */}
        <div className="space-x-2">
          <button
            onClick={previousTestimonial}
            className="h-3 w-3 rounded-full bg-white hover:bg-gold"
          ></button>
          <button
            onClick={nextTestimonial}
            className="h-3 w-3 rounded-full bg-white hover:bg-gold"
          ></button>
          <button
            onClick={previousTestimonial}
            className="h-3 w-3 rounded-full bg-white hover:bg-gold"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default CareerTestimonials;
