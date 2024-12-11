
import {
  FaUser,
  FaBox,
  FaHeart,
  FaHeadphones,
  FaSignOutAlt,
} from "react-icons/fa";
import { useState } from "react";

const LeftNav = () => {
  const user = { userName: "hammad" };

  const data = [
    { name: "My info", href: "/Dashboard/userInfo", icon: <FaUser className="text-brown" /> },
    { name: "My orders", icon: <FaBox className="text-brown" /> },
    {
      name: "Wishlist",
      href: "/Dashboard/WishList",
      icon: <FaHeart className="text-brown" />,
    },
    {
      name: "Support",
      href: "/404",
      icon: <FaHeadphones className="text-brown" />,
    },
    {
      name: "Sign out",
      href: "",
      icon: <FaSignOutAlt className="text-brown" />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleItemClick = (index) => {
    if (index === 1) {
      setShowSubMenu(!showSubMenu);
    } else {
      setShowSubMenu(false);
    }
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col px-20">
      {/* User Information */}
      <div className="lg:mb-4 lg:py-5 py-2 space-y-5">
        <div className="flex flex-row space-x-2">
          <div className="border-l-4 border-gold rounded-2xl"></div>
          <h1 className="lg:text-3xl text-xl poppins-bold">Hello {user.userName}</h1>
        </div>
        <p className="text-lightblack poppins-light">Welcome to your Account</p>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="space-y-4 ">
          {data.map((item, index) => (
            <li key={index} className="relative">
              <div
                className={` lg:px-14 px-5 flex items-center rounded-e-xl lg:space-x-5 text-brown hover:text-black hover:bg-gold hover:border-l-4 border-black ${activeIndex === index ? "bg-gold text-brown" : ""
                  }`}
                onClick={() => handleItemClick(index)}
              >
                <div className="text-xl hover:text-black">{item.icon}</div>
                <a
                  href={item.href}
                  className="lg:text-2xl text-xl font-medium text-lightblack"
                >
                  {item.name}
                </a>
              </div>
              {index === 1 && showSubMenu && (
                <ul className="lg:pl-20 pt-2 space-y-2">
                  <li className="rounded-e-xl lg:space-x-5 text-brown hover:text-black hover:bg-gold hover:border-l-4 border-black ">
                    <a href="/International/myRobot">My Products</a>
                  </li>
                  <li className="rounded-e-xl lg:space-x-5 text-brown hover:text-black hover:bg-gold hover:border-l-4 border-black ">
                    <a href="/Dashboard/MyCoursesPage">My Courses</a>
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default LeftNav;
