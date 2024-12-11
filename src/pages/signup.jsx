
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../component/header";
import hide from "../assets/images/hide.svg";
import robot from "../assets/images/SignupRobot.svg";
import facebook from "../assets/images/Facebooklogo.svg";
import google from "../assets/images/Googlelogo.svg";
import apple from "../assets/images/Applelogo.svg";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const username = firstName + lastName;

  const handleSignUp = async () => {
    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          phone: phoneNumber,
          password: password,
          isAdmin:false,
        }),
      });
      console.log(response);
      if (!response.ok) {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.msg || "Failed to create account"}`);
      } else {
        toast.success("Account created successfully!");
      }
    } catch (error) {
      toast.error(`An error occurred: ${error.message}. Please try again.`);
    }
  };

  return (
    <div className="signin" id="signin">
      <div className="p-5">
        <Header />
      </div>
      <div className="lg:flex flex-row justify-between lg:p-14 p-5">
        <div className="hidden lg:block">
          <div className="items-center p-5 space-y-5 ">
            <p className="text-6xl text-white text-wrap poppins-bold">
              Robotics
            </p>
            <p className="text-2xl poppins-light text-white">
              Access to courses and <br /> Products
            </p>
          </div>
          <div className="flex items-end">
            <img className=" w-full items-end" src={robot} alt="" />
          </div>
          <div className="w-full border border-line"></div>
        </div>
        <div className="flex flex-col bg-gray rounded-lg lg:p-14 p-5">
          <div className="lg:space-y-3 space-y-1">
            <p className="lg:text-3xl text-2xl font-bold lg:pb-5 pb-2 poppins-bold ">
              Sign Up Now
            </p>
            <div className="lg:flex flex-row lg:space-x-2 ">
              <div className="flex flex-col">
                <p className="text-sm poppins-light ">First name</p>
                <input
                  className="border border-line rounded-xl p-2 lg:px-8 bg-gray"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm poppins-light ">Last name</p>
                <input
                  className="border border-line rounded-xl p-2 lg:px-8 bg-gray"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm poppins-light ">Email address</p>
              <input
                className="border border-line rounded-xl p-2 bg-gray"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm poppins-light ">Phone number</p>
              <input
                className="border border-line rounded-xl p-2 bg-gray"
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between ">
                <p className="text-sm poppins-light ">Password</p>
                <div className="flex flex-row">
                  <button className="">
                    <img src={hide} />
                  </button>
                  <p className="text-sm poppins-light ">Hide</p>
                </div>
              </div>
              <input
                className="border border-line rounded-xl p-2 bg-gray"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-sm text-wrap poppins-light ">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>
            </div>
            <div className="flex items-center py-5">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 text-brown bg-gray-100 border-gray-300 rounded focus:bro dark:focus-brown dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm text-wrap font-medium text-gray-900 dark:text-gray-300"
              >
                By creating an account, I agree to our{" "}
                <a href="#" className="underline text-wrap underline-offset-4">
                  Terms of use
                </a>{" "}
                and{" "}
                <a href="" className="underline text-wrap underline-offset-4">
                  Privacy Policy{" "}
                </a>
              </label>
            </div>
            <button
              className="bg-brown text-gold rounded-3xl px-5 py-2"
              onClick={handleSignUp}
            >
              Sign up
            </button>
            <p className="text-sm">
              Already have an account?{" "}
              <a
                href="/Login"
                className="cursor-pointer underline underline-offset-4"
              >
                Log in
              </a>
            </p>
          </div>
          <div className="flex flex-col lg:py-10 py-5">
            <div className="flex flex-row justify-center items-center ">
              <div className="h-0 w-52 border border-line "></div>
              <p className=" text-xl poppins-semibold p-2">OR</p>
              <div className="h-0 w-52 border border-line"></div>
            </div>
            <div className="flex flex-col lg:space-y-4 space-y-2 items-center justify-center lg:py-20 py-10 ">
              <button className=" poppins-semibold flex flex-row bg-gray border border-line text-black font-bold rounded-3xl py-3 lg:px-28 px-14">
                <img className="h-6 w-8 " src={facebook} />
                SignUp with Facebook
              </button>
              <button className="poppins-semibold flex flex-row bg-gray border border-line text-black font-bold rounded-3xl  py-3 lg:px-32 px-14 ">
                <img className="h-6 w-8 " src={google} />
                SignUp with Google{" "}
              </button>
              <button className="poppins-semibold flex flex-row bg-gray border border-line text-black font-bold rounded-3xl  py-3 lg:px-32 px-14">
                <img className="h-6 w-8 " src={apple} />
                SignUp with Apple{"  "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
