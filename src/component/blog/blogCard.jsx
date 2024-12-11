import PropTypes from "prop-types";
import { FaShareAlt } from "react-icons/fa";

const BlogCard = ({ cardData }) => {
  return (
    <div className="lg:max-w-[25vw] max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <a href="/BlogDetail">
          <img className="w-full" src={cardData?.image} alt="Robot" />
        </a>
        <div className="absolute top-0 left-0 mt-4 ml-4 space-x-2">
          {cardData &&
            cardData.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-800 text-white text-sm poppins-light px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
        </div>
        <div className="absolute top-0 right-0 pt-4 pr-4">
          <button className="bg-white p-2 rounded-full shadow-md">
            <FaShareAlt />
          </button>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-wrap poppins-bold text-xl mb-2">
          {cardData?.title}
        </div>
        <p className="text-gray-700 text-wrap poppins-light x text-base">
          {cardData?.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex flex-col justify-between">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex flex-row items-center ">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={cardData?.author.avatar}
              alt="Author"
            />
            <p className="text-gray-900 leading-none poppins-light ">
              {cardData?.author.name}
            </p>
          </div>
          <div className="text-sm flex flex-row">
            <button className="text-xlpoppins-light ">VIEW POST</button>
          </div>
        </div>
        <div className="flex flex-wrap items-center  justify-between">
          <div className="flex flex-row space-x-3 ">
            <p className="text-gray-600 hidden lg:block sm:block">-----</p>
            <p className="text-gray-600 poppins-light ">{cardData?.date}</p>
            <span className="text-gray-600">•</span>
          </div>

          <div className="flex flex-row  items-center">
            <FaShareAlt />
            <span className="text-gray-600 poppins-light px-1 ">
              {cardData?.shares} shares
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
// BlogCard.propTypes = {
//   cardData: PropTypes.shape({
//     image: PropTypes.string.isRequired,
//     tags: PropTypes.arrayOf(PropTypes.string).isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     author: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       avatar: PropTypes.string.isRequired,
//     }).isRequired,
//     date: PropTypes.string.isRequired,
//     shares: PropTypes.string.isRequired,
//   }).isRequired,
// };
