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
      return null; // Handle error as needed
    }
  };

  useEffect(() => {
    const fetchAllCartItems = async () => {
      const ids = Object.keys(cartItems); // Extract the IDs from cartItems
      const itemPromises = ids.map((id) => fetchItem(id)); // Map IDs to fetch promises
      const itemsData = await Promise.all(itemPromises); // Wait for all API calls
      const validItemsData = itemsData.filter((item) => item !== null); // Filter out any null results
      setItems(validItemsData); // Update state with fetched items
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
      </div>
    </div>
  );
};

export default ShopCartProductList;



