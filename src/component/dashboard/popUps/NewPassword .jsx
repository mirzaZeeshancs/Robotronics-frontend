import { useState } from 'react';
import PropTypes from 'prop-types';

const NewPassword = ({ onUpdate }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Simulate password update
      console.log(`Updating password to ${password}`);
      onUpdate(); // Call the onUpdate function passed as a prop
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">New Password</h2>
        <form className='flex flex-col w-full' onSubmit={handleSubmit}>
          <label className="block mb-2">Enter new password</label>
          <input
            type="password"
            className="border p-2 w-full mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="block mb-2">Confirm password</label>
          <input
            type="password"
            className="border p-2 w-full mb-4"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 text-brown w-full text-wrap px-4 py-2 rounded-md"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

NewPassword.propTypes = {
  onUpdate: PropTypes.func.isRequired,
};

export default NewPassword;
