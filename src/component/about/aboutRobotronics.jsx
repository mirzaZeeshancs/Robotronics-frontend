import c1 from "../../assets/imagesContent/aboutceo/c1.jpg"
import c2 from "../../assets/imagesContent/aboutceo/c2.jpg"
// import cceoo from "../../assets/imagesContent/aboutceo/cceoo.jpg"
import ceo from "../../assets/imagesContent/aboutceo/ceo.jpg"
import robot from "../../assets/images/aboutrobot.svg"
const AboutRobotronics = () => {
  return (
    <div className="flex p-5 flex-col w-full bg-gray">
      {/* block 1 */}
      <div className="lg:text-yellow poppins-light lg:pt-20 pt-10 lg:text-6xl text-3xl justify-between text-right lg:px-10 px-4 md:text-5xl text-yellow"
      data-aos="fade-left" data-aos-duration="2000" data-aos-delay="4000"
      >
       
       ROBOTRONICS
      </div>
      {/* line */}
      <div className="lg:mx-10"data-aos="fade-right" data-aos-duration="2000" data-aos-delay="4000">
        <div className="h-0 w-full border border-brown"></div>
      </div>
      {/* block 2 */}
      <div className="lg:flex md:flex justify-between lg:p-5">
        {/* row */}
        <div className="flex-1 lg:pt-18 md:pt-10"data-aos="fade-right" data-aos-duration="2000" data-aos-delay="4000">
          {/* col */}
          <div className="flex flex-col">
            <span className=" flex lg:text-yellow poppins-bold lg:text-4xl text-2xl text-right md:text4xl text-yellow text-wrap">
              7+ YEARS
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
            Robotronics Pakistan, founded in 2019, promotes robotics and STEM education across Pakistan. It collaborates with schools, universities and organizations like the British Council to offer workshops and skill development programs. The institute excels in national robotics competitions and emphasizes inclusivity. Its goal is to inspire young minds, foster critical thinking and bridge the STEM opportunity gap in the country.
            </h2>
            <img src={c1} alt="parents" className="hidden lg:block lg:p-5 p-2" />
          </div>
        </div>
        {/* div 2 */}
        <div className="flex-1 px-5 lg:pt-14"data-aos="fade-up" data-aos-duration="2000" data-aos-delay="4000">
          <img src={ceo} alt="ceo" className="rounded-full" />
        </div>
        {/* div 3 */}
        <div className="flex-1 pt-5 lg:pt-14"data-aos="fade-left" data-aos-duration="2000" data-aos-delay="4000">
          <div className="flex flex-col" >
            <img src={c2} alt="parents" className="hidden lg:block" />
            <span className="flex lg:text-black lg:pt-8 pt-4 poppins-light lg:text-2xl text-xl md:text-2xl text-black">
              MESSAGE </span>
            <span className="flex lg:text-black  lg:text-4xl text-2xl poppins-bold md:text-6xl text-black">
              FROM CEO
            </span>
            <h2 className=" lg:text-black lg:pt-8 poppins-light pt-4 lg:text-xl text:sm md:text-xl text-black text-wrap ">
            At Robotronics Pakistan, we are committed to shaping the innovators and problem-solvers of tomorrow through the transformative power of robotics and STEM education. Our mission is not just to teach technology but to ignite a passion for innovation and equip individuals with the skills necessary to thrive in the Industrial Revolution. 
            Through hands-on learning and real-world applications, we inspire young minds to dream big and approach challenges with confidence. Together, we are cultivating a generation of leaders who will redefine industries, solve global problems and create a more sustainable and technologically advanced future. Join us on this journey of exploration, learning and empowerment to build a world where technology serves humanity.
            </h2>
            {/* robot img */}
            <div className="flex justify-end " >
              {/* img */}
              <div className=" " data-aos="fade-up" data-aos-duration="2000" data-aos-delay="4000">
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
