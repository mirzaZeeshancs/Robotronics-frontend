// import { AiOutlineRight } from 'react-icons/ai';  // Import the slimmer icon

// const CourseDescription = () => {
//   return (
//     <div className="bg-background lg:px-24 py-5  ">
//       <div className="bg-white p-8 py-10 shadow-xl rounded-md">
//         {/* Course Description */}
//         <div className="py-5">
//           <h1 className="font-bold text-xl">Course Description</h1>
//           <p className=" text-wrap text-lightblack">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
//             semper turpis, ac viverra velit tristique vitae. Sed vel felis ac
//             neque euismod rutrum. Donec vulputate, lectus at tristique suscipit,
//             ligula velit cursus purus, in condimentum metus dolor in urna. Donec
//             at turpis vel nunc aliquet iaculis. Sed congue semper turpis, ac
//             viverra velit tristique vitae. Sed vel felis ac neque euismod
//             rutrum.
//           </p>
//         </div>
//         {/* Learn  */}
//         <div className="flex flex-row justify-between">
//           {/* left */}
//           <div className="space-y-4 flex-1">
//             <h1 className="text-xl font-bold">
//               What you will learn in this course?
//             </h1>
//             <p className="text-lightblack text-wrap">
//               Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua Quis
//               ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
//               accumsan.
//             </p>
//             <p className="text-lightblack text-wrap">
//               Morem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliquaQuis
//               ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
//               accumsan.Dorem ipsum dolor sit amet, consecteturadipiscing elit,
//               sed do eiusmod tempor{" "}
//             </p>
//           </div>
//           {/* right */}
//           <div className="flex-1 py-10 space-y-5 ">
//             <div className="flex flex-row space-x-5 items-center">
//               <div className=" bg-yellow  rounded-full h-4 w-4  " >
//               <p className="text-center items-center"> <AiOutlineRight/> </p>
//               </div>
//               <p className="text-xl font-bold">
//                 Work with Color & Gradient & Grid
//               </p>
//             </div>
//             <div className="flex flex-row space-x-5 items-center">
//               <div className=" bg-yellow  rounded-full h-4 w-4  " >
//               <p className="text-center items-center"> <AiOutlineRight/>  </p>
//               </div>
//               <p className="text-xl font-bold">
//                 Work with Color & Gradient & Grid
//               </p>
//             </div>
//             <div className="flex flex-row space-x-5 items-center">
//               <div className=" bg-yellow  rounded-full h-4 w-4  " >
//               <p className="text-center items-center">  <AiOutlineRight/>  </p>
//               </div>
//               <p className="text-xl font-bold">
//                 Work with Color & Gradient & Grid
//               </p>
//             </div>
//             <div className="flex flex-row space-x-5 items-center">
//               <div className=" bg-yellow  rounded-full h-4 w-4  " >
//               <p className="text-center items-center">  <AiOutlineRight/>  </p>
//               </div>
//               <p className="text-xl font-bold">
//                 Work with Color & Gradient & Grid
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* card */}
//         <div className='p-5 rounded-md shadow-md' >
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CourseDescription;

import { AiOutlineRight } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";

