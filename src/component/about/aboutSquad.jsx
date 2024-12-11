import founder1 from "../../assets/images/abourfounder1.svg";
import founder2 from "../../assets/images/abourfounder2.svg";
import founder3 from "../../assets/images/abourfounder3.svg";
const AboutSquad = () => {
  const founders = [
    { id: 1, name: 'Darlene Robertson', title: 'founder1', imgSrc: founder1 },
    { id: 2, name: 'Darlene Robertson', title: 'founder2', imgSrc: founder1 },
    { id: 3, name: 'Darlene Robertson', title: 'founder3', imgSrc: founder1 },
  ];
  return (
    <div className="flex flex-col bg-gray">
      {/* block 1 */}
      <div className="lg:flex  lg:p-14 p-7">
        <p className="flex-1 lg:text-6xl poppins-semibold text-3xl font-bold ">OUR SQUAD</p>
        <p className="flex-1 text-wrap poppins-regular lg:text-4xl text-2xl">
          Our team is a tight-knit family of designers, artists, and
          visionaries, all bound by the same creative enthusiasm.
        </p>
      </div>
      {/* block 2 */}
      <div className="lg:flex md:flex flex-wrap">
        {founders.map((founder) => (
          <div key={founder.id} className="flex-1 p-14">
            <img className="shadow-2xl" src={founder.imgSrc} alt={founder.title} />
            <div className="bg-black">
              <p className="text-white poppins-regular lg:text-xl text-sm">{founder.name}</p>
              <p className="text-white poppins-regular text-sm">{founder.title}</p>
            </div>
          </div>
        ))}
      </div>
      {/* block 3 */}
      <div className="lg:p-10 p-5">
        <div className="flex ">
          <div className="flex-1 flex flex-row justify-between " >
            {/* line */}
            <div className="flex " >
              <div className="h-0 lg:w-16 w-8 border border-black" ></div>
              <div className="h-0 lg:w-48 w-20 border border-line" ></div>
            </div>
            {/* text */}
            <p className="flex lg:text-xl text-sm text-wrap text-center poppins-regular " >Are you our next squad member?</p>
          </div>
        </div>
        <div className="flex-1 w-2/3 poppins-bold" >
          <p className="lg:text-6xl text-3xl font-bold lg:text-left text-wrap" >From ambitious startups to Countrywide Schools, we partner  with Great <b className=" text-gold" >Educational industry leaders.</b> </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSquad;