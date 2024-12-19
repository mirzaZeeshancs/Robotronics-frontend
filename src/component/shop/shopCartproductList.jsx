import { useSelector } from "react-redux";
import ShopCartItems from "../shop/shopCartItems";
import { useEffect, useState } from "react";

const ShopCartProductList = ({ onNext }) => {
  const cartItems = useSelector((state) => state.cart.items);

  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/courses/${id}`);
      const data = await response.json();
      return { count: cartItems[id].count, ...data };
    } catch (error) {
      console.error(`Error fetching item with ID ${id}:`, error);
      return null;
    }
  };

  useEffect(() => {
    const fetchAllCartItems = async () => {
      const ids = Object.keys(cartItems);
      const itemPromises = ids.map((id) => fetchItem(id));
      const itemsData = await Promise.all(itemPromises);
      const validItemsData = itemsData.filter((item) => item !== null);
      setItems(validItemsData);

      const total = validItemsData.reduce(
        (sum, item) => sum + item.count * item.price,
        0
      );
      setTotalPrice(total);
    };

    fetchAllCartItems();
  }, [cartItems]);

  return (
    <div className="lg:flex flex-row bg-gray-900 text-gray-200 min-h-screen">
      {/* Items Section */}
      <div className="lg:w-2/3 p-4">
        {items.length > 0 ? (
          items.map((product) => (
            <ShopCartItems
              key={product?._id}
              id={product?._id}
              count={product?.count}
              title={product?.title}
              description={product?.description}
              image={product?.image}
              price={product?.price}
              category={product?.category}
            />
          ))
        ) : (
          <div className="text-center text-gray-400">
            Your cart is empty. Add products to proceed!
          </div>
        )}
      </div>

      {/* Vertical Divider */}
      <div className="hidden lg:flex w-px bg-gray-700"></div>

      {/* Summary Section */}
      <div className="lg:w-1/3 bg-gray-800 p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold border-b border-gray-600 pb-3 mb-4">
          Order Summary
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-bold">PKR {totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount (10%)</span>
            <span className="font-bold">
              PKR {((totalPrice * 10) / 100).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-yellow-400">
            <span>Total</span>
            <span className="font-bold">
              PKR {(totalPrice - (totalPrice * 10) / 100).toFixed(2)}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <label
            htmlFor="voucher"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Voucher Code
          </label>
          <input
            type="text"
            id="voucher"
            placeholder="Enter voucher code"
            className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="notes"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Notes
          </label>
          <textarea
            id="notes"
            placeholder="Add any notes..."
            className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            rows="3"
          ></textarea>
        </div>

        <div className="mt-6 text-center">
          <button
            className="w-full bg-yellow-500 text-gray-900 font-bold py-3 rounded-md hover:bg-yellow-600 transition"
            onClick={onNext}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCartProductList;
