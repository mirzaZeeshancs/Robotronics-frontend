import { useSelector } from "react-redux";
import ShopCartItems from "../shop/shopCartItems";
import { useEffect, useState } from "react";

const ShopCartProductList = ({ onNext }) => {
  const cartItems = useSelector((state) => state.cart.items);

  const [items, setItems] = useState([]);
  const [voucherCode, setVoucherCode] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(10); // Assuming a default 10% discount

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

  // Calculate total price
  const totalPrice = items.reduce(
    (total, item) => total + item.count * item.price,
    0
  );

  // Calculate discounted price
  const discountAmount = (totalPrice * discountPercentage) / 100;
  const discountedPrice = totalPrice - discountAmount;

  return (
    <div className="lg:flex flex-row">
      {/* Items */}
      <div className="lg:flex lg:w-2/3 flex-col lg:px-5 shadow-lg bg-gray">
        {items.length > 0 ? (
          items.map((product) => (
            <ShopCartItems
              key={product._id}
              id={product._id}
              count={product.count}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
              category={product.category}
            />
          ))
        ) : (
          <div>No products in cart</div>
        )}
      </div>
      {/* Line */}
      <div className="flex flex-col bg-gray p-2">
        <div className="h-full border border-line"></div>
      </div>
      {/* Bills */}
      <div className="flex flex-col bg-gray lg:px-20 px-10">
        {/* Order Summary */}
        <div className="flex flex-col text-wrap text-left">
          <p className="lg:text-3xl text-1xl font-bold">ORDER SUMMARY</p>
          <p className="text-sm text-wrap lg:py-8">
            Apply your monthly voucher to get more discounts!
          </p>
        </div>
        {/* Total Bills */}
        <div className="justify-between lg:space-y-5 space-y-3">
          {/* Voucher Code Input */}
          <div className="flex flex-col lg:py-5 py-2">
            <p className="text-sm">Your voucher code</p>
            <input
              type="text"
              value={voucherCode}
              onChange={(e) => setVoucherCode(e.target.value)}
              placeholder="Enter voucher code"
              className="bg-gray border border-line p-1"
            />
            <div className="h-0 border border-line"></div>
          </div>
          {/* Price Breakdown */}
          <div className="flex flex-row justify-between">
            <p className="text-sm">Total Price</p>
            <p className="text-sm font-bold">Pkr {totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm">Discount {discountPercentage}%</p>
            <p className="text-sm font-bold">- Pkr {discountAmount.toFixed(2)}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm">Final Price</p>
            <p className="text-sm text-yellow font-bold">
              Pkr {discountedPrice.toFixed(2)}
            </p>
          </div>
          {/* Notes Section */}
          <div className="lg:space-y-3 space-y-1 lg:py-4 py-2">
            <p className="text-sm">Write your notes here...</p>
            <input className="bg-gray border border-line p-1" type="text" />
            <div className="h-0 border border-line"></div>
          </div>
          {/* Checkout Button */}
          <div className="flex justify-center py-4">
            <button
              type="button"
              className="text-center lg:text-xl text-sm text-gold bg-brown py-2 lg:px-20 px-10"
              onClick={onNext}
            >
              PROCEED TO CHECKOUT
            </button>

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