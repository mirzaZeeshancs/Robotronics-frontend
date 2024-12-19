import robo from "../../../assets/images/shopRobot.svg";
import star from "../../../assets/images/shopStar.svg";
import Header from "../../header";

const Intro = () => {
  return (
    <div className="bg-lightgray min-h-screen">
      {/* Header Section */}
      <div className="p-5">
        <Header />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:px-14 px-5 py-10 items-center lg:items-start space-y-8 lg:space-y-0">
        {/* Left Section - Product Image */}
        <div
          className="hidden lg:flex flex-col items-center space-y-5"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="400"
        >
          {/* Main Image */}
          <div className="p-10 h-94 w-94 rounded-full bg-gray flex items-center justify-center shadow-lg">
            <img src={robo} alt="Robot" className="object-contain h-full" />
          </div>
          {/* Thumbnails */}
          <div className="flex space-x-3">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="h-12 w-12 bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img src={robo} alt="Thumbnail" className="h-full w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div
          className="lg:px-10 flex flex-col space-y-8 lg:space-y-14"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="400"
        >
          {/* Title */}
          <h1 className="poppins-bold text-3xl lg:text-4xl text-brown">
            Arduino Based Robots
          </h1>

          {/* Sale Information */}
          <div className="space-y-5">
            {/* Stars and Sale Tag */}
            <div className="flex items-center space-x-6">
              <img src={star} alt="Rating" className="h-6 w-auto" />
              <span className="bg-red-600 text-white text-sm px-4 py-1 rounded-lg">
                ON SALE
              </span>
            </div>
            {/* Sales Stats */}
            <div className="text-gray-600 text-sm flex space-x-4">
              <span>261 products sold</span>
              <span>3.1k products watched</span>
            </div>
          </div>

          {/* Selection Options */}
          <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
            {/* Type Selector */}
            <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
              <label
                htmlFor="robot-type"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                TYPE
              </label>
              <select
                id="robot-type"
                className="text-sm px-3 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:ring focus:ring-brown focus:outline-none"
              >
                <option value="robot">Robot</option>
                <option value="robot1">Robot 1</option>
                <option value="robot2">Robot 2</option>
              </select>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
              {/* Decrease Button */}
              <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l-lg hover:bg-gray-300 focus:outline-none">
                -
              </button>
              {/* Quantity Input */}
              <input
                type="number"
                className="w-16 text-center border border-gray-300 px-2 py-1 focus:outline-none"
                placeholder="1"
                min="1"
              />
              {/* Increase Button */}
              <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r-lg hover:bg-gray-300 focus:outline-none">
                +
              </button>
            </div>
          </div>

          {/* Pricing and Actions */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between lg:space-x-10 space-y-4 lg:space-y-0">
            {/* Price */}
            <div className="text-yellow-600 text-3xl font-semibold">
              Pkr 2352.41
            </div>
            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <a href="/cart">
                <button className="bg-brown text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition">
                  BUY NOW
                </button>
              </a>
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-yellow-600 transition">
                ADD TO CART
              </button>
            </div>
            {/* Wishlist */}
            <button className="bg-gray-200 px-3 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-300 transition">
              <span>8</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
