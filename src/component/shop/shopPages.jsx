import stars from "../../assets/images/shopStar.svg";
import robot from "../../assets/images/shopRobot.svg"
const ShopPages = () => {
  return (
    <a className=" hover:curser-pointer transition duration-300 ease-in-out hover:opacity-70" >
      <div className="shopPages flex flex-row lg:px-14 px-5 " id="shopPages">
      {/* text */}
      <div className="flex-1 lg:py-20 py-8 ">
        <div className="flex flex-col justify-content ">
          <p className="flex text-gold lg:text-4xl text-2xl font-bold"data-aos="fade-right" data-aos-duration="2000" data-aos-delay="4000">MORDERN</p>
          <p className="flex text-white lg:text-4xl text-2xl font-bold"data-aos="fade-left" data-aos-duration="2000" data-aos-delay="4000">LEGO ROBOT</p>
          <p className="flex text-white line-through lg:text-xl text-sm lg:pt-8 pt-4 "data-aos="fade-right" data-aos-duration="2000" data-aos-delay="4000" >PKR 3252.41</p>
          <p className="flex text-white lg:text-4xl text-2xl font-bold"data-aos="fade-left" data-aos-duration="2000" data-aos-delay="4000" >PKR 2352.41</p>

        </div>
        <img src={stars} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="4000"/>
      </div>
      {/* img */}
      <div className="flex-1"data-aos="fade-left" data-aos-duration="2000" data-aos-delay="4000">
        <div className="flex justify-content w-full " >
        <img src={robot} alt="LEGO ROBOT"/>
        </div>
      </div>
    </div>
    </a>
  );
};

export default ShopPages;
