import robo from "../../../assets/images/shopRobot.svg";
import python from "../../../assets/images/python.svg";
import star from "../../../assets/images/shopStar.svg";
import { useDispatch } from "react-redux";

import Header from "../../header";
import { addToCart } from "../../../store/cart/cartSlice";
const CourseIntro = ({ title, id, image, price }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: id }));
  };
  return (
    <div className="bg-lightgray">
      <div className="p-5 ">
        <Header />
      </div>
      {/* parent */}
      <div className=" p-10 lg:flex flex-row ">
        {/* left */}
        <div className="lg:flex flex-row justify-center ">
          {/* img */}
          <div className="rounded-full bg-gray max-w-full max-h-full flex items-center justify-center">
            <img
              src={python}
              className="rounded-full object-cover md:w-full md:h-full"
              alt="Python"
            />
          </div>

          {/* pic's */}
          <div className="flex flex-row space-x-3 py-10">
            {/* pic 1 */}
            <div className="h-10 w-10 bg-white shadow-lg">
              <img src={robo} className="h-10 w-10" alt="" />
            </div>
            {/* pic 2 */}
            <div className="h-10 w-10 bg-white shadow-lg">
              <img src={robo} className="h-10 w-10" alt="" />
            </div>
            {/* pic 3 */}
            <div className="h-10 w-10 bg-white shadow-lg">
              <img src={robo} className="h-10 w-10" alt="" />
            </div>
            {/* pic 4 */}
            <div className="h-10 w-10 bg-white shadow-lg">
              <img src={robo} className="h-10 w-10" alt="" />
            </div>
          </div>
        </div>

        {/* right */}
        <div className="p-5 lg:px-24 lg:space-y-5 space-y-3 ">
          {/* title */}
          <div>
            <p className="poppins-bold text-brown lg:text-6xl ">{title}</p>
          </div>
          {/* sale */}
          <div className="space-y-8">
            {/* stars */}
            <div className="flex flex-row lg:space-x-14 space-x-8">
              {/* img */}
              <div>
                <img src={star} alt="" />
              </div>
              {/* button */}
              <div className="bg-red-600 p-1 px-2">
                <button className="text-white poppins-bold">ON SALE</button>
              </div>
            </div>
            {/* text */}
            <div className="flex flex-row space-x-2 ">
              <p className="text-sm text-line poppins-thin">
                261 products sold .
              </p>
              <p className="text-sm text-line poppins-thin">
                3,1k products watched
              </p>
            </div>
          </div>
          <div className="flex flex-row  space-x-2">
            {/* button */}
            <div className="lg:px-5 bg-gray text-line text-center justify-center">
              <label
                htmlFor="robot border-non bg-white "
                aria-placeholder="TYPE"
              >
                TYPE:
              </label>
              <select
                id="cars border lg:text-base text-line text-center text-sm border border-gray bg-brown"
                className="bg-gray"
              >
                <option value="volvo poppins-thin">ROBOT</option>
                <option value="saab poppins-thin">ROBOT</option>
                <option value="vw poppins-thin">ROBOT</option>
              </select>
            </div>
            {/* button */}
            <div className=" bg-gray">
              {/* Decrease button */}
              <button
                className="lg:px-3 px-1 lg:py-1 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 focus:outline-none"
                // onClick={handleDecrease}
              >
                -
              </button>
              {/* Quantity input */}
              <input
                type="number"
                className="bg-gray lg:w-24 w-10 lg:px-3 px-1 py-1 text-sm rounded-md focus:outline-none"
                // value={initialValue}
                placeholder="NUMBER:"
                min="1"
                readOnly
              />
              {/* Increase button */}
              <button
                className="px-3 py-1 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 focus:outline-none"
                // onClick={handleIncrease}
              >
                +
              </button>
            </div>
          </div>
          <div className="text-yellow text-2xl poppins-bold">Pkr {price}</div>
          {/* select */}
          <div className="flex flex-row lg:space-x-36 space-x-20 ">
            {/* select course */}
            <div className="lg:px-5 bg-gray text-line text-center justify-center">
              <label
                htmlFor="robot border-non bg-white "
                aria-placeholder="TYPE"
              >
                TYPE:
              </label>
              <select
                id="cars "
                className="bg-gray border-gray border lg:text-base text-line text-center text-sm"
              >
                <option value="volvo poppins-thin">ROBOT</option>
                <option value="saab poppins-thin">ROBOT</option>
                <option value="vw poppins-thin">ROBOT</option>
              </select>
            </div>
            {/* select time slot */}
            <div className="lg:px-5 bg-gray text-line text-center justify-center">
              <label
                htmlFor="robot border-non bg-white "
                aria-placeholder="TYPE"
              >
                TYPE:
              </label>
              <select
                id="cars border lg:text-base text-line text-center text-sm border border-gray bg-brown"
                className="bg-gray"
              >
                <option value="volvo poppins-thin">ROBOT</option>
                <option value="saab poppins-thin">ROBOT</option>
                <option value="vw poppins-thin">ROBOT</option>
              </select>
            </div>
          </div>
          {/* buy now */}
          <div className="lg:flex flex-row justify-between lg:space-x-10 ">
            <div className="flex flex-row space-x-5">
              {/* buy now button */}
              <div>
                <a href="/cart">
                  <button className="bg-brown p-2 poppins-medium  lg:px-6 text-white rounded-lg">
                    BUY NOW
                  </button>
                </a>
              </div>
              {/* Add to card button */}
              <div>
                <button
                  onClick={handleAddToCart}
                  className="bg-yellow p-2 poppins-medium  lg:px-7 text-white rounded-lg"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            {/* WISH LIST */}
            <div>
              <button className="bg-gray p-2 px-3 poppins-medium  rounded-lg">
                8
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseIntro;
