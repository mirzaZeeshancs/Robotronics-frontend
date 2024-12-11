import CustomerOrder from "./customerOrder";
import mastercard from "../../assets/images/mastercard.svg"
import { useState } from "react";
const ShopPaymentMethod = () => {
  const [selectedService, setSelectedService] = useState(" ");
  const [selectedCMethod, setselectedCMethod] = useState(" ");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleCMethodSelection = (event) => {
    setselectedCMethod(event.target.value);
  };
  const handleSelection = (event) => {
    setSelectedService(event.target.value);
  };

  return (
    <div className="lg:flex flex-row p-5 bg-gray">
      {/* left */}
      <div className="lg:w-2/3">
        {/* shipping services */}
        <div className="lg:px-10 px-4 space-y-20">
          <div className="space-y-5">
            <p className="text-4xl text-brown poppins-bold font-bold">SHIPPING SERVICES</p>
            <p className="text-sm text-brown poppins-light font-bold">
              Choose the best shipping service for your needs.
            </p>
          </div>
          <div className="space-y-5">
            {/* TCS EXPRESS */}
            <div
              className={`p-5 flex flex-row items-center  ${
                selectedService === "TCS"
                  ? "bg-brown text-white"
                  : "bg-white text-brown"
              }`}
              onClick={() => !isDisabled && setSelectedService("TCS")}
            >
              <input
                type="radio"
                value="TCS"
                name="SHIPPING SERVICES"
                checked={selectedService === "TCS"}
                onChange={handleSelection}
                disabled={isDisabled}
                className={`mr-2 form-radio ${
                  isDisabled ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              />
              <div className="flex flex-col p-2 space-y-2 w-full" >
              <span className="flex flex-row justify-between w-full">
                <p className="space-y-2">TCS EXPRESS</p>
                <p className="space-y-2">Free Shipping</p>
              </span>
              <p className="text-wrap poppins-light text-sm space-y-2">
                {" "}
                You can use all Cradit card services.We can accept Visa and
                Master Card
              </p>
              </div>
              
            </div>
            {/* LEOPARD COURIER */}
            <div
              className={`p-5 flex flex-row items-center justify-between ${
                selectedService === "LEOPARD"
                  ? "bg-brown text-white"
                  : "bg-white text-brown"
              }`}
              onClick={() => !isDisabled && setSelectedService("LEOPARD")}
            >
              <input
                type="radio"
                value="LEOPARD"
                name="SHIPPING SERVICES"
                disabled={isDisabled}
                className={`mr-2 form-radio ${
                  isDisabled ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                checked={selectedService === "LEOPARD"}
                onChange={handleSelection}
              />
              <div className="flex flex-col p-2 space-y-2 w-full" >
              <span className="flex flex-row justify-between w-full">
                <p className="space-y-2">TCS EXPRESS</p>
                <p className="space-y-2">Free Shipping</p>
              </span>
              <p className="text-wrap poppins-light text-sm space-y-2">
                {" "}
                You can use all Cradit card services.We can accept Visa and
                Master Card
              </p>
              </div>
            </div>
          </div>

          {/* line */}
          <div className="py-1">
            <div className="h-0 border border-lightgray"></div>
          </div>
        </div>
        {/* Payment method */}
        <div className="lg:p-10 p-4 space-y-5 ">
          <p className="text-4xl text-brown font-bold">Payment method</p>
          <p className="text-sm text-wrap poppins-light text-brown font-bold">
            You can use all Cradit card services.We can accept Visa and Master
            Card
          </p>
          {/* Payment method */}
          <div className="flex lg:flex-row flex-col justify-between">
            {/* Cradit card */}
            <div
              className={`p-5 flex flex-row items-center justify-between border border-lightgray ${
                selectedCMethod === "Cradit card"
                  ? "bg-brown text-white"
                  : "bg-gray text-brown"
              }`}
              onClick={() => setselectedCMethod("Cradit card")}
            >
              <input
                type="radio"
                value="Cradit card"
                name="Payment method"
                checked={selectedCMethod === "Cradit card"}
                onChange={handleCMethodSelection}
                className=""
              />
              <div className="flex flex-col p-2 space-y-2" >
              <span className="flex justify-between w-full">
                <p className="space-y-2">TCS EXPRESS</p>
                <img src={mastercard} className="h-6 w-6" alt="mastercard" />
              </span>
              <p className="text-wrap poppins-light text-sm space-y-2">
                {" "}
                You can use all Cradit card services.We can accept Visa and
                Master Card
              </p>
              </div>
            </div>
            {/* EASY PAISA */}
            <div
              className={`p-5 flex flex-row items-center justify-between border border-lightgray   ${
                selectedCMethod === "easy paisa"
                  ? "bg-brown text-white"
                  : "bg-gray text-brown"
              }`}
              onClick={() => setselectedCMethod("easy paisa")}
            >
              <input
                type="radio"
                value="easy paisa"
                name="Payment method"
                checked={selectedCMethod === "easy paisa"}
                onChange={handleCMethodSelection}
                className=""
              />
               <div className="flex flex-col p-2 space-y-2  " >
              <span className="flex justify-between w-full">
                <p className="space-y-2">TCS EXPRESS</p>
                <img src={mastercard} className="h-6 w-6" alt="mastercard" />
              </span>
              <p className="text-wrap poppins-light text-sm space-y-2">
                {" "}
                You can use all Cradit card services.We can accept Visa and
                Master Card.
              </p>
              </div>
            </div>
          </div>
        </div>
        {/* Provide your Information */}
        <div className="lg:px-10 px-4 space-y-4 lg:pt-20 pt-10 flex">
          <div className="lg:flex flex-row ">
            {/* left side */}
            <form className="lg:space-y-8 space-y-4 lg:mr-5">
              {/* Your email */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-line appearance-none dark:text-brown dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium poppins-light absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your email
                </label>
              </div>
              {/* Month */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="number"
                  name="floating_Month"
                  id="floating_Month"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-line appearance-none dark:text-brown dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_Month"
                  className="peer-focus:font-medium poppins-light absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Month
                </label>
              </div>
            </form>
            {/* right side */}
            <form className="max-w-md mx-auto space-y-4 lg:space-y-8">
              {/* Card number */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="number"
                  name="floating_number"
                  id="floating_number"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-lineappearance-none dark:text-brown dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_number"
                  className="peer-focus:font-medium poppins-light absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Card number
                </label>
              </div>
              {/* Year & CVC */}
              <div className="grid lg:grid-cols-2 lg:gap-6">
                {/* Year */}
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="number"
                    name="floating_Year"
                    id="floating_Year"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-line appearance-none dark:text-brown dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_Year"
                    className="peer-focus:font-medium poppins-light absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Year
                  </label>
                </div>
                {/* CVC */}
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="number"
                    name="floating_CVC"
                    id="floating_CVC"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-lineappearance-none dark:text-brown dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                    required
                  />
                  <label
                    htmlFor="floating_CVC"
                    className="peer-focus:font-medium poppins-light absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    CVC
                  </label>
                </div>
              </div>
            </form>
            
          </div>
        </div>
      </div>
      {/* line */}
      <div className="px-1">
        <div className="h-full w-0 border border-lightgray"></div>
      </div>
      {/* right */}
      <div className=" lg:w-1/2">
        <CustomerOrder />
      </div>
    </div>
  );
};

export default ShopPaymentMethod;
