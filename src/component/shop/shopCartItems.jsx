// import mask from "../../assets/images/shopMask.svg";
// import { useState } from "react";
// import star from "../../assets/images/shopStar.svg";

// const ShopCartItems = ({ title, price, image }) => {
//   const [quantity, setQuantity] = useState(1);

//   const handleQuantityChange = (newQuantity) => {
//     setQuantity(newQuantity);
//   };

//   return (
//     <div className="lg:flex justify-between">
//       {/* left side */}
//       <div className="flex ">
//         <div className="transition lg:w-1/3 duration-300 ease-in-out hover:opacity-70">
//           <img className="" src={mask} alt="" />
//         </div>
//         {/* text */}
//         <div className="lg:w-2/3 ">
//           <p className=" text-lightblack hover:text-black text-wrap hover:border-black">
//             {title}
//           </p>
//           <img src={star} />

//           <div className="lg:w-24 w-10 bg-white text-center justify-center">
//             <label htmlFor="robot border-non bg-white " aria-placeholder="TYPE">
//               TYPE:
//             </label>
//             <select id="cars border lg:text-base text-center text-sm border-white bg-brown">
//               <option value="volvo">ROBOT</option>
//               <option value="saab">ROBOT</option>
//               <option value="vw">ROBOT</option>
//             </select>
//           </div>
//         </div>
//       </div>
//       {/* right side */}
//       <div className="">
//         {/* buttons */}
//         <div className="flex bg-white">
//           {/* Decrease button */}
//           <button
//             className="lg:px-3 px-1 lg:py-1 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 focus:outline-none"
//             // onClick={handleDecrease}
//           >
//             -
//           </button>
//           {/* Quantity input */}
//           <input
//             type="number"
//             className="lg:w-24 w-10 lg:px-3 px-1 py-1 text-sm rounded-md focus:outline-none"
//             // value={initialValue}
//             placeholder="NUMBER:"
//             min="1"
//             readOnly
//           />
//           {/* Increase button */}
//           <button
//             className="px-3 py-1 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 focus:outline-none"
//             // onClick={handleIncrease}
//           >
//             +
//           </button>
//         </div>

//         <div className="flex">
//           <p className=" text-black hover:text-black hover:font-bold ">
//             PKR {price}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopCartItems;

import React, { useState } from "react";
import mask from "../../assets/images/shopMask.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cart/cartSlice";

export default function ShopCartItems({
  title = "MORDERN BLACK STANDING LEGO",
  price = "235.41",
  image = "/placeholder.svg",
  count,
  id,
}) {
  const [quantity, setQuantity] = useState(count);
  const [type, setType] = useState("Robot");
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = Object.values(cartItems).reduce(
    (acc, item) => acc + item.count,
    0
  );

  // const incrementQuantity = () => setQuantity((prev) => prev + 1);
  // const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ id: id }));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id: id }));
  };
  console.log(cartItems);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-gray">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
        <div className="sm:w-3/2">
          <img
            src={mask}
            alt={title}
            width={200}
            height={200}
            className="rounded-lg shadow-lg "
          />
        </div>
        <div className="w-full sm:w-1/2">
          <h1 className="text-2xl text-wrap font-bold mb-2">{title}</h1>
          <div className="flex mb-4">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className="text-yellow">
                ★
              </span>
            ))}
          </div>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <select
                className="w-full bg-gray"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Robot">Robot</option>
                <option value="Vehicle">Vehicle</option>
                <option value="Building">Building</option>
              </select>
            </div>
            <div className="w-1/2 flex">
              <div className="flex-1 rounded-l-md border border-lin bg-gray p-2 flex items-center justify-between">
                <div className="bg-gray">Number:</div>
                <div className="bg-gray">{totalItems}</div>
              </div>
              <button
                className="rounded-none border-y p-2 border-r border-lin"
                onClick={handleRemoveFromCart}
              >
                -
              </button>
              <button
                className="rounded-r-md border-y p-2 border-r border-lin"
                onClick={handleAddToCart}
              >
                +
              </button>
            </div>
          </div>
          <div className="text-2xl font-bold mb-4 text-right">PKR {price}</div>
        </div>
      </div>
    </div>
  );
}
