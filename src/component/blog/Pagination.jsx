import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex w-full items-center justify-center space-x-1">
      {/* Previous button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 w-10 h-10 flex items-center justify-center bg-brown text-gold disabled:opacity-50"
      >
        <FiChevronLeft className="text-white" />
      </button>
      {/* 1 - 5 */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`p-2 w-10 h-10 flex items-center justify-center ${
            currentPage === page ? "bg-gold text-white" : "bg-white text-gold"
          }`}
        >
          {page}
        </button>
      ))}
      {/* Next button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 w-10 h-10 flex items-center justify-center bg-brown text-gold disabled:opacity-50"
      >
        <FiChevronRight className="text-white" />
      </button>
    </div>
  );
};

export default Pagination;
