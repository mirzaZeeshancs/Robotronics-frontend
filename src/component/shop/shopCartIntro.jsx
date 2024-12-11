import CartsStep from "./steps.jsx/cartsStep";
import Header from "../header";
const ShopCart = () => {
  return (
    <div className="shopCarthero" id="shopCarthero">
      <div className="p-5">
        <Header />
      </div>
      {/* parent */}
      <div className="flex flex-col">
        <div className=" items-center"data-aos="fade-down" data-aos-duration="2000" data-aos-delay="4000">
          <p className="text-brown font-bold text-wrap lg:text-4xl text-2xl poppins-bold text-center self-center ">
            SHOPING CART
          </p>
          <p className="text-brown text-sm text-wrap text-center poppins-semibold self-center ">
            THIS IS YOUR CART BASED ON WHAT YOU WANTED
          </p>
        </div>
        <div className="self-center"data-aos="fade-up" data-aos-duration="2000" data-aos-delay="4000">
          <CartsStep />
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
