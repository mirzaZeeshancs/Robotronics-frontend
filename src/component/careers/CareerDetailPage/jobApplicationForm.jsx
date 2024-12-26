import { useState } from "react";

const JobApplicationForm = () => {
  const [form, setForm] = useState({
    firstName: "",            
    lastName: "",             
    email: "",                
    phone: "",                
    streetAddress: "",       
    city: "",                
    state: "",               
    postalCode: "",          
    education: "",           
    workExperience: "",      
    skills: "",              
    cvFile: null,            
    coverLetter: "",         
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
    const file = e.target.files[0]; 
    setForm((prevForm) => ({
      ...prevForm,
      cvFile: file, 
    }));
  };

  return (
    <>
    <div className="space-y-5 mx-10 my-8 lg:px-24"  >
          <h1 className="text-4xl poppins-bold text-brown"data-aos="fade-right" data-aos-duration="2000" data-aos-delay="4000"  >Job Application</h1>
          <h2 className="text-xl poppins-light text-brown"data-aos="fade-right" data-aos-duration="2000" data-aos-delay="4000"  >
            Submit your details and CV
          </h2>
        </div>
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-background p-6 max-w-4xl mx-auto"
    >
      {/* First Name and Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="p-3 px-5 mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="First Name"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="p-3 px-5 mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Last Name"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div className="grid grid-cols-1">
        <div>
          <label htmlFor="email" className="block text-sm text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            className="p-3 px-5 mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Email Address"
            required
          />
        </div>
      </div>

      {/* Phone */}
      <div className="grid grid-cols-1">
        <div>
          <label htmlFor="phone" className="block text-sm text-gray-700">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={form.phone}
            onChange={handleChange}
            className="p-3 px-5 mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Phone Number"
            required
          />
        </div>
      </div>

      {/* Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="address" className="block text-sm text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={form.address}
            onChange={handleChange}
            className="p-3 px-5 mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Address"
            required
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm text-gray-700">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value={form.city}
            onChange={handleChange}
            className="p-3 px-5 mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="City"
            required
          />
        </div>
      </div>

      {/* Experience */}
      <div className="grid grid-cols-1">
        <div>
          <label htmlFor="experience" className="block text-sm text-gray-700">
            Experience
          </label>
          <textarea
            name="experience"
            id="experience"
            value={form.experience}
            onChange={handleChange}
            className="p-3 mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Describe your work experience"
            required
          ></textarea>
        </div>
      </div>

      {/* Education */}
      <div className="grid grid-cols-1">
        <div>
          <label htmlFor="education" className="block text-sm text-gray-700">
            Education
          </label>
          <textarea
            name="education"
            id="education"
            value={form.education}
            onChange={handleChange}
            className="p-3 mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Describe your educational background"
            required
          ></textarea>
        </div>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-1">
        <div>
          <label htmlFor="skills" className="block text-sm text-gray-700">
            Skills
          </label>
          <textarea
            name="skills"
            id="skills"
            value={form.skills}
            onChange={handleChange}
            className="p-3 mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="List your skills"
            required
          ></textarea>
        </div>
      </div>

      {/* CV Upload */}
      <div className="grid grid-cols-1">
        <div>
          <label htmlFor="cv" className="block text-sm text-gray-700">
            Upload CV
          </label>
          <input
            type="file"
            name="cv"
            id="cv"
            onChange={handleFileUpload}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
      </div>

      {/* Submit */}
      <div className="mt-6 space-y-4">
        <button
          type="submit"
          className="bg-brown text-white py-2 px-4 rounded-md shadow-sm hover:bg-brown-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown"
        >
          Submit Application
        </button>
      </div>
    </form>
    </>
  );
};

export default JobApplicationForm;
