import React, { useState } from "react";

const SendResumeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gray-100">
      <h1 className="text-3xl font-semibold text-brown mb-5">
        Send Your Resume
      </h1>
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-5"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="resume"
          >
            Upload Resume
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleFileChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-brown text-white py-3 rounded-lg hover:bg-opacity-90 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SendResumeForm;
