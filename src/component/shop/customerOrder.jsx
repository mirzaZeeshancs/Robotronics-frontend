import CustomerProduct from "../../component/shop/customerProduct";

const CustomerOrder = ({ onNext }) => {
  const products = [
    {
      id: 1,
      title: "MORDERN BLACK STANDING LEGO",
      description:
        "High-quality wireless headphones with noise-cancelling technology.",
      image: "https://example.com/images/wireless-headphones.jpg",
      price: 79.99,
      item: 2,
      category: "Electronics",
    },
    {
      id: 2,
      title: "MORDERN BLACK STANDING LEGO",
      description:
        "Lightweight running shoes designed for maximum comfort and performance.",
      image: "https://example.com/images/running-shoes.jpg",
      price: 59.99,
      item: 1,
      category: "Footwear",
    },
    {
      id: 3,
      title: "MORDERN BLACK STANDING LEGO",
      description:
        "High-quality wireless headphones with noise-cancelling technology.",
      image: "https://example.com/images/wireless-headphones.jpg",
      price: 79.99,
      item: 1,
      category: "Electronics",
    },
  ];
  return (
    <div className="lg:px-14 px-5 lg:p-8 p-4 lg:space-y-20 space-y-8 ">
      {/* text */}
      <div className="lg:space-y-8 space-y-4">
        <p className="lg:text-4xl text-2xl poppins-bold">YOUR ORDER</p>
        <p className="text-sm text-line poppins-regular">
          Review all the products you want to buy
        </p>
      </div>

      {/* map product */}
      <div className="lg:space-y-5 space-y-2 poppins-extralight">
        {products.map((product) => {
          return (
            <CustomerProduct
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
              item={product.item}
              category={product.category}
            />
          );
        })}
      </div>

      {/* line  */}
      <div className="flex flex-col lg:py-5 py-2 ">
        <div className=" h-0 border border-lightgray  "></div>
      </div>

      {/* total bills */}
      <div className="justify-between lg:space-y-5 space-y-2  ">
        <div className="flex flex-row justify-between">
          <p className="text-sm poppins-light">Shipping</p>
          <p className="lg:text-xl text-sm poppins-bold">Pkr 1,125.00</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-sm poppins-light">Discount 10%</p>
          <p className="text-sm poppins-bold">_</p>
        </div>
        <div className="flex flex-row  justify-between">
          <p className="text-sm poppins-light">Price</p>
          <p className="text-xl poppins-bold">Pkr 1,225.00</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-sm poppins-light">Total Price</p>
          <p className="text-xl text-yellow poppins-bold">Pkr 1,725.00</p>
        </div>
        {/* line */}
        <div className="lg:space-y-3 space-y-1 lg:py-4 py-2">
          <div className="h-0 border border-lightgray "></div>
        </div>
        {/* button */}
        <div className="flex justify-center lg:py-4 py-2">
          {/* form submit buttom */}
          <button
            type="submit"
            className="text-center lg:text-xl text-sm poppins-bold text-gold bg-brown py-2 lg:px-20 px-5"
            onClick={onNext}
          >
            CONTINUE TO SHIPPING
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerOrder;
