import { useState } from 'react'; // Add useState import
import img from '../assets/images/search.svg';

const Search = () => {
  // Initial state with one tag
  const [tags, setTags] = useState(['arduino robots']);
  //to make the form controlled
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const categories = ['Volvo', 'Saab', 'Mercedes', 'Audi'];

  const searchResults = [
    { id: 1, title: 'LORIUM IPSUM', imgUrl: img },
    { id: 2, title: 'Lorium Ipsum', imgUrl: img },
    { id: 3, title: 'Lorium Ipsum', imgUrl: img },
    { id: 4, title: 'Lorium Ipsum', imgUrl: img },
    { id: 5, title: 'Lorium Ipsum', imgUrl: img },
    { id: 6, title: 'Lorium Ipsum', imgUrl: img },

  ];

  // Function to remove tag when 'x' is clicked
  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="min-h-screen bg-gray text-white p-4">
      {/* Search Bar and Filters */}
      <div className="bg-gray-100 text-brown p-6 rounded-md flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex space-x-4 w-full md:w-1/2">
        <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="w-full p-2 rounded-md border border-gray-300"
            aria-label="Search"
          />
          <button className=" text-white bg-brown px-4 py-2 rounded-md">
            Search
          </button>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="poppins-regular shadow-2xl rounded px-4 bg-gray text-brown"
            aria-label="Select a category"
          >
            <option value="">Select 1 Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat.toLowerCase()}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Selected Tags */}
      <div className="flex space-x-2 my-4">
        {tags.map((tag, index) => (
          <div
            key={tag}
            className="bg-gray-200 text-gray-800 inline-flex items-center px-4 py-2 rounded-full"
          >
            <span>{tag}</span>
            <button
              className="ml-2 text-gray-600"
              onClick={() => removeTag(index)}
              aria-label={`Remove tag ${tag}`}
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-6">
        {searchResults.map((result) => (
          <div
            key={result.id}
            className="bg-gray-800 rounded-md overflow-hidden"
          >
            <img
              src={result.imgUrl}
              alt={result.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-brown">{result.title}</h3>
            </div>
          </div>
        ))}
      </div>


      {/* Results Count and Show More */}
      <div className="h-0 w-full border border-lin"></div>
      <div className="flex justify-between text-brown items-center p-5 px-10">
        <p>{searchResults.length} results</p>
        <button className="text-brown hover:underline">
          Show me more results &rarr;
        </button>
      </div>
    </div>
  );
};

export default Search;