import robo from "../../../assets/logo/Robotrinic.svg";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaStar } from "react-icons/fa";
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
            <div className=" content-center text-wrap text-brown text-2xl md:text-5xl poppins-bold">
              Upcoming{" "}
              <span className=" content-center text-gold text-2xl md:text-5xl poppins-bold">
                Courses-
              </span>{" "}
              Gear up for some Fun
            </div>
          </div>
          {/* Two circular buttons on the right  */}
          <div className="flex self-center gap-x-2">
            <button className="flex lg:w-20 w-10 h-10 lg:h-20 justify-center items-center rounded-full border border-black ">
              <FaArrowLeft className="text-yellow" />
            </button>
            <button className="flex lg:w-20 lg:h-20 w-10 h-10 justify-center items-center rounded-full border border-black ">
              <FaArrowRight className="text-yellow" />
            </button>
          </div>
        </div>
      </div>
      {/* Shop Items */}
      <div className="md:px-32 px-20 pb-10 flex flex-row flex-wrap gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="max-w-sm rounded overflow-hidden p-2 shadow-lg bg-white "
          >
            <img className="w-full" src={course.image} alt="Course" />
            <div className="lg:px-6 py-4">
              <div className="lg:flex flex-row justify-between">
                <p className="text-gray-700 poppins-bold rounded-lg px-1 bg-lin text-base">
                  {course.category}
                </p>
                {/* Stars */}
                <div className="flex items-center">
                  <FaStar className="text-yellow-500" />
                  <p className="text-gray-700 text-base ml-2">
                    {course.rating} ({course.reviews} Reviews)
                  </p>
                </div>
              </div>
              <div className="poppins-bold text-xl text-wrap mb-2">
                {course.title}
              </div>

              <p className="flex flex-row text-gray-700 text-base">
                <p className="text-line poppins-light space-x-2">by</p>
                {course.author}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="bg-yellow-500 bg-yellow text-white poppins-bold py-2 px-4 rounded-full">
                <div className="flex">
                  <p className="poppins-bold px-4">{course.buttonText}</p>
                  <FaArrowRight className="text-center" />
                </div>
              </button>
              <span className="text-gray-700 text-base ml-4 poppins-bold">
                {course.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop