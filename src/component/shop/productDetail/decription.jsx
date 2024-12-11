import ShopPages from "../shopPages";
const Decription = ({ description, category, duration }) => {
  return (
    <div className="bg-gray lg:p-14 p-2">
      {/* div 1 */}
      <div className="px-2 flex flex-row lg:justify-center lg:space-x-10 space-x-4 ">
        <p className="lg:text-3xl font-bold text-wrap poppins-extrabold text-brown">
          PRODUCT DETAIL
        </p>
        <p className="h-8 w-0 border border-black "></p>
        <p className="lg:text-3xl font-bold text-wrap poppins-extrabold text-brown">
          DELIVERY AND RETURN
        </p>
      </div>
      {/* div 2 */}
      <div className="p-5 flex flex-row justify-between ">
        <div className=" p-2 w-1/2 space-y-2">
          <p className="lg:text-2xl text-xl poppins-semibold text-brown">
            DESCRIPTION
          </p>
          <p className="text-wrap text-xs poppins-medium text-line ">
            {description}
          </p>
        </div>
        <div className="p-2 w-1/2">
          <div className="text-wrap text-line space-y-2 lg:px-20 px-4">
            <p className="lg:text-2xl text-xl  poppins-semibold text-brown">
              FITS AND FEATURES
            </p>
            <p className="text-xs poppins-medium ">
              1. Duis aute irure dolor in reprehenderit in{" "}
            </p>
            <p className="text-xs poppins-medium ">
              2. Duis aute irure dolor in reprehenderit in voluptate{" "}
            </p>
            <p className="text-xs poppins-medium ">
              3. Duis aute irure in reprehenderit in voluptate velit esse{" "}
            </p>
            <p className="text-xs poppins-medium ">
              4. Duis aute irure dolor in reprehenderit in voluptate{" "}
            </p>
            <p className="text-xs poppins-medium ">
              5. Duis aute irure voluptate velit esse{" "}
            </p>
          </div>
        </div>
      </div>
      <ShopPages />
    </div>
  );
};

export default Decription;
