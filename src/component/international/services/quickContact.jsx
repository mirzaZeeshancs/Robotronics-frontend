import img from "../../../assets/images/IServicesQuickContact.svg";
const QuickContact = () => {
  return (
    <div className="bg-background">
      <div className="flex p-10">
        <div className="flex-1  hidden md:block">
          <img src={img} className="" alt="" />
        </div>
        <div className="lg:px-32 flex-1">
          {/* text */}
          <div>
            <h1 className="text-4xl text-left poppins-bold text-brown">
              Quick Contact
            </h1>
            <p className="text-xl text-wrap poppins-regular text-left">
              Feel free to contact us throughTwitter or Facebook if
            </p>
            <p className="text-xl text-wrap poppins-regular text-left"> you prefer!</p>
          </div>
          {/* Inputs */}
          <form className="flex flex-col py-5">
            <div className="flex space-x-2 justify-between" >
            <input
              type="text"
              placeholder="Name"
              className="border-2 border-gray p-3  w-full focus:outline-none"
            />
            <input
              type="text"
              placeholder="Email"
              className="border-2 border-gray p-3 w-full focus:outline-none "
            />
            </div>
            <input
              type="text"
              placeholder="Course"
              className="border-2 border-gray p-3 w-full focus:outline-none mt-4"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border-2 border-gray p-3 w-full focus:outline-none mt-4"
            />
            <textarea
              name="message"
              className="border-2 border-gray p-3 w-full focus:outline-none mt-4"
              id=""
            ></textarea>
            <button className="w-full text-white poppins-bold bg-gold font-bold py-3 mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="p-5 py-10 bg-white" ></div>
    </div>
  );
};

export default QuickContact;