const CourseDescription = () => {
  return (
    <div className="bg-background lg:px-24 py-5">
      <div className="bg-white p-8 py-10 shadow-xl rounded-md">
        {/* Course Description */}
        <div className="py-5">
          <h1 className="font-bold text-xl">Course Description</h1>
          <p className="text-wrap text-lightblack">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            semper turpis, ac viverra velit tristique vitae. Sed vel felis ac
            neque euismod rutrum. Donec vulputate, lectus at tristique suscipit,
            ligula velit cursus purus, in condimentum metus dolor in urna. Donec
            at turpis vel nunc aliquet iaculis. Sed congue semper turpis, ac
            viverra velit tristique vitae. Sed vel felis ac neque euismod
            rutrum.
          </p>
        </div>
        {/* Learn */}
        <div className="lg:flex flex-row flex-wrap justify-between">
          {/* left */}
          <div className="space-y-4 flex-1">
            <h1 className="text-xl font-bold">
              What you will learn in this course?
            </h1>
            <p className="text-lightblack text-wrap">
              Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan.
            </p>
            <p className="text-lightblack text-wrap">
              Morem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliquaQuis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan.Dorem ipsum dolor sit amet, consecteturadipiscing elit,
              sed do eiusmod tempor
            </p>
          </div>
          {/* right */}
          <div className="flex-1 py-10 space-y-5">
            <div className="flex flex-row space-x-5 items-center">
              <div className="bg-yellow rounded-full h-4 w-4 flex items-center justify-center">
                <AiOutlineRight className="text-white text-xs" />
              </div>
              <p className="text-xl font-bold">
                Work with Color & Gradient & Grid
              </p>
            </div>
            <div className="flex flex-row space-x-5 items-center">
              <div className="bg-yellow rounded-full h-4 w-4 flex items-center justify-center">
                <AiOutlineRight className="text-white text-xs" />
              </div>
              <p className="text-xl font-bold">
                Work with Color & Gradient & Grid
              </p>
            </div>
            <div className="flex flex-row space-x-5 items-center">
              <div className="bg-yellow rounded-full h-4 w-4 flex items-center justify-center">
                <AiOutlineRight className="text-white text-xs" />
              </div>
              <p className="text-xl font-bold">
                Work with Color & Gradient & Grid
              </p>
            </div>
            <div className="flex flex-row space-x-5 items-center">
              <div className="bg-yellow rounded-full h-4 w-4 flex items-center justify-center">
                <AiOutlineRight className="text-white text-xs" />
              </div>
              <p className="text-xl font-bold">
                Work with Color & Gradient & Grid
              </p>
            </div>
          </div>
        </div>
        {/* Course Sections */}
        <div className="bg-gray-100 p-6  mt-8">
          <div className="space-y-4">
            <div
              className="p-5 bg-white rounded-md "
              style={{
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.1), 0 -4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <AiOutlineRight className="text-yellow" />
                  <p className="text-wrap font-bold">
                    Section 1: Introduction to Emotional Boundaries
                  </p>
                </div>
                <p>06:48</p>
              </div>
              <div className="mt-2 space-y-2 text-gray-700">
                <div className="flex justify-between items-center space-x-2">
                  <div className="space-x-2 items-center ">
                    <span className="block w-2 h-2 bg-yellow rounded-full "></span>
                    <span className="text-wrap font-bold">Video Section:</span>
                    <span className="text-wrap" >Introduction to Emotional Boundaries</span>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <FiDownload className="text-yellow" />
                    <span>Download Here</span>
                  </div>
                </div>
                <div className="flex justify-between items-center space-x-2">
                  <div className="space-x-2 ">
                    <span className="font-bold ">Section Book:</span>
                    <span className="text-wrap" >Introduction to Emotional Boundaries</span>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <FiDownload className="text-yellow" />
                    <span>Download Here</span>
                  </div>
                </div>
                <div className="flex justify-between items-center space-x-2">
                  <div className="space-x-2">
                    <span className="font-bold">PDF: </span>
                    <span className="text-wrap" >Introduction to Emotional Boundaries</span>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <FiDownload className="text-yellow" />
                    <span>Download Here</span>
                  </div>
                </div>
                <div className="flex justify-between items-center space-x-2">
                  <div className="space-x-2">
                    <span className="font-bold">Audio: </span>
                    <span className="text-wrap" >Introduction to Emotional Boundaries</span>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <FiDownload className="text-yellow" />
                    <span>Download Here</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-lin rounded-md shadow-sm">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <AiOutlineRight className="text-yellow-500" />
                  <p className="font-bold text-wrap ">
                    Section 2: Poor Vs Healthy Emotional Boundaries
                  </p>
                </div>
                <p>04:11</p>
              </div>
            </div>
            <div className="p-4 bg-lin rounded-md shadow-sm">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <AiOutlineRight className="text-yellow-500" />
                  <p className="font-bold text-wrap ">
                    Section 3: Discover your strength/weakness of Emotional
                    Boundaries
                  </p>
                </div>
                <p>05:36</p>
              </div>
            </div>
            <div className="p-4 bg-lin rounded-md shadow-sm">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <AiOutlineRight className="text-yellow-500" />
                  <p className="font-bold text-wrap ">
                    Section 4: Signs Emotional Boundaries are Broken
                  </p>
                </div>
                <p>06:52</p>
              </div>
            </div>
            <div className="p-4 bg-lin rounded-md shadow-sm">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <AiOutlineRight className="text-yellow-500" />
                  <p className="font-bold text-wrap ">
                    Section 5: Setting Emotional Boundaries in Various
                    Relationships
                  </p>
                </div>
                <p>11:18</p>
              </div>
            </div>
            <div className="p-4 bg-lin rounded-md shadow-sm">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <AiOutlineRight className="text-yellow-500" />
                  <p className="font-bold text-wrap ">
                    Section 6: Raising Emotional Boundaries while raising Kids
                  </p>
                </div>
                <p>06:32</p>
              </div>
            </div>
          </div>
        </div>
        {/* Upload Your Project */}
        <div className="space-x-8 p-8 py-10 w-1/2 ">
          {/* Upload Section */}
          <div className="lg:flex flex-wrap md:space-x-20">
            <div className="space-y-4" >
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lightblack">
                  Upload Your Project
                </span>
                <div className="flex-1 bg-lin rounded-md flex justify-between items-center p-2">
                  <input
                    type="text"
                    placeholder="Upload Your Project"
                    className="bg-transparent outline-none"
                  />
                  <AiOutlineRight className="text-yellow-500" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lightblack">
                  Upload Your Project
                </span>
                <div className="flex-1 bg-lin rounded-md flex justify-between items-center p-2">
                  <input
                    type="text"
                    placeholder="Upload Your Project"
                    className="bg-transparent outline-none"
                  />
                  <AiOutlineRight className="text-yellow-500" />
                </div>
              </div>
            </div>
            <button className="h-5/6 items-center bg-yellow text-white py-2 px-4 rounded-md shadow-md hover:bg-gold">
              Submit Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
