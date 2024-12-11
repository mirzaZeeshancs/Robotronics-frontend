import {
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
// import { useState } from "react";

const ContactUsForm = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   schoolName: "",
  //   address: "",
  //   message: "",
  // });

  // const [status, setStatus] = useState(null); // For status message

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(
  //       "https://your-backend-endpoint.com/contact",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );

  //     const result = await response.json();

  //     if (response.ok) {
  //       setStatus("Message sent successfully!");
  //       setFormData({
  //         name: "",
  //         phone: "",
  //         email: "",
  //         schoolName: "",
  //         address: "",
  //         message: "",
  //       });
  //     } else {
  //       setStatus(`Error: ${result.message}`);
  //     }
  //   } catch (error) {
  //     setStatus(`An error occurred while sending the message.`);
  //   }
  // };

  return (
    <div className="lg:p-20 p-8 bg-background space-y-10">
      {/* line */}
      <div className="space-y-10">
        <div className="w-full border border-lin "></div>
        <button className="border border-lightbrown poppins-light p-2 rounded-full px-5">
          Get In Touch
        </button>
      </div>

      <div className="lg:flex flex-row justify-between ">
        {/* Text */}
        <div className="lg:w-2/3">
          <div className="space-y-10">
            <h1 className="text-5xl poppins-bold text-brown">Contact Us</h1>
            <p className="text-xl poppins-light text-wrap">
              Get in touch with us today to start your Robotics journey...
            </p>
          </div>
          {/* contact icons& Text */}
          <div className="py-5 space-y-2">
            {/* phone */}
            <div className="flex flex-row space-x-2">
              <div className="rounded-full p-2">
                <FaPhoneAlt className="text-brown" />
              </div>
              <p className="self-center poppins-light text-2xl">
                +92 309-422-4016
              </p>
            </div>
            {/* email */}
            <div className="flex flex-row space-x-2">
              <div className=" justify-center rounded-full p-2">
                <TfiEmail className="text-brown" />
              </div>
              <p className="self-center poppins-light text-2xl ">
                info@robotronics.com
              </p>
            </div>
            {/* location */}
            <div className="flex flex-row space-x-2">
              <div className="justify-center rounded-full p-2">
                <FaLocationDot className="text-brown" />
              </div>
              <div className="self-center poppins-light text-wrap text-2xl">
                Alexandru Ioan Cuza Street, Nr. 14,Gullberg 3 , Lahore -
                Pakistan
              </div>
            </div>
          </div>
          {/* Social icons */}
          <div className="flex flex-row lg:py-20 py-8 p-5 space-x-2 ">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:p-3 p-1 rounded-xl bg-brown transition-colors duration-300 ease-out hover:bg-blue-800 shadow-md hover:shadow-lg"
            >
              <FaFacebook className="text-white" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:p-3 p-1 rounded-xl bg-brown transition-colors duration-300 ease-out hover:bg-blue-500 shadow-md hover:shadow-lg"
            >
              <FaTwitter className="text-white" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:p-3 p-1 rounded-xl bg-brown transition-colors duration-300 ease-out hover:bg-red-600 shadow-md hover:shadow-lg"
            >
              <FaYoutube className="text-white" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:p-3 p-1 rounded-xl bg-brown transition-colors duration-300 ease-out hover:bg-pink-500 shadow-md hover:shadow-lg"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:p-3 p-1 rounded-xl bg-brown transition-colors duration-300 ease-out hover:bg-blue-700 shadow-md hover:shadow-lg"
            >
              <FaLinkedin className="text-white" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:p-3 p-1 rounded-xl bg-brown transition-colors duration-300 ease-out hover:bg-green-600 shadow-md hover:shadow-lg"
            >
              <FaWhatsapp className="text-white" />
            </a>
          </div>
        </div>
        {/* Line */}
        <div>
          <div className="h-4/5 w-0 border border-lin"></div>
        </div>
        {/* Form */}
        <div className="lg:w-1/2 p-5">
          <div className="lg:flex flex-row justify-between p-5">
            {/* Left side */}
            <form className="w-full p-1">
              {/* Name */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-line appearance-none dark:text-brown dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>

              {/* Phone */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-line appearance-none dark:text-brown dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone
                </label>
              </div>
            </form>

            {/* Right side */}
            <form className="w-full p-1">
              {/* Email */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-line appearance-none dark:text-brown dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>

              {/* School Name */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="schoolName"
                  id="schoolName"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-line appearance-none dark:text-brown dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="schoolName"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  School Name
                </label>
              </div>
            </form>
          </div>

          {/* Address and Message */}
          <div className="p-5 space-y-20">
            {/* Address */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="address"
                id="address"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-line appearance-none dark:text-brown dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="address"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Address details
              </label>
            </div>

            {/* Message */}
            <div className="relative z-0 w-full mb-5 group">
              <textarea
                name="message"
                id="message"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-line appearance-none dark:text-brown dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="message"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>
          </div>

          {/* Submit button */}
          <div className="text-end p-5">
            <button
              type="submit"
              className="justify-between poppins-light hover:bg-yellow hover:text-brown bg-brown p-2 px-3 rounded-md text-white"
            >
              Send Now
            </button>
          </div>
        </div>
      </div>

      {/* Line */}
      <div>
        <div className="h-0 w-full border border-lin"></div>
      </div>
    </div>
  );
};

export default ContactUsForm;


 
