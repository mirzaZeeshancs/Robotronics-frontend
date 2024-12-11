import { useSelector } from "react-redux";
import ShopCartItems from "../shop/shopCartItems";
import { useEffect, useState } from "react";

const ShopCartproductList = ({ onNext }) => {
  const cartItems = useSelector((state) => state.cart.items);

  console.log("cartItems", cartItems);

  const [items, setItems] = useState([]);
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
  }, []);
  console.log("items", items);

  return (
    // body of the page
    <div className="lg:flex flex-row">
      {/* items */}
      <div className="lg:flex lg:w-2/3 flex-col lg:px-5 shadow-lg bg-gray">
        {items.length > 0 ? (
          items.map((product) => {
            return (
              <ShopCartItems
                key={product?.data?._id}
                id={product?.data?._id}
                count={product?.count}
                title={product?.data?.title}
                description={product?.data?.description}
                image={product?.data?.image}
                price={product?.data?.price}
                category={product?.data?.category}
              />
            );
          })
        ) : (
          <div>No product in cart</div>
        )}
      </div>
      {/* line */}
      <div className="flex flex-col bg-gray p-2">
        <div className=" h-full border border-line"></div>
      </div>
      {/* bills */}
      <div className="flex flex-col bg-gray lg:px-20 px-10 ">
        {/* text 1 */}
        <div className="flex flex-col text-wrap text-left">
          <p className="lg:text-3xl text-1xl font-bold"> ORDER SUMMARY </p>
          <p className="text-sm text-wrap lg:py-8 ">
            Apply your monthly voucher to get more discount!
          </p>
        </div>
        {/* total bills */}
        <div className="justify-between lg:space-y-5 space-y-3">
          {/* text 2 */}
          <div className="flex flex-col lg:py-5 py-2  ">
            <p className="text-sm">Your voucher code</p>
            <div className=" h-0 border border-line  "></div>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm">Price</p>
            <p className="text-sm font-bold">Pkr 1,725.00</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm">Discount 10%</p>
            <p className="text-sm font-bold">Pkr 1,725.00</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm">Price</p>
            <p className="text-sm text-yellow font-bold">Pkr 1,725.00</p>
          </div>
          <div className="lg:space-y-3 space-y-1 lg:py-4 py-2">
            <p className="text-sm">Write your notes here...</p>
            <input className="bg-gray" type="text" />
            <div className="h-0  border border-line "></div>
          </div>
          {/* button */}
          {/* <div className="flex justify-center py-4" >
              <a href="/CustomerInfo">
              <button className="text-center text-sm text-white text-wrap bg-brown py-1 px-10" >
              PROCEED TO CHECKOUT
              </button>
              </a>
            </div> */}
          <div className="flex justify-center py-4">
            {/* form submit buttom */}
            <button
              type="submit"
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

export default ShopCartproductList;
