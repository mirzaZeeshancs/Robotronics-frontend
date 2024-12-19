import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Intro from "../../component/dashboard/intro";
import LeftNav from "../../component/dashboard/leftNav";
import img from "../../assets/images/Order-legoRobots.svg";

const MyRobot = () => {
  const [robots, setRobots] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch robot data from the API
  const fetchRobots = async () => {
    try {
      const response = await fetch("http://localhost:8080/getProducts");
      if (!response.ok) {
        throw new Error("Failed to fetch robots");
      }
      const data = await response.json();
      setRobots(data);
    } catch (error) {
      console.error("Error fetching robots:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRobots(); // Fetch robots when the component mounts
  }, []);

  return (
    <div
      className="bg-background min-h-screen"
      data-aos="fade-right"
      data-aos-duration="2000"
      data-aos-delay="4000"
    >
      {/* Intro */}
      <div>
        <Intro />
      </div>

      {/* Product & NavBar */}
      <div className="lg:flex flex-row">
        {/* NavBar */}
        <div className="lg:w-1/3 w-2/3">
          <LeftNav />
        </div>

        {/* Product List */}
        <div className="w-full py-10">
          <h1 className="text-lightblack poppins-bold lg:text-2xl text-base lg:ml-14 ml-8">
            My Robots
          </h1>

          {loading ? (
            <p className="text-center text-gray-400">Loading robots...</p>
          ) : robots.length === 0 ? (
            <p className="text-center text-gray-400">No robots found</p>
          ) : (
            robots.map((robot, index) => (
              <div
                key={index}
                className="flex flex-row justify-between items-center px-14 py-5 mb-5 bg-white rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-xl"
              >
                {/* Left Section */}
                <div className="lg:flex flex-row space-x-5 items-center">
                  {/* Remove Button */}
                  <div>
                    <FaTimes className="text-gray-600 cursor-pointer hover:text-red-600" />
                  </div>

                  {/* Image */}
                  <div>
                    <img
                      src={img}
                      className="lg:w-20 lg:h-20 w-16 h-16 object-contain"
                      alt="Product"
                    />
                  </div>

                  {/* Text Details */}
                  <div className="flex flex-col space-y-2">
                    <p className="text-brown poppins-bold text-xl">
                      {robot.name}
                    </p>
                    <div className="flex flex-row items-center">
                      <p className="text-brown poppins-bold text-sm mr-2">
                        Color:
                      </p>
                      <p className="text-sm poppins-light">{robot.color}</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <p className="text-brown poppins-bold text-sm mr-2">
                        Quantity:
                      </p>
                      <p className="text-sm poppins-bold">{robot.Quantity}</p>
                    </div>
                  </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col items-end space-y-2">
                  {/* Price */}
                  <div>
                    <p className="text-xl poppins-bold">{robot.price}</p>
                  </div>

                  {/* Reorder Button */}
                  <div>
                    <button className="bg-orange-500 poppins-bold text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-orange-600">
                      Reorder
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyRobot;
