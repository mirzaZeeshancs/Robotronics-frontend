import robo from "../../../assets/logo/Robotrinic.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import JS from "../../../assets/images/JS-MyCouses.svg";
const Shop = () => {
  const courses = [
    {
      id: 1,
      title: "Learning JavaScript With Imagination",
      author: "David Millar",
      rating: 4.8,
      reviews: 4.8,
      category: "Development",
      image: JS, // Replace with your image path
      buttonText: "Buy Now",
      status: "Purchased",
    },
    {
      id: 2,
      title: "The Complete Graphic Design for Beginners",
      author: "Jenny Wilson",
      rating: 4.5,
      reviews: 4.5,
      category: "Design",
      image: JS, // Replace with your image path
      buttonText: "Buy Now",
      status: "Purchased",
    },
    {
      id: 3,
      title: "Learning Digital Marketing on Facebook",
      author: "Wade Warren",
      rating: 4.3,
      reviews: 4.3,
      category: "Marketing",
      image: JS, // Replace with your image path
      buttonText: "Buy Now",
      status: "Purchased",
    },
    {
      id: 4,
      title: "Financial Analyst Training & Investing Course",
      author: "Robert Fox",
      rating: 4.8,
      reviews: 4.8,
      category: "Business",
      image: JS, // Replace with your image path
      buttonText: "Buy Now",
      status: "Purchased",
    },
    {
      id: 5,
      title: "Data Analysis & Visualization Masterclass",
      author: "Guy Hawkins",
      rating: 4.5,
      reviews: 4.5,
      category: "Data Science",
      image: JS, // Replace with your image path
      buttonText: "Buy Now",
      status: "Purchased",
    },
    {
      id: 6,
      title: "Master the Fundamentals of Math",
      author: "Sawpawlo Mark",
      rating: 4.7,
      reviews: 4.7,
      category: "Mathematics",
      image: JS, // Replace with your image path
      buttonText: "Buy Now",
      status: "Purchased",
    },
  ];
  return (
    <div>
      {/* intro */}
      <div className="p-5 flex flex-wrap w-full">
        <div className="flex justify-between lg:px-8" data-aos="fade-up">
          <div className="flex lg:w-1/2 ">
            <img src={robo} />
            <div className="m-4 content-center text-wrap text-brown text-2xl md:text-5xl poppins-bold">
              Upcoming{" "}
              <span className=" content-center text-gold text-2xl md:text-5xl poppins-bold">
                Courses-
              </span>{" "}
              Gear up for some Fun
            </div>
          </div>
          {/* Two circular buttons on the right  */}
          {/* <div className="flex self-center gap-x-2">
            <button className="flex lg:w-20 w-10 h-10 lg:h-20 justify-center items-center rounded-full border border-black ">
              <FaArrowLeft className="text-yellow" />
            </button>
            <button className="flex lg:w-20 lg:h-20 w-10 h-10 justify-center items-center rounded-full border border-black ">
              <FaArrowRight className="text-yellow" />
            </button>
          </div> */}
        </div>
      </div>
      {/* Shop Items */}
      <div className="md:px-10 px-5 pb-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {courses.map((course) => (
      <div
        key={course.id}
        className="max-w-sm rounded overflow-hidden p-2 shadow-lg bg-white"
      >
        <img className="w-full" src={course.image} alt="Course" />
        <div className="px-4 py-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 poppins-bold rounded-lg px-2 text-base">
              {course.category}
            </p>
            <div className="flex items-center">
              <FaStar style={{ color: "#f8bc24" }} />
              <p className="text-gray-700 text-base ml-2">
                {course.rating} ({course.reviews} Reviews)
              </p>
            </div>
          </div>
          <div className="poppins-bold text-xl my-4">{course.title}</div>
          <div className="flex items-center">
            <p className="text-gray-700 mr-2">by</p>
            <h3 className="text-line poppins-light text-xl">{course.author}</h3>
          </div>
        </div>
        <div className="flex items-center justify-center my-2">
          <button
            style={{ backgroundColor: "#ffc224" }}
            className="text-white poppins-bold py-2 px-4 rounded-full"
          >
            <div className="flex items-center">
              <p className="poppins-medium text-xl px-4">Notify Me</p>
              <MdOutlineNotificationsActive className="text-center text-xl" />
            </div>
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Shop;
