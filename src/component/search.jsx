import { useState, useMemo } from "react";
import img from "../assets/images/search.svg";

const Search = () => {
  // State for search inputs and tags
  const [tags, setTags] = useState(["arduino robots"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  // Categories and search results
  const categories = ["Volvo", "Saab", "Mercedes", "Audi"];
  const searchResults = [
    { id: 1, title: "LORIUM IPSUM", category: "volvo", imgUrl: img },
    { id: 2, title: "Lorium Ipsum", category: "audi", imgUrl: img },
    { id: 3, title: "Robotronics Kit", category: "mercedes", imgUrl: img },
    { id: 4, title: "Arduino Board", category: "saab", imgUrl: img },
    { id: 5, title: "Raspberry Pi", category: "volvo", imgUrl: img },
    { id: 6, title: "IoT Starter Kit", category: "audi", imgUrl: img },
  ];

  // Filtered results based on search term and category
  const filteredResults = useMemo(() => {
    return searchResults.filter((result) => {
      const matchesSearchTerm = result.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory = category
        ? result.category === category.toLowerCase()
        : true;
      return matchesSearchTerm && matchesCategory;
    });
  }, [searchTerm, category, searchResults]);

  // Remove tag function
  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="min-h-screen bg-gray text-white p-4">
      {/* Search Bar and Filters */}
      <div className="bg-gray-100 text-brown p-6 rounded-md flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
          {/* Search Input */}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="w-full md:w-auto flex-grow p-2 rounded-md border border-gray-300"
            aria-label="Search"
          />
          {/* Search Button */}
          <button className="text-white bg-brown px-4 py-2 rounded-md">
            Search
          </button>
          {/* Category Selector */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="poppins-regular shadow-2xl rounded px-4 bg-gray text-brown"
            aria-label="Select a category"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat.toLowerCase()}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Selected Tags */}
      <div className="flex flex-wrap space-x-2 my-4">
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
        {filteredResults.length > 0 ? (
          filteredResults.map((result) => (
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
          ))
        ) : (
          <p className="col-span-full text-center text-brown">
            No results found for your search.
          </p>
        )}
      </div>

      {/* Results Count and Show More */}
      <div className="h-0 w-full border border-line"></div>
      <div className="flex justify-between text-brown items-center p-5 px-10">
        <p>{filteredResults.length} results</p>
        <button className="text-brown hover:underline">
          Show me more results &rarr;
        </button>
      </div>
    </div>
  );
};

export default Search;
