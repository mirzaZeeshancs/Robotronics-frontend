import icon from "../../assets/logo/searchicon.svg";
import arow from "../../assets/logo/shopArowIcon.svg";
// import ShopItems from "../shopItems";
import Shopfilter from "../shop/shopfilter";
import Shopproduct from "../shop/shopproduct";
import ShopPages from "../shop/shopPages";
import { IoHomeOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
// import { a } from "framer-motion/client";

const Shopsearch = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/getProducts");
        const data = await response.json();
        console.log("Fetched products:", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); 

  // Filtered products based on search query
  const filteredProducts = products.filter((product) =>
    product.title && typeof product.title === 'string' 
      ? product.title.toLowerCase().includes(searchQuery.toLowerCase())
      : false
  );
  

  const handleSearchClick = () => {
    console.log("Search button clicked");
  };
  
  const handleArrowClick = () => {
    console.log("Arrow button clicked");
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="flex flex-col bg-lightgray lg:px-20 px-2">
      {/* block 1 */}
      <div className="flex-1 ">
        <div>
          {/* line 1 */}
          <div className="lg:pt-16 pt-8" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="4000">
            <div className="h-0 w-full border border-lin"></div>
          </div>
          <div className="lg:flex md:flex lg:px-24 px-2 lg:pt-10 pt-5  justify-between items-center ">
            <div className="flex justify-between  w-full">
              <div className="flex">
                <IoHomeOutline className="h-5" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="4000" />
                <p className="px-3 lg:text-base poppins-bold  text-sm " data-aos="fade-left" data-aos-duration="2000" data-aos-delay="4000">
                  Main Page
                </p>
              </div>
            </div>

            <div className="w-2/3 flex justify-between space-x-5" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="4000">
              <div className="flex justify-between  w-full">
                <div className="flex">
                  <FaHeart className="h-6" />
                  <p className="px-3 lg:text-base  poppins-bold text-sm text-center ">
                    Wish List (0)
                  </p>
                </div>
                <FaArrowRight className="text-lin" />
              </div>

              <div className="flex justify-between  w-full">
                <div className="flex ">
                  <BsHandbag className="h-6" />
                  <p className="px-3 lg:text-base text-sm  poppins-bold text-right ">
                    2 Products - $1000
                  </p>
                </div>
                <FaArrowRight className="text-lin" />
              </div>
            </div>
          </div>
          {/* line 2 */}
          <div className=" lg:pt-10 pt-5" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="4000">
            <div className="h-0 w-full border border-lin"></div>
          </div>
        </div>
        {/* search-bars */}
        <div className="lg:flex flex-row " data-aos="fade-down" data-aos-duration="2000" data-aos-delay="4000">
          <div className="flex lg:text-4xl text-xl text-bold poppins-regular lg:w-1/5 self-center">
            Category
          </div>
          {/* <div className="h-1 w-56 border bg-brown border-brown mt-2"></div> */}
          <div className=" lg:text-2xl text-xl poppins-semibold items-right lg:py-10 py-4 lg:w-4/5">
            catalog
            <div className="flex lg:space-x-3">
              {/* search */}
              <div className="flex flex-1">
                <button className="border border-gray bg-white p-2" onClick={handleSearchClick}>
                  <img src={icon} alt="" />
                </button>
                <input
                  type="text"
                  className="border border-gray w-full"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {/* search */}
              <div className="flex ">
                <button className="border border-gray bg-white" onClick={handleArrowClick}>
                  <img className="" src={arow} alt="" />
                </button>
                <input
                  type="text"
                  className="border border-gray lg:h-10 lg:w-64"
                  placeholder="Popular"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* block 2 */}
      <div className="flex-1" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="4000">
        {/* parent */}
        <div className="flex ">
          <Shopfilter />
          {/* shop items */}
          <div className="flex flex-wrap lg:px-10">
            {currentProducts.map((product) => (
              <a href="/ProductDetailPage" key={product.id}>
                <Shopproduct
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  price={product.price}
                  category={product.category}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* block 3 */}
      <div className="flex-1">
        <div className="">
          <ShopPages />
        </div>
        <div className="lg:flex flex-row justify-between lg:p-5">
          {/* Pagination */}
          <div className="flex">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`p-1 px-3 ${currentPage === index + 1 ? "bg-gold" : "bg-white"} lg:text-base text-sm hover:bg-gold`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="flex" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="4000">
            <p className="lg:text-base poppins-medium text-sm">
              SHOWED {indexOfFirstProduct + 1} - {Math.min(indexOfLastProduct, filteredProducts.length)} OF {filteredProducts.length} PRODUCTS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopsearch;
