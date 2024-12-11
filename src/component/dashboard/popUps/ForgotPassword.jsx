import { useState } from "react";
import PropTypes from "prop-types";

const ForgotPassword = ({ onNext }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending email
    console.log(`Sending email to ${email}`);
    onNext();
  };
  ForgotPassword.propTypes = {
    onNext: PropTypes.func.isRequired,
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <p className="text-lightgray mb-4  text-wrap " >Enter your email for the verification proccess,we will send 4 digits code to your email.</p>
        <form  className="flex flex-col " onSubmit={handleSubmit}>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="border p-2 w-full mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-yellow text-white px-4 py-2 rounded-md"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
