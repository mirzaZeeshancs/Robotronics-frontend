// import LeftNav from "./leftNav";
// import { FaStar } from "react-icons/fa";
// import JS from "../../assets/images/JS-MyCouses.svg";
// const MyCourses = () => {
//   const courses = [
//     {
//       id: 1,
//       title: "Learning JavaScript With Imagination",
//       author: "David Millar",
//       rating: 4.8,
//       reviews: 4.8,
//       category: "Development",
//       image: JS, // Replace with your image path
//       buttonText: "View Detail",
//       status: "Purchased",
//     },
//     {
//       id: 2,
//       title: "The Complete Graphic Design for Beginners",
//       author: "Jenny Wilson",
//       rating: 4.5,
//       reviews: 4.5,
//       category: "Design",
//       image: JS, // Replace with your image path
//       buttonText: "View Detail",
//       status: "Purchased",
//     },
//     {
//       id: 3,
//       title: "Learning Digital Marketing on Facebook",
//       author: "Wade Warren",
//       rating: 4.3,
//       reviews: 4.3,
//       category: "Marketing",
//       image: JS, // Replace with your image path
//       buttonText: "View Detail",
//       status: "Purchased",
//     },
//     {
//       id: 4,
//       title: "Financial Analyst Training & Investing Course",
//       author: "Robert Fox",
//       rating: 4.8,
//       reviews: 4.8,
//       category: "Business",
//       image: JS, // Replace with your image path
//       buttonText: "View Detail",
//       status: "Purchased",
//     },
//     {
//       id: 5,
//       title: "Data Analysis & Visualization Masterclass",
//       author: "Guy Hawkins",
//       rating: 4.5,
//       reviews: 4.5,
//       category: "Data Science",
//       image: JS, // Replace with your image path
//       buttonText: "View Detail",
//       status: "Purchased",
//     },
//     {
//       id: 6,
//       title: "Master the Fundamentals of Math",
//       author: "Sawpawlo Mark",
//       rating: 4.7,
//       reviews: 4.7,
//       category: "Mathematics",
//       image: JS, // Replace with your image path
//       buttonText: "View Detail",
//       status: "Purchased",
//     },
//   ];

//   return (

//     <div className="bg-background p-10 lg:flex flex-row">
//       {/* NavBr */}
//       <div className="lg:w-1/3  w-2/3">
//         <LeftNav />
//       </div>
//       {/* products */}
//       <div className="w-full text=center py-5 ">
//         <h1 className="text-lightblack lg:text-2xl text-base font-bold  ">
//           My Courses
//         </h1>
//         {/* Shop Items */}
//         <div className="py-10 flex flex-wrap gap-6">
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               className="w-full sm:w-1/2 lg:w-1/3 rounded overflow-hidden shadow-lg bg-white" // Remove padding
//             >
//               <img className="w-full" src={course.image} alt="Course" />
//               <div className="lg:px-6 py-4">
//                 <div className="lg:flex flex-row justify-between">
//                   <p className="text-gray-700 rounded-lg px-1 bg-lin text-base">
//                     {course.category}
//                   </p>
//                   {/* Stars */}
//                   <div className="flex items-center">
//                     <FaStar className="text-yellow-500" />
//                     <p className="text-gray-700 text-base ml-2">
//                       {course.rating} ({course.reviews} Reviews)
//                     </p>
//                   </div>
//                 </div>
//                 <div className="font-bold text-xl text-wrap mb-2">
//                   {course.title}
//                 </div>

//                 <p className="flex flex-row text-gray-700 text-base">
//                   <span className="text-line space-x-2">by</span>
//                   {course.author}
//                 </p>
//               </div>
//               <div className="px-6 pt-4 pb-2">
//                 <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full">
//                   {course.buttonText}
//                 </button>
//                 <span className="text-gray-700 text-base ml-4 font-bold">
//                   {course.status}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>

//   );
// };

// export default MyCourses;

import LeftNav from "./leftNav";
import { FaStar } from "react-icons/fa";
import JS from "../../assets/images/JS-MyCouses.svg";

const MyCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Learning JavaScript With Imagination",
      author: "David Millar",
      rating: 4.8,
      reviews: 4.8,
      category: "Development",
      image: JS,
      buttonText: "View Detail",
      status: "Purchased",
    },
    {
      id: 2,
      title: "The Complete Graphic Design for Beginners",
      author: "Jenny Wilson",
      rating: 4.5,
      reviews: 4.5,
      category: "Design",
      image: JS,
      buttonText: "View Detail",
      status: "Purchased",
    },
    {
      id: 3,
      title: "Learning Digital Marketing on Facebook",
      author: "Wade Warren",
      rating: 4.3,
      reviews: 4.3,
      category: "Marketing",
      image: JS,
      buttonText: "View Detail",
      status: "Purchased",
    },
    {
      id: 4,
      title: "Financial Analyst Training & Investing Course",
      author: "Robert Fox",
      rating: 4.8,
      reviews: 4.8,
      category: "Business",
      image: JS,
      buttonText: "View Detail",
      status: "Purchased",
    },
    {
      id: 5,
      title: "Data Analysis & Visualization Masterclass",
      author: "Guy Hawkins",
      rating: 4.5,
      reviews: 4.5,
      category: "Data Science",
      image: JS,
      buttonText: "View Detail",
      status: "Purchased",
    },
    {
      id: 6,
      title: "Master the Fundamentals of Math",
      author: "Sawpawlo Mark",
      rating: 4.7,
      reviews: 4.7,
      category: "Mathematics",
      image: JS,
      buttonText: "View Detail",
      status: "Purchased",
    },
  ];

  return (
    <div className="bg-background lg:flex flex-row">
      {/* Left Navigation */}
      <div className="lg:w-1/4 w-2/3">
        <LeftNav />
      </div>

      {/* Course Listing */}
      <div className="w-full text-center py-5">
        <h1 className="text-lightblack lg:text-2xl text-base poppins-bold">
          My Courses
        </h1>

        {/* Shop Items */}
        <div className="flex flex-wrap justify-between gap-y-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6"
            >
              <div className="rounded overflow-hidden shadow-lg bg-white h-full flex flex-col">
                <img className="w-full" src={course.image} alt="Course" />
                <div className="lg:px-6 py-4 flex-grow">

                  <div className="lg:flex flex-row p-2 flex-wrap justify-between">
                    <p className="text-gray-700 text-wrap poppins-bold rounded-lg px-1 bg-lin text-base">
                      {course.category}
                    </p>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-500" />
                      <p className="text-gray-700 poppins-light text-base ml-2">
                        {course.rating} ({course.reviews} Reviews)
                      </p>
                    </div>
                  </div>

                  <div className="font-bold text-xl p-2 poppins-bold text-left text-wrap mb-2">
                    {course.title}
                  </div>

                  <p className="text-gray-700 space-x-2 poppins-bold text-left text-base">
                    <span className="text-line px-2">by</span>
                    {course.author}
                  </p>
                </div>
                <div className=" p-5 px-10 flex justify-between">
                  <a href="/Dashboard/courseDetail">
                  <button className="bg-yellow text-white  shadow-xl poppins-bold py-2 px-4 rounded-full">
                    {course.buttonText}
                  </button>
                  </a>
                  <span className="text-gray-700 text-base  text-center poppins-bold">
                    {course.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
