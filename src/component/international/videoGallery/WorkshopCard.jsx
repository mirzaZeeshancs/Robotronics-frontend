import { BiPlayCircle } from 'react-icons/bi'; 
import img from '../../../assets/images/videoG.svg'
import PropTypes from 'prop-types';

const WorkshopCard = ({ workshop }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden  m-2">
    <div className="relative">
      <img
        src={img}
        alt={workshop.title}
        className="w-full lg:h-48 object-cover"
      />
      <span className="absolute right-2 bg-black text-white text-sm rounded px-2 ">
        {workshop.time}
      </span>
    </div>
    <div className="p-4 bg-brown rounded-xl">
      <div className="flex items-center text-white space-x-2 mb-2">
        <img
          src={workshop.instructorpic} 
          alt={workshop.instructor}
          className="w-10 h-10 rounded-full"
        />
        <p className="text-gray-700 text-white poppins-medium">{workshop.instructor}</p>
      </div>
      <h3 className="text-lg text-white poppins-bold">{workshop.title}</h3>
      <p className="text-gray-600 text-white text-wrap poppins-light md:text-xs">{workshop.description}</p>
      <div className=" flex items-center text-white poppins-light space-x-2 text-gray-600">
        <BiPlayCircle />
        <p>{workshop.date}</p>
      </div>
    </div>
  </div>
);

WorkshopCard.propTypes = {
  workshop: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    instructorpic: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkshopCard;
