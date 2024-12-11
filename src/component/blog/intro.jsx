import Header from "../header";
const Intro = () => {
  return (
    <div className="blog">
      <div className="p-5">
        <Header />
      </div>

      <div className="lg:p-10 lg:pt-32 pt-24 lg:pl-28 pl-10 space-y-4  " >
      <p className="text-white lg:text-7xl text-4xl poppins-extrabold"data-aos="fade-right" data-aos-duration="2000" data-aos-delay="4000">Turning science </p>
      <p className="text-white lg:text-7xl text-4xl poppins-bold"data-aos="fade-right" data-aos-duration="2000" data-aos-delay="4000"> Fiction into </p>
      <p className="text-gold lg:text-7xl text-4xl poppins-bold pb-5"data-aos="fade-left" data-aos-duration="2000" data-aos-delay="4000"> Reality</p>
      <a href="/CareerJob">
      <button className="text-brown lg:text-2xl poppins-light text-sm bg-white p-5 rounded-xl"data-aos="fade-right" data-aos-duration="2000" data-aos-delay="4000" >Start Your Career With Us</button>
      </a>
      </div>

    </div>
  );
};

export default Intro;
