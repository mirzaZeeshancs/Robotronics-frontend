import { FaTimes } from "react-icons/fa";
import LeftNav from "./leftNav"
import img from "../../assets/images/Order-legoRobots.svg";

const WishListD = () => {
    const robot = [
        {
          name: "Lego Robot",
          Quantity: "1",
          color: "Yellow",
          price: "Pkr 2229.00",
        },
        {
          name: "Lego Robot",
          Quantity: "1",
          color: "Yellow",
          price: "Pkr 7678.00",
        },
        {
          name: "Lego Robot",
          Quantity: "1",
          color: "Yellow",
          price: "Pkr 2229.00",
        },
        {
          name: "Lego Robot",
          Quantity: "1",
          color: "Yellow",
          price: "Pkr 7678.00",
        },
      ];
  return (
    <div className="bg-background" >
       {/* duct & NavBar */}
      <div className="flex flex-row">
        {/* NavBr */}
        <div className="w-1/3">
          <LeftNav />
        </div>
        {/* products */}
        <div className="w-full py-10">
          <h1 className="text-lightblack poppins-bold text-2xl ml-14">WishList</h1>
          {robot.map((card, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center px-14 py-5 mb-5"
            >
              {/* left */}
              <div className="flex flex-row space-x-5 items-center">
                {/* remove */}
                <div>
                  <FaTimes className="text-gray-600 cursor-pointer" />
                </div>
                {/* img */}
                <div>
                  <img src={img} className="w-20 h-20" alt="Product" />
                </div>
                {/* text */}
                <div className="flex flex-col space-y-2">
                  <p className="text-brown poppins-bold text-xl">{card.name}</p>
                  <div className="flex flex-row items-center">
                    <p className="text-brown poppins-bold text-sm mr-2">Color:</p>
                    <p className="text-sm">{card.color}</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <p className="text-brown font-bold text-sm mr-2">Quantity:</p>
                    <p className="text-sm poppins-bold ">{card.Quantity}</p>
                  </div>
                </div>
              </div>
              {/* right */}
              <div className="flex flex-row items-end  space-x-5">
                {/* price */}
                <div>
                  <p className="text-xl poppins-bold">{card.price}</p>
                </div>
                {/* button */}
                <div>
                  <button className="bg-orange-500 poppins-bold text-white px-4 py-2 rounded-lg">
                    Reorder
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WishListD