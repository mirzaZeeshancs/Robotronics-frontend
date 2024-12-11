import { useState } from 'react';
import PropTypes from 'prop-types';

const Verification = ({ onNext }) => {
  const [code, setCode] = useState(['', '', '', '']);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move focus to the next input if a digit is entered
      if (value && index < 3) {
        document.getElementById(`digit-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all digits are entered
    if (code.join('').length === 4) {
      console.log(`Verifying code ${code.join('')}`);
      onNext();
    } else {
      alert('Please enter a 4-digit code.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Verification</h2>
        <p className="mb-4">Enter your 4-digit code that you received on your email.</p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex space-x-2 mb-4">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`digit-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg"
              />
            ))}
          </div>
          <p className="mb-4 text-red-500">00:30</p>
          <button
            type="submit"
            className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition"
          >
            VERIFY
          </button>
          <button
            type="button"
            className="mt-4 text-yellow-500 hover:text-yellow-600 transition"
          >
            Resend
          </button>
        </form>
      </div>
    </div>
  );
};

Verification.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default Verification;
