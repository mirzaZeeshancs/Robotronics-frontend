import Shippingpencilalt from "../../assets/images/Shippingpencilalt.svg";
import pencilaltBlack from "../../assets/images/pencilaltBlack.svg"
import mastercard from "../../assets/images/mastercard.svg";
import ShopConfirmOrder from "./shopConfirmOrder";
const ShopShipping = () => {
  return (
    <div className="lg:flex flex-row lg:p-5 py-20  bg-gray">
      {/* left */}
      <ShopConfirmOrder />
      {/* line */}
      <div className="px-1">
        <div className="h-full w-0 border border-brown"></div>
      </div>
      {/* right */}
      <div className="lg:w-2/3  ">
        <div className="lg:p-14 p-5 lg:space-y-16 space-y-8">
          {/* text */}
          <div className="lg:space-y-8 space-y-4">
            <p className="text-3xl text-brown poppins-light poppins-extrabold font-bold">
              SHIPPING INFORMATION
            </p>
            <p className="text-sm text-brown">
              Please check berofe you finalize your order
            </p>
          </div>
          {/* cards */}
          <div className="bg-brown ">
            <div className="p-3 space-y-4">
              <div className="flex flex-row justify-between">
                <p className="text-l poppins-extrabold text-white">Shoaib Ali</p>
                <a href="">
                  <img src={Shippingpencilalt} alt="" />
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-sm poppins-light text-white">(480) 555-0103</p>
                <p className="text-sm poppins-light text-white">
                  2972 H Block Johar Town Lahore{" "}
                </p>
              </div>
              {/* line */}
              <div className="h-0 w-full border border-white"></div>
              <div className="flex flex-row">
                <div className="flex-1">
                  <p className="font-bold text-white poppins-extrabold text-l">FedEx</p>
                  <p className="text-white text-wrap poppins-light text-sm">
                    Estimated delivery time: Jul 20 - Aug 03
                  </p>
                </div>
                <div className="flex-1" >
                  <p className="text-sm text-white poppins-light text-right" >Free shipping</p>
                </div>
              </div>
            </div>
          </div>
          {/* line */}
          <div className="w-full h-0 border border-lin" ></div>
          {/* text */}
          <div className="lg:space-y-8 space-y-8" >
            <p className="text-3xl text-brown poppins-bold font-bold" >PAYMENT METHOD</p>
            <p className="text-sm text-brown poppins-semibold " >Please check berofe you finalize your order</p>
          </div>
          {/* card */}
          <div className="bg-white flex flex-row justify-between p-5" >
            {/* mastercatrd */}
            <div className=" flex flex-row " >
              <img src={mastercard} alt="" />
              <div className="flex flex-col lg:px-4 px-2" >
                <p className="text-brown text-l poppins-regular font-bold" >Credit Card</p>
                <p className="text-brown poppins-extralight text-sm" > **** 7282 - Expired 8/2022</p>
              </div>
            </div>
            {/* icon */}
            <div className="" >
              <img src={pencilaltBlack} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopShipping;
