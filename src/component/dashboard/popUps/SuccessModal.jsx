import PropTypes from 'prop-types';

const SuccessModal = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
    <div className="bg-white p-6 rounded-md shadow-md w-full max-w-sm text-center">
      <div className="flex justify-center mb-4">
        <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <h2 className="text-2xl font-bold mb-2">Successfully</h2>
      <p className="mb-4">You passed the verification successfully.</p>
      <button
        className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition"
        onClick={onClose}
      >
        CONTINUE
      </button>
    </div>
  </div>
);

SuccessModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SuccessModal;
