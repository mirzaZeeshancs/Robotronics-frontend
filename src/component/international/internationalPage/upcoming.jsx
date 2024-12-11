import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Example images for the speakers
import speaker1 from "../../../assets/images/picture 1.svg";
import speaker2 from "../../../assets/images/picture 2.svg";
// import speaker3 from "../../../assets/images/pitcture 3.svg";

const Upcoming = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-12-31T00:00:00"); // Set your event date here
    const currentTime = new Date();
    const difference = eventDate - currentTime;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const speakers = [
    { id: 1, name: "Speaker 1", image: speaker1 },
    { id: 2, name: "Speaker 2", image: speaker2 },
    { id: 3, name: "Speaker 3", image: speaker1 },
  ];

  return (
    <div>
      {/* upper */}
      <div className="flex flex-col lg:flex-row">
        {/* left */}
        <div className="lg:w-1/2 p-5  bg-background">
          <div className="bg-background space-y-8 lg:px-20 md:p-8 lg:p-10 rounded-xl">
            <div className="flex" >
            <div className="w-1/5 h-0 items-center text-yellow text-center border broder-yellow " ></div>
            <h3 className="text-yellow text-xl poppins-light">Python Seminar</h3>
            </div>
            <h1 className="lg:text-6xl text-2xl text-brown poppins-bold">Javascript</h1>
            <h1 className="lg:text-6xl text-2xl text-brown poppins-bold">Conference 2024</h1>
            <div className="flex lg:text-6xl  text-3xl poppins-bold text-brown justify-between">
              <div>
                {timeLeft.days || "0"}
                <span className="block lg:text-2xl text-xl poppins-bold text-brown">
                  Days
                </span>
              </div>
              <div>
                {timeLeft.hours || "0"}
                <span className="block lg:text-2xl text-xl poppins-bold text-brown">
                  Hours
                </span>
              </div>
              <div>
                {timeLeft.minutes || "0"}
                <span className="block lg:text-2xl text-xl poppins-bold text-brown">
                  Mins
                </span>
              </div>
              <div>
                {timeLeft.seconds || "0"}
                <span className="block lg:text-2xl text-xl poppins-bold text-brown">
                  Secs
                </span>
              </div>
            </div>
            <div className="flex bg-lin p-4 rounded-xl space-x-4">
              <input
                type="email"
                className="w-full p-2 border rounded"
                placeholder="Register using email address"
              />
              <button className="w-full bg-gold p-2 shadow-md hover:bg-yellow rounded text-white poppins-bold">
                Register
              </button>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="lg:w-1/2 p-3 bg-background ">
          <div className=" p-4 ">
            <Slider {...settings}>
              {speakers.map((speaker) => (
                <div key={speaker.id} className="p-5">
                  <img
                    className="rounded-xl w-full object-cover object-center"
                    src={speaker.image}
                    alt={speaker.name}
                  />
                  <h3 className="text-center text-lg poppins-bold mt-4">
                    {speaker.name}
                  </h3>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
