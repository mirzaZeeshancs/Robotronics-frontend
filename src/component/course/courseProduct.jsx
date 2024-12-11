import python from "../../assets/images/python.svg";
import shopStar from "../../assets/logo/shopStars.svg";
import time from "../../assets/logo/time-svgrepo-com 1.svg";
import download from "../../assets/logo/download.svg";
import sale from "../../assets/logo/sales.svg";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useState } from "react";
const CourseProduct = ({
  title,
  id,
  description,
  image,
  price,
  duration,
  category,
}) => {
  const [wishList, setWishList] = useState(0);
  const toggleWishList = async () => {
    const newWishListValue = wishList === 0 ? 1 : 0;

    try {
      const response = await fetch("http://localhost:8080/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: id }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Update the state only if the API call succeeds
      setWishList(newWishListValue);
    } catch (error) {
      console.error("Failed to update wishlist:", error);
    }
  };
  return (
    <div className="p-2  " data-aos="fade-up">
      <div className="rounded-2xl p-2 bg-white">
        {/* img */}
        <div className="">
          <img src={python} alt="" />
        </div>
        {/* title */}
        <div>
          <div className="flex flex-row flex-wrap justify-between">
            <p className="lg:text-xl p-1 text-center text-wrap font-bold">
              {title}
            </p>
            <img src={shopStar} alt="" />
          </div>
          <div onClick={toggleWishList} className="cursor-pointer">
            {wishList === 0 ? (
              <div className="flex justify-between">
                <CiStar className="w-6 h-6 self-center" />
                <p className="lg:text-xl text-gold font-bold">PKR {price}</p>
              </div>
            ) : (
              <div className="flex justify-between">
                <FaStar className="w-6 h-6 self-center" />
                <p className="lg:text-xl text-gold font-bold">PKR {price}</p>
              </div>
            )}
          </div>
        </div>
        {/* line */}
        <div className="py-5">
          <div className="w-full h-0.5 border border-dotted border-black"></div>
        </div>
        {/* details */}
        <div className="flex flex-wrap justify-center lg:space-x-2 items-center">
          <div className="flex ">
            <img className=" text-xs" src={time} />
            {duration}
          </div>
          <div className="flex">
            <img className=" text-xs" src={download} />
            34 Course
          </div>
          <div className="flex">
            <img className=" text-xs" src={sale} />
            250 Sales
          </div>
        </div>
      </div>
      {/* button */}
      <div className="py-2">
        <NavLink to={`/CoursesProduct/${id}`}>
          <div className="text-center bg-yellow p-2">
            <button className="bg-yellow text-xl p-3 font-bold rounded">
              Buy Course
            </button>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default CourseProduct;
