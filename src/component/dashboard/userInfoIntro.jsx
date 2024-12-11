import { useEffect, useState } from "react";
import Modal from "react-modal";
import LeftNav from "./leftNav";
import Intro from "../dashboard/intro";
import ForgotPassword from "./popUps/ForgotPassword";
import Verification from "./popUps/Verification ";
import NewPassword from "./popUps/NewPassword ";
import SuccessModal from "./popUps/SuccessModal";

const UserInfoIntro = () => {
  const [step, setStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [user, setUser] = useState([]);
  const userData = sessionStorage.getItem("id");
  console.log("user", user);

  useEffect(() => {
    // Fetch courses from the API
    fetch(`http://localhost:8080/find/${userData}`)
      .then((response) => response.json())
      .then((data) => setUser(data.data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  // const userInfo = [
  //   {
  //     id: "0203455667",
  //     name: "John Doe",
  //     email: "johndoe@example.com",
  //     phone: "123-456-7890",
  //     address: "123 Main St, Anytown, USA",
  //     password: ". . . . . . . . ",
  //   },
  // ];

  const cards = [
    {
      id: "0203455667",
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      address: "123 Main St, Anytown, USA",
      password: ". . . . . . . . ",
    },
    {
      id: "0203455668",
      name: "Jane Doe",
      email: "janedoe@example.com",
      phone: "987-654-3210",
      address: "456 Elm St, Anytown, USA",
      password: ". . . . . . . . ",
    },
    {
      id: "0203455669",
      name: "Mike Doe",
      email: "mikedoe@example.com",
      phone: "321-654-9870",
      address: "789 Oak St, Anytown, USA",
      password: ". . . . . . . . ",
    },
    {
      id: "0203455670",
      name: "Sarah Doe",
      email: "sara@example.com",
      phone: "456-789-1230",
      address: "987 Maple St, Anytown, USA",
      password: ". . . . . . . . ",
    },
  ];

  const closeModal = () => {
    setStep(0);
    setIsModalOpen(false);
  };

  const openSuccessModal = () => {
    setIsSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <div className="bg-background">
      {/* intro */}
      <div>
        <Intro />
      </div>
      {/* body */}
      <div className="lg:flex flex-row">
        <div className="lg:w-1/3 w-2/3">
          <LeftNav />
        </div>
        {/* right */}
        <div className="w-full lg:p-10 p-6">
          <div>
            <p className="text-2xl poppins-bold">My Info</p>
            <p className="text-xl poppins-light">Contact Details</p>
          </div>
          {/* form */}
          <form action="">
            {/* Name */}
            <div>
              <ol className="list-reset flex flex-col text-gray-600">
                <div className="py-5 flex flex-col space-y-5">
                  {/* name */}
                  <div className="">
                    <div className="space-y-5">
                      <p className="text-lightblack poppins-bold">Your Name</p>
                      <p className="text-lightblack poppins-regular">
                        {user.username}
                      </p>
                    </div>
                    <div className="w-full border text-sm border-lin"></div>
                  </div>
                  {/* email */}
                  <div className="">
                    <div className="space-y-5">
                      <p className="text-lightblack poppins-bold">Your Email</p>
                      <p className="text-lightblack poppins-light ">
                        {user.email}
                      </p>
                    </div>
                    <div className="w-full border text-sm border-lin"></div>
                  </div>
                  {/* phone */}
                  <div className="">
                    <div className="space-y-5">
                      <p className="text-lightblack poppins-bold">
                        Phone Number
                      </p>
                      <div className="flex flex-row poppins-light justify-between">
                        <p className="text-lightblack">{user.phone}</p>
                        <a
                          className="hover:text-yellow text-brown poppins-bold"
                          href="#"
                        >
                          change
                        </a>
                      </div>
                    </div>
                    <div className="w-full border text-sm border-lin"></div>
                  </div>
                  {/* password */}
                  <div className="">
                    <div className="space-y-5">
                      <p className="text-lightblack poppins-bold">Password</p>
                      <div className="flex flex-row justify-between">
                        <p className="text-lightblack poppins-extrabold">
                          {user.password}
                        </p>
                        <a
                          className="hover:text-yellow text-brown font-bold"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsModalOpen(true);
                            setStep(1);
                          }}
                        >
                          change
                        </a>
                      </div>
                    </div>
                    <div className="w-full border text-sm border-lin"></div>
                  </div>
                </div>
              </ol>
            </div>
          </form>
          {/* text */}
          <div className="flex flex-row justify-between">
            <p className="text-base poppins-bold lg:text-xl text-brown">
              Address
            </p>
            <a href="Dashboard/userInfoForm">
              <p className="poppins-bold text-base lg:text-xl text-brown">
                Add New
              </p>
            </a>

          </div>
          {/* cards */}
          <div className="flex flex-wrap lg:p-5">
            {cards.map((card, index) => (
              <div key={index} className="w-full md:w-1/2 p-3">
                <div className="flex flex-col space-y-5 bg-white rounded-xl p-5 shadow-lg">
                  <div className="space-y-5">
                    <p className="text-lightblack poppins-bold">{card.name}</p>
                    <p className="text-lightblack poppins-bold">{card.id}</p>
                    <p className="text-lightblack poppins-bold">
                      {card.address}
                    </p>
                    <div className="flex flex-row space-x-5">
                      <button className="text-sm lg:text-base poppins-light border border-lin rounded-lg px-3 py-2">
                        Home
                      </button>
                      <button className="text-sm lg:text-base poppins-light border border-lin rounded-lg px-3 py-2">
                        Default billing address
                      </button>
                    </div>
                    <div className="flex flex-row space-x-5">
                      <a className="text-sm lg:text-base px-3 py-2 poppins-bold cursor-pointer">
                        Remove
                      </a>
                      <a className="text-sm lg:text-base px-3 py-2 poppins-bold cursor-pointer">
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Change Password"
        className="bg-white rounded-lg p-8 max-w-lg mx-auto my-20 relative"
        overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
      >
        {step === 1 && <ForgotPassword onNext={() => setStep(2)} />}
        {step === 2 && <Verification onNext={() => setStep(3)} />}
        {step === 3 && <NewPassword onUpdate={openSuccessModal} />}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={closeModal}
        >
          &times;
        </button>
      </Modal>
      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={closeSuccessModal}
        contentLabel="Success Modal"
        className="bg-white rounded-lg p-8 max-w-lg mx-auto my-20 relative"
        overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
      >
        <SuccessModal onClose={closeSuccessModal} />
      </Modal>
    </div>
  );
};

export default UserInfoIntro;
