import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import hide from "../assets/images/hide.svg";
import facebook from "../assets/images/Facebooklogo.svg";
import google from "../assets/images/Googlelogo.svg";
import apple from "../assets/images/Applelogo.svg";
import Header from "../component/header";

const saveLoginData = (loginData) => {
  sessionStorage.setItem("token", loginData.token);
  sessionStorage.setItem("id", loginData.user._id);
  sessionStorage.setItem("username", loginData.user.username);
  sessionStorage.setItem("email", loginData.user.email);
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(
          "Login failed. Please check your credentials and try again."
        );
      }

      const data = await response.json();
      console.log("Login successful:", data);
      saveLoginData(data);
      // Display a success toast
      toast.success("Login successful!");
      window.location.href = "/";
      // Handle successful login (e.g., save token, redirect, etc.)
      // Example: localStorage.setItem('token', data.token);
    } catch (error) {
      console.error("Error during login:", error);
      setError(error.message);

      // Display an error toast
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-gray" id="signin">
      <div className="p-5">
        <Header />
      </div>
      <div>
        <div className="flex flex-col lg:space-y-4 space-y-1 items-center justify-center lg:py-20 py-10">
          <p className="text-center text-wrap justify-center lg:py-10 py-5 text-4xl poppins-bold text-brown">
            Log in to your account
          </p>
          <button className=" poppins-regular flex flex-row bg-gray border border-line text-black font-bold rounded-3xl py-3 lg:px-28 px-12">
            <img className="h-6 w-8" src={facebook} alt="Facebook" />
            Continue with Facebook
          </button>
          <button className=" poppins-regular flex flex-row bg-gray border border-line text-black font-bold rounded-3xl py-3 lg:px-32 px-14">
            <img className="h-6 w-8" src={google} alt="Google" />
            Continue with Google
          </button>
          <button className=" poppins-regular flex flex-row bg-gray border border-line text-black font-bold rounded-3xl py-3 lg:px-32 px-14">
            <img className="h-6 w-8" src={apple} alt="Apple" />
            Continue with Apple
          </button>
        </div>
        {/* or */}
        <div className="flex flex-row justify-center items-center">
          <div className="h-0 lg:w-52 w-44 border border-line"></div>
          <p className="text-xl font-bold p-2">OR</p>
          <div className="h-0 lg:w-52 w-44 border border-line"></div>
        </div>
        {/* inputs */}
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center space-y-3"
        >
          <div className="lg:py-8 py-4">
            <p className="text-sm poppins-regular ">Email address</p>
            <input
              className="border border-line rounded-xl py-3 lg:px-32 px-14 bg-gray"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <p className="text-sm poppins-regular ">Password</p>
              <div className="flex flex-row">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <img src={hide} alt="Toggle Password Visibility" />
                </button>
                <p className="text-sm">{showPassword ? "Hide" : "Show"}</p>
              </div>
            </div>
            <input
              className="border border-line rounded-xl py-3 lg:px-32 px-14 bg-gray"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a
              href="/forgot-password"
              className=" poppins-regular text-sm cursor-pointer font-bold underline underline-offset-4 text-right"
            >
              Forget your password
            </a>
          </div>
          {/* checkbox */}
          <div className="flex items-left lg:py-5 py-2">
            <input
              id="keep-signed-in"
              type="checkbox"
              className="w-4 h-4 text-brown bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-brown"
            />
            <label
              htmlFor="keep-signed-in"
              className="ms-2 text-sm poppins-regular text-gray-900"
            >
              Keep me signed in until I sign out
            </label>
          </div>
          <button
            type="submit"
            className="bg-brown border border-line text-white poppins-regular rounded-3xl py-3 lg:px-32 px-14"
          >
            Log in
          </button>
          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {/* line */}
          <div className="flex flex-row justify-center items-center">
            <div className="h-0 lg:w-56 w-44 border border-line"></div>
            <div className="h-0 lg:w-60 w-48 border border-line"></div>
          </div>
          <p className="text-center poppins-regular justify-center lg:py-10 py-5 lg:text-3xl text-xl text-brown">
            Don’t have an account?
          </p>
          <div className="lg:pb-10 pb-4">
            <button className="bg-gray border border-line text-brown poppins-regular rounded-3xl items-center justify-center py-3 lg:px-32 px-14">
              Sign up
            </button>
          </div>
        </form>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Login;
