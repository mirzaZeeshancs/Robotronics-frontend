import { useState } from "react";
import img3 from "../../assets/images/5.svg";
import { FiArrowUpRight } from 'react-icons/fi';

const CareerJoinTeam = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const jobs = [
    {
      position: "UX/UI Designer",
      experience: "MId-level/Senior ",
      location: "lahore/Remort",
    },
    {
      position: "UX/UI Designer",
      experience: "MId-level/Senior ",
      location: "lahore/Remort",
    },
    {
      position: "UX/UI Designer",
      experience: "MId-level/Senior ",
      location: "lahore/Remort",
    },
  ];
  return (
    <div className="bg-gray p-5 ">
      {/* text */}
      <div className="p-10">
        <p className="text-2xl poppins-bold text-brown ">
          Are you looking for a new career opportunity?
        </p>
        <p className="text-5xl text-brown poppins-extrabold ">jon the A-Team!</p>
      </div>
      {/* img */}
      <div className="lg:flex flex-row p-10 space-x-8">
        <img src={img3} alt="" />
        <p className="text-xl text-brown poppins-regular text-wrap py-10">
          The average employment period in our company is currently 4,5 years.
          Our People have the opportunity to work in a relaxed and friendly
          environment, with to industry partners on the most significant
          projects
        </p>
      </div>
      {/* jobs */}
      <div className="p-4 lg:px-14">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex flex-row flex-wrap mb-6 border-b border-lin p-4 justify-between relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Button Container */}
            {hoveredIndex === index && (
              <a className="absolute left-0 top-0 transform -translate-x-full"
                href="/CareerDetailPage"
              >
                <button className="border border-brown p-3 bg-white rounded-full hover:bg-brown hover:text-white">
                  <FiArrowUpRight />
                </button>
              </a>
            )}

            {/* Job Content */}
            <div className="flex-1 mb-2">
              <span className="poppins-bold">Position:</span> {job.position}
            </div>
            <div className="flex-1 mb-2">
              <span className="poppins-bold">Experience:</span> {job.experience}
            </div>
            <div className="flex-1 mb-2">
              <span className="poppins-bold">Location:</span> {job.location}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerJoinTeam;
