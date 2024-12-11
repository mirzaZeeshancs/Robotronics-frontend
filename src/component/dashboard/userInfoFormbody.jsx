import { useState } from "react";
import LeftNav from "../../component/dashboard/leftNav";

const UserInfoFormbody = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    country: "",
    companyName: "",
    streetAddress: "",
    aptSuite: "",
    city: "",
    state: "",
    phone: "",
    postalCode: "",
    deliveryInstruction: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Add form submission logic here
  };

  return (
    <div className="lg:flex bg-background p-4">
      <div className="">
        <LeftNav />
      </div>
      <div className="w-full lg:w-4/5">
        {/* form */}
        <div className="space-y-5 lg:px-24" >
        <h1 className="text-4xl poppins-bold text-brown" >My Info</h1>
        <h2 className="text-xl poppins-light text-brown" >Add Address</h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-background p-6  max-w-4xl mx-auto"
        >
          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm poppins-light text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={form.firstName}
                onChange={handleChange}
                className=" p-3 px-5 mt-1 block w-full border-gray-300 poppins-light rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="First Name"
                required
              />
            </div>
            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm poppins-light text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={form.lastName}
                onChange={handleChange}
                className=" p-3 px-5 mt-1 block w-full poppins-light border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          {/* Country / Region */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="country"
                className="block text-sm poppins-light text-gray-700"
              >
                Country / Region
              </label>
              <input
                type="text"
                name="country"
                id="country"
                value={form.country}
                onChange={handleChange}
                className=" p-3 px-5 mt-1 block w-full poppins-light border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Country / Region"
                required
              />
            </div>
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm poppins-light text-gray-700"
              >
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                value={form.companyName}
                onChange={handleChange}
                className=" p-3 px-5 mt-1 block w-full poppins-light border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Company (optional)"
              />
            </div>
          </div>
          {/* Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="streetAddress"
                className="block text-sm poppins-light text-gray-700"
              >
                Street Address
              </label>
              <input
                type="text"
                name="streetAddress"
                id="streetAddress"
                value={form.streetAddress}
                onChange={handleChange}
                className=" p-3 px-5 mt-1 block w-full poppins-light border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="House number and street name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="aptSuite"
                className="block text-sm poppins-light text-gray-700"
              >
                Apt, suite, unit
              </label>
              <input
                type="text"
                name="aptSuite"
                id="aptSuite"
                value={form.aptSuite}
                onChange={handleChange}
                className=" p-3 px-5 mt-1 block w-full poppins-light border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="apartment, suite, unit, etc. (optional)"
              />
            </div>
          </div>
          {/* City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="city"
                className="block text-sm poppins-light text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                value={form.city}
                onChange={handleChange}
                className=" p-3 px-5 mt-1 block w-full poppins-light border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Town / City"
                required
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-sm poppins-light text-gray-700"
              >
                State*
              </label>
              <select
                name="state"
                id="state"
                value={form.state}
                onChange={handleChange}
                className=" p-3 mt-1 block w-full border-gray-300 poppins-light rounded-md shadow-sm focus:border-yellow focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              >
                <option value="" className="poppins-light">Select state</option>
                <option value="CA" className="poppins-light">California</option>
                <option value="NY" className="poppins-light">New York</option>
                <option value="TX" className="poppins-light">Texas</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          {/* Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm poppins-light text-gray-700"
              >
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={form.phone}
                onChange={handleChange}
                className=" p-3 px-5 mt-1 block w-full poppins-light border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Phone"
                required
              />
            </div>
            <div>
              <label
                htmlFor="postalCode"
                className="block text-sm poppins-light text-gray-700"
              >
                Postal Code*
              </label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                value={form.postalCode}
                onChange={handleChange}
                className=" p-3 px-5 mt-1 block w-full poppins-light border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Postal Code"
                required
              />
            </div>
          </div>
          {/* Delivery Instruction */}
          <div>
            <label
              htmlFor="deliveryInstruction"
              className=" block text-sm poppins-light text-gray-700"
            >
              Delivery Instruction
            </label>
            <textarea
              name="deliveryInstruction"
              id="deliveryInstruction"
              value={form.deliveryInstruction}
              onChange={handleChange}
              className=" p-7 mt-1 block w-full poppins-light border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Delivery Instruction"
            ></textarea>
          </div>
          {/* submit */}
          <div className="mt-6 space-y-4">
            {/* Set as default shipping address */}
            <div className="flex items-center">
              <input
                id="defaultShipping"
                name="defaultShipping"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="defaultShipping"
                className="ml-2 block text-sm poppins-light text-gray-900"
              >
                Set as default shipping address
              </label>
            </div>
            {/* Set as default billing address */}
            <div className="flex items-center">
              <input
                id="defaultBilling"
                name="defaultBilling"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="defaultBilling"
                className="ml-2 block text-sm poppins-light text-gray-900"
              >
                Set as default billing address
              </label>
            </div>
            {/* buttons */}
            <div className="flex space-x-4">
              {/* Save */}
              <button
                type="submit"
                className="bg-brown text-white py-2 px-4 poppins-light rounded-md shadow-sm hover:bg-brown-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown"
              >
                Save
              </button>
              {/* Cancel */}
              <button
                type="button"
                className="bg-white text-gray-700 py-2 px-4 poppins-light rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInfoFormbody;
