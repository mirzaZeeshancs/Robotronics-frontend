import mission from "../../assets/images/aboutMission.svg";
import vision from "../../assets/images/aboutVision.svg";
import quote from "../../assets/images/aboutquote.svg"
const AboutVision = () => {
  return (
    <div className="flex flex-col bg-black p-4 ">
      {/* block 1 */}
      <div className="lg:flex flex-row lg:p-10 p-4 lg:justify-between items-center ">
        {/* div 1 */}
        <div className="flex-1 flex flex-row p-2 "data-aos="fade-right" data-aos-duration="2000" data-aos-delay="4000">
          <img className="lg:h-20 lg:w-20 h-10 w-10 px-2 "data-aos="fade-up" data-aos-duration="2000" data-aos-delay="4000" src={mission} />
          <div>
            <p className="text-white lg:pb-4 pb-2 text-bold poppins-semibold lg:text-4xl text-2xl">MISSION</p>
            <p className="text-wrap poppins-light text-white text-sm">
            At Robotronics Pakistan, our mission is to revolutionize education by integrating Robotics and STEM into learning, fostering innovation and preparing the next generation for a technology-driven world. We aim to empower students with critical thinking, creativity and hands-on technical skills to transform them into leaders and innovators capable of addressing global challenges.
            We are dedicated to building a strong foundation for a tech-savvy workforce that will lead Pakistan into a brighter future. Through our programs, we ensure that every student has the opportunity to learn, innovate and succeed in the ever-evolving fields of science and technology.
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-row p-2"data-aos="fade-left" data-aos-duration="2000" data-aos-delay="4000">
          <img className="lg:h-20 lg:w-20 h-10 w-10 px-2"data-aos="fade-up" data-aos-duration="2000" data-aos-delay="4000" src={vision} />
          <div>
            <p className="text-white lg:pb-4 pb-2 text-bold poppins-semibold lg:text-4xl text-2xl">VISION</p>
            <p className="text-wrap text-white poppins-light text-sm">
            Our vision at Robotronics Pakistan is to become a national leader in Robotics and STEM education, empowering students to shape the future with Innovation and Technology. We aim to create a generation of skilled individuals who can confidently contribute to the advancement of Pakistan’s Industries and the Global Technological Landscape.
            We envision a world where every student has access to cutting-edge tools and knowledge, fostering creativity and critical thinking to solve real-world problems. By nurturing talent and breaking barriers in Robotics & STEM education, we strive to drive economic growth, sustainable development and a culture of innovation in Pakistan.
            </p>
          </div>
        </div>
      </div>
      {/* block 2 */}
      <div className="lg:flex lg:p-16 p-8 flex-row justify-between items-center ">
        <div>
          <blockquote>
            <p className="lg:text-2xl text-sm italic poppins-light text-wrap font-medium text-white dark:text-white"data-aos="fade-right" data-aos-duration="2000" data-aos-delay="4000">
            Robotics is not just about building machines; it's about creating opportunities to rethink how we solve problems, improve lives and explore new frontiers. It blends the ingenuity of human creativity with the precision of technology to shape a future where innovation knows no bounds. Robotics empowers us to transform imagination into reality, forming a formidable connection between what is and what could be, as we build a smarter, more sustainable world together.
            </p>
          </blockquote>
        </div>
        <div className="p-2" >
          <img className=""data-aos="fade-down" data-aos-duration="2000" data-aos-delay="4000" src={quote} />
          <p className="lg:text-2xl text-xl text-gold poppins-light"data-aos="fade-left" data-aos-duration="2000" data-aos-delay="4000" >Peter Nammy</p>
          <p className="text-white  poppins-light"data-aos="fade-left" data-aos-duration="3000" data-aos-delay="6000" >Curriculum Head</p>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
