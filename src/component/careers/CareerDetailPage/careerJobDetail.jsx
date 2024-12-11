import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const CareerJobDetail = () => {
  const data = {
    title:
      "Our agency focuses on Robotics and producing top-tier Robotics engineers in Pakistan.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    roleOverview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    keyResponsibilities: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    ],
    requiredSkills: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    ],
  };
  const [form, setForm] = useState({
    firstName: "",            // First Name
    lastName: "",             // Last Name
    email: "",                // Email for job applications
    phone: "",                // Phone number
    streetAddress: "",        // Street address
    city: "",                 // City
    state: "",                // State
    postalCode: "",           // Postal code
    education: "",            // Applicant's education details
    workExperience: "",       // Work experience field
    skills: "",               // Skills section
    cvFile: null,             // For uploading the CV file
    coverLetter: "",          // Optionally a cover letter
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
  const handleFileUpload = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setForm((prevForm) => ({
      ...prevForm,
      cvFile: file, // Update the form state with the selected file
    }));
  };
  return (
    <div className="lg:px-56 px-10 bg-background">
      <h1 className="lg:text-4xl text-xl poppins-extrabold mb-4">
        {data.title}
      </h1>
      <p className="mb-4 poppins-light">{data.description}</p>

      <h2 className="text-xl poppins-bold font-bold mb-2">Role Overview:</h2>
      <p className="mb-4">{data.roleOverview}</p>

      <h2 className="text-xl poppins-bold mb-2">Key Responsibilities:</h2>
      <ul className="list-disc poppins-light list-inside mb-4">
        {data.keyResponsibilities.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>

      <h2 className="text-xl poppins-bold mb-2">Required Skills:</h2>
      <ul className="list-disc poppins-light list-inside mb-4">
        {data.requiredSkills.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>

      <div className="lg:pb-20 pb-10">
        {/* text */}
        <div className="lg:py-20 py-10">
          <p className="text-wrap text-brown poppins-medium lg:text-2xl text-xl mb-10">
            Jumpstart your journey with Artistsweb by sending your CV, portfolio
            by using the link below.
          </p>
          <p className="text-wrap text-brown poppins-medium lg:text-2xl text-xl">
            We appreciate passionate individuals who bring unique perspectives
            and are willing to grow with our organnization. We strongly believe
            in diversity and encourage people of all genders and ethnicities to
            apply!
          </p>
        </div>
        <div className="space-y-5 lg:px-24">
          <h1 className="text-4xl poppins-bold text-brown">Job Application</h1>
          <h2 className="text-xl poppins-light text-brown">
            Submit your details and CV
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-background p-6 max-w-4xl mx-auto"
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
                className="p-3 px-5 mt-1 block w-full border-gray-300 poppins-light rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                className="p-3 px-5 mt-1 block w-full poppins-light border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="grid grid-cols-1">
            <div>
              <label
                htmlFor="email"
                className="block text-sm poppins-light text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                className="p-3 px-5 mt-1 block w-full poppins-light border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Email Address"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div className="grid grid-cols-1">
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
                className="p-3 px-5 mt-1 block w-full poppins-light border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Phone Number"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="address"
                className="block text-sm poppins-light text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={form.address}
                onChange={handleChange}
                className="p-3 px-5 mt-1 block w-full poppins-light border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Address"
                required
              />
            </div>
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
                className="p-3 px-5 mt-1 block w-full poppins-light border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="City"
                required
              />
            </div>
          </div>

          {/* Experience */}
          <div className="grid grid-cols-1">
            <div>
              <label
                htmlFor="experience"
                className="block text-sm poppins-light text-gray-700"
              >
                Experience
              </label>
              <textarea
                name="experience"
                id="experience"
                value={form.experience}
                onChange={handleChange}
                className="p-3 mt-1 block w-full poppins-light border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Describe your work experience"
                required
              ></textarea>
            </div>
          </div>

          {/* Education */}
          <div className="grid grid-cols-1">
            <div>
              <label
                htmlFor="education"
                className="block text-sm poppins-light text-gray-700"
              >
                Education
              </label>
              <textarea
                name="education"
                id="education"
                value={form.education}
                onChange={handleChange}
                className="p-3 mt-1 block w-full poppins-light border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Describe your educational background"
                required
              ></textarea>
            </div>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1">
            <div>
              <label
                htmlFor="skills"
                className="block text-sm poppins-light text-gray-700"
              >
                Skills
              </label>
              <textarea
                name="skills"
                id="skills"
                value={form.skills}
                onChange={handleChange}
                className="p-3 mt-1 block w-full poppins-light border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="List your skills"
                required
              ></textarea>
            </div>
          </div>

          {/* CV Upload */}
          <div className="grid grid-cols-1">
            <div>
              <label
                htmlFor="cv"
                className="block text-sm poppins-light text-gray-700"
              >
                Upload CV
              </label>
              <input
                type="file"
                name="cv"
                id="cv"
                onChange={handleFileUpload}
                className="mt-1 block w-full poppins-light border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <div className="mt-6 space-y-4">
            <button
              type="submit"
              className="bg-brown text-white py-2 px-4 poppins-light rounded-md shadow-sm hover:bg-brown-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown"
            >
              Submit Application
            </button>
          </div>
        </form>

        <div className=" flex flex-row justify-between border border-smallText lg:p-10 p-5  rounded-xl">
          <p className="text-wrap text-brown poppins-medium lg:text-2xl  self-center ">
            Interested in this position?
          </p>
          {/* button */}
          <a
            className="bg-brown text-white poppins-medium hover:text-brown hover:bg-yellow  lg:text-xl text-sm p-3 rounded-xl self-center "
            href="#"
          >
            Apply Now {"  "}
            <button className="border border-white rounded-full p-2 ">
              <FiArrowUpRight />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareerJobDetail;
