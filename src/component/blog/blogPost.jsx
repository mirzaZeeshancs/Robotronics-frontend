import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import BlogCard from "./blogCard";

// const BlogPost = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(5);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [noData, setNoData] = useState(false);

//   // Fetch data from the backend API based on the current page
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:8080/blog?page=${currentPage}`
//         ); // Ensure this URL is correct
//         if (!response.ok) {
//           throw new Error(`Network response was not ok`);
//         }
//         const result = await response.json();

//         if (result.data.length === 0) {
//           setNoData(true);
//         } else {
//           setData(result.data);
//           setTotalPages(result.totalPages); // Assuming totalPages comes from the response
//         }
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [currentPage]); // Run effect when currentPage changes

//   // Render loading state or error message if there's an issue
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (noData) {
//     return <p>No blog posts found.</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   // Render blog cards and pagination
//   return (
//     <div className="bg-background">
//       <div className="px-12 py-12 flex flex-wrap justify-evenly gap-y-6 bg-background">
//         {data.map((cardData, index) => (
//           <BlogCard key={index} cardData={cardData} />
//         ))}
//       </div>
//       <div className="p-10 w-full bg-gray-100">
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={setCurrentPage}
//         />
//       </div>
//     </div>
//   );
// };

const BlogPost = () => {
  // Static JSON data
  const jsonData = [
    {
      image: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["Technology", "AI"],
      title: "The Future of AI",
      description: "Exploring how AI is shaping the world.",
      author: {
        avatar: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D",
        name: "Alice Johnson",
      },
      date: "January 1, 2025",
      shares: 120,
    },
    {
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      tags: ["Health", "Wellness"],
      title: "10 Tips for a Healthy Lifestyle",
      description: "Simple habits to improve your daily life.",
      author: {
        avatar: "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D",
        name: "John Smith",
      },
      date: "February 5, 2025",
      shares: 85,
    },
    {
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y291cnNlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
      tags: ["Health", "Wellness"],
      title: "10 Tips for a Healthy Lifestyle",
      description: "Simple habits to improve your daily life.",
      author: {
        avatar: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        name: "John Smith",
      },
      date: "February 5, 2025",
      shares: 85,
    },
    {
      image: "https://images.unsplash.com/photo-1525904097878-94fb15835963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      tags: ["Health", "Wellness"],
      title: "10 Tips for a Healthy Lifestyle",
      description: "Simple habits to improve your daily life.",
      author: {
        avatar: "https://example.com/avatar2.jpg",
        name: "John Smith",
      },
      date: "February 5, 2025",
      shares: 85,
    },
    {
      image: "https://images.unsplash.com/photo-1530914547840-346c183410de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      tags: ["Health", "Wellness"],
      title: "10 Tips for a Healthy Lifestyle",
      description: "Simple habits to improve your daily life.",
      author: {
        avatar: "https://example.com/avatar2.jpg",
        name: "John Smith",
      },
      date: "February 5, 2025",
      shares: 85,
    },
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      tags: ["Health", "Wellness"],
      title: "10 Tips for a Healthy Lifestyle",
      description: "Simple habits to improve your daily life.",
      author: {
        avatar: "https://example.com/avatar2.jpg",
        name: "John Smith",
      },
      date: "February 5, 2025",
      shares: 85,
    },
    {
      image: "https://example.com/image2.jpg",
      tags: ["Health", "Wellness"],
      title: "10 Tips for a Healthy Lifestyle",
      description: "Simple habits to improve your daily life.",
      author: {
        avatar: "https://example.com/avatar2.jpg",
        name: "John Smith",
      },
      date: "February 5, 2025",
      shares: 85,
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      tags: ["Health", "Wellness"],
      title: "10 Tips for a Healthy Lifestyle",
      description: "Simple habits to improve your daily life.",
      author: {
        avatar: "https://example.com/avatar2.jpg",
        name: "John Smith",
      },
      date: "February 5, 2025",
      shares: 85,
    },
    // Add more objects for all 9 items...
  ];

  const itemsPerPage = 6;
  const totalPages = Math.ceil(jsonData.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  // Paginated data
  const paginatedData = jsonData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-background">
      {/* Blog Cards */}
      <div className="px-12 py-12 flex flex-wrap justify-evenly gap-y-6 bg-background">
        {paginatedData.map((cardData, index) => (
          <BlogCard key={index} cardData={cardData} />
        ))}
      </div>

      {/* Pagination */}
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
