import { AiOutlineDown } from "react-icons/ai"; // Import the icon for dropdowns
import WorkshopCard from "./WorkshopCard"; // Import the WorkshopCard component
import Pagination from "../../blog/Pagination";
import { useState, useMemo } from "react";

const workshopsData = [
  {
    id: 1,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "2023-01-20T09:00:00", // Use ISO format for dates
    image: "../../../assets/images/workshopCards.svg",
    city: "Lahore",
    popularity: 5,
  },
  {
    id: 2,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "2023-01-20T09:00:00", // Use ISO format for dates
    image: "../../../assets/images/workshopCards.svg",
    city: "Lahore",
    popularity: 5,
  },
  {
    id: 3,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "2023-01-20T09:00:00", // Use ISO format for dates
    image: "../../../assets/images/workshopCards.svg",
    city: "Lahore",
    popularity: 5,
  },
  {
    id: 4,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "2023-01-20T09:00:00", // Use ISO format for dates
    image: "../../../assets/images/workshopCards.svg",
    city: "Lahore",
    popularity: 5,
  },
  {
    id: 5,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "2023-01-20T09:00:00", // Use ISO format for dates
    image: "../../../assets/images/workshopCards.svg",
    city: "Lahore",
    popularity: 5,
  },
  {
    id: 6,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "2023-01-20T09:00:00", // Use ISO format for dates
    image: "../../../assets/images/workshopCards.svg",
    city: "Lahore",
    popularity: 5,
  },
  {
    id: 7,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "2023-01-20T09:00:00", // Use ISO format for dates
    image: "../../../assets/images/workshopCards.svg",
    city: "Lahore",
    popularity: 5,
  },
  {
    id: 8,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "2023-01-20T09:00:00", // Use ISO format for dates
    image: "../../../assets/images/workshopCards.svg",
    city: "Lahore",
    popularity: 5,
  },
  {
    id: 9,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "2023-01-20T09:00:00", // Use ISO format for dates
    image: "../../../assets/images/workshopCards.svg",
    city: "Lahore",
    popularity: 5,
  },
  {
    id: 10,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "2023-01-20T09:00:00", // Use ISO format for dates
    image: "../../../assets/images/workshopCards.svg",
    city: "Lahore",
    popularity: 5,
  },
  {
    id: 11,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "2023-01-20T09:00:00", // Use ISO format for dates
    image: "../../../assets/images/workshopCards.svg",
    city: "Lahore",
    popularity: 5,
  },
  {
    id: 12,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "2023-01-20T09:00:00", // Use ISO format for dates
    image: "../../../assets/images/workshopCards.svg",
    city: "Lahore",
    popularity: 5,
  },
  {
    id: 13,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "2023-01-20T09:00:00", // Use ISO format for dates
    image: "../../../assets/images/workshopCards.svg",
    city: "Lahore",
    popularity: 5,
  },
  {
    id: 14,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "2023-01-20T09:00:00", // Use ISO format for dates
    image: "../../../assets/images/workshopCards.svg",
    city: "Lahore",
    popularity: 5,
  },
  {
    id: 15,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "2023-01-20T09:00:00", // Use ISO format for dates
    image: "../../../assets/images/workshopCards.svg",
    city: "Karachi",
    popularity: 5,
  },
  {
    id: 16,
    instructor: "Bilal Ahmed",
    instructorpic: "../../../assets/images/workshopCards.svg",
    title: "Robotic Workshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "7 min",
    date: "2023-01-20T09:00:00", // Use ISO format for dates
    image: "../../../assets/images/workshopCards.svg",
    city: "Islamabad",
    popularity: 5,
  },
];

const Filters = ({ selectedDate, setSelectedDate, selectedSchool, setSelectedSchool, selectedCity, setSelectedCity, sortBy, setSortBy }) => (
  <div className="flex flex-wrap md:flex-nowrap space-y-4 md:space-y-0 md:space-x-6 mb-6">
    <div className="w-full md:w-1/4">
      <label className="block text-brown poppins-medium mb-2">Date</label>
      <input
        type="date"
        className="w-full p-2 border border-gray rounded"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
    </div>
    <div className="w-full md:w-1/4">
      <label className="block text-brown poppins-medium mb-2">School Name</label>
      <input
        type="text"
        className="w-full p-2 border border-gray rounded"
        value={selectedSchool}
        onChange={(e) => setSelectedSchool(e.target.value)}
      />
    </div>
    <div className="w-full md:w-1/4">
      <label className="block text-brown poppins-medium mb-2">Select City</label>
      <select
        className="w-full p-2 border border-gray rounded"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        <option value="">City</option>
        <option value="Lahore">Lahore</option>
        <option value="Karachi">Karachi</option>
        <option value="Islamabad">Islamabad</option>
      </select>
    </div>
    <div className="w-full md:w-1/4">
      <label className="block text-brown poppins-medium mb-2">Sort by</label>
      <select
        className="w-full p-2 border border-gray rounded"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="Videos">Videos</option>
        <option value="Date">Date</option>
        <option value="Popularity">Popularity</option>
      </select>
    </div>
  </div>
);

const Intro = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const workshopsPerPage = 12;

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [sortBy, setSortBy] = useState("Videos");

  const filteredWorkshops = useMemo(() => {
    return workshopsData
      .filter((workshop) => {
        if (selectedDate && !workshop.date.includes(selectedDate)) return false;
        if (
          selectedSchool &&
          !workshop.instructor.toLowerCase().includes(selectedSchool.toLowerCase())
        )
          return false;
        if (selectedCity && workshop.city !== selectedCity) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "Date") {
          return new Date(a.date) - new Date(b.date);
        } else if (sortBy === "Popularity") {
          return b.popularity - a.popularity;
        }
        return 0;
      });
  }, [selectedDate, selectedSchool, selectedCity, sortBy]);

  const indexOfLastWorkshop = currentPage * workshopsPerPage;
  const currentWorkshops = filteredWorkshops.slice(
    indexOfLastWorkshop - workshopsPerPage,
    indexOfLastWorkshop
  );

  return (
    <div className="bg-gray p-14">
      <div className="flex flex-wrap md:flex-nowrap md:space-x-6">
        <aside className="p-5 md:w-1/6">
           {/* Sidebar */}
        <div className="p-5 md:w-1/6 mb-6 md:mb-0">
          <h2
            className="font-bold text-3xl poppins-bold text-brown mb-4"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="4000"
          >
            Workshops
          </h2>
          <h2
            className="border border-brown w-1/3 h-2 rounded-md bg-brown mb-4"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="4000"
          ></h2>
          <div>
            <h3
              className="poppins-medium text-brown text-lg mb-2"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="4000"
            >
              Robotics Workshop
            </h3>
            <ul
              className="space-y-1"
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-delay="4000"
            >
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
            <h3
              className="poppins-medium text-brown text-lg mb-2"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="4000"
            >
              EV3 Workshop
            </h3>
            <ul
              className="space-y-1"
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-delay="4000"
            >
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
        </aside>
        <main className="w-full md:w-3/4">
          <Filters
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedSchool={selectedSchool}
            setSelectedSchool={setSelectedSchool}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
            {currentWorkshops.map((workshop) => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredWorkshops.length / workshopsPerPage)}
            onPageChange={setCurrentPage}
          />
        </main>
      </div>
    </div>
  );
};

export default Intro;
