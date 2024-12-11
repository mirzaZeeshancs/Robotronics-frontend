import { AiOutlineDown } from "react-icons/ai"; // Import the icon for dropdowns
import WorkshopCard from "./WorkshopCard"; // Import the WorkshopCard component
import Pagination from "../../blog/Pagination";
import { useState } from "react";
const workshopsData = [
  {
    id: 2,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "9:00 am To 11:00 am",
    image: "../../../assets/images/workshopCards.svg",
  },
  {
    id: 3,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "9:00 am To 11:00 am",
    image: "../../../assets/images/workshopCards.svg",
  },
  {
    id: 4,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "9:00 am To 11:00 am",
    image: "../../../assets/images/workshopCards.svg",
  },
  {
    id: 5,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "9:00 am To 11:00 am",
    image: "../../../assets/images/workshopCards.svg",
  },
  {
    id: 6,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "9:00 am To 11:00 am",
    image: "../../../assets/images/workshopCards.svg",
  },
  {
    id: 7,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "9:00 am To 11:00 am",
    image: "../../../assets/images/workshopCards.svg",
  },
  {
    id: 8,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "9:00 am To 11:00 am",
    image: "../../../assets/images/workshopCards.svg",
  },
  {
    id: 9,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "9:00 am To 11:00 am",
    image: "../../../assets/images/workshopCards.svg",
  },
];

const Intro = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 3;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [sortBy, setSortBy] = useState("Videos");

  return (
    <div className="bg-gray p-14">
      <div className="flex flex-wrap md:flex-nowrap md:space-x-6">
        {/* Sidebar */}
        <div className="p-5 md:w-1/6 mb-6 md:mb-0">
          <h2 className="font-bold text-3xl poppins-bold text-brown mb-4">Workshops</h2>
          <h2 className="border border-brown w-1/3 h-2 rounded-md bg-brown mb-4"></h2>
          <div>
            <h3 className="poppins-medium text-brown text-lg mb-2">
              Robotics Workshop
            </h3>
            <ul className="space-y-1">
              <li className="text-gray-600 poppins-light hover:text-brown text-lin cursor-pointer">
                Batch 01
              </li>
              <li className="text-gray-600 poppins-light hover:text-brown text-lin cursor-pointer">
                Batch 02
              </li>
              <li className="text-gray-600 poppins-light hover:text-brown text-lin cursor-pointer">
                Batch 03
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="poppins-medium text-brown text-lg mb-2">
              EV3 Workshop
            </h3>
            <ul className="space-y-1">
              <li className="text-gray-600 poppins-light hover:text-brown text-lin cursor-pointer">
                Batch 01
              </li>
              <li className="text-gray-600 poppins-light hover:text-brown text-lin cursor-pointer">
                Batch 02
              </li>
              <li className="text-gray-600 poppins-light hover:text-brown text-lin cursor-pointer">
                Batch 03
              </li>
            </ul>
          </div>
        </div>

        {/* Main content */}
        <div className="w-full md:w-3/4">
          <div className="flex flex-wrap md:flex-nowrap space-y-4 md:space-y-0 md:space-x-6 mb-6">
            <div className="w-full md:w-1/4">
              <label className="block text-brown poppins-medium mb-2">
                Date
              </label>
              <input
                type="date"
                className="w-full p-2 border border-gray rounded"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/4">
              <label className="block text-brown poppins-medium  mb-2">
                School Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray rounded"
                value={selectedSchool}
                onChange={(e) => setSelectedSchool(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/4">
              <label className="block text-brown poppins-medium mb-2">
                Select City
              </label>
              <div className="relative">
                <select
                  className="w-full p-2 border border-gray rounded appearance-none"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="">City</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Islamabad">Islamabad</option>
                </select>
                <AiOutlineDown className="absolute right-2 top-3 pointer-events-none" />
              </div>
            </div>
            <div className="w-full md:w-1/4">
              <label className="block poppins-medium mb-2">Sort by</label>
              <div className="relative">
                <select
                  className="w-full p-2 border border-gray rounded appearance-none"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="Videos">Videos</option>
                  <option value="Date">Date</option>
                  <option value="Popularity">Popularity</option>
                </select>
                <AiOutlineDown className="absolute right-2 top-3 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-5">
            {workshopsData.map((workshop) => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>
          <div className=" pt-10 w-1/3 bg-gray">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
