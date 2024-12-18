import product from "../../../assets/images/productdetail.png";
import star from "../../../assets/images/shopStar.svg";

const MoreProduct = () => {
  return (
    <div className="bg-gray py-14 px-6 lg:px-14">
      {/* Title Section */}
      <div className="space-y-4 text-center">
        <p
          className="lg:text-5xl text-3xl font-bold text-brown"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="400"
        >
          You May Also Like This
        </p>
        <p
          className="text-line poppins-light text-base lg:text-lg"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="400"
        >
          Discover more products that match your interest and style.
        </p>
      </div>

      {/* Products Section */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="400"
      >
        {/* Product Card */}
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={product}
              alt="Product"
              className="w-full h-60 object-cover"
            />
            <div className="p-6 text-center space-y-3">
              {/* Product Name */}
              <p className="text-lg font-medium text-brown">
                Robotronics Robot
              </p>
              {/* Rating */}
              <img src={star} alt="Rating" className="mx-auto w-24" />
              {/* Price */}
              <p className="text-lg text-gray-700 font-semibold">Pkr 2668.15</p>
              {/* Action Button */}
              <button className="mt-4 bg-brown text-white px-6 py-2 rounded-md text-sm uppercase font-bold transition hover:bg-opacity-90">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreProduct;
