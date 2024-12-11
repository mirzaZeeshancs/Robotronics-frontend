import ShopPriceBar from "../shop/shopPriceBar";
import ShopList from "../shop/shopList";
import { useState } from "react";
const products = [
  {
    id: 1,
    title: "Lego",
    quantity: 19,
    category: "Clothing",
  },
  {
    id: 2,
    title: "Lego",
    quantity: 19,
    category: "Clothing",
  },
  {
    id: 3,
    title: "Lego",
    quantity: 19,
    category: "Clothing",
  },
];
const Shopfilter = () => {
  const [setOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!setOpen);
  };
  
  return (
    <div className="hidden lg:block">
      <div className="flex justify-between">
        <p className="text-bold poppins-semibold lgt:ext-2xl text-xl">Robot</p>
        <button className="lg:text-xl text-sm" onClick={handleClick}>
          {setOpen ? "+" : "-"}
        </button>
      </div>
      <div className="h-0 lg:w-56 w-44 border border-brown"></div>
      {setOpen && (
        <div>
          <a
            className="flex cursor-pointer hover:text-black poppins-light hover:border-black lg:text-base text-sm text-lightblack lg:pt-5 pt-2"
            href="#"
          >
            Lego WeDo 2.0
          </a>
          <a
            className="flex cursor-pointer hover:text-black poppins-light hover:border-black lg:text-base text-sm text-lightblack lg:pt-5 pt-2"
            href="#"
          >
            Lego Mindstorms EV3
          </a>
          <a
            className="flex cursor-pointer hover:text-black poppins-light hover:border-black lg:text-base text-sm text-lightblack lg:pt-8 pt-4"
            href="#"
          >
            Arduino based Robots
          </a>
        </div>
      )}
      {/* Shipping */}
      <div className="lg:pt-20 pt-8">
      <div className="flex justify-between">
        <p className="text-bold font-bold lg:text-2xl text-xl">SHIPING</p>
        <button className="lg:text-xl text-sm" onClick={handleClick}>
          {setOpen ? "+" : "-"}
        </button>
      </div>
      <div className="h-0 lg:w-56 w-44 border border-brown"></div>
      {setOpen && (
        <div>
          <a
            className="flex cursor-pointer hover:text-black poppins-light hover:border-black lg:text-base text-sm text-lightblack lg:pt-5 pt-2"
            href="#"
          >
            Lego WeDo 2.0
          </a>
          <a
            className="flex cursor-pointer hover:text-black poppins-light hover:border-black lg:text-base text-sm text-lightblack lg:pt-5 pt-2"
            href="#"
          >
            Lego Mindstorms EV3
          </a>
          <a
            className="flex cursor-pointer hover:text-black poppins-light poppins-light hover:border-black lg:text-base text-sm text-lightblack lg:pt-8 pt-4"
            href="#"
          >
            Arduino based Robots
          </a>
        </div>
      )}
      </div>
      {/* All Products */}
      <div className="lg:pt-6 pt-3 text-lightblack">
      <div className="flex justify-between">
        <p className=" poppins-semibold lg:text-2xl text-xl">All PRODUCTS</p>
        <button className="lg:text-xl text-sm" onClick={handleClick}>
          {setOpen ? "+" : "-"}
        </button>
      </div>
      <div className="h-0 lg:w-56 w-44 border border-brown"></div>
      {setOpen && (
        <div>
          <a
            className="flex cursor-pointer hover:text-black poppins-light hover:border-black lg:text-base text-sm text-lightblack lg:pt-5 pt-2"
            href="#"
          >
            Lego WeDo 2.0
          </a>
          <a
            className="flex cursor-pointer hover:text-black poppins-light hover:border-black lg:text-base text-sm text-lightblack lg:pt-5 pt-2"
            href="#"
          >
            Lego Mindstorms EV3
          </a>
          <a
            className="flex cursor-pointer hover:text-black poppins-light hover:border-black lg:text-base text-sm text-lightblack lg:pt-8 pt-4"
            href="#"
          >
            Arduino based Robots
          </a>
        </div>
      )}

        <p className="flex text-black lg:text-3xl text-xl poppins-bold lg:pt-20 pt-10">SHOP BY</p>
        <div className=" border bg-brown border-brown mt-2"></div>

        <div className="flex justify-between">
          <p className="flex text-black lg:text-2xl text-xl poppins-bold lg:pt-10 pt-5">MATERIALS</p>
          <p className="lg:text-xl text-sm lg:pt-10 pt-5"> - </p>
        </div>
        <div className="h-0 lg:w-56 w-44 border bg-brown border-brown mt-2"></div>
        <div>
          {/* list */}
          <div className="lg:text-base text-sm">
            {products.map((product) => {
              return (
                <ShopList
                  key={product.id}
                  title={product.title}
                  quantity={product.quantity}
                />
              );
            })}
          </div>
        </div>
        <div className="space-y-2">
          <p className="flex text-black lg:text-2xl text-xl poppins-bold font-bold ">PRICE</p>
          <ShopPriceBar />
          <div className=" border bg-brown border-brown"></div>
          <div className="flex space-x-2 justify-center">
            <p className=" text-black p-2 bg-white rounded text-center ">
              $0 - $2000
            </p>
            <button className=" hover:bg-gold p-2 bg-lightblack text-white">
              APPLY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopfilter;
