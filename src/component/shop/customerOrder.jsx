import { useEffect, useState } from "react";
import CustomerProduct from "../../component/shop/customerProduct";

const CustomerOrder = ({ onNext }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products dynamically from the API
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data); // Set the fetched data to state
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false); // Set loading to false once fetching is complete
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, []);

  // Calculate total price of all products in the cart
  const calculateTotalPrice = () => {
    return products.reduce((total, product) => {
      return total + product.price * product.item; // price * quantity
    }, 0);
  };

  // Calculate discount (flat 10% in this case)
  const calculateDiscount = (total) => {
    return total * 0.1; // 10% discount
  };

  // Shipping cost is fixed
  const shippingCost = 1125;

  // Calculate final price after discount and adding shipping cost
  const totalPrice = calculateTotalPrice();
  const discount = calculateDiscount(totalPrice);
  const finalPrice = totalPrice - discount + shippingCost;

  return (
    <div
      className="lg:px-14 px-5 lg:p-8 p-4 lg:space-y-20 space-y-8 "
      data-aos="fade-left"
      data-aos-duration="2000"
      data-aos-delay="4000"
    >
      {/* text */}

      <div className="lg:space-y-8 space-y-4">
        <p className="lg:text-4xl text-2xl font-bold">YOUR ORDER</p>
        <p className="text-sm text-gray-400">Review all the products you want to buy</p>
      </div>

      {/* Product List */}
      <div className="lg:space-y-5 space-y-2">
        {loading ? (
          <p className="text-center text-gray-400">Loading products...</p>
        ) : products.length > 0 ? (
          products.map((product) => (
            <CustomerProduct
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
              item={product.item}
              category={product.category}
            />
          ))
        ) : (
          <p className="text-center text-gray-400">No products found</p>
        )}
      </div>

      {/* Divider */}
      <div className="flex flex-col lg:py-5 py-2">
        <div className="h-px bg-gray-700"></div>
      </div>

      {/* Summary */}
      <div className="space-y-5">
        <div className="flex justify-between">
          <p className="text-sm">Shipping</p>
          <p className="lg:text-xl text-sm font-bold">PKR {shippingCost}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Discount (10%)</p>
          <p className="text-sm font-bold">PKR {discount.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Subtotal</p>
          <p className="text-xl font-bold">PKR {totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Total Price</p>
          <p className="text-xl text-yellow-400 font-bold">
            PKR {finalPrice.toFixed(2)}
          </p>
        </div>

        {/* Divider */}
        <div className="flex flex-col lg:py-4 py-2">
          <div className="h-px bg-gray-700"></div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button
            type="button"
            className="text-center lg:text-xl text-sm font-bold text-gray-900 bg-yellow-400 py-2 lg:px-20 px-5 hover:bg-yellow-500 transition"
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
