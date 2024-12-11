import robo from "../../../assets/images/shopRobot.svg";
import star from "../../../assets/images/shopStar.svg";
import Header from "../../header";
const Intro = () => {
  return (
    <div className="bg-lightgray">
      <div className="P-5 ">
        <Header />
      </div>
      {/* parent */}
      <div className="lg:p-5 lg:px-14 flex flex-row ">
        {/* left */}
        <div className="lg:flex flex-row justify-center hidden ">
          {/* img */}
          <div className="p-14 h-94 w-94 rounded-full bg-gray">
            <img src={robo} className="" alt="" />
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
        <div className="p-5 lg:px-24 lg:space-y-14 space-y-8">
          {/* title */}
          <div>
            <p className=" poppins-bold lg:text-4xl ">
              Arduino Based Robots
            </p>
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
                <button className="text-white">ON SALE</button>
              </div>
            </div>
            {/* text */}
            <div className="flex flex-row space-x-2 ">
              <p className="text-sm poppins-medium text-line ">261 products sold .</p>
              <p className="text-sm poppins-medium text-line ">3,1k products watched</p>
            </div>
          </div>
          <div className="flex flex-row lg:justify-between space-x-2">
            {/* button */}
            <div className="lg:px-5 bg-white text-center justify-center">
              <label
                htmlFor="robot border-non bg-white "
                aria-placeholder="TYPE"
              >
                TYPE:
              </label>
              <select id="cars border lg:text-base text-center text-sm border-white bg-brown">
                <option value="volvo">ROBOT</option>
                <option value="saab">ROBOT</option>
                <option value="vw">ROBOT</option>
              </select>
            </div>
            {/* button */}
            <div className=" bg-white">
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
                className="lg:w-24 w-10 lg:px-3 px-1 py-1 text-sm rounded-md focus:outline-none"
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
          {/* buy now */}
          <div className="lg:flex flex-row justify-between lg:space-x-10 " >

            <div className="text-yellow text-2xl poppins-medium" >Pkr 2352.41</div>
            <div className="flex flex-row space-x-5">
              {/* buy now button */}
            <div>
              <a href="/cart">
              <button className="bg-brown p-2 lg:px-6 text-white poppins-medium rounded-lg" >BUY NOW</button>
              </a>
            </div>
            {/* Add to card button */}
            <div>
              <button className="bg-yellow p-2 lg:px-7 text-white poppins-medium rounded-lg" >ADD TO CARD</button>
            </div>
            </div>
            {/* WISH LIST */}
            <div>
              <button className="bg-gray p-2 px-3 poppins-medium rounded-lg">8</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
