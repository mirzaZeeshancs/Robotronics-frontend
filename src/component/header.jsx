import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo/Robotrinic.svg";
import Aos from "aos";
import { useSelector } from "react-redux";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items) || 0;
  const totalItems = Object.values(cartItems).reduce(
    (acc, item) => acc + item.count,
    0
  );

  useEffect(() => {
    Aos.init(); // Initialize AOS library
    const storedToken = sessionStorage.getItem("token");
    setToken(storedToken);
    // In a real application, you'd decode the token or fetch the username
    setUsername(sessionStorage.getItem("username")); // Placeholder username
  }, [token]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setToken(null);
    setUsername("");
    // Add any additional logout logic here
  };

  return (
    <header className="text-gray-600 bg-white body-font rounded-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-5">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-20 h-20" />
          <h1 className="text-xs poppins-bold">
            ROBOTRONICS
            <br />
            <p className="poppins-bold text-gold">P A K I S T A N</p>
          </h1>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex md:items-center md:w-auto">
          <div className="flex space-x-6 flex-row">
            <NavLink
              className="mr-3 cursor-pointer poppins-light hover:text-shadow-md hover:text-black hover:border-b hover:border-black text-black text-lg transition duration-300"
              to="/"
            >
              Home
            </NavLink>
            {/* ... other NavLink items ... */}
            <NavLink
              className="cursor-pointer hover:text-black poppins-light hover:border-b hover:border-black text-black text-lg"
              to="/COntactUS"
            >
              Contact
            </NavLink>
            <NavLink
              className="mr-3 cursor-pointer poppins-light hover:text-black hover:border-b hover:border-black text-black text-lg "
              to="/aboutUs"
            >
              About Us
            </NavLink>
            <NavLink
              className="mr-3 cursor-pointer poppins-light hover:text-black hover:border-b hover:border-black text-black text-lg"
              to="/International/Iservices"
            >
              Services
            </NavLink>
            <NavLink
              className="mr-3 cursor-pointer poppins-light hover:text-black hover:border-b hover:border-black text-black text-lg"
              to="/Course"
            >
              Courses
            </NavLink>
            <NavLink
              className="mr-3 cursor-pointer poppins-light hover:text-black hover:border-b hover:border-black text-black text-lg"
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink
              className="mr-3 cursor-pointer poppins-light hover:text-black hover:border-b hover:border-black text-black text-lg"
              to="/International/videoGallery"
            >
              Events
            </NavLink>
            <NavLink
              className="mr-3 cursor-pointer poppins-light hover:text-black hover:border-b hover:border-black text-black text-lg"
              to="/Blog"
            >
              Blog
            </NavLink>
            <NavLink
              className="cursor-pointer hover:text-black poppins-light hover:border-b hover:border-black text-black text-lg"
              to="/International/home"
            >
              International
            </NavLink>
            <NavLink
              className="cursor-pointer hover:text-black poppins-light hover:border-b hover:border-black text-black text-lg"
              to="/CareerJob"
            >
              Careers
            </NavLink>
          </div>
        </nav>

        {/* User Actions */}
        <nav className="hidden md:flex md:items-center md:w-auto">
          <div className="flex gap-x-2 items-center">
            {token ? (
              <>
                <span
                  className="text-black poppins-light capitalize cursor-pointer hover:font-medium"
                  onClick={() => {
                    navigate("/Dashboard/userInfo");
                  }}
                >
                  {username}
                </span>
                <button
                  onClick={handleLogout}
                  className="py-1 px-4 rounded bg-signin text-white hover:bg-opacity-90 transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex border rounded-lg">
                <NavLink
                  to="/Signup"
                  className="py-1 px-4 rounded m-2 cursor-pointer shadow-4xl focus:outline-none transition duration-300 hover:bg-signin hover:text-white"
                >
                  Sign Up
                </NavLink>
                <NavLink
                  to="/Login"
                  className="py-1 px-4 rounded m-2 cursor-pointer shadow-4xl focus:outline-none transition duration-300 hover:bg-signin hover:text-white"
                >
                  Login
                </NavLink>
              </div>
            )}
            {/* <img className="flex" src={basket} alt="basket" /> */}
            <div
              className="relative cursor-pointer"
              onClick={() => {
                navigate("/cart");
              }}
            >
              <span className="text-2xl">🛒</span>
              {totalItems > 0 && (
                <span className="absolute top-[-8px] right-[-10px] bg-red-600 text-white rounded-full text-xs font-bold px-2">
                  {totalItems}
                </span>
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden border border-transparent rounded-md p-2"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <nav
          className={`${menuOpen ? "block" : "hidden"} md:hidden w-full mt-4`}
        >
          <div className="flex flex-col">
            {/* Mobile navigation links */}
            <NavLink
              to="/"
              className="mb-2 cursor-pointer hover:text-black hover:underline text-base"
            >
              Home
            </NavLink>
            {/* ... other mobile NavLink items ... */}
            <NavLink
              className="mr-3 cursor-pointer poppins-light hover:text-black hover:border-b hover:border-black text-black text-lg "
              to="/aboutUs"
            >
              About Us
            </NavLink>
            <NavLink
              className="mr-3 cursor-pointer poppins-light hover:text-black hover:border-b hover:border-black text-black text-lg"
              to="/International/Iservices"
            >
              Services
            </NavLink>
            <NavLink
              className="mr-3 cursor-pointer poppins-light hover:text-black hover:border-b hover:border-black text-black text-lg"
              to="/Course"
            >
              Courses
            </NavLink>
            <NavLink
              className="mr-3 cursor-pointer poppins-light hover:text-black hover:border-b hover:border-black text-black text-lg"
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink
              className="mr-3 cursor-pointer poppins-light hover:text-black hover:border-b hover:border-black text-black text-lg"
              to="/International/videoGallery"
            >
              Events
            </NavLink>
            <NavLink
              className="mr-3 cursor-pointer poppins-light hover:text-black hover:border-b hover:border-black text-black text-lg"
              to="/Blog"
            >
              Blog
            </NavLink>
            <NavLink
              className="cursor-pointer hover:text-black poppins-light hover:border-b hover:border-black text-black text-lg"
              to="/International/home"
            >
              International
            </NavLink>
            <NavLink
              className="cursor-pointer hover:text-black poppins-light hover:border-b hover:border-black text-black text-lg"
              to="/CareerJob"
            >
              Careers
            </NavLink>
            <NavLink
              className="cursor-pointer hover:text-black poppins-light hover:border-b hover:border-black text-black text-lg"
              to="/COntactUS"
            >
              Contact
            </NavLink>
            {/* Mobile User Actions */}
            {token ? (
              <>
                <span
                  className="mb-2 text-black poppins-light capitalize cursor-pointer"
                  onClick={() => {
                    navigate("/Dashboard/Info");
                  }}
                >
                  {username}
                </span>
                <button
                  onClick={handleLogout}
                  className="mb-2 py-1 px-4 rounded bg-signin text-white hover:bg-opacity-90 transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/Signup"
                  className="mb-2 py-1 px-4 rounded cursor-pointer hover:bg-signin hover:text-white transition duration-300"
                >
                  Sign Up
                </NavLink>
                <NavLink
                  to="/Login"
                  className="mb-2 py-1 px-4 rounded cursor-pointer hover:bg-signin hover:text-white transition duration-300"
                >
                  Login
                </NavLink>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
