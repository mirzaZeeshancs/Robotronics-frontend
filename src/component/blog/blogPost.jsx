import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import BlogCard from "./blogCard";

const BlogPost = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [noData, setNoData] = useState(false);

  // Fetch data from the backend API based on the current page
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/blog?page=${currentPage}`
        ); // Ensure this URL is correct
        if (!response.ok) {
          throw new Error(`Network response was not ok`);
        }
        const result = await response.json();

        if (result.data.length === 0) {
          setNoData(true);
        } else {
          setData(result.data);
          setTotalPages(result.totalPages); // Assuming totalPages comes from the response
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]); // Run effect when currentPage changes

  // Render loading state or error message if there's an issue
  if (loading) {
    return <p>Loading...</p>;
  }

  if (noData) {
    return <p>No blog posts found.</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Render blog cards and pagination
  return (
    <div className="bg-background">
      <div className="px-12 py-12 flex flex-wrap justify-evenly gap-y-6 bg-background">
        {data.map((cardData, index) => (
          <BlogCard key={index} cardData={cardData} />
        ))}
      </div>
      <div className="p-10 w-full bg-gray-100">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default BlogPost;
