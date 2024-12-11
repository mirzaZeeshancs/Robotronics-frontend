import { PiGraduationCapLight } from "react-icons/pi";
import Header from "../../header";
import bg from "../../../assets/images/courses_details.svg";
import yt from "../../../assets/images/courseDetailsYoutube.svg";
import pic from "../../../assets/images/courseDetailpic.svg";
import { BsCalendar } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="bg-background">
      <div className="p-5">
        <Header />
        <div className="pt-10 px-10" >
          <a href="/Dashboard/MyCoursesPage">
          <button className="hover:text-brown text-xl border border-xl border-brown hover:shadow-md p-1 rounded-xl" 
         >
            Back
          </button>
          </a>
        </div>
      </div>
      <div className="bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex flex-wrap lg:flex-nowrap lg:space-x-6">
            {/* Left Side */}
            <div className="w-full lg:w-2/3 space-y-6">
              <div>
                <img
                  src={bg}
                  alt="Course"
                  className="w-full h-auto rounded-md shadow-md"
                />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="bg-gray-200 text-gray-800 text-sm font-medium px-2 py-1 rounded">
                    Development
                  </span>
                  <FaStar className="text-yellow" />
                  <span className="text-brown text-sm">(4.5 Reviews)</span>
                </div>
                <h1 className="lg:text-5xl text-2xl text-wrap text-brown font-bold mt-2">
                  Resolving Conflicts Between Designers And Engineers
                </h1>
                <div className="items-center space-x-4 mt-2">
                  <div className="lg:flex flex-row items-center lg:space-x-5">
                    <div className="flex space-x-4 items-center">
                      <img
                        src={pic}
                        alt="Author"
                        className="w-14 h-14 rounded-full"
                      />
                      <div className="lg:flex flex-row flex-wrap space-x-12">
                        <div>
                          <p>By David Millar</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <BsCalendar />
                          <p className="text-gray-500">24/07/2024</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <PiGraduationCapLight />
                          <span className="text-gray-500">
                            2,250 Students Downloaded
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* buttons */}
                  <dir className="flex space-x-4 ">
                    <div>
                      <button className="bg-yellow text-brown py-2 px-4 rounded-md bg-gold shadow-lg hover:bg-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                        Overview
                      </button>
                    </div>
                    <div className="lg:flex lg:space-x-4 items-center text-gray-700">
                      <div>06 Sections</div>
                      <div>08 Lessons</div>
                      <div>Free Trial Available</div>
                    </div>
                  </dir>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-1/3 mt-6 lg:mt-0 space-y-4">
              <div className="bg-gray-300 w-full rounded-md flex justify-center items-center">
                <img
                  src={yt}
                  alt="Course"
                  className="w-full h-auto rounded-md shadow-md"
                />
              </div>
              <div className="bg-white p-4 rounded-md shadow-md">
                <ul className="list-none space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-500">&#10003;</span>
                    <span>Free Trial Available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-500">&#10003;</span>
                    <span>English</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-500">&#10003;</span>
                    <span>Certificate Available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-500">&#10003;</span>
                    <span>3-4 hours worth of material</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-500">&#10003;</span>
                    <span>Self paced</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-500">&#10003;</span>
                    <span>Share this course</span>
                  </li>
                </ul>
              </div>
              <div className="bg-brown p-4 rounded-md shadow-md flex items-center space-x-4">
                <img
                  src={pic}
                  alt="Instructor"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h2 className="text-lg text-white font-bold">David Millar</h2>
                  <p className="text-sm text-wrap text-white">
                    Masters - Business Administration Mentor/Motivational
                    Speaker.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
