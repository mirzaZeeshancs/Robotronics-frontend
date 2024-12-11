import { FiBarChart2, FiShare2 } from "react-icons/fi";
import {
  FaFacebook,
  FaTwitter,
  FaQuoteLeft,
  FaQuoteRight,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
const BlogDetailBody = () => {
  const Categories = [
    {
      Robotics: "Robotics",
      GameDevelopment: "Game Development",
      AndroidDevelopment: "Android Development",
      MachineLearning: " Machine Learning ",
      Arduino: "Arduino",
    },
  ];
  const categoryValues = Object.values(Categories[0]);
  return (
    <div className="bg-background md:p-20 p-10 ">
      {/* top */}
      <div className="lg:flex flex-row  ">
        {/* right */}
        <div className="flex flex-row space-x-6" >
          {/* right */}
          <div className="space-y-6">
            {/* social */}
            <div className="flex flex-col  space-y-2 ">
              <FiBarChart2 size={20} className="text-smallText self-center " />
              <div>
                <p className="text-sm poppins-extralight text-center ">views</p>
                <p className="text-sm poppins-extralight text-center ">1.6K</p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <FiShare2 size={20} className="text-smallText self-center " />
              <div>
                <p className="text-sm poppins-extralight text-center ">shares</p>
                <p className="text-sm poppins-extralight text-center ">996K</p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <FaFacebook size={20} className="poppins-extralight self-center " />
              <p className="text-sm poppins-extralight text-center ">125</p>
            </div>
            <div className="flex flex-col space-y-2">
              <FaTwitter size={20} className="poppins-extralight self-center " />
              <p className="text-sm poppins-extralight text-center ">76</p>
            </div>
          </div>
          {/* mid */}
          <div className="md:p-5 md:px-10 justify-center space-y-5">
            <p className="text-wrap text-sm text-justify poppins-light leading-8">
              Structured gripped tape invisible moulded cups for sauppor firm hold
              strong powermesh front liner sport detail. Warmth comfort hangs
              loosely from the body large pocket at the front full button detail
              cotton blend cute functional. Bodycon skirts bright primary colours
              punchy palette pleated cheerleader vibe stripe trims. Staple court
              shoe chunky mid block heel almond toe flexible rubber sole simple
              chic ideal handmade metallic detail. Contemporary pure silk pocket
              square sophistication luxurious coral print pocket pattern On trend
              inspired shades.
            </p>
            <p className="text-wrap text-sm text-justify poppins-light leading-8">
              Striking pewter studded epaulettes silver zips inner drawstring
              waist channel urban edge single-breasted jacket. Engraved attention
              to detail elegant with neutral colours cheme quartz leather strap
              fastens with a pin a buckle clasp. Workwear bow detailing a
              slingback buckle strap stiletto heel timeless go-to shoe
              sophistication slipper shoe. Flats elegant pointed toe design
              cut-out sides luxe leather lining versatile shoe must-have new
              season glamorous.
            </p>
          </div>
        </div>
        {/* left */}
        <div className="flex flex-col " >
          <h1 className="text-brown text-5xl py-3 leading-8 poppins-semibold">
            Categories
          </h1>
          <ul>
            {categoryValues.map((category, index) => (
              <li
                key={index}
                className="text-2xl p-2 underline poppins-light leading-8"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* other */}
      <div className="space-y-8">
        {/* quote */}
        <div className=" flex flex-row space-y-5 ">
          {/* Text */}
          <div className="lg:w-2/3">
            <FaQuoteLeft size={24} className="text-quote" />
            <p className="text-balance text-brown poppins-regular lg:text-6xl text-2xl ">
              Knicker lining concealed back zip fasten swing style high waisted
              double layer full pattern floral.
            </p>
            <FaQuoteRight size={24} className="text-quote " />
          </div>
          {/* social icons */}
          <div>
            <p className="text-3xl regular " >Follow Us</p>
            <div className="flex flex-row space-x-5 ">
              <a href="#">
                <FaFacebook size={28} className="text-smallText" />
              </a>
              <a href="#">
                <FaTwitter size={28} className="text-smallText" />
              </a>
              <a href="#">
                <FaInstagram size={28} className="text-smallText" />
              </a>
              <a href="#">
                <FaLinkedin size={28} className="text-smallText" />
              </a>
            </div>
          </div>
        </div>
        {/* text */}
        <div className="w-2/3 space-y-5 pt-10">
          <p className="text-wrap text-sm text-justify poppins-light leading-8">
            Foam padding in the insoles leather finest quality staple flat
            slip-on design pointed toe off-duty shoe. Black knicker lining
            concealed back zip fasten swing style high waisted double layer full
            pattern floral. Polished finish elegant court shoe work duty
            stretchy slingback strap mid kitten heel this ladylike design
          </p>
          <p className="text-wrap text-sm text-justify poppins-light leading-8">
            Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium
            metus nullam quam aenean sociis quis sem neque vici libero.
            Venenatis nullam fringilla pretium magnis aliquam nunc vulputate
            integer augue ultricies cras. Eget viverra feugiat cras ut. Sit
            natoque montes tempus ligula eget vitae pede rhoncus maecenas
            consectetuer commodo condimentum aenean.
          </p>
        </div>
        {/* social */}
        <div className="flex flex-row space-x-10 ">
          <p className="text-center self-center poppins-light"> 694 Shares</p>
          <div className="flex flex-row space-x-3 ">
            <FaFacebook
              className="text-cente self-center"
              style={{ color: "#1877F2", fontSize: "24px" }}
            />
            <p className="text-center self-center text-blue-500 poppins-light">Share</p>
            <p className="text-center text-smallText self-center poppins-light">694</p>
          </div>
          <div className="flex flex-row space-x-3">
            <FaTwitter className="text-center text-blue-500 self-center" />
            <p className="text-center self-center poppins-light">X</p>
          </div>
        </div>
        {/* button */}
        <div className="w-5/6 flex justify-center space-x-2 ">
          <button className=" bg-brown text-white poppins-light hover:bg-gold py-2 px-8 rounded-md">
            Previous
          </button>
          <button className=" bg-brown text-white hover:bg-gold poppins-light py-2 px-12 rounded-md">
            Next
          </button>
        </div>
        {/* text */}
        <div className="space-y-3 " >
          <p className="text-4xl text-brown poppins-light" >Sign Up for Our Newsletters</p>
          <p className="text-4xl text-lin poppins-light" >Get notified of the best deals on our Robot</p>
        </div>
        {/* inputs & button */}
        <div className=" py-5">
          <div className="flex" >
            <div className="p-2" >
              <input className="bg-background border border-lin py-2 px-12 rounded-sm poppins-light" placeholder="Enter your name" />
            </div>
            <div className="p-2" >
              <input className="bg-background border border-lin py-2 px-12 rounded-sm poppins-light" placeholder="Enter your email" />
            </div>
            <div className="p-2" >
              <button className=" bg-brown text-white poppins-light tracking-widest hover:bg-gold py-2 px-12 rounded-sm">
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div className="flex flex-row space-x-4 py-12" >
            <input type="checkbox" className="" />
            <p className="text-wrap w-2/3 self-center poppins-light" >By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailBody;
