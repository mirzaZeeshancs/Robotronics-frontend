import { useState } from "react";
import img from "../../../assets/images/IServicesQuickContact.svg";

const QuickContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    // Simulate form submission
    try {
      const response = await fetch("http://localhost:8080/Contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          course: "",
          phone: "",
          message: "",
        });
      } else {
        const error = await response.json();
        setStatus(`Error: ${error.message}`);
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-background">
      <div className="flex p-10">
        <div
          className="flex-1 hidden md:block"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="4000"
        >
          <img src={img} className="" alt="Contact Us Illustration" />
        </div>
        <div
          className="lg:px-32 flex-1"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="4000"
        >
          {/* text */}
          <div>
            <h1 className="text-4xl text-left poppins-bold text-brown">
              Quick Contact
            </h1>
            <p className="text-xl text-wrap poppins-regular text-left">
              Feel free to contact us through Twitter or Facebook if you prefer!
            </p>
          </div>
          {/* Inputs */}
          <form className="flex flex-col py-5" onSubmit={handleSubmit}>
            <div className="flex space-x-2 justify-between">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="border-2 border-gray p-3 w-full focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border-2 border-gray p-3 w-full focus:outline-none"
                required
              />
            </div>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="Course"
              className="border-2 border-gray p-3 w-full focus:outline-none mt-4"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="border-2 border-gray p-3 w-full focus:outline-none mt-4"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="border-2 border-gray p-3 w-full focus:outline-none mt-4"
              required
            />
            <button
              type="submit"
              className="w-full text-white poppins-bold bg-gold font-bold py-3 mt-4"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-red-500">{status}</p>}
        </div>
      </div>
      <div className="p-5 py-10 bg-white"></div>
    </div>
  );
};

export default QuickContact;
