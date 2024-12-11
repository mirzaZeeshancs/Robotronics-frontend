import ceo from "../../assets/images/aboutceo.svg";
import par from '../../assets//images/aboutparent.svg';
import robot from "../../assets/images/aboutrobot.svg"
const AboutRobotronics = () => {
  return (
    <div className="flex p-5 flex-col w-full bg-gray">
      {/* block 1 */}
      <div className="lg:text-yellow poppins-light lg:pt-20 pt-10 lg:text-6xl text-3xl justify-between text-right lg:px-10 px-4 md:text-5xl text-yellow">
        ROBOTRONICS
      </div>
      {/* line */}
      <div className="lg:mx-10">
        <div className="h-0 w-full border border-brown"></div>
      </div>
      {/* block 2 */}
      <div className="lg:flex md:flex justify-between lg:p-5">
        {/* row */}
        <div className="flex-1 lg:pt-18 md:pt-10">
          {/* col */}
          <div className="flex flex-col">
            <span className=" flex lg:text-yellow poppins-bold lg:text-4xl text-2xl text-right md:text4xl text-yellow text-wrap">
              10+ YEARS
            </span>
            <span className=" flex lg:text-yellow poppins-bold lg:text-4xl text-2xl text-right md:text-4xl text-yellow text-wrap">
              OF EXPERIENCE
            </span>
            <span className="flex lg:text-black poppins-regular pt-4 lg:text-4xl text-2xl text-right md:text-4xl text-black">
              ABOUT</span>
            <span className="flex lg:text-black lg:text-4xl text-2xl poppins-bold text-right md:text-4xl text-black">
              ROBOTRONICS
            </span>
            <h2 className=" lg:text-black pt-4 poppins-light lg:text-xl text-sm md:text-xl text-black text-wrap ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi possimus, <br /> nihil nesciunt expedita dolorum asperiores exercitationem consequuntur <br /> quae totam laboriosam nobis a unde ea? Cumque necessitatibus <br /> voluptatem saepe nemo quisquam?
            </h2>
            <img src={par} alt="parents" className="hidden lg:block lg:p-5 p-2" />
          </div>
        </div>
        {/* div 2 */}
        <div className="flex-1 px-5 lg:pt-14">
          <img src={ceo} alt="ceo" className="" />
        </div>
        {/* div 3 */}
        <div className="flex-1 pt-5 lg:pt-14">
          <div className="flex flex-col" >
            <img src={par} alt="parents" className="hidden lg:block" />
            <span className="flex lg:text-black lg:pt-8 pt-4 poppins-light lg:text-2xl text-xl md:text-2xl text-black">
              MESSAGE </span>
            <span className="flex lg:text-black  lg:text-4xl text-2xl poppins-bold md:text-6xl text-black">
              FROM CEO
            </span>
            <h2 className=" lg:text-black lg:pt-8 poppins-light pt-4 lg:text-xl text:sm md:text-xl text-black text-wrap ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi possimus, <br /> nihil nesciunt expedita dolorum asperiores exercitationem consequuntur <br /> quae totam laboriosam nobis a unde ea? Cumque necessitatibus <br /> voluptatem saepe nemo quisquam?
            </h2>
            {/* robot img */}
            <div className="flex justify-end " >
              {/* img */}
              <div className=" " >
                <img src={robot} alt="robot" className="h-32" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRobotronics;
